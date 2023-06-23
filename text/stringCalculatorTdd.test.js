const Stringcalculator = require("./stringCalculatorTdd.js") 

describe("The String Calculator using Test Driven Development", () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Stringcalculator();
    });
  
    it("Create a simple String calculator", () => {
      const result = calculator.Add();
      expect(result).toBe(0);
      const result1 = calculator.Add("");
      expect(result1).toBe(0);
    });
  
    it("Add method should return the sum of one number, two number, many number", () => {
      const result = calculator.Add("2");
      expect(result).toBe(2);
      const result2 = calculator.Add("2,3");
      expect(result2).toBe(5);
      const result3 = calculator.Add("2, 3, 57, 78");
      expect(result3).toBe(140);
    });
  
    it("should return the correct sum for numbers seperated by new lines and commas", () => {
      const result = calculator.Add("1\n2\n3\n4\n5");
      expect(result).toBe(15);
      const result2 = calculator.Add("1\n2,3\n4,5");
      expect(result2).toBe(15);
    });
  
    it("should throw ans error for input with empty number and  wrong number like a ", () => {
      expect(() => calculator.Add("1\n,2,3")).toThrowError(
        "Invalid input: Empty number"
      );
      expect(() => calculator.Add("\n,1,2,3")).toThrowError(
        "Invalid input: Empty number"
      );
      expect(() => calculator.Add("1\n2,a,3\n4,5\n")).toThrowError(
        "Invalid input: Not a number - a"
      );
    });
  
    it("Support different delimiters", () => {
      const result = calculator.Add("//;\n1;2");
      expect(result).toBe(3);
      const result2 = calculator.Add("//;;;\n1;;;2");
      expect(result2).toBe(3);
    });
  
    it('Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.', () => {
      const result = calculator.PreprocessingString("//;\n1;2");
      expect(result).toEqual(["1", "2"]);
      const result2 = calculator.PreprocessingString("//;;;\n1;;;2");
      expect(result2).toEqual(["1", "2"]);
      expect(() =>
        calculator.Add("//;;;\n1\n2;;;-34\n4;;;-5;;; -6")
      ).toThrowError("negatives not allowed  : -34,-5,-6");
    });
  });