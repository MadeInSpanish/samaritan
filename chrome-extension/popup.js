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
    var open = false;

    xhr.onreadystatechange = function() {
      try {
        if (!open) {
          var words = JSON.parse(xhr.responseText).words
          var URL = 'https://the-machine.now.sh/search/?q=' + encodeURIComponent(words.join());
          chrome.tabs.create({ url: URL });
          open = !open;
        }
      } catch (e) {
        console.log('not yet');
      }
    };

    xhr.open(
      "POST",
      'https:///term-frecuency.herokuapp.com/?body=' + encodeURIComponent(response),
      true
    );
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
