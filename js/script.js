const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const questionNumber=document.querySelector('#q-number');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const YN = document.querySelector("#yn");
const pro = document.querySelector('.progress-bar');
const CHAR = document.querySelector('#character');
const explain = document.querySelector('#explain');
const image = document.querySelector('#resultImg');
const resultContainer = document.querySelector('.result-container');

const q = {
    1: {
        "qNumber": "01",
        "question":"12시간 이상 누워있을 수 있다.",
        "type": "yn", //내가 보는 거
        "A": "그렇다", //사용자가 보는 거
        "B": "아니다"
    },
    2: {"qNumber": "02","question":"나가는 것 자체가 스케줄이다.", "type": "yn", "A": "그렇다", "B": "아니다"},
    3: {"qNumber": "03","question":"나간 김에 볼 일을 다 본다." ,"type": "yn", "A": "그렇다", "B": "아니다"},
    4: {"qNumber": "04","question":"막상 나가면 재밌지만 나가기까지가 귀찮다." ,"type": "yn", "A": "그렇다", "B": "아니다"},
    5: {"qNumber": "05","question":"\'불금에는 집에 가야지\' 라고 생각한다." ,"type": "yn", "A": "그렇다", "B": "아니다"},
    6: {"qNumber": "06", "question":"휴일에 하루종일 잠옷만 입고 있다.","type": "yn", "A":"그렇다", "B": "아니다"},
    7: {"qNumber": "07","question":"방에 비상식량이 구비되어 있다." ,"type": "yn", "A": "그렇다", "B": "아니다"},
    8: {"qNumber": "08","question":"집에서도 바빠서 밖에 나갈 시간이 없다.","type": "yn", "A": "그렇다", "B": "아니다"},
    9: {"qNumber": "09","question":"통화목록이 대부분 가족이다.","type": "yn", "A": "그렇다", "B": "아니다"},
    10: {"qNumber": "10","question":"휴대폰과 리모컨은 나의 동반자이다.","type": "yn", "A": "그렇다", "B": "아니다"},
    11: {"qNumber": "11","question":"휴대폰만 있으면 심심하지 않다." ,"type": "yn", "A": "그렇다", "B": "아니다"},
    12: {"qNumber": "12","question":"약속이 깨지면 행복하다.","type": "yn", "A": "그렇다", "B": "아니다"}
}

const result = {
    "l": {
        "level": "집순이 & 집돌이 하수", 
        "explain": "집에 있는 것도 좋지만 며칠 연속으로 집에 있으면 지겨워하는 유형이에요. 혼자라도 바람공기를 쐬어야 적성이 풀리는 분들이죠! ", 
        "img": "./img/h1.jpg"
    },
    "m": {"level": "집순이 & 집돌이 중수", 
        "explain": "집이 최고야! 집을 정말 사랑하시는 분이군요? 집에서 은근히 할 일이 많아 집안에서도 바쁘고 간만에 잡은 약속 날 모든 것을 처리하는 당신은 집순이 집돌이 중수랍니다~",
        "img": "./img/h2.jpg"
    },
    "h": {"level": "집순이 & 집돌이 만렙", 
        "explain": "집밖은 위험해! 당신은 집에 최적화된 분입니다. 누워서 모든 일을 컨트롤할 수 있는 능력자죠. 누군가 집으로 찾아오는 것도 일이라고 느낄 수 있는 당신은 자신의 시간과 공간을 중시하는 유형이에요.",
        "img": "./img/h3.jpg"
    }
}

let num = 1;
let character='';

titleBtn.addEventListener('click',()=>{
    titleContainer.style.display='none';
    questionContainer.style.display='block';

    updateQuestion()
});

aBtn.addEventListener('click',()=>{
    if(type.innerHTML==="yn"){
        let y=parseInt(YN.value); //문자열인자 정수로 반환
        YN.setAttribute('value',y+1); //속성추가(?)
    }

    updateQuestion()
}); 

bBtn.addEventListener('click',()=>{
    updateQuestion()
}); 

function updateQuestion(){
    if(num===13){
        questionContainer.style.display='none';
        resultContainer.style.display='block';

       if(YN.value >= 10){
        character="h";
       }
       else if(YN.value >= 6){
        character="m";
       }
       else{
        character="l";
       }

       CHAR.innerHTML=result[character].level;
       explain.innerHTML=result[character].explain;
       image.setAttribute('src',result[character].img);
    }
    else{
    pro.setAttribute('style',`width: calc(100/12*${num}%);`);
    questionNumber.innerHTML=q[num].qNumber;
    question.innerHTML=q[num].question;
    type.innerHTML=q[num].type;
    aBtn.innerHTML=q[num].A;
    bBtn.innerHTML=q[num].B;
    num++
   }
}