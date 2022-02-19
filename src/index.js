module.exports = function toReadable (number) {
    let dg_val = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn_val = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw_val = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    if(number < 10) {
        result = dg_val[number];
    }
    if(number >= 10 && number < 20) {
        result = tn_val[number-10];
    }
    if(number >= 20 && number < 100) {
        let twCount = Math.floor(number / 10 - 2);
        let dgCount = number % 10;
        if(dgCount != 0) {
            result = tw_val[twCount] + ' ' + dg_val[dgCount];
        } else {
            result = tw_val[twCount];
        }
    }
    if(number >= 100 && number < 1000) {
        let hundredCount = Math.floor(number / 100);
        let newNum = number % 100;
        if(newNum < 10) {
            if(newNum != 0) {
                result = `${dg_val[hundredCount]} hundred ${dg_val[newNum]}`;
            } else {
                result = `${dg_val[hundredCount]} hundred`;
            }
        }
        if(newNum >= 10 && newNum < 20) {
            result = `${dg_val[hundredCount]} hundred ${tn_val[newNum-10]}`;
        }
        if(newNum >= 20 && newNum < 100) {
            let twCount = Math.floor(newNum / 10 - 2);
            let dgCount = newNum % 10;
            if(dgCount != 0) {
                result = `${dg_val[hundredCount]} hundred ${tw_val[twCount]} ${dg_val[dgCount]}`;
            } else {
                result = `${dg_val[hundredCount]} hundred ${tw_val[twCount]}`;
            }
        }
    }
    return result;
}
