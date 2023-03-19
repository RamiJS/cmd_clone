export default class TodayDate {
    constructor(targetElement) {
        // properties
        this.date = new Date();
        this.dateString = this.getFormattedDate();
        this.timeString = this.getFormattedTime();
        this.now = `${this.dateString} ${this.timeString}`;
        this.targetElement = targetElement;
        
        // methods
        this.printNow();
    }

    getFormattedDate() {
        return this.date.toLocaleDateString();
    }

    getFormattedTime() {
        return this.date.toLocaleTimeString();
    }

    printNow() {
        if(this.targetElement){
            return this.targetElement.textContent = this.now
        }
    }
}
