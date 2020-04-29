module.exports = {
    databaseConfig: {
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        host: process.env.RDS_HOSTNAME,
        port: 5432,
        database: 'ebdb'
    }
}