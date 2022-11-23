function homo(number, repeatTimes) {
    var jz = 10;
    var s = [];
    var e = '114514'.repeat(repeatTimes)
    for (var i = 0; i < 1; i++) {
        s.push('~-'.repeat(e[i]) + e[i]);
        console.log('~-'.repeat(e[i]) + e[i])
    }
    for (var i = 1; i < e.length; i++)  {
        s.push('-~'.repeat(parseInt(jz - e[i])) + e[i]);
    }
    var ans = '';
    for (var i = 0; i < e.length; i++) {
        let digit = parseInt(number / (jz ** (e.length - i - 1))) % jz;
        ans = i > 0 ? '(' + ans + '*' + s[i] + ')' : s[i];
        ans = '-~'.repeat(digit) + ans;
    }
    return ans;
}
