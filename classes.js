function Face(x, y)
{
  this.x = x * scale
  this.y = y * scale
  this.img = null
}

Face.prototype = {
  spawn: function (i)
  {
    const nonexistentPerson = new Image(imageSize, imageSize)
    nonexistentPerson.src = `https://thispersondoesnotexist.com/?${i}`
    this.img = nonexistentPerson

    nonexistentPerson.addEventListener('load', () =>
    {
      console.log(`nonexistent person ${i} loaded`)
      this.draw()
    })
  },

  draw: function ()
  {
    if (this.img === null) return

    const xPos = this.x - (this.img.width / 2)
    const yPos = this.y - (this.img.height / 2)

    ctx.drawImage(this.img, xPos, yPos, this.img.width, this.img.height)
    ctx.drawImage(foreground, 0, 0, foreground.width, foreground.height)
  }
}
