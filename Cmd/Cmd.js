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
        
        this.setTypewriter();
    }
    
    setTypewriter(){
        document.addEventListener("DOMContentLoaded", () => {
            const txtElement = document.getElementById("typewriter");
            const words = ['Use the following commands to output info: "help", "about", "skills", "projects", "contact"'];
            const wait = 3000;
          
            new TypeWriter(txtElement, words, wait);
          });
    }
}