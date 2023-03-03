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

Recently, I've had issues with the Obsidian app not opening and syncing properly on my iPhone. This post describes the steps I took to troubleshoot and resolve the issue and get Obsidian working on my iPhone again.

<!-- more -->

!!! note

    I've confirmed that Obsidian for iPad opens and syncs my notes as expected. Therefore, I don't think the Obsidian app is causing the issue. My iPhone is configured to install iOS beta builds, so that might be the issue.

## Troubleshooting methods

Since this issue only occurs on my iPhone, specifically in the Files app, let's starts there.

1. On your computer, go to the folder that contains your Obsidian vaults.
2. If any of the folders has a cloud icon with an arrow pointing down, long-press the folder and select **Download Now**. After a few minutes, the folder should download your notes.
3. Open the folder and repeat step 2 until all folders that have a cloud icon with an arrow pointing down have finished downloading.

**Were you able to open Obsidian on your iPhone and confirm that your notes are accessible?** Great! You're done!

**Did the troubleshooting steps above not work?** Let's proceed the next set of troubleshooting steps.

1. Rename the problematic folder that has the cloud icon with an arrow pointing down. For example, if the original folder name was `test`, change the folder name to `test1`.
2. Create a new folder named `test`.
3. Copy the items from the problematic folder (`test1`) into the new folder (`test`).
4. Rename the new folder to what the problematic folder was previously named. For example, in this case, change the new folder to `test`.
5. Open Obsidian on your iPhone.

**Were you able to open Obsidian on your iPhone and confirm that your notes are accessible?** Great! You're done!

**Did the troubleshooting steps above not work?** Let's proceed to the next set of troubleshooting steps.

1. On your computer, copy the contents to a local folder outside of iCloud. We are doing this to ensure we have a backup of our notes.
2. On your iPhone, delete the problematic folder that has the cloud icon with an arrow pointing down.
3. Open Obsidian on your iPhone. If the app opens as expected, check that the notes in the previously problematic folder are displayed.
4. After confirming that your notes are available again in Obsidian on your iPhone, you can delete the backup notes that you saved locally.

## Wrap-up

These are the steps I took to troubleshoot and resolve the issue with Obsidian not opening and syncing my notes on my iPhone. There may be a shortcut to my instructions above, but since I can no longer replicate the issue, I can't test another method.
