class Shapes {
  constructor(color, text, textColor){
    this.color = color,
    this.text = text,
    this.textColor = textColor
  }
  setColor(newColor){
    this.color = newColor;
    
  }
  setText(newText){
    this.text = newText;
  }
  setTextColor(newTextColor){
    this.textColor = newTextColor;
  }
}
class Triangle extends Shapes{
  constructor(color, text,textColor){
    super(color, text, textColor)

  }
  render(){
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <polygon points="200,10 280,210 130,210" fill =" ${this.color}"/>

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
  }
}
class Circle extends Shapes{
  constructor(color, text,textColor){
    super(color, text, textColor)

  }
  render(){
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.color}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
  }
}
class Square extends Shapes{
  constructor(color, text,textColor){
    super(color, text, textColor)

  }
  render(){
    return `<svg version="1.1"
    width="300" height="300"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="${this.color}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
  }
}
module.exports = {Triangle, Circle, Square}