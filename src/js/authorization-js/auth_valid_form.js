import { Notify } from 'notiflix/build/notiflix-notify-aio';

function validateEmail(input) {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  let isValid = re.test(String(input.value).toLowerCase());

  isValidF('Email not valid', isValid, input);
  return isValid;
}
function validatePassword(input) {
  const pass = input.value;
  let isValid = true;
  if (pass.length < 8 || pass.length > 16) isValid = false;

  isValidF('Password must have from 8 to 16 chars', isValid, input);

  return isValid;
}

function validateUserName(input) {
  const name = input.value;
  let isValid = true;

  if (name.length < 3 || name.length > 16) isValid = false;

  isValidF('Name must have from 8 to 16 chars', isValid, input);

  return isValid;
}

function isValidF(message, isValid, input = null) {
  if (!isValid) {
    if (input) input.classList.add('invalid');
    Notify.failure(message, {
      timeout: 2000,
    });
  } else {
    if (input) input.classList.remove('invalid');
  }
}

export { validateEmail, validatePassword, validateUserName, isValidF };
