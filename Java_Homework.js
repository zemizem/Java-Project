console.log("Welcome to this magic eight ball application");

const first_name = "ZemZem";
const last_name = "Khiar";
const full_name = `${first_name} ${last_name}`
let question = "Will I achieve my goals within next year?"

console.log(`Hello, my name is ${first_name} ${last_name} and my question is: ${question}`);

console.log(`Hello my name is ${full_name} and my questions is: ${question}` );

question = question.toUpperCase();

console.log(`Hello my name is ${full_name} and my questions is: ${question.toUpperCase()}`);

console.log(`Hello my name is ${full_name} and my question is: \n${question}`)

const random_number = Math.round(Math.random()* 8) + 1;
console.log('Random Number:', random_number);

console.log(`The answer to your question is ${random_number === 1 ? 'Yes' : 'No'}` );

function app(){
  const first_name = "ZemZem";
  const last_name = "Khiar";
  let question = "Will I achieve my goals within next year?"
  
  greeting(first_name, last_name, question);

const random_number = get_random_number()
console.log(`The answer to your question is ${random_number === 1 ? 'Yes' : 'No'}` );

magic_eight_ball(random_number);
}

function greeting(first_name, last_name, question){
  console.log("Welcome to this magic eight ball application");
  const full_name = `${first_name} ${last_name}`;
  console.log(`Hello, my name is ${first_name} ${last_name} and my question is: ${question}`);
}

function get_random_number(){
  const random_number = Math.round(Math.random()* 8) + 1;
  return random_number;
}

app();

function magic_eight_ball(number_result){
switch(number_result) {
  case 1: 
    console.log('yes');
  break;

  case 2: 
    console.log('It is decidedly so');
  break;

  case 3: 
    console.log('Without a doubt');
  break;

  case 4: 
    console.log('Ask again later');
  break;

  case 5:
    console.log('Cannot predict now')
  break;

  case 6:
    console.log('No');
  break;
  
  case 7:
    console.log('Very doubtful');
  break;

  case 8:
    console.log('Outlook not so good');
  break;

  default:
    console.log('Not a valid case please use a number between 1 and 8');
}

}