const speakerperson1 = document.querySelector('.speaker-person1');
const speakerperson2 = document.querySelector('.speaker-person2');

const speakerperson3 = document.querySelector('.speaker-person3');
const speakerperson4 = document.querySelector('.speaker-person4');
const speakerperson5 = document.querySelector('.speaker-person5');
const speakerperson6 = document.querySelector('.speaker-person6');

const imgP1 = document.querySelector('.imgP1');
const imgP2 = document.querySelector('.imgP2');
const imgP3 = document.querySelector('.imgP3');
const imgP4 = document.querySelector('.imgP4');
const imgP5 = document.querySelector('.imgP5');
const imgP6 = document.querySelector('.imgP6');

const T1P1 = document.querySelector('.T1P1');
const T1P2 = document.querySelector('.T1P2');
const T1P3 = document.querySelector('.T1P3');
const T1P4 = document.querySelector('.T1P4');
const T1P5 = document.querySelector('.T1P5');
const T1P6 = document.querySelector('.T1P6');

const T2P1 = document.querySelector('.T2P1');
const T2P2 = document.querySelector('.T2P2');
const T2P3 = document.querySelector('.T2P3');
const T2P4 = document.querySelector('.T2P4');
const T2P5 = document.querySelector('.T2P5');
const T2P6 = document.querySelector('.T2P6');

const T3P1 = document.querySelector('.T3P1');
const T3P2 = document.querySelector('.T3P2');
const T3P3 = document.querySelector('.T3P3');
const T3P4 = document.querySelector('.T3P4');
const T3P5 = document.querySelector('.T3P5');
const T3P6 = document.querySelector('.T3P6');

const bntmore = document.querySelector('.bnt-more');
const bntmoin = document.querySelector('.bnt-moin');

const ArraySpeakers = [
  {
    imagespeaker: 'images/speaker4img.png',
    Text1: ' Marthe ',
    Text2: ' Middle school french teacher ',
    Text3: ' From linguistic university ',

  },
  {
    imagespeaker: 'images/speaker2img.png',
    Text1: ' Zézé ',
    Text2: ' Food product engineer from tunis ',
    Text3: ' madia university of tunis ',

  },
  {
    imagespeaker: 'images/speaker1img.png',
    Text1: ' Victor',
    Text2: ' School english teacher and developer',
    Text3: 'Language university and web developer',

  },
  {
    imagespeaker: 'images/speaker3img.png',
    Text1: 'Massa',
    Text2: ' Phycien and web developer  ',
    Text3: 'from the university in physical science and developer wed',

  },
  {
    imagespeaker: 'images/speaker5img.png',
    Text1: 'Maxim',
    Text2: 'network computer engineer',
    Text3: 'from gamal adel nazer university of conakry',

  },
  {
    imagespeaker: 'images/speaker6img.png',
    Text1: 'Richard',
    Text2: 'Architectural engineer',
    Text3: 'Architecture',
  },

];

imgP1.src = ArraySpeakers[0].imagespeaker;
imgP2.src = ArraySpeakers[1].imagespeaker;

T1P1.textContent = ArraySpeakers[0].Text1;
T1P2.textContent = ArraySpeakers[1].Text1;

T2P1.textContent = ArraySpeakers[0].Text2;
T2P2.textContent = ArraySpeakers[1].Text2;

T3P1.textContent = ArraySpeakers[0].Text3;
T3P2.textContent = ArraySpeakers[1].Text3;

imgP3.src = ArraySpeakers[2].imagespeaker;
imgP4.src = ArraySpeakers[3].imagespeaker;
imgP5.src = ArraySpeakers[4].imagespeaker;
imgP6.src = ArraySpeakers[5].imagespeaker;

T1P3.textContent = ArraySpeakers[2].Text1;
T1P4.textContent = ArraySpeakers[3].Text1;
T1P5.textContent = ArraySpeakers[4].Text1;
T1P6.textContent = ArraySpeakers[5].Text1;

T2P3.textContent = ArraySpeakers[2].Text2;
T2P4.textContent = ArraySpeakers[3].Text2;
T2P5.textContent = ArraySpeakers[4].Text2;
T2P6.textContent = ArraySpeakers[5].Text2;

T3P3.textContent = ArraySpeakers[2].Text3;
T3P4.textContent = ArraySpeakers[3].Text3;
T3P5.textContent = ArraySpeakers[4].Text3;
T3P6.textContent = ArraySpeakers[5].Text3;

function showSpeaker3() {
  bntmore.style.display = 'none';
  bntmoin.style.display = 'block';
  speakerperson3.style.display = 'flex';
  speakerperson4.style.display = 'flex';
  speakerperson5.style.display = 'flex';
  speakerperson6.style.display = 'flex';
}

function hideSpeaker3() {
  bntmore.style.display = 'block';
  bntmoin.style.display = 'none';
  speakerperson3.style.display = 'none';
  speakerperson4.style.display = 'none';
  speakerperson5.style.display = 'none';
  speakerperson6.style.display = 'none';
}

bntmore.addEventListener('click', showSpeaker3());
bntmoin.addEventListener('click', hideSpeaker3());

function performAction() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    speakerperson1.style.display = 'flex';
    speakerperson2.style.display = 'flex';
    speakerperson3.style.display = 'flex';
    speakerperson4.style.display = 'flex';
    speakerperson5.style.display = 'flex';
    speakerperson6.style.display = 'flex';
  } else {
    hideSpeaker3();
  }
}
performAction();
window.addEventListener('resize', performAction());

// function Menu bars

const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const menuOptions = document.querySelectorAll('.menu li');

toggle.addEventListener('click', () => {
  body.classList.toggle('open');
});

menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    body.classList.remove('open');
  });
});
