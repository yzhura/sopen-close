import './style/index.scss';

class SOpenClose {
    selector: string;
    private OPEN_CLASS: string = 'OPEN';
    private CLOSE_CLASS: string = 'close';
    private OPENER_CLASS: string = 'opener';

    constructor(selector: string) {
        this.selector = selector;
        this.initOpenClose();
    }

    private initOpenClose() {
        const openClose = document.querySelector(this.selector) as HTMLElement;
        const openers = Array.from(openClose.querySelectorAll(`.${this.OPENER_CLASS}`));
        openers.forEach((el) => el.classList.add(this.CLOSE_CLASS));
        openClose.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const opener = target.closest(`.${this.OPENER_CLASS}`);
            if (opener) {
                if(opener.classList.contains(this.OPEN_CLASS)) {
                    this.closeAll(openers);
                    return;
                }
                this.closeAll(openers);
                this.openCurrent(opener);
            }
        })
    };

    private closeAll(openers: Element[]) {
        openers.forEach((el) => el.classList.remove(this.OPEN_CLASS));
        openers.forEach((el) => el.classList.add(this.CLOSE_CLASS));
    }

    private openCurrent(opener: Element) {
        opener.classList.add(this.OPEN_CLASS);
        opener.classList.remove(this.CLOSE_CLASS);
    }
}

window.SOpenClose = SOpenClose;