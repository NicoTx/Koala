function getDateTime() {
  const date = new Date()
  const hour = date.getHours()
  const min  = date.getMinutes()
  const sec  = date.getSeconds()

  return `${hour} h: ${min} min: ${sec} sec`
}

module.exports = {
  getDateTime
}