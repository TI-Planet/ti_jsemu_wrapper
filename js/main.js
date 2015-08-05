/*
    This file is part of 'ti_jsemu_wrapper' - see https://github.com/TI-Planet/ti_jsemu_wrapper
    LGPL3-licensed
*/

var destCanvasCtx = null;
var srcCanvas = null;
var histoList = null;
var calc = null;
var hand = null;
var zoomDiv = null;
var histoListMaxEls = 8;
var hasHand = false;
var hasZoomedDisplay = true;
var isChrome = false;
var keyHistoryArray = [];

function initWithSVG(svgStr) {
    init_wrapper();
    svgVar = svgStr;
    theCalc = new TI84ForSmartView();
    theCalc.initSVG();
    document.getElementById("svg").style.background = document.querySelectorAll("#Background_Color rect")[0].getAttribute("fill") || "#000";
    theCalc.boot();
    refreshCanvas();
    bindEvents();
}

function init_wrapper() {
    zoomDiv = document.getElementById("zoom");
    destCanvasCtx = document.getElementById("zoomeddisplay").getContext('2d');
    srcCanvas = document.getElementById("display");
    destCanvasCtx.scale(1.4, 1.4);
    histoList = document.getElementById("list");
    calc = document.getElementById("calculatorDiv");
    hand = document.getElementById("hand");
    isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    document.getElementById('start').disabled = !isChrome;
    document.getElementById('start').title = isChrome ? 'Will create a webm video' : 'Feature only available on Chrome (needs WebP)!';
}

function bindEvents() {
    var svgKeys = document.querySelectorAll("#svg g[id^='KEY']");
    for (var i = 0; i < svgKeys.length; ++i) {
        svgKeys[i].addEventListener("click", function () {
            if (theCalc) {
                var emu_hist = theCalc.getKeyHistory();
                if (emu_hist.length && keyHistoryArray != emu_hist) {
                    keyHistoryArray = emu_hist.slice();
                    addKeyToHistory(keyHistoryArray[keyHistoryArray.length - 1]);
                }
            }
        }, false);
    }

    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) {
            theCalc && theCalc.clearHighlightedKey();
        }
    });

    zoomDiv.onmouseenter = calc.onmouseenter = function() { hasHand && (hand.style.visibility = "visible"); };
    zoomDiv.onmouseleave = calc.onmouseleave = function() { hasHand && (hand.style.visibility = "hidden"); };
    zoomDiv.onmousemove = calc.onmousemove = function(e) { hasHand && moveHand((e || event).clientX, (e || event).clientY); };

    document.getElementById("resetEmu").onclick = function() { theCalc && theCalc.resetSVEmulator(); clearHisto(); };
    document.getElementById("clearActiveKey").onclick = function() { theCalc && theCalc.clearHighlightedKey(); };

    document.getElementById("screenshot").onclick = function() { downloadScreenshot('display', 'screenshot_83PCE.png'); };

    document.getElementById("histo").onclick = clearHisto;

    document.getElementById("toggleHisto").onclick = function() { toggleVisibility('histo'); };
    document.getElementById("toggleZoom").onclick = function() { toggleVisibility('zoom'); hasZoomedDisplay = !hasZoomedDisplay; };
    document.getElementById("toggleHand").onclick = function() {
        hand.style.visibility = hasHand ? "hidden" : "visible";
        hasHand = !hasHand;
        Array.prototype.forEach.call(document.querySelectorAll('#display, #calcTop, #zoom, #svg'), function(el) {
            el.style.cursor = hasHand ? "none" : "default";
        });
    };

    document.getElementById("leftToolbar").style.visibility = "visible";
    document.getElementById("rightToolbar").style.visibility = "visible";
}

function refreshCanvas() {
    if (hasZoomedDisplay) {
        destCanvasCtx.drawImage(srcCanvas, 0, 0);
    }
    setTimeout(refreshCanvas, 100);
}

function downloadScreenshot(canvas, filename) {
    var lnk = document.createElement('a'), e;
    lnk.download = filename;
    lnk.href = document.getElementById(canvas).toDataURL();
    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}

function moveHand(x, y) {
    if (calc) {
        var rect = calc.getBoundingClientRect();
        x = x - rect.left;
        y = y - rect.top;
    }
    x = x - 20;
    y = y - 5;
    if (hand) {
        hand.style.left = x + "px";
        hand.style.top = y + "px";
    }
}

function clearHisto() {
    histoList.innerHTML = "";
}

function addKeyToHistory(name) {
    var li = document.createElement("li");
    var oImg = document.createElement("img");
    oImg.setAttribute('src', buttonImages[name] );
    oImg.style.width = oImg.style.height = "72px";
    li.appendChild(oImg);
    if (histoList.childNodes.length)
        histoList.insertBefore(li, histoList.firstChild);
    else
        histoList.appendChild(li);
    if (histoList.childNodes.length > histoListMaxEls) {
        histoList.removeChild(histoList.lastChild);
    }
}

function toggleVisibility(id) {
    var e = document.getElementById(id);
    e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
