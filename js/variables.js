// Variables for decryptor
const $cardDecrypt = document.getElementById("cardDecrypt");
const $cardDecryptLogo = document.getElementById("cardDecryptLogo");
const $cardDecryptText = document.getElementById("cardDecryptText");
const $cardText = document.createElement("div");
const $textarea = document.createElement("textarea");
const $card__button = document.createElement('div');
const $button = document.createElement('button');
$button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
    </svg>
    Copy to clipboard`;

const $copyclip = document.createElement('div');
const $copyclipText = document.createElement('span');
$copyclipText.innerText = 'Copied!';

// Variables for encryptor
const $card = document.getElementById("card");
const $alert = document.createElement('div');
const $alertText = document.createElement('p');
$alertText.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
    Only lowercase letter are accepted`;

const $text = document.getElementById('text');
const $encrypt = document.getElementById('encrypt');
const $decrypt = document.getElementById('decrypt');

// Add class to variables created
$copyclip.classList.add('copyclip', 'noActive');
$button.classList.add('button');
$card__button.classList.add('card__button', 'noActive');
$cardText.classList.add('card__text', 'textarea', 'noActive');
$textarea.setAttribute('readonly', true);
$textarea.classList.add('text');
$alert.classList.add('noActive');
$alertText.classList.add('alertText');

// Add to DOM
$copyclip.appendChild($copyclipText);
$cardText.appendChild($textarea);
$card__button.appendChild($button);
$cardDecrypt.appendChild($cardText);
$cardDecrypt.appendChild($card__button);
$cardDecrypt.appendChild($copyclip);
$alert.appendChild($alertText);
$card.insertBefore($alert, $card.lastElementChild);

const regex = /^[a-z\s]*$/;
const regexEncrypt = /(a|e|i|o|u)/gm;
const regexDecrypt = /(ai)|(enter)|(imes)|(ober)|(ufat)/gm;

const encryptVowel = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

const decryptVowel = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
};

export { $cardDecryptLogo, $cardDecryptText, $copyclip, $cardText, $card__button, $button, $text, $textarea, $alert, $encrypt, $decrypt, regex, regexEncrypt, regexDecrypt, encryptVowel, decryptVowel };