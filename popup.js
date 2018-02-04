var isEnabled

$(function () {
  // first, check if they have previously check marked this box.
  chrome.storage.sync.get('isEnabledSetting', function(result) {
    $('#checkBox').prop('checked', result.isEnabledSetting)
    isEnabled = $(this).is(':checked')
  })

  // If they check mark, isEnabled set to true, remember setting in chrome storage sync,
  // else, if they deselect checkmark, isEnabled set to false and remember setting in chrome storage sync
  $('#checkBox').on('click', function() {
    if ($(this).is(':checked')) {
      isEnabled = true
      chrome.storage.sync.set({'isEnabledSetting' : true}, function(result) {
        console.log('Chrome storage isEnabledSetting set to true')
      })
    } else {
      isEnabled = false
      chrome.storage.sync.set({'isEnabledSetting' : false}, function(result) {
        console.log('Chrome storage isEnabledSetting set to false')
      })
    }
  })
});
