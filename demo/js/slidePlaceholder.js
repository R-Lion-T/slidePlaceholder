class slidePlaceholder {
    constructor(opt) {
        this._arrText = opt.arrText,
            this._pauseNextText = opt.pauseNextText || 0,
            this._pauseHideText = opt.pauseHideText || 0,
            this._pauseNextSymbol = opt.pauseNextSymbol || 200,
            this._pauseDeleteSymbol = opt.pauseDeleteSymbol || 200,
            this._arrlength = this._arrText.length,
            this._current = 0,
            this._step = 0,
            this._cursor = opt.cursor || false,
            this._input = document.querySelector(`.${opt.className}`),
            this._timer = null,
            this._index = 0,
            this._direction = true,
            this._play = true,
            this._repeat = this._arrlength * opt.repeat || "infinite",
            this._pauseFocus = 0 || opt.pauseFocus
        this._input.onfocus = this.stop;
        this._input.onblur = () => {
            setTimeout(() => {
                this._play = true;
            }, this._pauseFocus)
        }
    }
    nextSlide = text => {
        if (this._index < text.length) this._index += 1
        else {
            this._direction = false;
            if (this._pauseHideText) {
                clearInterval(this._timer)
                setTimeout(() => {
                    this.showText(this._arrText[this._current])
                }, this._pauseHideText)
            }
        }
    }
    prevSlide = text => {
        if (this._index > 0) this._index -= 1
        else {
            this._direction = true
            clearInterval(this._timer)

            if (this._current + 1 != this._arrlength) this._current += 1
            else this._current = 0
            setTimeout(() => {
                this.showText(this._arrText[this._current])
                this._step += 1
            }, this._pauseNextText)

        }
    }
    stop = () => {
        this._play = false
        this._index = 0
        this._direction = true
        this.render("")
    }
    showText(text) {
        this._timer = setInterval(() => {
            if (this._play) {
                let result = text.slice(0, this._index)
                this._cursor ? result += "|" : null
                this.render(result)
                if (this._step != this._repeat)
                    this._direction ? this.nextSlide(text) : this.prevSlide(text)
                else {
                    clearInterval(this._timer)
                    this.stop()
                }
            }
        }, this._direction ? this._pauseNextSymbol : this._pauseDeleteSymbol)
    }
    start() {
        this.showText(this._arrText[this._current])
    }
    render(text) {
        this._input.setAttribute("placeholder", text)
    }
}