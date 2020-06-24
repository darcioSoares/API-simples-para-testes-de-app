const server = require('./config/server')
require('./config/databases')

require('./config/routes')(server)