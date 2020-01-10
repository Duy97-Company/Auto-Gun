const normalizePath = require('./normalize-path');

describe('Should render Login Page', () => {
  beforeEach(async () => {

  }, 30000);

  it('run the command', async () => {
    const path = 'C:/abc';
    const normalizedPath = normalizePath(path);
    expect(normalizedPath).toBe('C:/abc\\');
  }, 30000);
});
