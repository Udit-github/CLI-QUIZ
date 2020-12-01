var readlineSync= require("readline-sync");
var User= readlineSync.question("May I have your name please? ");
const chalk=require('chalk');

console.log("\n");
console.log("Hi " +chalk.cyan.bold(User)+"! Welcome to the Music Quiz");
console.log("\n");

console.log("Read the instruction about the Quiz:"+"\n"+"\n"+chalk.blue("1. For every correct answer you will be rewarded with 100 rupees."+"\n"+"2. One incorrect answer will drive you out of the quiz with the cash amount you have     won."+"\n"+"3. While playing quiz you just need to type the particular option like \'a\' etc.")+"\n"+"\n"+"So Let's Get Started"); // Instructions



  //level One Questions
  var levelOne=[{question: `Q. Who is the singer of the song \'O Sanam\'?
  a. Arjit Singh 
  b. Papon 
  c. Lucky Ali 
  d. Mika Singh `,
  answer: `c`},
  {question: `Q. Name the duet who sang the song \'Kho Gaye Hum Kahan\'?
  a. Arjit Singh & Sunidhi Chauhan 
  b. KK & Shreya Ghosal 
  c. Arman Malik & Monali Thakur 
  d. Prateek Kuhad & Jasleen Royal `,
  answer: `d`},
  {question: `Q. Which female singer is called the Nightingale of India?
  a. Sarojini Naidu 
  b. Lata Mangeshkar
  c. Asha Bhosle
  d. Usha Uthup `,
  answer: `b`},
  {question: `Q. Is Pritam Chakraborty a singer?
  a. Yes 
  b. No `, 
  answer: `a`}];

  let i;
  let cash=0;
   function check(ans){
    
     if(levelOne[i].answer===ans){
      
      cash+=100;
      return true;
      
    }
    else 
    { console.log(chalk.green(`Thank you for playing. You won:${cash}`) )
          process.exit();
    }
    
}        

    for(i=0;i<levelOne.length;i++)
    { var answ;
      
      console.log("***********************************");
      answ=readlineSync.question(chalk.magentaBright(levelOne[i].question) + chalk.white('\n  Answer: '));
      check(answ);
    
    }
    console.log(chalk.green(`Thank you for playing. You won:${cash}`) );

