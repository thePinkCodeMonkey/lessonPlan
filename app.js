const readline = require('readline');

//load the lesson plan
let lessonPlan = require('./lessonPlan');
const numOfLessons = lessonPlan.lesson.length;
console.log(`Number of lessons is ${numOfLessons}`);

let rl = readline.Interface({
    input: process.stdin,
    output: process.stdout 
});

function cleanUp() {
    console.log("Let's continue next time");
    rl.close();
}

console.log(process.cwd());

rl.on("line", input => {
   let trimmedInput = input.trim().toLocaleLowerCase();
   
   switch (trimmedInput) {
       case 'exit':
           rl.close();
            break;
        case 'prev':
            console.log("Going back to previous lesson.");
            break;
        case 'next':
            console.log("Let's move to the next lesson.");
            break;
        default:
            console.log("I don't understand what you just said.");
            break;
   }
})
.on("close", () => {
    cleanUp();
});
