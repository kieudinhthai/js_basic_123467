var m = 0
var h = 0
var s = 0
var ms = 0
var start = document.getElementById('start')
var clock = document.getElementById('clock')
var reset = document.getElementById('reset')
var stop = document.getElementById('stop')
clock.innerHTML =`${h}:${m}:${s}:${ms}`

start.addEventListener('click', (e) => {

  var  x =  setInterval(
        time , 10);
     
        console.log(x)

        stop.addEventListener('click', (e) => {
            clearInterval(x)
        })   

})

reset.addEventListener('click', (e) => {
    s = 0
    h = 0
    ms = 0
    m = 0
    clock.innerHTML =`${h}:${m}:${s}:${ms}`
})




const time = () => {
    ms += 1

    if (ms === 100) {
        ms = 0
        s += 1
    }
    if (s === 60) {
        s = 0
        m++
    }
    if (m === 60) {
        m += 1
        h++
    }
    clock.innerHTML =`${h}:${m}:${s}:${ms}`
}