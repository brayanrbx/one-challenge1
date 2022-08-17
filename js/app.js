import { $cardDecryptLogo, $cardDecryptText, $copyclip, $cardText, $card__button, $button, $text, $textarea, $alert, $encrypt, $decrypt, regex, regexEncrypt, regexDecrypt, encryptVowel, decryptVowel } from './variables.js';

// This function does the encryption or decryption
const trigger = (action, result) => {
    let text = $text.value;
    $cardDecryptLogo.classList.remove('card__logo--active');
    $cardDecryptText.classList.add('noActive');
    $cardText.classList.remove('noActive');
    $card__button.classList.remove('noActive');
    if (regex.test(text)) {
        text = text.replace((action ? regexEncrypt : regexDecrypt), (match) => result[match]);
        $textarea.value = text;
    }
};

// This function does the copy to clipboard
const copy = () => {
    navigator.clipboard.writeText($textarea.value);
    $copyclip.classList.remove('noActive');
    setTimeout(() => {
        $copyclip.classList.add('noActive');
    }, 1000);
};

const validate = () => {
    (!regex.test($text.value)) ? $alert.classList.remove('noActive') : $alert.classList.add('noActive');
};

// These functions are the event listener for the encrypt and decrypt buttons
$encrypt.addEventListener('click', () => trigger(true, encryptVowel));
$decrypt.addEventListener('click', () => trigger(false, decryptVowel));
$button.addEventListener('click', copy);
$text.addEventListener('keyup', validate);

