const fs = require('fs')
const path = require('path')
const packageJson = require('../package.json')
const { description } = packageJson

const protos = fs.readdirSync('./src').filter(
  item => item.indexOf('proto-') > -1
)
protos.reverse()

const linksList = protos.map((item) => {
  const title = item.replace(/proto-/gi, '')
  let txt = ''
  const infoPath = path.join(__dirname, '../src', item, 'info.txt')

  if (fs.existsSync(infoPath)) {
    // Inject info for the current prototype folder
    let info = fs.readFileSync(infoPath)
    info = String(info).replace(/\n/gi, '<br />')
    txt += `<div class="info">${info}</div>`
  }

  return `<li><a href="${item}.html" title="click to view - ${title}"><div class="title">${title}</div>${txt}</a></li>`
})

const tplPath = path.join(__dirname, './index-template.html')
const tpl = fs.readFileSync(tplPath, {
  encoding: 'utf8', flag: 'r'
})

let str = tpl.replace(/\{description\}/gi, description)
str = str.replace(/\{linksList\}/gi, linksList.join(''))

if (!fs.existsSync('./docs')) {
  fs.mkdirSync('./docs')
  console.log('Created ./docs folder')
}

fs.writeFile('docs/index.html', str, 'utf-8', (e) => {
  if (e) {
    console.log('error', e)
    return
  }
  console.log('docs/index.html file created')
})
