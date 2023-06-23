class Stringcalculator {
    constructor() {}

    Add(numbers) {
        if ( numbers !== undefined && typeof numbers === "string" && numbers.length > 0)
         {let negativeNum = "";
          let sanitizedNumbersPreprocessor = this.PreprocessingString(numbers);
          const numberArray = sanitizedNumbersPreprocessor.map((num) => {
            if (num.trim() === "") { throw new Error("Invalid input: Empty number");  }
            const parsedNum = parseInt(num);
            if (parsedNum < 0) { negativeNum += "," + parsedNum.toString(); }
            if (isNaN(parsedNum)) { throw new Error(`Invalid input: Not a number - ${num}`);}
            return parsedNum; });
          if (negativeNum.length > 0) {throw new Error("negatives not allowed  : " + negativeNum.substring(1));}
          const sum = numberArray.reduce((acc, num) => acc + num, 0);
          return sum;
        } else {return 0;}
      }
    
      PreprocessingString(numbers) {
        let delimiterFlag = 0;
          let delimiterindex = "";
          if ( numbers.length > 5 && numbers.substring(0, 2) == "//" && numbers.includes("\n")
          ) { delimiterFlag = 1;
            delimiterindex = numbers.substring(2, numbers.indexOf("\n"));
            numbers = numbers.substring(numbers.indexOf("\n" + 2 - 1)); }
          const sanitizedNumbers = delimiterFlag === 0
              ? numbers.replace(/\n/g, ",")
              : numbers.replace(/\n/g, delimiterindex);
          let sanitizedNumbersPreprocessor = delimiterFlag === 0
              ? sanitizedNumbers.split(",")
              : sanitizedNumbers.split(delimiterindex);
        return sanitizedNumbersPreprocessor }
    }

module.exports = Stringcalculator