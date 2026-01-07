// Function to update visibility based on state
function updateVisibility(isHidden) {
    if (isHidden) {
        document.body.classList.add('hide-ati-timer');
        console.log("ATI Time Hider: Timer hidden");
    } else {
        document.body.classList.remove('hide-ati-timer');
        console.log("ATI Time Hider: Timer visible");
    }
}

// Initialize: Check storage (default to true/hidden if not set)
chrome.storage.local.get(['timerHidden'], function(result) {
    // Default to true if undefined
    const isHidden = result.timerHidden !== undefined ? result.timerHidden : true;
    updateVisibility(isHidden);
});

// Listen for changes in storage (from the popup)
chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.timerHidden) {
        updateVisibility(changes.timerHidden.newValue);
    }
});