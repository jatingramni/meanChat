/* env file for node js app */

const env = {
    PORT : 3100,
    HOST: "127.0.0.1",
    DB: {
        HOST: 'localhost',
        USER: 'root',
        PASSWORD: 'root',
        DATABASE: 'nodeChat'
    }
}

module.exports = env;