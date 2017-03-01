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

function getImages() {
  // Get the Google Doc
  var doc = DocumentApp.getActiveDocument();

  // Get the email address of the active user - that's you.
  var email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  var subject = doc.getName();

  // Get the text of the document
  var text = doc.getBody().getText();

  // Send yourself an email with the text of the document.
  GmailApp.sendEmail(email, subject, text);
}
