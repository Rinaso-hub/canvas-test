function arrayEqualsTest(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function arrayEqualsBidimension(a, b) {
    var test = a.length === b.length;
    if (!test)
        return test;
    for (var i = 0; i < a.length - 1; i++) {
        test = test && arrayEqualsTest(a[i], b[i]);
    }

    return test;
}

module.exports.arrayEqualsBidimension = arrayEqualsBidimension;