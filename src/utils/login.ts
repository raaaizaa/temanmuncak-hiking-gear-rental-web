import { useAuthentication } from './auth-utils'

export function login(email: string, password: string) {
  const { isUserExist } = useAuthentication()

  if (isUserExist(email, password)) {
    alert('correct')
    return true
  } else {
    alert('false')
    return false
  }
}
