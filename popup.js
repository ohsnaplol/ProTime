setInterval(waterFilter, 2000)

function waterFilter() {
  var images = document.getElementsByTagName('img')
  for (var i = 0; i < images.length; i++) {
    images[i].src = 'https://i.imgur.com/6XIv4Tg.gif'
  }
}
