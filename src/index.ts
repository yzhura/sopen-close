import './style/index.scss';

const OPEN_CLASS = 'open';
const CLOSE_CLASS = 'close';
const OPENER_CLASS = 'opener';

class SOpenClose {
    selector: string;

    constructor(selector: string) {
        this.selector = selector;
        this.initOpenClose();
    }

    private initOpenClose() {
        const openClose = document.querySelector(this.selector) as HTMLElement;
        const openers = Array.from(openClose.querySelectorAll(`.${OPENER_CLASS}`));
        openers.forEach((el) => el.classList.add(CLOSE_CLASS));
        openClose.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const opener = target.closest(`.${OPENER_CLASS}`);
            if (opener) {
                if(opener.classList.contains(OPEN_CLASS)) {
                    this.closeAll(openers);
                    return;
                }
                this.closeAll(openers);
                this.openCurrent(opener);
            }
        })
    };

    private closeAll(openers: Element[]) {
        openers.forEach((el) => el.classList.remove(OPEN_CLASS));
        openers.forEach((el) => el.classList.add(CLOSE_CLASS));
    }

    private openCurrent(opener: Element) {
        opener.classList.add(OPEN_CLASS);
        opener.classList.remove(CLOSE_CLASS);
    }
}

window.SOpenClose = SOpenClose;