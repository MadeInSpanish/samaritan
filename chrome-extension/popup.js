function handleTabs(tabs){
  var data = {
    type: 'FROM_EXTENSION',
    action: 'GET_ARTICLE'
  };

  chrome.tabs.sendMessage(tabs[0].id, data, handleMessageResponse);
}

function handleMessageResponse(response) {
  if (typeof response === 'string' && response.length > 140) {
    var URL = 'https://samaritan.now.sh/search/?q=' + encodeURIComponent(response);
    chrome.tabs.create({ url: URL });
  }
  // TODO validate when is less than 140 chars
}

function handleGetImages() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, handleTabs);
}

function events() {
  var btn = document.getElementById('getRelatedImages');
  btn.addEventListener('click', handleGetImages);
}

function run() {
  events();
}

document.addEventListener('DOMContentLoaded', run);
