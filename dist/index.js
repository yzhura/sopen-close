function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

___$insertStyle(".open-close .opener {\n  cursor: pointer;\n}\n.open-close .opener.open .content {\n  font-size: 16px;\n}\n.open-close .opener.close .content {\n  font-size: 0;\n}\n.open-close .content {\n  transition: 0.2s ease-out all;\n}");

var OPEN_CLASS = 'open';
var CLOSE_CLASS = 'close';
var OPENER_CLASS = 'opener';
var SOpenClose = /** @class */ (function () {
    function SOpenClose(selector) {
        this.selector = selector;
        this.initOpenClose();
    }
    SOpenClose.prototype.initOpenClose = function () {
        var _this = this;
        var openClose = document.querySelector(this.selector);
        var openers = Array.from(openClose.querySelectorAll(".".concat(OPENER_CLASS)));
        openers.forEach(function (el) { return el.classList.add(CLOSE_CLASS); });
        openClose.addEventListener('click', function (event) {
            var target = event.target;
            var opener = target.closest(".".concat(OPENER_CLASS));
            if (opener) {
                if (opener.classList.contains(OPEN_CLASS)) {
                    _this.closeAll(openers);
                    return;
                }
                _this.closeAll(openers);
                _this.openCurrent(opener);
            }
        });
    };
    SOpenClose.prototype.closeAll = function (openers) {
        openers.forEach(function (el) { return el.classList.remove(OPEN_CLASS); });
        openers.forEach(function (el) { return el.classList.add(CLOSE_CLASS); });
    };
    SOpenClose.prototype.openCurrent = function (opener) {
        opener.classList.add(OPEN_CLASS);
        opener.classList.remove(CLOSE_CLASS);
    };
    return SOpenClose;
}());
window.SOpenClose = SOpenClose;
//# sourceMappingURL=index.js.map
