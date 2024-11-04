document.addEventListener("DOMContentLoaded", () => {
    const clickCountInput = document.getElementById("clickCount");
    const clickIntervalInput = document.getElementById("clickInterval");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const deviceSelection = document.getElementById("deviceSelection");
    const settings = document.getElementById("settings");

    let deviceType = null; // Track device type selection

    // Check the running state from Chrome's storage
    chrome.storage.local.get("isRunning", (result) => {
        if (result.isRunning) {
            deviceSelection.style.display = "none"; // Hide device selection
            settings.style.display = "block"; // Show settings
            startButton.style.display = "none";
            stopButton.style.display = "block";
            clickCountInput.disabled = true;
            clickIntervalInput.disabled = true;
        } else {
            deviceSelection.style.display = "block"; // Show device selection
            settings.style.display = "none"; // Hide settings until device is selected
            startButton.style.display = "block";
            stopButton.style.display = "none";
            clickCountInput.disabled = false;
            clickIntervalInput.disabled = false;
        }
    });

    // Device selection button event listeners
    document.getElementById("desktopButton").addEventListener("click", () => {
        deviceType = "desktop";
        deviceSelection.style.display = "none";
        settings.style.display = "block";
    });

    document.getElementById("mobileButton").addEventListener("click", () => {
        deviceType = "mobile";
        deviceSelection.style.display = "none";
        settings.style.display = "block";
    });

    // Start button event listener
    startButton.addEventListener("click", () => {
        const totalClicks = parseInt(clickCountInput.value, 10);
        const clickInterval = parseInt(clickIntervalInput.value, 10);

        if (isNaN(totalClicks) || totalClicks <= 0) {
            alert("Please enter a valid positive number of clicks.");
            return;
        }

        if (isNaN(clickInterval) || clickInterval < 10) {
            alert("Please enter a valid interval of at least 10 milliseconds.");
            return;
        } else if (clickInterval < 100) {
            const proceed = confirm("Warning: Choosing an interval lower than 100ms may lead to a ban. Do you want to continue?");
            if (!proceed) {
                return;
            }
        }

        // Send a message to the content script to start clicking
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0].id, 
                { action: "startClicker", totalClicks: totalClicks, clickInterval: clickInterval, deviceType: deviceType }, 
                (response) => {
                    if (chrome.runtime.lastError) {
                        console.error("Error sending startClicker message:", chrome.runtime.lastError.message);
                    } else {
                        console.log("startClicker message sent successfully");
                    }
                }
            );
        });

        // Update UI to reflect the auto-clicker state
        startButton.style.display = "none";
        stopButton.style.display = "block";
        clickCountInput.disabled = true;
        clickIntervalInput.disabled = true;
        chrome.storage.local.set({ isRunning: true });
    });

    // Stop button event listener
    stopButton.addEventListener("click", () => {
        // Send a message to the content script to stop clicking
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "stopClicker" }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error sending stopClicker message:", chrome.runtime.lastError.message);
                } else {
                    console.log("stopClicker message sent successfully");
                }
            });
        });

        // Update UI to reflect the auto-clicker state
        startButton.style.display = "block";
        stopButton.style.display = "none";
        clickCountInput.disabled = false;
        clickIntervalInput.disabled = false;
        chrome.storage.local.set({ isRunning: false });

        // Show device selection buttons again after stopping
        deviceSelection.style.display = "block";
        settings.style.display = "none";
    });
});
