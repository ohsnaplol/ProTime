// function run() {
//   //first, check current tab
//   console.log(tab.id)
// }

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   if (isEnabled) {
//     alert('Something happened');
//     // chrome.tabs.executeScript({
//     //   code: 'document.body.style.backgroundColor="red"'
//     // });
//   }
// });

// chrome.event.click.addListener(function(thing) {
//   alert(JSON.stringify(thing))
// })

// monitorEvents(document.body, "click");
// alert(getEventListener(document))

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.create({url:chrome.extension.getURL("tabs_api.html")})
// })
//bind the mousewheel events
// window.addEventListener("mousewheel", function(e) {
//   sendPixels(e.wheelDeltaX, e.wheelDeltaY);
//   ignoreScroll = true;
//   previousTime = Date.now();
//   clearTimeout(timeout);
//   timeout = setTimeout(function() {
//     ignoreScroll = false;
//   }, 100);
// });
// //bind the scroll events
// window.addEventListener("scroll", function(e) {
//   if (!ignoreScroll) {
//     var scrollLeft = document.body.scrollLeft;
//     var scrollTop = document.body.scrollTop;
//     var dX = previousOffsetX - scrollLeft;
//     var dY = previousOffsetY - scrollTop;
//     previousOffsetX = scrollLeft;
//     previousOffsetY = scrollTop;
//     // sendPixels(dX, dY);
//   }
// });
