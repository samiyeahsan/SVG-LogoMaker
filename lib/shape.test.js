const {Triangle, Circle, Square} = require('./shapes');
let shape;

describe("Instantiation", () => {
  describe("Tiangle", () => {
    it("should return true when triangle is an instance of Triangle",  () => {
      const newTriangle= new Triangle ();
     

      expect(newTriangle).toBeInstanceOf(Triangle)
    })
  })
  describe("Circle", () => {
    it("should return true when the circle is an instance of class Circle",  () => {
      const newCircle = new Circle ();
      

      expect(newCircle).toBeInstanceOf(Circle)
    })
  })
  describe("Square", () => {
    it("should return true when the square is an instance of class Square",  () => {
      const newSquare = new Square ();
     

      expect(newSquare).toBeInstanceOf(Square)
    })
  })
})