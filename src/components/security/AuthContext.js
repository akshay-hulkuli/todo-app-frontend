import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider ({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const login = (userName, password) => {
    if (userName === 'Akshay' && password === 'qwerty') {
      setAuthenticated(true)
      return true;
    } else {
      setAuthenticated(false)
      return false;
    }
  }

  const logout = () => {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
