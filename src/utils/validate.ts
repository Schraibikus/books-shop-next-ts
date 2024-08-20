const validate = (email: string, password: string): boolean => {
  if (password.length < 6) {
    return false;
  }
  return true;
};

export { validate };
