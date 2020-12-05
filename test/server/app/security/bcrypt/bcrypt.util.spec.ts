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
      await bcryptUtil.hash(password);
      fail('supposed to catch');
    } catch (err) {
      expect(err).toBeDefined();
    }
  })

  it('should return true on matching passwords', async () => {
    const password = 'my-password';
    const hash = await bcryptUtil.hash(password);

    const isMatching = await bcryptUtil.compare(password, hash);

    expect(isMatching).toBeTruthy();
  })

  it('should fail on different passwords', async () => {
    const password = 'my-password';
    const hash = await bcryptUtil.hash(password);

    const isMatching = await bcryptUtil.compare('password', hash);

    expect(isMatching).toBeFalsy();
  })
})
