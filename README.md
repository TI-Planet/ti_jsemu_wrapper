# ti_jsemu_wrapper (v2)
A web-based wrapper for TI's JavaScript z80/eZ80 emulators present in their TI-SmartView CE software, which are:
* TI-82 Advanced / TI-83 Plus.fr / TI-84 Plus (SE)
* TI-84 Plus C Silver Edition
* TI-84 Plus CE / TI-83 Premium CE.  

---

### This repository contains absolutely no code or resources from TI.  
For this project to work, you have to use the appropriate emulator file from TI SmartView - This project is completely pointless if you don't have it installed already!  
*I shall remind everyone that you are solely responsible for the usage of this project, and you're obviously still subject to the SmartView license.*

---

## Features and limitations
What it DOES have/do | What it DOES NOT have/do
------------ | -------------
✓ Keypress history <br> ✓ Big hand pointer <br> ✓ Screen zooming <br> ✓ Screenshot (PNG) <br> ✓ Video capture (WebM) | ✗ File transfers <br> ✗ Debugging support <br> ✗ Skin switching <br> ✗ State saving/loading <br> ✗ "View<sup>3</sup>" support

Note: currently, the wrapper is especially optimized for the CE calculator models - the other ones should work, but may have unexpected screen dimensions.

## Why?
The point of this is to be able to enjoy a good emulation speed from TI's emu by running it within a web browser rather than within the SmartView, since Java has a suboptimal JS interpreter in its webview.  
This is especially useful while there is no community-made 84+CE/83PCE emulators, for developers wanting to easily record the screen, for instance, either with the integrated feature, or by recording their computer running the emu at a decent speed.

## How to use it:
You can actually simply use the [online demo](https://ti-planet.github.io/ti_jsemu_wrapper/demo/), or follow these simple steps if you want it locally:
* [Download](https://github.com/TI-Planet/ti_jsemu_wrapper/archive/master.zip) this project
* Open the `index.html` file from the zip you've just downloaded, with a recent decent browser
* Select or drag&drop the TI SmartView CE emulator file (_the .jar_) you want to use (_located in the SmartView app folder and within `Java` (or `app`) > `emulators`_)

That's all :) No extracting/digging/moving/copying needed!  
_Note that because the wrapper works by assuming specific files are there, it may suddenly not work anymore on newer versions of the SmartView if they have emulator jar files organized differently._

## FAQ
#### I have weird display glitches on Chrome when I do a screenshot - what's hapenning?
That's a known issue, and it's apparently a bug in the way Chrome refreshes the canvas with 2D Hardware acceleration. You can disable that in `chrome://flags/#disable-accelerated-2d-canvas` (yes that's a URL).  
Or just make the calculator OS force-refresh the whole screen.

#### It won't load in Internet Explorer...?
Hey, I did say "recent decent browser" :P. Anyway, it seems to actually work if you just change its user agent from the console, to Chrome for example.

#### How would I go from one emualtor to another?
Well, you'd just have to reload the page and select the other one.

## Screenshot:
If you use the wrapper with the _TI-84 Plus CE_ emulator, you will see something like:  
[![With the TI-84 Plus CE emulator](https://i.imgur.com/DQdDg14.png)](https://i.imgur.com/iR7tgSB.png)


## Changes over v1:
* You do _not_ have to extract TI's jar file anymore and move/copy files around, just drag&drop the one .jar file and that's all!
* Minor improvements to the CSS
* Bugfixes related to event handling in general
* Better compatiblity with Firefox and Safari
* Some code cleanup

## Misc.

This project is under the _LGPL3_ license. See [LICENSE](LICENSE) file for the details.

---
The video recording feature is made possible (on Chrome, at least) with [WebRTC](https://www.webrtc-experiment.com).  
License (MIT):  
```THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.```
