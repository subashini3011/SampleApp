const setValueToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getValueFromLocalStorage = key => {
    if (localStorage.getItem(key) !== 'undefined')
        return JSON.parse(localStorage.getItem(key))
    return null
}

const clearSessionData = () => {
    localStorage.removeItem('login')
}

const removeItem = key => {
    localStorage.removeItem(key)
}


export const LocalStorage = {
    setValueToLocalStorage,
    getData: getValueFromLocalStorage,
    clearSessionData: clearSessionData,
    removeItem,
}
