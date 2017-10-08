/* global outdatedBrowser */
import domready from 'domready'

domready(() => {
  outdatedBrowser({
    bgColor: '#f25648',
    color: '#fff',
    lowerThan: 'transform',
    languagePath: 'lang/outdated_browser/en.html'
  })

  $('#logo').downloadTip({
    'position': 'right'
  })
})
