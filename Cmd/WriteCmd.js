export default class WriteCmd {
    constructor() {
      // create an array to store the commands and responses
      this.commands = [];
      this.responses = [];
      // document.getElementById("input").focus()
      // get the parent element
      this.parentElement = document.getElementById("parent");
      
      window.addEventListener("click", () => {
        const input = document.getElementById("input");
        if (!input.matches(":focus")) {
          input.focus();
        }
      });
      
      
      // listen to enter key events and run the handleEnterKey function
      document.addEventListener("keydown", this.handleEnterKey.bind(this));
    }
    
    // handle enter key events
    handleEnterKey(event) {
      let input = document.getElementById("input").value.toLowerCase();
      if (event.keyCode === 13) {
        let response = "";
        let projects = [
          {
            name: "Zoom Studio(Photography Website for a client)",
            link: "https://zoomstu.com/",
            icons: [
              "/icons/vuejs.png",
              "/icons/tailwind-css.png",
              "/icons/sanity.jpg",
            ]
          },
          {
            name: "Blogoty(Fullstack Blogging App)",
            link: "https://github.com/RamiJS/blog-web-app",
            icons: [
              "/icons/vuejs.png",
              "/icons/tailwind-css.png",
              "/icons/node-js.png",
              "/icons/mongodb.png",
            ]
          },
          {
            name: "Gradient Color Tool",
            link: "https://github.com/RamiJS/gradientColor_creating_tool",
            icons: [
              "/icons/javascript.png",
            ]
          },
          {
            name: "Trafalgar Landing Page",
            link: "https://trafalgarr-landing-page.netlify.app/",
            icons: [
              "/icons/html5.png",
              "/icons/javascript.png",
              "/icons/tailwind-css.png",
            ]
          },
          {
            name: "Old Portfolio Page",
            link: "https://github.com/RamiJS/portfolioV2",
            icons: [
              "/icons/html5.png",
              "/icons/javascript.png",
              "/icons/bootstrap.png",
            ]
          },
        ]
        let commands = [
        {
          name: "help",
          description: "Displays all the commands"
        },
        {
          name: "about",
          description: "Displays information about Rami"
        },
        {
          name: "skills",
          description: "Displays my skills"
        },
        {
          name: "projects",
          description: "Displays my projects"
        },
        {
          name: "contact",
          description: "Displays my contact information"
        }
        ]
        switch (input) {
          case "help":
            // loop through the commands array and create a response string
            commands.forEach((command, index) => {
              response += `
              <strong>${command.name}: </strong> ${command.description} <br>
              `
            })
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
            // loop through the projects array and create a response string
          response = '<div style="display:flex; flex-direction:column;">';
          projects.forEach((project, index) => {
            const iconsHtml = project.icons.map(icon => {
              return `<img style="margin: 1px;" src="${icon}" alt="html" width="14" height="14">`;
            }).join('');
            const projectHtml = `
              <div style="display:flex; align-items:center; gap: 10px;">
              <div style="display: flex; flex-direction: row;">
                ${iconsHtml}
              </div>
                <div style="flex-grow: 1;">
                  <strong>${project.name}: </strong> <a target="_blank" href="${project.link}">Visit</a>
                </div>
              </div>
            `;
            response += `<div>${projectHtml}</div>`;
          }) 
          response += '</div>';
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
            break;
        }
    
        // create a new paragraph element for the response and append it to the parent element
        let res = document.createElement("p");
        res.innerHTML = response;

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
          <span>C:\\Users\\Rami></span>
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
        <span>C:\\Users\\Rami></span>
        <input id="input" class="bg-transparent outline-none w-full" type="text">
      </p>`;
      
      // set the parent element's innerHTML to the html string
      this.parentElement.innerHTML = html;
      
      // focus on the new input element
      document.getElementById("input").focus();
    }
  }
  