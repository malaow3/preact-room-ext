import { h, Component } from "preact";


// ExampleVanillaJS component
class ExampleVanillaJS extends Component {
    shouldComponentUpdate() {
        return false;
    }
    componentDidMount() {
        console.log("PREACT: componentDidMount")
        // _ = this.base;
        // edit the contents of your panel however you like here
    }
    render() {
        return (
            <div class="mainmessage">
                <p>Hello World!</p>
            </div>
        );
    }
}

// ExampleVanillaJSPanel "panel" class
class ExampleVanillaJSPanel {
    static id = "exampleview";
    static location = "right";
    static routes = ["exampleview", "examples-*"];
    static title = "Example View";
    render() {
        console.log("PREACT: render")
        return h(
            PSPanelWrapper,
            { room: this.props.room },
            h(ExampleVanillaJS, null)
        );
    }
}

console.log("PREACT: adding room")
console.log("PREACT: ", window.PS.addRoomType)
console.log("PREACT: ", ExampleVanillaJSPanel)
// Register the panel (assuming window.PS exists)
const result = window.PS.addRoomType(ExampleVanillaJSPanel);
window.PS.join("exampleview");
console.log("PREACT: result", result)
