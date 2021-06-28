function checkPass(password, level) {
    const letterLow = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM'
    const letterMedium = 'qwertyuiopasdfghjklzxcvbnm' + letterLow 
    const letterStrong = '(~!#$%^&*()_-+?<>|\/[]{}:' + letterMedium

    const passwordLength = 10

    if (level === 'low') {
        for (let i = password.length; i < passwordLength ; i++) {
            let randLetterLow = Math.floor(Math.random() * letterLow.length)
            password += letterLow.charAt(randLetterLow)
        }
        console.log(password)
    }
    else if (level === 'good') {
        for (let i = password.length; i < passwordLength; i++) {
            let randLetterMedium = Math.floor(Math.random() * letterMedium.length)
            password += letterMedium.charAt(randLetterMedium)
        }
        console.log(password)
    }
    else if (level === 'strong') {
        for (let i = password.length; i < passwordLength; i++) {
            let randLetterStrong = Math.floor(Math.random() * letterStrong.length)
            password += letterStrong.charAt(randLetterStrong)
        }
        console.log(password)
    }
}
checkPass('abcd', 'strong')


