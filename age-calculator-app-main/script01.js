const input = document.querySelectorAll('input');
const label = document.querySelectorAll('label small');
const displayAge = document.querySelectorAll('main div span');
const errorMessage = document.querySelectorAll('emptyerror');
const button = document.querySelectorAll('button');
const day = document.querySelectorAll('.displayday');
const month = document.querySelectorAll('.displaymonth');
const year = document.querySelectorAll('.displayyear');

const todayDate = new Date();
let todayday = todayDate.getDate();
let todaymonth = todayDate.getMonth()+1;
let todayyear = todayDate.getFullYear();

const numberOfMonth = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calculateAge = () =>{
    let y = todayYear - input[2]yearvalue.value;
    let m = todayMonth - input[1]monthvalue.value;
    let d = todayday - input[0]dayvalue.value;

    if(d<0){
        m -= 1;
        d += numberOfMonth[Number(input[1].value)-1];
    }
    
    if(m<0){
        y -= 1;
        m +=12;
    }

    day.textContent = d;
    month.textContent = m;
    year.textContent = y;

}

button.addEventListener('click', calculateAge);