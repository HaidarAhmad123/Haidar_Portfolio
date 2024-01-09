
// navegation bar display
 var myNavBar = document.querySelector('.nav-items-mobo')
function enable(){
  console.log('ha')
  
  myNavBar.style.height = '100%'
  myNavBar.style.border = '1px solid rgba(255, 255, 255, 0.18)'
}

//   allsections.addEventListener('click',(e)=>{
//     const id = e.target.dataset.id;
//     //remove selected from other btn
//     let section = document.querySelector(`.${id}`)
//     section
//   })
// }

let words = document.querySelectorAll('.word')
words.forEach((word)=>{
    let letters = word.textContent.split('')
    word.textContent=''
    letters.forEach((letter)=>{
        let span =document.createElement('span')
        span.textContent = letter;
        span.className = 'letter';
        word.append(span)
       
    })
})
let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = '1'

let changeWordText = () =>{
    let currentWord = words[currentWordIndex]
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex+1]

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = 'letter-out'
        },i*80)
    });
    nextWord.style.opacity = '1';
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = 'letter behind';
        setTimeout(()=>{
            letter.className = 'letter in'
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;

};
changeWordText();
setInterval(changeWordText,3000)

// change word effect

//contact form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////

