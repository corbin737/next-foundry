// Insert copyright
function insertCopyright() {
  $('.copyright').text(function (i, text) {
    return text.replace('%COPYRIGHT_YEAR%', (new Date).getFullYear())
  })
}

$(document).ready(insertCopyright)
