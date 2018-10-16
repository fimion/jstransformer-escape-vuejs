'use strict'

const escapeHtml = require('escape-html')

exports.name = 'escape-vuejs'
exports.outputFormat = 'html'

exports.render = function (str) {
  let result = escapeHtml(str),
      match = /[{}]/gm.exec(result);
  if(!match){
    return result;
  }
  let escape,
    html = '',
    index = 0,
    lastIndex = 0;

  for(index=match.index; index < result.length; index++){
    switch(result.charCodeAt(index)){
      case 123: // {
        escape = '&#123;';
        break;
      case 125: // }
        escape = '&#125;';
        break;
      default:
        continue;
    }
    if(lastIndex !== index){
      html += result.substring(lastIndex, index);
    }
    lastIndex = index + 1
    html += escape;
  }
  return lastIndex !== index
    ? html + result.substring(lastIndex, index)
    : html;
}
