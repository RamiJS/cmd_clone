import TypeWriter from "./TypeWritter";
import WriteCmd from "./WriteCmd";
import Drag from "./Drag";
import TodayDate from "./Date";

export default class Cmd {
    constructor() {
        this.window = document.getElementById("window")
        this.getDate = document.getElementById("date")

        this.typewriter = new TypeWriter();
        this.writecmd = new WriteCmd();
        this.drag = new Drag(this.window);
        this.date = new TodayDate(this.getDate);
    }
}
