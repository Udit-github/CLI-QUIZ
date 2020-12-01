var readlineSync= require("readline-sync");
var User= readlineSync.question("May I have your name please? ");
const chalk=require('chalk');

console.log("\n");
console.log("Hola " +chalk.cyan.bold(User)+"! ");


console.log(chalk.red("Let's see if you know me or not"))
console.log("\n");


 
  var levelOne=[{question: `Q. Where do I live?
  a. Jaipur  
  b. Punjab 
  c. Delhi 
  d. Assam `,
  answer: `a`},
  {question: `Q. Currently I am persuing what ______?
  a. Bba 
  b. Mtech 
  c. Btech 
  d. School Student `,
  answer: `c`},
  {question: `Q. What is my favourite food?
  a. Pav Bhaji 
  b. Pizza
  c. Dosa
  d. Chole Bhature `,
  answer: `b`},
  {question: `Q. What is my hobby?
  a. Play Ukulele 
  b. Football
  c. Cooking
  d. NOTA `, 
  answer: `a`}];

  let i;
  // let cash=0;
   function check(ans){
    
     if(levelOne[i].answer===ans){
      
      console.log("\n");
      
      return console.log(chalk.yellow("Great! It is correct"));
      
    }
    else 
    { console.log(chalk.green(`Thank you for playing.`) )
          process.exit();
    }
    
}        

    for(i=0;i<levelOne.length;i++)
    { var answ;
      
      console.log("***********************************");
      answ=readlineSync.question(chalk.magentaBright(levelOne[i].question) + chalk.white('\n  Answer: '));
      check(answ);
    
    }
    console.log(chalk.green(`Looks like you know me very well`) );

