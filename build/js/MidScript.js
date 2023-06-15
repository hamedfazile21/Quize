const spinner = document.querySelector("#spinner")
const buttons = document.querySelector(".buttons")

const qH_esay = document.querySelector("#qH_esay")
const opstion = document.querySelector(".opstions")
const next_btn = document.querySelector("#next")
const finish = document.querySelector(".finish")
const time = document.querySelector("#time")



next_btn.addEventListener("click" , next_f)
showQuestions (0)
startTimer(10)

let que_count = 0;
// let counter;
let timeValue = 10

function next_f (){
    if(que_count < quMid.length - 1){
        que_count++ 
        showQuestions (que_count)
        clearInterval(counter)
        startTimer(timeValue)
        next_btn.style.display = "none"

    }else{
        finish.classList.replace("hidden" , "flex")
        quizEsay.classList.add("hidden")
    }
}


function showQuestions (index){
    qH_esay.textContent = quMid[index].qus
    let opstions_tag = '<button class="p-1 opstion_tag  text-gray-600 font-bold text-left bg-gray-300 border border-solid border-gray-500 w-[100%] rounded-md flex flex-row items-center justify-between">' + quMid[index].options[0] + '</button>'
    + '<button class="p-1 opstion_tag text-gray-600 font-bold text-left bg-gray-300 border border-solid border-gray-500 w-[100%] rounded-md flex flex-row items-center justify-between">' + quMid[index].options[1] + '</button>'
    + '<button class="p-1 opstion_tag text-gray-600 font-bold text-left bg-gray-300 border border-solid border-gray-500 w-[100%] rounded-md flex flex-row items-center justify-between">' + quMid[index].options[2] + '</button>'
    opstion.innerHTML = opstions_tag;

    const opstion_tag = document.querySelectorAll(".opstion_tag")
    for (let i = 0; i < opstion_tag.length; i++) {
        opstion_tag[i].setAttribute("onclick" , "optionSelected(this)")

    }
}

function optionSelected(answer){
    clearInterval(counter)
    let userAns = answer.textContent
    let correctAns = quMid[que_count].answer
    let allOptions = opstion.children.length;
    if (userAns == correctAns) {
        answer.classList.add("bg-green-700")
        answer.classList.add("text-white")

    }else{
        answer.classList.add("bg-red-700")
        answer.classList.add("text-white")
        for (let i = 0; i < allOptions; i++) {
            if(opstion.children[i].textContent == correctAns){
                opstion.children[i].setAttribute("class" , "p-1 opstion_tag  text-white font-bold text-left bg-green-700 border border-solid border-gray-500 w-[100%] rounded-md flex flex-row items-center justify-between")
            } 
        }
    }
    for (let i = 0; i < allOptions; i++) {
        opstion.children[i].classList.add("pointer-events-none");
    }
    next_btn.style.display = "block"
}

function startTimer(times){
    counter = setInterval(timer , 1000)
    function timer(){
        time.textContent = times
        times--
        if(times < 9){
            let addZero = time.textContent;
            time.textContent = "0" + addZero
        }
        if (times < 0) {
            clearInterval(counter)
            time.textContent = "00"
        }
        if(times == "00"){
            alert("Times Over")
            window.location.reload()
        }
    }
}




