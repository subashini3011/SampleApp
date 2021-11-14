export function EmailValidation(data) {
    data = data.trim()
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return re.test(data)
}


export function PasswordValidation(password) {
    // min 8 char, one digit, one lowercase, one uppercase, special char as optional
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/
    return re.test(password)
}


export function HasValueValidation(data) {
    data = data.trim()
    return data
}
