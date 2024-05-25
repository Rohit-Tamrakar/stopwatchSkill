

const time = document.getElementById("time")


const btnDiv=document.getElementById("btn")


//creating start btn
const startBtn=document.createElement("button")
startBtn.style="color:blue"
startBtn.innerText="start"
btnDiv.appendChild(startBtn)

//creating stop btn
const stopBtn=document.createElement("button")
stopBtn.style="color:green"
stopBtn.innerText="stop"
btnDiv.appendChild(stopBtn)

//creating reset btn
const resetBtn=document.createElement("button")
resetBtn.style="color:red"
resetBtn.innerText="reset"
btnDiv.appendChild(resetBtn)


// initializing hours minuit secons by 0
let hours=0;
let minuit=0;
let second=0;

const hr=document.getElementById("hr");

const min=document.getElementById("min");
const sec=document.getElementById("sec");
hr.innerText=hours+"hr";

sec.innerText=second+"sec";
min.innerText=minuit+"min";



// handling function for start the stopwatch 
const handleStart=()=>{
    startBtn.disabled=true;
    stopBtn.disabled=false;
    resetBtn.disabled=false;
   const interval= setInterval(()=>{
        second=second+1;
        console.log(second);
        if(second == 60){
            second=0;
            minuit++;
            min.innerText=minuit+"min";
            if(minuit==59){
                minuit= -1;
                hours++;
                hr.innerText=hours+"hr";
               
            }
        }

        sec.innerText=second+"sec";
        },1000);

       // EventListener for stop the stopwatch 
        stopBtn.addEventListener("click",()=>{
            clearInterval(interval)
            stopBtn.disabled=true;
            startBtn.disabled=false;

        })

               // EventListener for stop the stopwatch 

        resetBtn.addEventListener("click",()=>{

      clearInterval(interval)
resetBtn.disabled=true;
stopBtn.disabled=true;
      startBtn.disabled=false;
            hours=0;
        minuit=0;
        second=0;
        sec.innerText=second+"sec";
        min.innerText=minuit+"min";
        hr.innerText=hours+"hr";
       
       })
}
 // EventListener for start the stopwatch and calling handleStart on it 
startBtn.addEventListener('click', handleStart)





