---
layout: post
title: Networking Issue After Updating WS2 On Windows
---

After updating from WSL1 to WSL2, I had an issue networking within WSL2. I couldn't ping any websites. I searched all over the internet and it took me me a while to find this answer. The main issue was with my Antivirus Software.  

If you have Symantec enabled on your computer, you need to change just one setting. Open Symantec Endpoint Protection, select change settings, under `Network and Host Exploit Mitigation`, click configure settings. In the pop-up menu, select Allow IP traffic."

**Done!**
