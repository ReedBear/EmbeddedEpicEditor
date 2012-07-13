chrome.experimental.app.onLaunched.addListener(function() { 
  chrome.appWindow.create('index.html', {
    frame: 'chrome', width: 720, height: 400
  });
});