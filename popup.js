document.getElementById('getCookieBtn').addEventListener('click', function () {
  chrome.runtime.sendMessage({ action: "setCookieForNewTab" });
});