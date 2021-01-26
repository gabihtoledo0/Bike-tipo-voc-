export const TOKEN_KEY = "@bikeTipoVc-Token"
export const TOKEN_ID = "@id-user"
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const idUser = (token: string) => {
  localStorage.setItem(TOKEN_ID, token)
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_ID)
}
