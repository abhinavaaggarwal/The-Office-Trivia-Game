var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var username = readlineSync.question("What is your name? ");
console.log(chalk.red("Welcome "),username," to Dunder Mifflin Paper Company, Scranton Branch ");
console.log("Lets see how much you know the Scranton branch: ");

function play(i,list){
  console.log(i+1,". ",list[i].question);

  if(list[i].options.length != 0){
    
    for(var j=0;j<list[i].options.length;j++){
        console.log(j+1,list[i].options[j]);
    }
  }
  
    var input = readlineSync.question("Enter your answer: ");

    if(input === list[i].answer){
      console.log("You are right!");
      score++;
    }
    else{
      console.log("You are wrong!")
    }  

  console.log("Your score is: ",chalk.blue(score));
  console.log("-----------------------------")
}

var questionlist = [
  {
    question:"How many minutes has Michael Scott worked at Dunder Mifflin?",
    answer:9986000,
    options:[9986000,9976000,9993000]
  },
  {
    question:"What show did the Dunder Mifflin gang hold a viewing party for?",
    answer:"Glee",
    options:["Friends","Glee","Lost"]
  },
  {
    question:"Who won the paper-selling competition between Dwight and the computer?",
    answer:"Dwight",
    options:[]
  },
  {
    question:"What was the name of Jan's assistant? ",
    answer:"Hunter",
    options:[]
  },
  {
    question:"What username does Michael choose for his dating profile?",
    answer:"little Kid Lover",
    options:["World's Best Boss","little kid lover"]
  }
];

for(var i=0;i<questionlist.length;i++){
  play(i,questionlist);
}