function Face(x, y)
{
  this.x = x * scale
  this.y = y * scale
  this.img = null
  this.clicker = null
}

Face.prototype = {
  getClicker: function ()
  {
    if (this.clicker !== null) return this.clicker

    this.clicker = $('<div></div>')
      .addClass('clicker')
      .width(imageSize)
      .height(imageSize)
      .offset({
        left: canvasPos.left + this.x - imageSize * scale * 0.5,
        top: canvasPos.top + this.y - imageSize * scale * 0.5,
      })

    $('.column').append(this.clicker)

    return this.clicker
  },

  spawn: function ()
  {
    let i = faceCount++
    const nonexistentPerson = new Image(imageSize, imageSize)
    nonexistentPerson.src = `https://thispersondoesnotexist.com/image?${i}`
    this.img = nonexistentPerson

    this.spin()

    nonexistentPerson.addEventListener('load', () =>
    {
      console.log(`nonexistent person ${i} loaded`)
      this.draw()
      this.clickable()
    })
  },

  draw: function ()
  {
    if (this.img === null) return

    const xPos = this.x - (this.img.width / 2)
    const yPos = this.y - (this.img.height / 2)

    ctx.drawImage(this.img, xPos, yPos, this.img.width, this.img.height)
    ctx.drawImage(foreground, 0, 0, foreground.width, foreground.height)

    this.clickable()
  },

  clickable: function ()
  {
    this.getClicker()
      .removeClass('spinner')
      .click(() => {this.spawn()})
  },

  spin: function ()
  {
    this.getClicker()
      .addClass('spinner')
      .off('click')
  }
}
