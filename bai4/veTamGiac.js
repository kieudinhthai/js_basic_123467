var btn = document.getElementById('submit')

btn.addEventListener('click', (e) => {
    var value = document.getElementById('value').value
    let j=0
    for (let i = 0; i < value; i++) {
        j ++
        if(j>=10){
            j=0
        }
        document.write(`${j} `)
        let h = j
        for(k =i; k >0 ; k--){
            h--
            if(h<0){
                h=9
            }
            document.write(`${h} `)
        }
        document.write('<br>')
    }
})