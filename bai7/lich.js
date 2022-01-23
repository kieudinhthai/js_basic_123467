const date = new Date();
var month = date.getMonth()
var year = date.getFullYear()



//const lastDate = new Date(year,month+1,0)
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var dayItem = document.getElementById('days')
var monthItem = document.getElementById('month')
var yearItem = document.getElementById('year')


//let weekday = weekday[date.getDay()];


//tháng, năm 




var createCalendar = function (year, month) {

   let days = ''
   let lastDate = new Date(year, month + 1, 0).getDate()
   let preLastDate = new Date(year, month, 0).getDate()
   let preLastDateIndex = new Date(year, month, 0).getDay()
   let lastDateIndex = new Date(year, month + 1, 0).getDay()
   let nextDateIndex = 7 - lastDateIndex - 1

   monthItem.innerText = months[month]
   yearItem.innerText = year

   for (let x = preLastDate - preLastDateIndex; x <= preLastDate; x++) {
      days += `<li>${x}</li>`
      // dayItem.innerHTML = days  
   }

   for (let i = 1; i <= lastDate; i++) {
      days += `<li style="font-weight: bold">${i}</li>`
      // dayItem.innerHTML = days  
   }

   for (let j = 1; j <= nextDateIndex; j++) {
      days += `<li>${j}</li>`

   }
   return days
}



console.log(days)


var pre = document.getElementById('pre')
var next = document.getElementById('next')

var pre = function () {
   month--
   if (month <= 0) {
      month = 11
      year--
   }
   console.log(month)
   dayItem.innerHTML = createCalendar(year, month)
}
var next = function () {
   month++
   if (month > 11) {
      month = 0
      year++

   }
   console.log(month)
   dayItem.innerHTML = createCalendar(year, month)
}

// })

dayItem.innerHTML = createCalendar(year, month)