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
  
     if(!this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.txtElement.innerHTML = `${this.txt}`;
  
      let typeSpeed = 50;
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  