console.log('hello from content.ts')
import browser from 'webextension-polyfill'

function injectScript(filePath: string): void {
  var script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', filePath)
  document.documentElement.appendChild(script)
}
injectScript(browser.runtime.getURL('inject.js'))
