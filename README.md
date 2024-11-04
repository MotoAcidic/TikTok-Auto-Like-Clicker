# TikTok Live Auto Clicker Extension

![TikTok Live Auto Clicker](https://github.com/yourusername/tiktok-auto-clicker/blob/main/images/logo.png)

This Chrome extension automatically clicks on TikTok Live videos based on user-defined settings for click count and interval. It supports both desktop and mobile click modes, allowing you to specify whether you want it to target the like button on desktop or click the center of the screen on mobile.

## Features
- **Auto-click on TikTok Live**: Automates clicks on TikTok Live videos.
- **Device-Specific Mode**: Choose between Desktop mode (targeting the like button) and Mobile mode (clicking the center of the screen).
- **Customizable Click Count and Interval**: Set the number of clicks and adjust the interval in milliseconds between each click.
- **Safety Warning**: Alerts you when choosing intervals under 100ms to help prevent bans.

## Prerequisites
- **Browser**: Google Chrome or any Chromium-based browser that supports extensions.
- **TikTok Account**: Log in to TikTok and navigate to the Live page.

## Installation

1. **Download the Extension Folder**:
   - Clone or download this repository to your local machine.
   - Ensure you have the complete extension folder, with files such as `manifest.json`, `popup.html`, `popup.js`, `content.js`, `popup.css`, and any required images (e.g., `icon.png`).

2. **Open Chrome Extensions**:
   - In your Chrome browser, navigate to `chrome://extensions/`.

3. **Enable Developer Mode**:
   - Toggle the **Developer mode** switch in the top right corner of the Chrome Extensions page.

4. **Upload the Extension Folder**:
   - Click **Load unpacked** and select the folder where the extension files are located.
   - The extension should now load and appear in your extension list. If you see an error, double-check that the `manifest.json` and all required files are present in the folder you uploaded.

5. **Confirm Installation**:
   - The TikTok Live Auto Clicker extension should now be visible in the Chrome toolbar, ready to use.

## Usage

1. **Navigate to TikTok Live**:
   - Go to [TikTok Live](https://www.tiktok.com/live) and select a live video.

2. **Open the Extension**:
   - Click on the TikTok Live Auto Clicker icon in your browser toolbar.

3. **Select Device Mode**:
   - **Desktop**: Targets the like button on the TikTok Live video.
   - **Mobile**: Clicks the center of the screen, simulating a tap.

4. **Set the Click Count and Interval**:
   - **Number of Clicks**: Enter the total number of clicks you want the extension to perform.
   - **Click Interval (ms)**: Enter the time interval (in milliseconds) between each click.
     - **Warning**: If you set an interval below 100ms, a warning popup will alert you about the potential risk of being banned. You can choose to proceed or adjust the interval.

5. **Start the Auto Clicker**:
   - Click the **Start Auto Clicker** button to initiate auto-clicking based on your specified settings.
   - **Stop the Auto Clicker**: To stop auto-clicking, simply click the **Stop Clicker** button.

6. **Visit TikTok**:
   - For quick access, there are links within the extension popup to [TikTok](https://www.tiktok.com/) and [TikTok Live](https://www.tiktok.com/live).

## Troubleshooting

- **Error Messages**: If you see a warning message stating that the clicker could not start, it may mean the script was not available on the TikTok page. Refresh the page and try again.
- **Using Low Intervals**: Setting an interval under 100ms may lead to temporary bans from TikTok. Please use intervals above 100ms for safe usage.
- **Checking Content Script Load**: Open the Developer Console on the TikTok Live page and check for the message `"TikTok Auto Clicker content script loaded"`. This confirms that the content script is active on the page.

## Disclaimer

Use this extension responsibly and be mindful of TikTok’s terms of service. Excessive auto-clicking or using extremely fast intervals may lead to account restrictions.

---

Enjoy the TikTok Live Auto Clicker! 🎉
