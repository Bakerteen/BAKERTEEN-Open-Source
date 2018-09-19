//TheMeanWeekendMotivator
let currentTime = new Date()
let day = currentTime.getDate()

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work you lazy pickle');
}
