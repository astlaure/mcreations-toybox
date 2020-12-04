import bcrypt from 'bcrypt';

const hash = async (password: string) => {
  return bcrypt.hash(password, 10);
}

const compare = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
}

const bcryptUtil = {
  hash,
  compare,
}

export default bcryptUtil;
