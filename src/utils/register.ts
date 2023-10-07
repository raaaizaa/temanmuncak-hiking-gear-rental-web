import { useAuthentication } from './auth-utils'

function checkPassword(password: string, confirmPassword: string) {
  return password === confirmPassword
}

export function register(
  email: string,
  password: string,
  confirmPassword: string
) {
  const { isUserExist, addUser } = useAuthentication()

  if (checkPassword(password, confirmPassword)) {
    if (!isUserExist(email, password)) {
      const newUser = { email, password }
      addUser(newUser)

      alert('Registration Successful!')
      return true
    } else {
      alert('User already exists!')
      return false
    }
  } else {
    alert('Passwords do not match!')
    return false
  }
}
