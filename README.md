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

