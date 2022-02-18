module.exports = function toReadable (number) {
    let dg_val = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = '';
    if(number < 10) {
        result = dg_val[number];
    }
    return result;
}
