export default class WriteCmd {
    constructor() {
      // create an array to store the commands and responses
      this.commands = [];
      this.responses = [];
      
      // get the parent element
      this.parentElement = document.getElementById("parent");
      
      // listen to enter key events and run the handleEnterKey function
      document.addEventListener("keydown", this.handleEnterKey.bind(this));
    }
    
    // handle enter key events
    handleEnterKey(event) {
        if (event.keyCode === 13) {
          let response = "";
          switch (document.getElementById("input").value) {
            case "help":
              response = "Display help information";
              break;
            case "about":
              response = "Information about this application";
              break;
            case "contact":
              response = "Contact information";
              break;
            default:
              response = "Invalid command";
              break;
          }
          
          // create a new paragraph element for the response and append it to the parent element
          let res = document.createElement("p");
          res.textContent = response;
          this.parentElement.appendChild(res);
          
          // add the response to the responses array
          this.responses.push(response);
          
          // save the command and create a new line
          this.saveCommand();
          this.createNewLine();
        }
      }
      
  
    // save the command to the commands array
    saveCommand() {
      const inputField = document.getElementById("input");
      const command = inputField.value;
      this.commands.push(command);
      inputField.value = "";
    }
  
    // create a new line and add it to the parent element
    createNewLine() {
      let html = "";
      
      // loop through the commands array and add each command to the html string
      for (let i = 0; i < this.commands.length; i++) {
        html += `<p class="flex flex-row">
          <span>C:\\Users\\username></span>
          <span class="mytext">${this.commands[i]}</span>
        </p>`;
        
        // check if there is a response for this command and add it to the html string
        if (this.responses[i]) {
          html += `<p class="flex flex-row">
            <span>${this.responses[i]}</span>
          </p>`;
        }
      }
      
      // add a new input element to the html string
      html += `<p class="flex flex-row">
        <span>C:\\Users\\username></span>
        <input id="input" class="bg-transparent outline-none w-full" type="text">
      </p>`;
      
      // set the parent element's innerHTML to the html string
      this.parentElement.innerHTML = html;
      
      // focus on the new input element
      document.getElementById("input").focus();
    }
  }
  