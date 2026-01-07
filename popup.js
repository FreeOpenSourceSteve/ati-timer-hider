document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');

    // Load saved state
    chrome.storage.local.get(['timerHidden'], function(result) {
        // Default to true (checked) if not set
        toggle.checked = result.timerHidden !== undefined ? result.timerHidden : true;
    });

    // Save state on change
    toggle.addEventListener('change', function() {
        chrome.storage.local.set({ timerHidden: toggle.checked });
    });
});