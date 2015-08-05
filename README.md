# ti_jsemu_wrapper (v2)
A wrapper for TI's JavaScript-based z80/eZ80 emulators present in their TI-SmartView CE software.  

---

### This repository contains abolutely no code or resources from TI.  
For this project to work, you have to use the appropriate emulator file from TI SmartView - This project is completely pointless if you don't have it installed already!  
*I shall remind everyone that you are solely responsible for the usage of this project, and you're obviously still subject to the SmartView license.*

---

## Description:

The point of this is to be able to enjoy a good emulation speed from TI's emu by running it from within a web browser rather than from within SmartView, since Java has a suboptimal JS interpreter in its webview...  
This is especially useful while there is no community-made 84+CE/83PCE emulators, for developers wanting to easly record the screen, for instance, either with the integrated feature, or by recording their computer running the emu at a decent speed.

List of supported emulators:
* TI-82 Advanced / TI-83 Plus.fr / TI-84 Plus (SE)
* TI-84 Plus C Silver Edition
* TI-84 Plus CE / TI-83 Premium CE

In theory, any "TI ExamCalc" (that's the official name) JavaScript emulator may work - but only those from the list above have been tested.

#### How to use it:
* [Download](https://github.com/TI-Planet/ti_jsemu_wrapper/archive/master.zip) this project
* Open the `index.html` file from the zip you've just downloaded, with a recent decent browser
* Select or drag&drop the TI SmartView CE emulator file (_the .jar_) you want to use (_located in the SmartView app folder and within the `Java` (or `app`) > `emulators` directory_)
* That's all :) You don't need to do any extracting/moving/copying!

#### What's in it right now:
* Keypress history
* Big hand pointer ("handy" for presentation purposes)
* Screen zooming
* Screenshot (.png export, auto-download)
* Video capture (webm creation, thanks to WebRTC, currently only working on Chrome)

#### What's _not_ in it right now:
_(and I don't really plan to work on that)_
* File transfers
* Debugging support
* Skin switching
* State saving/loading
* ...

#### Screenshot:
If you use the wrapper with the _TI-84 Plus CE_ emulator, you will see something like:  
[![With the TI-84 Plus CE emulator](https://i.imgur.com/DQdDg14.png)](https://i.imgur.com/iR7tgSB.png)


#### Changes over v1:
* You do _not_ have to extract TI's jar file anymore and move/copy files around, just drag&drop the one .jar file and that's all!
* Minor improvements to the CSS
* Bugfixes related to event handling in general
* Better compatiblity with Firefox and Safari
* Some code cleanup

---

This project is under the _LGPL3_ license. See [LICENSE](LICENSE) file for the details.

---
The video recording feature is made possible (on Chrome, at least) with [WebRTC](https://www.webrtc-experiment.com).  
License (MIT):  
```THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.```
