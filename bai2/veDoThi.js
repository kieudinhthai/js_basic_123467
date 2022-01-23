var form = document.getElementById('form')
var array = ["Anh", "Phap", "Duc","Nga", "Nhat"]
var value = []
for (let i = 0; i < array.length; i++){
    document.write(`${array[i]}:<input class="input" type="text"><br>`)
}
document.write(`<button id="veDoThi" type="submit">veDoThi</button>`)

var btn =document.getElementById('veDoThi')
var table = document.getElementById('table')
btn.addEventListener('click',(e)=>{
    var input = document.getElementsByClassName('input')
    for (let i = 0; i < input.length; i++) {
     value.push(input[i].value)
    }
 console.log(value) 
 for (let i = 0; i < array.length; i++){
    document.write(`${array[i]}:<input class="input" type="text"><br>`)
}
document.write(`<button id="veDoThi" type="submit">veDoThi</button></br>`)
 document.write(`<table>`)
for (let i = 0; i < array.length; i++) {
    document.write(`<tr><td>${array[i]}</td><td style="" ><div class="div" style="float:left;background-color:red;width:${value[i]*3}px; height:10px"></div><div style="float:left">${value[i]}%</div></td></tr>`)
    
}
 document.write(`</table>`)
})

