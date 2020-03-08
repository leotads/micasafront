const authToken = "micasa@authToken"

export const getToken = async () => localStorage.getItem(authToken)
export const setToken = async (token) => await localStorage.setItem(authToken, token)