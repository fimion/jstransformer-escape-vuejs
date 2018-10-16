'use strict'

const escapeHtml = require('escape-html')

exports.name = 'escape-vuejs'
exports.outputFormat = 'html'

exports.render = function (str) {
  const result = escapeHtml(str)
  // const match = /[{}]/gm.exec(result)
  // if (!match) {
  //   return result
  // }
  let html = ''
  for (let index = 0; index < result.length; index++) {
    switch (result.charCodeAt(index)) {
      case 123: // {
      case 125: // }
        html += '&amp;#'+result.charCodeAt(index)+';'
        break
      default:
        html += result[index]
        break
    }
  }
  return html
}

