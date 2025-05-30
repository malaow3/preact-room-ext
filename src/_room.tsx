// Reference : https://github.com/smogon/pokemon-showdown-client/blob/3b81b9958e12d49397d8aa69ecc6291c33fb2d2c/play.pokemonshowdown.com/src/panel-example.js
import { h, Component } from "preact";
import "./test.css";

interface ViewHellodexPanelProps {
  room: PSRoom;
}

class ViewHellodex extends Component<ViewHellodexPanelProps> {
  shouldComponentUpdate(_: ViewHellodexPanelProps) {
    return false;
  }

  componentDidMount() {
    console.log(this.base);
  }

  render() {
    return (
      <div className="flex mx-10 room-title">
        <h1>HelloDex</h1>
      </div>
    );
  }
}

class ViewHellodexPanel extends PSRoomPanel<ViewHellodexPanelProps> {
  static id = "view-hellodex";
  static location = "right";
  static routes = ["view-hellodex"];
  static title = "HelloDex";
  static icon = (<i class="fa fa-heart" aria-hidden />);

  render() {
    return h(PSPanelWrapper, { room: this.props.room }, h(ViewHellodex, null));
  }
}

if (window.location.pathname.endsWith("view-hellodex")) {
  window.location = "https://play.pokemonshowdown.com" as string & Location;
}
window.PS.addRoomType(ViewHellodexPanel);
window.PS.join("view-hellodex" as RoomID);
