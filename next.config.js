const isProduction = process.env.ENVIRONMENT === 'production'

console.log(`Environment: ${process.env.ENVIRONMENT}`) // eslint-disable-line

let basePath
if (isProduction) {
  basePath = '/d3-projects'
  console.log(`Production environment detected, serving the app on ${basePath}`) // eslint-disable-line
} else {
  basePath = ''
}

module.exports = {
  basePath,
}
