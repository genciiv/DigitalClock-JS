//Do te perdorim getElementById()
// kemi 4 id te cilat do te perdorim

//e para 
const hourEl = document.getElementById("hour")

//e dyta
const minuteEl = document.getElementById("minutes")

//e treta 
const secondEl = document.getElementById("seconds")

//e katerta
const ampmEl = document.getElementById("ampm")


// krijojme nje funksion me emrin updateClock

function updateClock(){
    //Deklarojme variablat per hour , minutes dhe seconds te cilat vlerat do i marri nga kompjuteri
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    // ampm do e deklarojme si variabel por nuk merr vlere nga kompjuteri 
    let ampm = "Am"

    //krijojme nje kusht logjik e cila do te na tregoje nqs ora kalon 12 ateher te na jape PM
    if(h > 12){
        h = h - 12
        ampm = "PM"
    }


    //shkruajme nje operator logjik per te shtuar 0 para ores
    h = h < 10 ? "0" + h : h;

    //do te perdorim metoden innertext per te ndryshuar kontentin brenda elementit tone
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl,(innerText = ampm);

    //vendosim nje funksion te thjeshte e cila ben te mundur thirrjen e funksionit per te bere reload faqen web dhe te shikojm sekondat qe levizin. Kjo eshte nje infinite loop
    setTimeout(()=>{
        updateClock()
    },1000)

}

// therrasim funksionin per te pare ndryshimin 
updateClock()