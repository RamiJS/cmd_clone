export default class TypeWriter {
    constructor(txtElement, words, wait) {
      this.txtElement = txtElement;
      this.words = words;
      this.wait = parseInt(wait, 10);
      this.txt = "";
      this.wordIndex = 0;
      this.isDeleting = false;
      this.type();
    }
  
    type() {
        if (!this.words || this.words.length === 0) {
            return;
        }
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
  
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.txtElement.innerHTML = `${this.txt}`;
  
      let typeSpeed = 50;
  
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
  
      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  