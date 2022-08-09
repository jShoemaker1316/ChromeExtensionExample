// tutorial code was wrong, but this helped:
// https://stackoverflow.com/questions/6132018/how-can-i-get-the-current-tab-url-for-chrome-extension
//

export async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });
  
    return tabs[0];
}

