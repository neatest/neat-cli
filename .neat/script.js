const fs = require('fs')

// Change package.json with correct npm package
const pkgName = process.env['NEAT_ASK_NPM_NAME']
if (pkgName && fs.existsSync('package.json')) {
  pkgFile = JSON.parse(fs.readFileSync('package.json'))
  pkgFile.name = pkgName
  fs.writeFileSync('package.json', JSON.stringify(pkgFile))
}

// Remove this script
if (fs.existsSync('.neat/script.js')) fs.unlinkSync('.neat/script.js')
if (fs.existsSync('.neat')) fs.rmdirSync('.neat')
