export default class WriteCmd {
    constructor() {
      // create an array to store the commands and responses
      this.commands = [];
      this.responses = [];
      // document.getElementById("input").focus()
      // get the parent element
      this.parentElement = document.getElementById("parent");
      
      window.addEventListener("click", () => {
        document.getElementById("input").focus()
      })
      
      // listen to enter key events and run the handleEnterKey function
      document.addEventListener("keydown", this.handleEnterKey.bind(this));
    }
    
    // handle enter key events
    handleEnterKey(event) {
      let input = document.getElementById("input").value.toLowerCase();
      if (event.keyCode === 13) {
        let response = "";
        let isDefaultResponse = false;
        switch (input) {
          case "help":
            response = `
            <strong style="font-size: 17px;">Commands:</strong><br>
            <strong>help</strong>: Displays all the commands <br>
            <strong>about</strong>: Displays information about Rami <br>
            <strong>skills</strong>: Displays my skills <br>
            <strong>projects</strong>: Displays my projects <br>
            <strong>contact</strong>: Displays my contact information <br>
            `
            break;
          case "about":
            response = "I am Rami Yassin. a 22 year-old Frontend developer. Studied Bachelor of computer Science in Software Engineering(HONS) in Malaysia. I am an enthusiastic developer  that is committed to acquiring new knowledge every day.";
            break;
          case "skills":
            response = `
            <strong>Frontend:</strong> HTML, CSS, JavaScript, Vue.js, Three.js, TailwindCSS <br>
            <strong>Backend:</strong> NodeJS, ExpressJS, MongoDB <br>
            <strong>Tools:</strong> Git, Figma<br>
            `  
          break;
          case "projects":
            response = `
            <strong>Gradient Color Tool: </strong> <a target="_blank" href="https://github.com/RamiJS/gradientColor_creating_tool">Visit</a> <br>
            <strong>Trafalgar Landing Page: </strong> <a target="_blank" href="https://github.com/RamiJS/trafalgar-landing-page">Visit</a> <br>
            `
          break;
          case "contact":
            response = `
            <strong>Phone:</strong> +966 59527 2346 <br>
            <strong>Email:</strong> <a href="mailto:rami_js@outlook.com">rami_js@outlook.com</a><br>
            `;
            break;
          default:
            response = `${input}: the term "${input}" is not recognized as an internal or external command,
            operable program or batch file.`;
            isDefaultResponse = true;
            break;
        }
    
        // create a new paragraph element for the response and append it to the parent element
        let res = document.createElement("p");
        res.innerHTML = response;
    
        // set the color to red for the default response, otherwise white
        if (isDefaultResponse) {
          res.style.fontWeight = "bold";
          // change it's color to red
          res.style.color = "red";
          console.log('hey');
        } else {
          res.style.color = "white";
        }
    
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
        html += `<p class="flex flex-row gap-3">
          <span>C:\\Users\\username></span>
          <span class="mytext">${this.commands[i]}</span>
        </p>`;
        
        // check if there is a response for this command and add it to the html string
        if (this.responses[i]) {
          html += `<p class="flex flex-row gap-3">
            <span>${this.responses[i]}</span>
          </p>`;
        }
      }
      
      // add a new input element to the html string
      html += `<p class="flex flex-row gap-3">
        <span>C:\\Users\\username></span>
        <input id="input" class="bg-transparent outline-none w-full" type="text">
      </p>`;
      
      // set the parent element's innerHTML to the html string
      this.parentElement.innerHTML = html;
      
      // focus on the new input element
      document.getElementById("input").focus();
    }
  }
  