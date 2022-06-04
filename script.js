const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

const emailIcon = document.querySelector('.email-icon');
const passwordIcon = document.querySelector('.password-icon');

const emailIconFocus = document.createElement('img');
emailIconFocus.src = './images/mail-focus.svg';

const passwordIconFocus = document.createElement('img');
passwordIconFocus.src = './images/lock-focus.svg';
passwordIconFocus.className = 'password-icon';

inputEmail.addEventListener('focus', () => {
  emailIcon.remove();
  inputEmail.parentElement.appendChild(emailIconFocus);

});

inputEmail.addEventListener('focusout', () => {
  emailIconFocus.remove();
  inputEmail.parentElement.appendChild(emailIcon);
});

inputPassword.addEventListener('focus', () => {
  passwordIcon.remove();
  inputPassword.parentElement.appendChild(passwordIconFocus);
});

inputPassword.addEventListener('focusout', () => {
  passwordIconFocus.remove();
  inputPassword.parentElement.appendChild(passwordIcon);
});
