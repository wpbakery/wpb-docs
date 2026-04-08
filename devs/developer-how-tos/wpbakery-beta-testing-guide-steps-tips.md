---
id: wpbakery-beta-testing-guide-steps-tips
title: "WPBakery beta testing guide: steps & tips"
sidebar_label: "WPBakery beta testing guide: steps & tips"
sidebar_position: 5
hide_table_of_contents: true
slug: /developers-how-tos/wpbakery-beta-testing-guide-steps-tips
---

# WPBakery beta testing guide: steps & tips

Since 8.2
WPBakery now allows you to beta-test new features before they are officially released.

By participating in it, you can provide feedback and help shape future updates.

Important: Beta versions should only be tested on staging or development environments and never on live/production sites.

## How to Get Beta Updates

There are two ways to access the beta release:

### 1) Enable Automatic Updates

To receive beta updates automatically:

- Go to WordPress Dashboard – WPBakery Page Builder – General Settings.
- Enable Beta Version to receive notifications when a new beta version is available.

Note: The beta version will install automatically if automatic updates are enabled.

### 2) Download Manually

If you prefer to install beta versions manually:

- Log in to the Customer Center.
- Navigate to the Beta section.
- Download the latest beta version.

## How to Test WPBakery Beta Versions

Testing a beta version effectively helps ensure a smooth experience before its official release.

Below are key steps and best practices to follow when testing WPBakery.

### 1. Review the Changelog

- Locate the changelog.txt file inside the WPBakery plugin folder.
- The first entry in the file lists all new features, updates, and fixes included in the beta release.
- Compare this with your testing results to ensure that updates work as expected.

### 2. Clear Your Browser Cache

Always perform a hard reload to avoid cached assets interfering with your tests:

- Mac: Press Cmd + Shift + R
- Windows: Press Ctrl + Shift + R

If issues persist, try testing in an incognito/private browser window.

Consider testing in multiple browsers (Chrome, Firefox, Edge, Safari) to identify browser-specific issues

### 3. Prepare Test Content

Create test blog posts with:

- Title
- Text content
- Featured image

This helps in testing Post Grid and other post-related elements.

For image-related testing, upload images of various dimensions to the Media Library.

To automate post creation, use a plugin like FakerPress.

### 4. Test Page Builder Functionality

- Test all WPBakery elements, especially newly introduced ones.
- Drag, drop, and rearrange elements to ensure smooth interaction.
- Check frontend and backend editors for any inconsistencies.
- Check if existing custom CSS and JS is working properly.

### 5. Check for Console and PHP Errors

- Open Developer Tools in your browser (F12 or Right Click – Inspect).
- Check the Console tab for JavaScript errors that might indicate issues.
- Switch to the Network tab to look for failed requests (marked in red).
- Enable the WordPress debug log and check for errors.

### 6. Test Responsiveness

- Resize your browser window to check how elements adapt to different screen sizes.
- Test on actual mobile devices if possible, or use browser developer tool.
- Check different column layouts and ensure they stack correctly on smaller screens.

## Submitting Feedback

After testing the latest beta version, we welcome you to submit your feedback by opening a ticket via the Customer Center.

To do so, use the category Others > I found a bug in the beta release.

In case you don't have access to our ticketing system, you can renew support tenure.
