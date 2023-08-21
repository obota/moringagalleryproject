var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://dennisobota:nDmbsHwf8DmxzCQ5@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://dennisobota:nDmbsHwf8DmxzCQ5@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://dennisobota:nDmbsHwf8DmxzCQ5@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
