export class TypoRhythm {

  constructor(fontsize, base, unit) {
    this.fontsize = fontsize || 16
    this.base = base || 24
    this.unit = unit || 'em'
  }

  fontSize(size, unit=this.unit) {
    return size / this.fontsize + unit
  }

  lineHeight(size, base=this.base) {
    return base / size
  }

  baseContext(size, multipler=0) {
    return multipler * (this.base / size) + this.unit
  }

  lineHeightContext(size) {
    let remaining = size % this.base
    let biggerBase = this.base + (size - remaining)
    return (remaining > 0) ? this.lineHeight(size, biggerBase) : 1
  }

  render({size, padding, margin, lineHeight, unit} = {}) {
    return {
      fontSize: this.fontSize(size, unit),
      padding: padding ?  this.baseContext(size, padding) : null,
      marginBottom: margin ?  this.baseContext(size, margin) : null,
      lineHeight: lineHeight ? lineHeight * lineHeight(size) : this.lineHeightContext(size)
    }
  }

}

export var typoRhythm = new TypoRhythm

export default function(args) {
  return (new TypoRhythm).render(args)
}
