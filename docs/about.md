# Youtube-dl Firefox Addon
??? "Coucou toi :heart:"
    [clique ici si tu peux :slight_smile:](#){ .md-button .unclickable }

??? tip "Check juste au dessus Diane"
    Et un tit chat hop :cat: - winter


 Firefox extension to download videos/audio from Youtube and others video websites using [youtube-dl](https://github.com/rg3/youtube-dl)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
---
 * [Description](#Description)
 * [Prerequisites](#prerequisites)
 * [Installation](#Installation)
 * [How to use this addon](#how-to-use-this-addon)
 * [Command line version](#Command-line-version)
 * [Contributing](#Contributing)
 * [Troubleshooting](#Troubleshooting)
 * [License](#license)

## Description
---
This is a firefox addon helping you downloads youtube videos or audio using [youtube-dl](https://github.com/rg3/youtube-dl).
Simply use the addon while browsing youtube to download the audio or video.

You can configure youtube-dl to download only audio, or convert into any desired format (mp3,wav,...) using FFMPEG, or download full video in any available quality. You can even download full Youtube playlists !

The addon only display most commun formats : m4a (Native audio format for YT), mp3 (standard audio format) and mp4 (native video format for YT)

---
**NOTE**

It works with almost all markdown flavours (the below blank line matters).

---

## Prerequisites
---
1. Needs [Mozilla Firefox](https://www.mozilla.org/fr/firefox/new/) installed.
2. Needs [Python](https://www.python.org/downloads/windows/) installed. **Don't forget to check "ADD Python to Path"** and to "Disable PATH length limit"
3. This has only been tested on Windows. Mac & Linux users might have to make some changes



## Installation
---
1. Clone/Download this repository
2. Run the setup_win.bat file as ADMIN to install youtube-dl and necessary dependancies 
3. Install the add on from [Firefox Addons Website](https://addons.mozilla.org/fr/firefox/addon/yt-dl-addon-for-windows/).
4. Restart firefox and it should work 

## How to use this addon
---
1. Go to any youtube page
2. Press the addon's logo in the toolbar, then select the format you want (m4a, mp3, mp4)
3. The video/audio will be downloaded in the background
4. After the download is finished, you will get a notification saying the download has finished. 
Note: The default download location is the "Download" folder. If you want to change that, check youtube-dl's [configuration](https://github.com/ytdl-org/youtube-dl#configuration)

## Command line version
---
If you want to use youtube-dl from command line you need to add FFMPEG to system environnement variables.

1. Go to "control Panel" > "System and Security" > "System"
2. Go to "Advanced System Settings"
3. Go to "Environement Variables"
4. Now find "PATH" in the "System Variables" section and click "edit"
5. Click "New" and write "C:\youtube_dl\FFMPEG\bin"
6. Re-open your command prompt to commit changes

## Contributing
---
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Troubleshooting
---
If you experience youtube-dl errors message, it is highly possible that Youtube changed something making the program not working anymore. However, a fix is usually found within 24h so you just have to upgrade your youtube-dl version by using this command in a windows shell :
```shell 
pip install --upgrade youtube-dl
```
## License
---
This program is Youtube Dl Firefox Addon.

Copyright (C) 2020  Thibaut Decombe. 

Youtube Dl Firefox Addon is available under the MIT license. See the LICENSE file for more info.
