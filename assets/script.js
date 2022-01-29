const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const signUp = $('.signUp_button')
const signIn = $('.signIn_button')
const modal = $('.modal')
const signUp_form = $('.modal_signUp')
const signIn_form = $('.modal_signIn')
const close_signUp_form = $('.close_button-signUp')
const close_signIn_form = $('.close_button-signIn')
const signIn_switch = $('#signIn-switch')
const signUp_switch = $('#signUp-switch')
//modal handle
function showSignUpModal() {
    if(signIn_form.classList.contains('hide')){
        modal.classList.toggle('hide')
        signUp_form.classList.toggle('hide')
    }else{
        signIn_form.classList.add('hide')
        signUp_form.classList.remove('hide')
    }
}
function showSignInModal() {
    if(signUp_form.classList.contains('hide')){
        modal.classList.toggle('hide')
        signIn_form.classList.toggle('hide')
    }else{
        signUp_form.classList.add('hide')
        signIn_form.classList.remove('hide')
    }
}
signUp.onclick = showSignUpModal
close_signUp_form.onclick = showSignUpModal
signIn.onclick = showSignInModal
close_signIn_form.onclick = showSignInModal
signUp_switch.onclick = showSignUpModal
signIn_switch.onclick = showSignInModal