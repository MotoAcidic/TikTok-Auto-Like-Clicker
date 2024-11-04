// Log to confirm the content script has loaded on the TikTok page
console.log("TikTok Auto Clicker content script loaded");

let clickInterval;
let clickCount = 0;
let totalClicks = 0;
let intervalTime = 100;
let deviceType = "desktop"; // Default to desktop

// Function to perform the actual click
function clickTarget() {
    if (deviceType === "desktop") {
        // Attempt to click on the "like" button div for desktop
        const likeButton = document.querySelector(".css-1rleu4k-DivLikeBtnWrapper");
        if (likeButton) {
            likeButton.click();
            console.log(`Clicked on desktop like button - Click #${clickCount + 1}`);
        } else {
            console.warn("Desktop like button not found.");
        }
    } else if (deviceType === "mobile") {
        // For mobile, click the center of the screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const clickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            clientX: centerX,
            clientY: centerY
        });
        document.elementFromPoint(centerX, centerY).dispatchEvent(clickEvent);
        console.log(`Clicked at center (${centerX}, ${centerY}) - Click #${clickCount + 1}`);
    }

    clickCount += 1;

    if (clickCount >= totalClicks) {
        stopClicker();
    }
}

// Function to start the auto-clicker
function startClicker(clicks, interval, device) {
    console.log(`Starting clicker with ${clicks} clicks, interval ${interval} ms, device: ${device}`);
    clickCount = 0;
    totalClicks = clicks;
    intervalTime = interval;
    deviceType = device;
    clickInterval = setInterval(clickTarget, intervalTime);
    chrome.storage.local.set({ isRunning: true });
}

// Function to stop the auto-clicker
function stopClicker() {
    console.log("Stopping clicker");
    clearInterval(clickInterval);
    chrome.storage.local.set({ isRunning: false });
}

// Listener to handle messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received message in content script:", request);
    
    if (request.action === "startClicker") {
        startClicker(request.totalClicks, request.clickInterval, request.deviceType);
    } else if (request.action === "stopClicker") {
        stopClicker();
    }
});
