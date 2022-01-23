document.write('<div  class=" container row">')
for (let i = 1; i <= 10; i++) {
    document.write('<div style="border: 1px solid black" class="col-2 ml-2 mt-2 ">')
    for (let j = 1; j<=10; j++){
        document.write(`${i}x${j}=${i*j} <br>` )
    }
    document.write('</div>')
    document.write("<br>")
}
document.write('</div>')