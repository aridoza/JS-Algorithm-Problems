// Designer PDF Viewer \\

function main(h,word) {

    // heights object
    // make array from heights for each letter
    // then get max height from that array

    // let letters = word.split('');
    // let width = letters.length;
    //
    // let heights = h.slice(0,width);
    //
    // let maxHeight = Math.max(...heights);
    //
    // console.log(width * maxHeight);

    let alphabet = {};
    let a = 97;

    for (let i = 0; i < 26; i ++) {
        alphabet[String.fromCharCode(a + i)] = h[i];
    }

    let letters = word.split('');
    let width = letters.length;

    let maxHeight = 0;

    for (let j = 0; j < letters.length; j ++) {
        let item = letters[j];
        if (alphabet[item] > maxHeight) {
            maxHeight = alphabet[item];
        }
    }

    console.log(width * maxHeight);
}
