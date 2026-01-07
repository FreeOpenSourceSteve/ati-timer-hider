// Function to update visibility based on state
function updateVisibility(isHidden) {
    // Use documentElement (<html> tag) because document.body is often null at document_start
    const target = document.documentElement;

    if (isHidden) {
        target.classList.add('hide-ati-timer');
        console.log("ATI Time Hider: Timer hidden");
    } else {
        target.classList.remove('hide-ati-timer');
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