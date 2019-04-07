/* get input from query string */
function findParameters (parameter) {
  // cut out the question mark at the beginning of the query string
  var queryString = window.location.search.substring(1)

  var variables = queryString.split('&')

  var pair = []

  for (var i = 0; i < variables.length; i++) {
    pair = variables[i].split('=')
    if (pair[0] === parameter) {
      return pair[1]
    }
  }

  return false
}

function countLetters () { // eslint-disable-line no-unused-vars
  var textIn = ''

  var charCount = {}

  var textInLength = 0

  // get input from query string
  textIn = findParameters('data') || ''
  document.getElementById('inputbox').innerHTML = textIn
  textIn = textIn.replace(/\+/g, '')

  if (window.location.href.indexOf('caps=1') === -1) {
    textIn = textIn.toLowerCase()
  } else {
    document.getElementById('caps-checkbox').checked = true
  }

  textIn = decodeURIComponent(textIn)
  textInLength = textIn.length

  for (var i = 0; i < textInLength; i++) {
    charCount[textIn.charAt(i)] = 0
  }

  for (var i = 0; i < textInLength; i++) { // eslint-disable-line no-redeclare
    charCount[textIn.charAt(i)] += 1
  }

  textIn = ''

  for (var eachProperty in charCount) {
    textIn +=
      eachProperty +
      "<span class='multiplier'>(" +
      charCount[eachProperty] +
      'x)</span><br>'
  }

  document.getElementById('results').innerHTML += textIn
}
