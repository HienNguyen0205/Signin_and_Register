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
    if (signIn_form.classList.contains('hide')) {
        modal.classList.toggle('hide')
        signUp_form.classList.toggle('hide')
    } else {
        signIn_form.classList.add('hide')
        signUp_form.classList.remove('hide')
    }
}

function showSignInModal() {
    if (signUp_form.classList.contains('hide')) {
        modal.classList.toggle('hide')
        signIn_form.classList.toggle('hide')
    } else {
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

function Validation(options) {
    const form = $(options.form)

    function Validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector('.form_message')
        if (errorMessage) {
            errorElement.innerHTML = `<i class="fas fa-exclamation-triangle"></i>` + errorMessage
            errorElement.style.color = 'var(--red-color)'
            inputElement.style.border = '2px solid var(--red-color)'
        } else {
            errorElement.innerHTML = ''
            inputElement.style.border = '2px solid var(--black-color)'
        }
    }
    
    if (form) {
        options.rules.forEach(rule => {
            var inputElement = form.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function(){
                    Validate(inputElement, rule)
                }
                inputElement.oninput = function(){
                    Validate(inputElement, rule)
                }
            }
        })
    }
}

Validation.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validation.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return value.match(mailFormat) ? undefined : 'Email không hợp lệ'
        }
    }
}

Validation.isSamePassword = function (selector) {
    return {
        selector: selector,
        test: function (value1, value2) {
            return value1 === value2 ? undefined : 'Mật khẩu xác nhận không đúng'
        }
    }
}