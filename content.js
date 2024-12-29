chrome.runtime.OnMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'clicked_browser_action') {
        alert('Clicked!!');
        document.body.style.backgroundColor = 'red';
    }
});