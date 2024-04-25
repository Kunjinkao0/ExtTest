chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "setCookieForNewTab") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var currentTab = tabs[0];
            console.log('????')
            chrome.cookies.get({ url: currentTab.url, name: 'oai-did' }, function (cookie) {
                if (cookie) {
                    const targetUrl = 'http://localhost:8000';
                    chrome.tabs.create({ url: targetUrl }, function (newTab) {
                        chrome.cookies.set({
                            url: targetUrl,
                            name: 'oai-did',
                            value: cookie.value,
                            // domain: 'localhost'
                        }, function (cookie) {
                            console.log(cookie);
                        });
                    });
                } else {
                    console.error('Cookie not found');
                }
            });
        });
    }
});
