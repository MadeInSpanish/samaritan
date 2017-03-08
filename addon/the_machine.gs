
// Google function to create a menu in the doc
function onOpen(e) {
  DocumentApp
      .getUi()
      .createAddonMenu()
      .addItem('Get Powerful Images', 'getImages')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function shortenUrl(text) {
  var url = UrlShortener.Url.insert({
    longUrl: "https://machine.now.sh/search/?q=" + text
  });
  return url.id;
}

function getImages() {
  // Get the Google Doc
  var doc = DocumentApp.getActiveDocument();

  // Get the text of the document
  var text = doc.getBody().getText();
  text = text
    .replace(/(^[ \t]*\n)/gm, "")
    .replace(/(\r\n|\n|\r)/gm," ")
    .replace(/\d+/g, '')
    .replace(/-/g, "");

  var text = encodeURIComponent(text);
  var url = shortenUrl(text)
  var htmlOutput = HtmlService
     .createHtmlOutput("<a href='" + url + "'target='_blank' ><img src='https://d13yacurqjgara.cloudfront.net/users/657367/screenshots/2247288/launch.gif'width='242' height='242'/></a>")
     .setWidth(250)
     .setHeight(300);
  DocumentApp.getUi().showModelessDialog(htmlOutput, 'Click on the image to see the images');

}
