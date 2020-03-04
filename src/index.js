const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let count = 0, tempStr = '', arr = [], result = '';
    for (let i = 0; i < expr.length; i++) {
        count++;
        tempStr += expr[i];
        if (count == 10) {
            if (tempStr == '**********') {
                result += ' ';
            }
            else {
                tempStr = tempStr.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
                result += MORSE_TABLE[tempStr];
            }
            tempStr = '';
            count = 0;
        }
    }
    return result;
}

module.exports = {
    decode
}