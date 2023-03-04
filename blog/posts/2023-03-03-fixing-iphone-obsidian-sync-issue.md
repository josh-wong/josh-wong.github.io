---
date: 2023-03-03
authors: [josh-wong]
categories:
  - Troubleshooting
tags:
  - personal knowledge management
  - ios
  - obsidian
  - troubleshooting
---

# How to fix an issue with the Obsidian app not opening and syncing on your iPhone

I recently had issues with the Obsidian app not opening and syncing properly on my iPhone. To get my notes in iCloud to sync again, I needed to move my notes into a new folder and delete the problematic folder. After moving my notes, iCloud was then able to sync the new folder, and I was able to access my notes in the Obsidian app.

This post describes in detail how I was able to get iCloud to sync my notes properly again.

<!-- more -->

!!! note

    I've confirmed that Obsidian for iPad opens and syncs my notes as expected. Therefore, I don't think the Obsidian app is causing the issue. My iPhone is configured to install iOS beta builds, so that might be the issue.

## Troubleshooting methods

Since this issue only occurs on my iPhone, specifically in the Files app, let's starts there.

1. On your iPhone, Open the **Files** app.
2. Go to the folder that contains your Obsidian vaults.
3. If any of the folders in your vaults have a cloud icon with an arrow pointing down, long-press the folder and select **Download Now**. Depending on the folder size, downloading the files may take some time.
4. After the files have finished downloading (you can check the sync status if you scroll to the bottom of the Files app), open the **Obsidian** app.

**Were you able to open the Obsidian app on your iPhone and confirm that your notes are accessible?** Great! You're done!

**Did the troubleshooting steps above not work?** Let's proceed to the next set of troubleshooting steps.

1. On your computer, rename the problematic folder that has the cloud icon with an arrow pointing down. For example, if the original folder name was `test`, change the folder name to `test1`.
2. Create a new folder named `test`.
3. Copy the items from the problematic folder (`test1`) into the new folder (`test`).
4. Delete the problematic folder (`test1`).
5. On your iPhone, open the **Obsidian** app on your iPhone.

**Were you able to open the Obsidian app on your iPhone and confirm that your notes are accessible?** Great! You're done!

**Did the troubleshooting steps above not work?** Let's proceed to the next set of troubleshooting steps.

1. On your computer, go to the problematic folder. This problematic folder should be the one on your iPhone that has a cloud icon with an arrow pointing down in the Files app.
2. Copy your notes to a folder on your desktop, outside of iCloud. We are doing this to ensure we have a backup of our notes.
3. On your iPhone, delete the problematic folder that has the cloud icon with an arrow pointing down.
4. Open the **Obsidian** app. If the app opens as expected, check that the notes in the previously problematic folder are displayed.
5. After confirming that your notes are accessible again in the Obsidian app, delete the backup notes you saved to the folder on your computer desktop.

## Wrap-up

These are the steps I took to troubleshoot and resolve the issue with Obsidian not opening and syncing my notes on my iPhone. There may be a shortcut to my instructions above, but since I can no longer replicate the issue, I can't test another method.
