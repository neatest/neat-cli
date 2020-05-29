const fs = require('fs')

// Get arguments
var args = process.argv.slice(2)

// pre-run
if (args[0] == 'pre-run') {
  // Save old readme because oclif absolutely wants to add a Readme that we do not want
  if (fs.existsSync('README.md'))
    fs.renameSync('README.md', '_README.md.backup')
}

// pre-download
else if (args[0] == 'pre-download') {
  // Restore old readme
  if (fs.existsSync('_README.md.backup')) {
    if (fs.existsSync('README.md')) fs.unlinkSync('README.md')
    fs.renameSync('_README.md.backup', 'README.md')
  }

  // Change package.json with correct npm package
  const pkgName = process.env['NEAT_ASK_NPM_NAME']
  if (pkgName && fs.existsSync('package.json')) {
    pkgFile = JSON.parse(fs.readFileSync('package.json'))
    pkgFile.name = pkgName
    fs.writeFileSync('package.json', JSON.stringify(pkgFile))
  }
}
