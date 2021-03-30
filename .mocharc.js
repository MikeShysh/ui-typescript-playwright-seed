module.exports = {
    require: [
        'ts-node/register',
        'config.ts'
    ],
    spec: 'tests/**/*.ts',
    timeout: 60000
}