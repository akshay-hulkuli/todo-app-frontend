import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider ({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [userName, setUserName] = useState("");

  const login = (userName, password) => {
    if (userName === 'Akshay' && password === 'qwerty') {
      setAuthenticated(true)
      setUserName(userName);
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
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userName }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
