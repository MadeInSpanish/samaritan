function handleTabs(tabs){
  var data = {
    type: 'FROM_EXTENSION',
    action: 'GET_ARTICLE'
  };

  chrome.tabs.sendMessage(tabs[0].id, data, handleMessageResponse);
}

function handleMessageResponse(response) {
  if (typeof response === 'string' && response.length > 140) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      try {
        var words = JSON.parse(xhr.responseText).words
        var URL = 'https://samaritan.now.sh/search/?q=' + encodeURIComponent(words.join());
        chrome.tabs.create({ url: URL });
      } catch (e) {
        console.log('not yet');
      }
    };

    xhr.open("POST", 'https://microservices-samaritan.now.sh/?body=' + response, true);
    xhr.send();

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
