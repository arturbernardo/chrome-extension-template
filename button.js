(function() {
    const button = document.getElementById('some-button');
    button.addEventListener('click', () => {
        console.log('Button clicked');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                message: 'clicked_browser_action'
            });
        })
    });
})()