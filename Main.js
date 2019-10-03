$('div#question').css('color', 'black')

let answers = {
    20: {
        1: "ABC",
        2: "CD",
        3: "B",
        4: "E",
        5: "D",
        6: "A",
        7: "B",
        8: "CD",
        9: "A",
        10: "C",
        11: "A",
        12: "D",
        13: "E",
        14: "C",
        15: "D",
        16: "B",
        17: "C",
        18: "E",
        19: "D",
        20: "BCD",
        21: "B",
        22: "A",
    },
    21: {
        1: 'ABC',
        2: 'C',
        3: 'AB',
        4: 'ABCD',
        5: 'A',
        6: 'ABCD',
        7: 'A',
        8: 'B',
        9: 'A',
        10: 'B',
        11: 'B',
        12: 'DE',
        13: 'A',
        14: 'D',
        15: 'E',
        16: 'B',
        17: 'B',
        18: 'A',
        19: 'A',
        20: 'A',
        21: 'A',
        22: 'A',
        23: 'B',
        24: 'BC',
        25: 'B',
        26: 'ABCDE',
        27: 'B',
        28: 'B',
        29: 'C',
    },
    22: {
        1: "AB",
        2: "ABCDE",
        3: "ABC",
        4: "ABCD",
        5: "AB",
        6: "B",
        7: "C",
        8: "A",
        9: "C",
        10: "ABCDE",
        11: "AC",
        12: "ABCDE",
        13: "ABCD",
        14: "A",
        15: "B",
        16: "D",
        17: "BD",
        18: "BCD",
        19: "D",
        20: "B",
        21: "C",
        22: "A",
        23: "E",
        24: "ACD",
        25: "B",
        26: "D",
        27: "B",
        28: "D",
        29: "ABCD",
        30: "B",
        31: "AB",
        32: "D",
        33: "ABCD",
        34: "C",
        35: "CD",
        36: "D",
        37: "CE",
        38: "B",
        39: "CE",
        40: "D",
        41: "CDE",
        42: "A",
        43: "B",
        44: "C",
        45: "D",
        46: "AE",
        47: "AB",
        48: "D",
        49: "B",
        50: "D",
    },
    23: {
        1: "A",
        2: "E",
        3: "B",
        4: "A",
        5: "A",
        6: "D",
        7: "D",
        8: "ABCDE",
        9: "C",
        10: "B",
        11: "D",
        12: "C",
        13: "D",
        14: "D",
        15: "C",
        16: "BDE",
        17: "ACD",
        18: "B",
        19: "ACD",
        20: "C",
        21: "D",
        22: "C",
        23: "E",
        24: "A",
        25: "B",
        26: "A",
        27: "B",
        28: "ABCD",
        29: "ABC",
        30: "AC",
        31: "ABCE",
        32: "AC",
        33: "B",
        34: "B",
        35: "B",

    },
    24: {
        1: "C",
        2: "A",
        3: "ABC",
        4: "BC",
        5: "B",
        6: "E",
        7: "A",
        8: "A",
        9: "D",
        10: "B",
        11: "B",
        12: "B",
        13: "D",
        14: "A",
        15: "C",
        16: "B",
        17: "B",
        18: "A",
        19: "D",
        20: "D",
        21: "B",

    },
    25: {
        1: "D",
        2: "C",
        3: "E",
        4: "C",
        5: "D",
        6: "D",
        7: "BC",
        8: "C",
        9: "E",
        10: "D",
        11: "ABC",
        12: "D",
        13: "B",
        14: "B",
        15: "A",
        16: "D",
        17: "D",
        18: "D",
        19: "D",
    },
    26: {
        1: "A",
        2: "ABCDE",
        3: "ABCDE",
        4: "ABD",
        5: "BCDE",
        6: "ABCD",
        7: "ABC",
        8: "ABCD",
        9: "BCE",
        10: "D",
        11: "AB",
        12: "B",
        13: "D",
        14: "D",
        15: "B",
        16: "A",
        17: "B",
        18: "ABCD",
        19: "CD",
        20: "C",
        21: "B",
        22: "A",
    },
    27: {
        1: "B",
        2: "A",
        3: "B",
        4: "C",
        5: "A",
        6: "C",
        7: "B",
        8: "D",
        9: "ABCD",
        10: "A",
        11: "A",
        12: "A",
        13: "A",
        14: "A",
        15: "C",
    },
    28: {
        1: "B",
        2: "B",
        3: "A",
        4: "A",
        5: "C",
        6: "B",
        7: "A",
        8: "A",
        9: "B",
        10: "C",
        11: "A",
        12: "A",
        13: "B",
        14: "A",
    },
    29: {
        1: "A",
        2: "ABC",
        3: "BC",
        4: "C",
        5: "D",
        6: "A",
        7: "B",
    },
    30: {
        1: "A",
        2: "B",
        3: "A",
        4: "C",
        5: "B",
        6: "A",
        7: "B",
        8: "A",
        9: "A",
    }
}

function getIndexes(str) {
    let first, second;

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element == '.') {
            first = str.substring(0, i);
            second = str.substring(i + 1);
        }
    }

    return [first, second];
}



$('div#choicemargin').on('click', function () {
    const [first, second] = getIndexes(this.parentElement.previousElementSibling.children[0].textContent);

    console.log(first, second);

    let self = $(this);
    let desiredTag = this.children[0];
    let value = desiredTag.value;

    if (answers[first][second].length == 1) {
        const element = answers[first][second];
        if (value == element) {
            self.css('padding', '.5em 0');
            self.css('color', 'green');
            self.css('border', '5px solid green');
        } else {
            self.css('padding', '.5em 0');
            self.css('color', 'red');
            self.css('border', '5px solid red');
        }
    } else {
        for (let i = 0; i < answers[first][second].length; i++) {
            const element = answers[first][second][i];
            if (value == element) {
                self.css('padding', '.5em 0');
                self.css('color', 'green');
                self.css('border', '5px solid green');
                break
            } else {
                self.css('padding', '.5em 0');
                self.css('color', 'red');
                self.css('border', '5px solid red');
            }
        }
    }
})