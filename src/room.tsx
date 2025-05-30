import { h, Component, render } from "preact";
// @ts-ignore
import css from "./test.inline.txt";
console.log("CSS: ", css);

interface ViewHellodexPanelProps {
  room: PSRoom;
}

function Empty() {
  return <div />;
}

// This is your actual app UI
function ViewHellodexApp(props: ViewHellodexPanelProps) {
  return (
    <div className="flex mx-10 room-title">
      <h1 className="text-2xl">HelloDex</h1>
    </div>
  );
}

class ViewHellodexPanel extends PSRoomPanel<ViewHellodexPanelProps> {
  static id = "view-hellodex";
  static location = "right";
  static routes = ["view-hellodex"];
  static title = "HelloDex";
  static icon = (<i class="fa fa-heart" aria-hidden />);

  shadowRoot?: ShadowRoot;

  componentDidMount() {
    // Attach shadow root to the panel's base element
    if (this.base && !this.shadowRoot) {
      this.shadowRoot = (this.base as HTMLElement).attachShadow({
        mode: "open",
      });

      console.log("CSS: ", css);

      // Inject CSS
      const style = document.createElement("style");
      style.textContent = css;
      this.shadowRoot.appendChild(style);

      // Mount point for the app
      const mount = document.createElement("div");
      this.shadowRoot.appendChild(mount);

      // Render the actual app into the shadow root
      render(<ViewHellodexApp room={this.props.room} />, mount);
    }
  }

  render() {
    return h(PSPanelWrapper, { room: this.props.room }, h(Empty, null));
  }
}

if (window.location.pathname.endsWith("view-hellodex")) {
  window.location = "https://play.pokemonshowdown.com" as string & Location;
}
window.PS.addRoomType(ViewHellodexPanel);
window.PS.join("view-hellodex" as RoomID);
