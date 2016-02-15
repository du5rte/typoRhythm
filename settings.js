function Settings() {

  this.name        = process.env.npm_package_name
  this.description = process.env.npm_package_description

  this.environment = process.env.NODE_ENV || 'development'
  this.production  = this.environment === 'production' ? true : false,
  this.development = this.environment === 'development' ? true : false

  this.paths = {
    root   : process.env.PWD,
    source : this.name,
    demo   : 'demo',
    tests  : 'tests',
    dist   : 'distribution'
  }

}

module.exports = new Settings
