let handler = function (m) {
  this.sendContact(m.chat, '5548991635455', 'joao' m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
