const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const logoGif = document.querySelector('.logo-gif');
const emailInputs = document.querySelectorAll('.input-box input[type="email"]');
const passwordInputs = document.querySelectorAll('.input-box input[type="password"]');
const newSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijRMSv9EpAsWacFxrCVU3HzjP_Tf3E_gw7wvaPYO5MivK7xTn6SSOQrEOy3H6fMsFwmBmU12fZOyL23RntAwGpPgJYrRLC90gCMpB9UKvdVoUidw-s13AWwAOSxCTDAPob6jALRMpzrOnMXidH4XJsx6r2OjYQy4nVYBe5RaZuaOymzhIaN7LnuQZn/s800/eye.gif";
const originalSrc = "https://images.steamusercontent.com/ugc/2483253396486284800/F31A4D4591F3AF1DFDAA0738146B6E9403DCB205/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

logoGif.addEventListener('click', () => {
    if (logoGif.src !== newSrc) {
        logoGif.src = newSrc;
        logoGif.classList.add('new-image'); 
               // Меняем тип у ВСЕХ полей пароля
        passwordInputs.forEach(input => {
            input.type = "text";
        });
    } else {
        logoGif.src = originalSrc;
        logoGif.classList.remove('new-image'); 
             // Возвращаем тип обратно
        passwordInputs.forEach(input => {
            input.type = "password";
        });
    }
});