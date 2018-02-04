setInterval(waterFilter, 2000)
// // first, check if they have previously check marked this box.
// if (localStorage.getItem('isEnabled') === null) {
//   localStorage.setItem('isEnabled', true)
//   $('#checkBox').prop('checked', true)
//   setInterval(waterFilter, 2000)
// }
//
// $(function() {
//   console.log('READY!')
// })
//
// if (localStorage.getItem('isEnabled')) {
//   $('#checkBox').prop('checked', true)
//   setInterval(waterFilter, 2000)
// } else {
//   $('#checkBox').prop('checked', false)
// }
//
// // If they check mark, isEnabled set to true, remember setting,
// // else, if they deselect checkmark, isEnabled- set to false and remember setting
// $('#checkBox').on('click', function() {
//   console.log($(this).is(':checked'))
//   if ($(this).is(':checked')) {
//     localStorage.setItem('isEnabled', true)
//     setInterval(waterFilter, 2000)
//   } else {
//     localStorage.setItem('isEnabled', false)
//   }
// })

function waterFilter() {
  var images = document.getElementsByTagName('img')
  for (var i = 0; i < images.length; i++) {
    images[i].src = 'https://i.imgur.com/6XIv4Tg.gif'
  }
}
