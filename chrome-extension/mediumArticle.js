chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.type === 'FROM_EXTENSION') {

    switch (msg.action) {
      case 'GET_ARTICLE':
        var articleNode = document.querySelector('article')
        var text = articleNode.innerText
        sendResponse(text)

        break;
      default:
        sendResponse(false);
    }
  }

});
