window.onload = function () {
  var desktopFallback = 'https://youtube.com/watch?v=JaOnoBTVKec',
    mobileFallback = 'https://youtube.com/watch?v=JaOnoBTVKec',
    app = 'vnd.youtube://JaOnoBTVKec'
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location = app
    window.setTimeout(function () {
      window.location = mobileFallback
    }, 25)
  } else {
    window.location = desktopFallback
  }
  function killPopup() {
    window.removeEventListener('pagehide', killPopup)
  }
  window.addEventListener('pagehide', killPopup)
}
