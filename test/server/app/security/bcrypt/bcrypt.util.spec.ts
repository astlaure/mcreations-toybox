import bcryptUtil from '../../../../../src/server/app/security/bcrypt/bcrypt.util';

describe('Bcrypt Util Test Suite', () => {
  it('should return a password hash', async () => {
    const password = 'my-password';
    const hash = await bcryptUtil.hash(password);

    expect(hash).toBeDefined();
  })

  it('should fail on empty password', async () => {
    try {
      const password = '';
      const hash = await bcryptUtil.hash(password);
    } catch (err) {
      expect(err).toBeDefined();
    }
  })
})
