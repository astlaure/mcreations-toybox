import { Strategy } from 'passport-local';
import User from '../users/user.model';
import bcryptUtil from '../bcrypt/bcrypt.util';

const LocalStrategy = new Strategy({
  session: true,
}, async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return done(null, false);
    }

    const matchingPasswords = await bcryptUtil.compare(password, user.password);

    if (!matchingPasswords) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default LocalStrategy;
