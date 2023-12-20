export const saveItem = ({ key, value }) => {
    console.log(value)
    const serializedValue = JSON.stringify(value)
    console.log(serializedValue)
    localStorage.setItem(key, serializedValue)
}

export const getItem = ({ key }) => {
    const value = localStorage.getItem(key)
    if (value) {
        const deserializedValue = JSON.parse(value)
        // console.log(deserializedValue)
        return deserializedValue
    }
}