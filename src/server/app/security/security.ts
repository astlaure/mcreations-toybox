import passport from 'passport';
import User from './users/user.model';
import LocalStrategy from './strategies/local.strategy';

passport.use(LocalStrategy);

passport.serializeUser((user: User, done) => {
  return done(null, user.id);
})

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await User.findByPk(id);

    if (!user || !user.enabled) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

const security = passport;

export default security;
