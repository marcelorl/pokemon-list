module.exports = config => {
  const devtool = 'source-map'

  const nConfig = Object.assign({}, config, { devtool })

  return nConfig
}
