import TypeWriter from "./TypeWritter";
import WriteCmd from "./WriteCmd";
import Drag from "./Drag";

export default class Cmd {
    constructor() {
        console.log('Cmd started');
        this.typewriter = new TypeWriter();
        this.writecmd = new WriteCmd();
        this.drag = new Drag(document.getElementById("window"));
    }
}
