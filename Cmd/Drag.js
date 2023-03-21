export default class Drag {
    constructor(element) {
      // Save the element that will be draggable and set its initial position
      this.element = element;
      this.element.style.position = "absolute";
      this.element.style.top = "50%";
      this.element.style.left = "50%";
      this.element.style.transform = "translate(-50%, -50%)";
      
      // Bind event handlers to `this` object
      this.mouseDownHandler = this.handleMouseDown.bind(this);
      this.mouseMoveHandler = this.handleMouseMove.bind(this);
      this.mouseUpHandler = this.handleMouseUp.bind(this);
      
      // Attach event listeners to the draggable element
      this.attachListeners();
    }
  
    attachListeners() {
      // Add a mousedown event listener to the draggable element
      this.element.addEventListener("mousedown", this.mouseDownHandler);
    }
  
    handleMouseDown(event) {
      // Check if the target of the event is within the draggable header element
      const header = this.element.querySelector('.border-b');
      if (!header.contains(event.target)) {
        return;
      }
      
      // Otherwise, prevent the default behavior of the event (i.e. text selection or other mouse behavior)
      event.preventDefault();
      
      // Set the dragging flag to true
      this.dragging = true;
      
      // Calculate the starting X and Y coordinates for the drag by subtracting the element's offset from the mouse position
      this.startX = event.clientX - this.element.offsetLeft;
      this.startY = event.clientY - this.element.offsetTop;
    
      // Add event listeners for mousemove and mouseup events on the document object
      document.addEventListener("mousemove", this.mouseMoveHandler);
      document.addEventListener("mouseup", this.mouseUpHandler);
  }
  
    handleMouseMove(event) {
      // If the dragging flag is true, update the draggable element's position based on the current mouse position relative to the initial mouse position
      if (this.dragging) {
        this.element.style.left = event.clientX - this.startX + "px";
        this.element.style.top = event.clientY - this.startY + "px";
      }
    }
  
    handleMouseUp() {
      // Set the dragging flag to false and remove the mousemove and mouseup event listeners from the document
      this.dragging = false;
      document.removeEventListener("mousemove", this.mouseMoveHandler);
      document.removeEventListener("mouseup", this.mouseUpHandler);
    }
  }
  
  
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

const windowEl = document.getElementById('window');
if (isTouchDevice) {
  windowEl.setAttribute('draggable', false);
}
