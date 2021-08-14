module.exports = function toReadable (number) {

    let str = number.toString();
    const result = [];
    const dict = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    
    if (str === '0') {
        return dict[0];
    }

    if (str.length === 3) {
        result.push(dict[str[0]]);
        result.push('hundred');
        str = str.substring(1);
    }

    if (str.length === 2) {
        if (dict[str]) {
            result.push(dict[str]);
            return result.join(' ');
        }

        const dictForTens = [
            '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];

        if (str[0] !== '0') {
            result.push(dictForTens[str[0]]);
        }

        str = str.substring(1);
    }

    if (str !== '0') {
        result.push(dict[str]);
    }
    
    return result.join(' ');

}
