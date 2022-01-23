var text_a = document.getElementById('a')
var text_b = document.getElementById('b')
var kq = document.getElementById('result')
var x = 0
var cong = document.getElementById('cong')
var tru = document.getElementById('tru')
var nhan = document.getElementById('nhan')
var chia = document.getElementById('chia')
var mu = document.getElementById('mu')

cong.addEventListener('click', (e) => {

    x = parseFloat(text_a.value) + parseFloat(text_b.value)
    kq.setAttribute('value', x)
})

tru.addEventListener('click', (e) => {
    x = parseFloat(text_a.value) - parseFloat(text_b.value)
    kq.setAttribute('value', x)
})
nhan.addEventListener('click', (e) => {
    x = parseFloat(text_a.value) * parseFloat(text_b.value)
    kq.setAttribute('value', x)
})

chia.addEventListener('click', (e) => {
    x = parseFloat(text_a.value) / parseFloat(text_b.value)
    kq.setAttribute('value', x)
})

mu.addEventListener('click', (e) => {
    x = parseFloat(text_a.value) ** parseFloat(text_b.value)
    kq.setAttribute('value', x)
})
