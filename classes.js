function Face(x, y)
{
  this.x = x * scale
  this.y = y * scale
  this.img = null
}

Face.prototype.spawn = function (i)
{
  const nonexistentPerson = new Image(imageSize, imageSize)
  nonexistentPerson.src = `https://thispersondoesnotexist.com/?${i}`
  this.img = nonexistentPerson

  nonexistentPerson.addEventListener('load', () => {
    console.log(`nonexistent person ${i} loaded`)
    this.draw()
  })
}

Face.prototype.draw = function ()
{
  if (this.img === null) return

  const xPos = this.x - (this.img.width / 2)
  const yPos = this.y - (this.img.height / 2)

  this.ctx.drawImage(this.img, xPos, yPos, this.img.width, this.img.height)
  this.ctx.drawImage(this.fg, 0, 0, this.fg.width, this.fg.height)
}

