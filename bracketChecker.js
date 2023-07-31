console.log("INSIDE");

const isExpressionTrue = (input) => {
  const stack = [];
  const bracketMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of input) {
    if (["{", "(", "["].includes(char)) {
      // console.log("The stack has been PUSHED by character: ", char);
      stack.push(char);
    } else if (char === "}" || char === ")" || char === "]") {
      const top = stack.pop();
      // console.log("The stack has been POPPED by character: ", char);
      const expectedBracket = bracketMap[char];

      if (top !== expectedBracket) {
        return false;
      }
    }
    // console.log("Current Stack:", stack);
  }

  return stack.length === 0;
};

const expression1 = `[{()}]`; // should be true
const expression2 = `[({{}}`; // should be false
const expression3 = `[{}}]`; // should be false
const expression4 = `{{[({})]}}`; // should be true
const expression5 = `[{(})]`; // should be true
const expression6 = `{{[]{{{[(][])}}}}}`; // should be false
const expression7 = `{{[]{{{}}}}}}}`; // should be false
const expression8 = `{{[]{{{}}}}}`; // should be true
const usmanBhaiExpression = `{[]{{{}}}}({})[[]`;
const result = isExpressionTrue(usmanBhaiExpression);
console.log(result);
