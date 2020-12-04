import passport from 'passport';
import User from './users/user.model';

passport.serializeUser((user: User, done) => {
  return done(null, user.id);
})

passport.deserializeUser((id: number, done) => {

})

export default passport;
