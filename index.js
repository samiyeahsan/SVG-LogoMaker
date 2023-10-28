/*
  Inquirer will ask the questions 
  The subclass you choose will be based on the shape the user chooses 
  The subclass extends the parent class 

  Properties for the object:
    Text for the logo 
    Color for the logo 
    Shape for the logo 
    Color for the shape 

  Use methods to:
    Whatever work all shapes of any kind need
    Whatever work any individual shapes need
    Write a file containing the final SVG code

  Write unit tests to verify that these methods work
*/
const inquirer = require("inquirer")
const fs = require("fs")
const {Triangle, Circle, Square} = require("./lib/shapes")
inquirer.prompt([
  {
    type: 'list',
    name: "shape",
    message: "What shape do you want?",
    choices: ["Triangle", "Circle", "Square"]

  },
  {
    type: 'input',
    name: "text",
    message: "What text do you want?",
    

  },
  {
    type: 'input',
    name: "color",
    message: "What color do you want?",
    

  },
  {
    type: 'input',
    name: "textColor",
    message: "What color do you want for your text?",
   

  }

]).then((answers) => {
  //base on their choise start new class
  let shape;
  if (answers.shape == "Triangle"){
    shape = new Triangle (answers.color, answers.text, answers.textColor)
  } else if ( answers.shape == "Circle"){
    shape = new Circle (answers.color, answers.text, answers.textColor)
  } else {shape = new Square (answers.color, answers.text, answers.textColor)

  }
  let svgString = shape.render()
  fs.writeFile('logo.svg', svgString, (error) => {
    if (error) console.log(error)
  })
})
module.exports = {Triangle, Circle, Square}