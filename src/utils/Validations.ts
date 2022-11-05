const isValidEmail = (email: string): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const isValidPassword = (expression: string): boolean => {
  return expression.length >= 8;
};

const isSamePassword = (expression: string, expressionTwo: string): boolean => {
  if (expression === expressionTwo) {
    return true;
  }
  return false;
};

const isEmpty = (expression: string | undefined | null): boolean =>
  expression === null ||
  expression === undefined ||
  expression.trim().length === 0;

const isNotUndefinedAndEmpty = (expression: string): boolean =>
  expression !== undefined;

const isNotUndefined = (expression: string): string => {
  if (expression === undefined) {
    return '';
  } else {
    return expression;
  }
};

const validateNewPassword = (password1: string, password2: string): string => {
  if (password1 !== password2) {
    return 'The two password fields did not match';
  }

  if (!isValidPassword(password1)) {
    return 'The password is too short. It must contain at least 12 characters';
  }

  return '';
};

export {
  isEmpty,
  isValidEmail,
  isSamePassword,
  isNotUndefined,
  isValidPassword,
  validateNewPassword,
  isNotUndefinedAndEmpty,
};
