const index = require('../index.js').templateTags[0];
const env = './__tests__/.env.test';

test('return correct key value', () => {
    expect(index.run('', env, 'CHEESE')).toEqual("CAKE");
})
test('expands environment variables ', () => {
    var homedir = process.env.HOME
    expect(index.run('', env, 'HOMEDIR')).toEqual(homedir);
})
test('return correct key value when environment variables in env filepath', () => {
    process.env.CWD = process.cwd();
    const envWithVar = '%CWD%/__tests__/.env.test';
    expect(index.run('', envWithVar, 'CHEESE')).toEqual('CAKE');
})