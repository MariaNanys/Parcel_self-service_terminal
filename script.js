const contentImage = document.querySelector('.background_image');
const content = document.querySelector('.content_active_panel');
const activePanel = document.querySelector('.active_panel');
const form = document.getElementById('form');
const finish = document.getElementById('finish');
const begin = document.getElementById('start');
const intro = document.querySelector('.content_intro');
let phoneOk = false;
let codeOk = false;

function start() {
    begin.style.display = 'none';
    intro.style.display = 'none';
    contentImage.style.display = 'block';
    content.style.display = 'block';
    activePanel.style.display = 'block';
    form.style.display = 'block';
}

function validatePhone() {
    const formPhone = document.getElementsByClassName('form-phone')[0];
    let value = formPhone.value;
    const errorPhone = document.getElementsByClassName('error-phone')[0];

    if ((value.length == 9 || value.length ==0) && !isNaN(value)) {
        errorPhone.style.display = 'none';
        phoneOk = true;
    } else {
        errorPhone.style.display = 'block';
        phoneOk = false;
    }
    unlockBtn();
}

function validateCode() {
    const formCode = document.getElementsByClassName('form-code')[0];
    let value = formCode.value;
    const errorCode = document.getElementsByClassName('error-code')[0];

    if ((value.length == 4 || value.length ==0) && !isNaN(value)) {
        errorCode.style.display = 'none';
        codeOk = true;
    } else {
        errorCode.style.display = 'block';
        codeOk = false;
    }
    unlockBtn();
}

function unlockBtn() {
    const btn2 = document.getElementsByClassName('btn2')[0];
    if (phoneOk && codeOk) {
        btn2.disabled = false;
    } else {
        btn2.disabled = true;
    }
}

function getPackage() {
    form.style.display = 'none';
    finish.style.display = 'inline-block';
    codeOk = false;
    phoneOk = false;
    document.getElementById("myForm").reset();
    unlockBtn();
}

function theEnd() {
    intro.style.display = 'flex';
    begin.style.display = 'block';
    finish.style.display = 'none';
    content.style.display = 'none';
    activePanel.style.display = 'none';
}

function newPackage() {
    form.style.display = 'block';
    finish.style.display = 'none';
}