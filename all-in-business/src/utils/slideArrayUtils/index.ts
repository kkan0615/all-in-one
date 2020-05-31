class SlideCreater {
  private arr !: Array<any>
  private length !: number
  private numberShowing !: number
  private currentIndex !: number
  private maxIndex !: number
  private maxIndexRemain !: number

  public constructor(arr: Array<any>, numberShowing: number | null) {
    if (arr.length < 1 || !arr) {
      throw new Error('Array is not existed')
    }
    this.arr = arr
    this.length = this.arr.length
    this.numberShowing = numberShowing || 3
    this.currentIndex = 0
    this.maxIndex = Math.floor(this.length / this.numberShowing)
    this.maxIndexRemain = this.length % this.numberShowing
  }

  public getFirstArray() : Array<any> {
    const result: Array<any> = []
    let loopCount = this.numberShowing

    if (this.currentIndex === this.maxIndex) {
      loopCount = this.maxIndexRemain
    }

    for (let i = 0; i < loopCount; i++) {
      const element = this.arr[i]
      result.push(element)
    }

    return result
  }

  public getNextArray() :Array<any> {
    const result: Array<any> = []
    let loopCount = this.numberShowing
    const nextIndex = this.currentIndex + 1

    if (nextIndex === this.maxIndex) {
      this.currentIndex = this.maxIndex
      loopCount = this.maxIndexRemain
    } else if (nextIndex > this.maxIndex) {
      this.currentIndex = 0
    } else {
      this.currentIndex++
    }

    /** Set the start index for loop under it */
    const startLoopIndex = this.currentIndex * this.numberShowing

    for (let i = startLoopIndex; i < loopCount + startLoopIndex; i++) {
      const element = this.arr[i]
      result.push(element)
    }

    return result
  }

  /** Prviouse index of array */
  public getPrevArray() :Array<any> {
    const result: Array<any> = []
    let loopCount = this.numberShowing
    const prevIndex = this.currentIndex - 1

    if (prevIndex === 0) {
      this.currentIndex = 0
    } else if (prevIndex < 0) {
      this.currentIndex = this.maxIndex
      loopCount = this.maxIndexRemain
    } else {
      this.currentIndex--
    }

    const startLoopIndex = this.currentIndex * this.numberShowing

    for (let i = startLoopIndex; i < loopCount + startLoopIndex; i++) {
      const element = this.arr[i]
      result.push(element)
    }

    return result
  }
}

export { SlideCreater }
