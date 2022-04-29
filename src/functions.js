function evaluation(array) {
    let answer = [];
    let expression = [...array];
    for (let item in expression) {
        if (expression[item].match(/\d/g)) {
            answer.push(Number(expression[item]))
        } else {
            answer.push(expression[item])
        }
    }
    for (let item in answer) {
        if (answer[item] === "*") {
            let previous = answer.indexOf("*") - 1;
            let next = answer.indexOf("*") + 1;
            let result = answer[previous] * answer[next];
            answer.splice(answer.indexOf("*") - 1, 3, result)
        }

        if (answer[item] === "/") {
            let previous = answer.indexOf("/") - 1;
            let next = answer.indexOf("/") + 1;
            let result = answer[previous] / answer[next];
            answer.splice(answer.indexOf("/") - 1, 3, result)
        }
    }

    for (let item in answer) {
        if (answer[item] === "+") {
            let previous = answer.indexOf("+") - 1;
            let next = answer.indexOf("+") + 1;
            let result = answer[previous] + answer[next];
            answer.splice(answer.indexOf("+") - 1, 3, result)
        }

        if (answer[item] === "-") {
            let previous = answer.indexOf("-") - 1;
            let next = answer.indexOf("-") + 1;
            let result = answer[previous] - answer[next];
            answer.splice(answer.indexOf("-") - 1, 3, result)
        }
    }
    
    return Number(answer.join(""));
  
}

let expression = ["3", "+",  "2", "/", "4", "-", "5", "*", "6"]
console.log(evaluation(expression))
export default evaluation;