const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const signUp = $('.signUp_button')
const signIn = $('.signIn_button')
const modal = $('.modal')
const signUp_form = $('.modal_signUp')
const signIn_form = $('.modal_signIn')
const close_signUp_form = $('.close_button-signUp')
const close_signIn_form = $('.close_button-signIn')
//modal handle
function showSignUpModal() {
    modal.classList.toggle('hide')
    signUp_form.classList.toggle('hide')
}
function showSignInModal() {
    modal.classList.toggle('hide')
    signIn_form.classList.toggle('hide')
}
signUp.onclick = showSignUpModal
close_signUp_form.onclick = showSignUpModal
signIn.onclick = showSignInModal
close_signIn_form.onclick = showSignInModal