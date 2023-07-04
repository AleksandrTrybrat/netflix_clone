'use strict';

window.onload = function() {
  function setupRegistrationFunctionality() {
    const emailStep2Input = document.getElementById('emailStep2');
    const startButton = document.getElementById('buttonStep2');
    const emailStep3Input = document.getElementById('emailStep3');
    const passwordInput = document.getElementById('passwordStep3');
    const buttonStep3 = document.getElementById('buttonStep3');
    const avatarImage = document.querySelector('.nav__avatar');
    const banner = document.getElementById('banner-for-reg');
    const films = document.getElementById('films-for-reg');
    const registration = document.getElementById('registration');


    startButton.addEventListener('click', function(event) {
      event.preventDefault();
      const email = emailStep2Input.value;
      if (isValidEmail(email)) {
        const regDiv = document.getElementById('reg');
        regDiv.style.display = 'none';
        const regDiv1 = document.getElementById('reg1');
        regDiv1.style.display = 'flex';
      }
    });

    buttonStep3.addEventListener('click', function(event) {
      event.preventDefault();
      const email = emailStep3Input.value;
      const password = passwordInput.value;

      if (isValidEmail(email) && isValidPassword(password)) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        avatarImage.src = 'img/netflix-avatar.png';
        registration.style.display = 'none';
        films.style.display = 'block';
        banner.style.display = 'block';
        const sliderElements = document.querySelectorAll('.slider__section');
        for (const sliderElement of sliderElements) {
          $(sliderElement).slick('slickSetOption', 'slidesToShow', 6, true);
        }
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Пожалуйста, введите корректный адрес электронной почты и пароль (не менее 6 символов, содержит буквы и цифры).';

        buttonStep3.insertAdjacentElement('afterend', errorMessage);
      }
    });

    function isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    function isValidPassword(password) {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      return regex.test(password);
    }
  }

  setupRegistrationFunctionality();
};
