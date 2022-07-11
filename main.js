const settingsBtn = document.querySelector('#setting-btn')
const settings = document.querySelector('#settings')
const difficultySelect = document.querySelector('#difficulty')
const words = document.querySelector('#words')
const inputField = document.querySelector('#input-field')
const scoreEl = document.querySelector('#score')
const timeEl = document.querySelector('#time')
const endgameEl = document.querySelector('#end-game-container')
const settingsForm = document.querySelector('#settings-form')
let word = [
    'good',
    'south',
    'independent',
    'steering',
    'gold',
    'home',
    'artificial',
    'intelligence',
    'nine',
    'fame',
    'dismiss',
    'drop',
    'caring',
    'sing',
    'utensil',
    'airplane',
    'pilot',
    'basket',
    'juice',
    'ukraine',
    'captain',
    'this',
    'game',
    'is',
    'difficult'
  ];





// initialize random word variable
let randomWord;

// initialize a score 
let score = 0;

//initialize time
let time = 10;

//initialize difficulty variable and set it to value in local storage or Medium
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'Easy';

//Set selected value of difficulty
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'Easy';

//Focus on input
inputField.focus();

//Start counting down time
const timeInterval = setInterval(updateTime, 1000);//this allows us run run a specific functin at time intervals, e.g every second

//generate random words
function getRandomWord(){
  return word[Math.floor(Math.random() * word.length)];
}

//function to update time
function updateTime(){
    time--;
    timeEl.innerHTML =`${time}s`;

    if(time === 0){
        clearInterval(timeInterval);
        //end game
        gameOver();

    }
}

//Game over and show end screen
function gameOver(){
    endgameEl.innerHTML =`
    <h1>Time ran out</h1>
    <p>Here is your final score: ${score}</p><br>
    <button onclick="window.location.reload()">Reload</button>
    `;

    endgameEl.style.display = 'flex';
}

// function to add word to dom
function addWordToDom(){
  randomWord = getRandomWord();
  words.innerHTML = randomWord;
}
//function to update score
function updateScore() {
    score += 2;
    scoreEl.innerHTML = score;
    
}

addWordToDom();

// listening for input event and matching words
inputField.addEventListener('input', function (e){
  const typedWord = e.target.value;

  if(typedWord === randomWord){
      addWordToDom();
      updateScore();

      // clear input field on score update
      e.target.value = '';

      //Add time everytime the word is typed correctly
      //Different difficulties
      if(difficultySelect.value === 'Hard'){
        time += 1;
      } else if(difficultySelect.value === 'Medium'){
        time += 2;
      } else{
        time += 4;
      }

      updateTime();

  }
});

//change settings on select
settingsForm.addEventListener('change', function (e){
  difficulty = e.target.value;
  localStorage.setItem('difficulty', 'difficulty')
  
});


//settings button functionality

//button on click
settingsBtn.addEventListener('click', () =>{
    settings.classList.toggle('show')
  });


// const a = 1;
// const b = 2;
// const c = 3;

// console.log(a);
// console.log(b);
// console.log(c);

//The above expression is an example of synchronous or single threaded javascript
//

