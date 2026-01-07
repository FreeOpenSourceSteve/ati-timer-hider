## ATI Timer Hider
A lightweight Chrome extension to hide the "Time spent" live counter on the ATI study platform. Designed to reduce distraction and timer-related anxiety during study sessions.

### Features
**Total Hidden State**: Uses multiple CSS properties to ensure the timer is completely invisible.

**Zero Interference**: Does not stop or break the actual timer; it only hides it from your view.

**Simple Logic**: No complex scripts; just a direct UI override.

### Technical Details
The extension targets the .timespentlbl class using the following CSS:
```
.timespentlbl {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
}
```
### Installation Instructions
Since this extension is custom-built, you must "sideload" it into your browser:

1. Download/Clone this repository to a folder on your computer (Click "**Code**" and then "**Download Zip**")
2. Open Google Chrome and navigate to chrome://extensions/
3. Enable Developer mode using the toggle in the top-right corner
4. Click the Load unpacked button
5. Select the folder (*ati-timer-hider*) containing your extension files
6. Navigate to ATI and the timer will now be hidden

### Chrome Extension Store Status
I will get this added to the chrome store. I want to add a simple popup that toggles visibility first. If you have other features you want let me know. 
