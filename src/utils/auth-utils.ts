import { useUser } from '@/components/context/user-context'

export function useAuthentication() {
  const { users, addUser } = useUser()

  function isUserExist(email: string, password: string) {
    return users.some(
      (user) => user.email === email && user.password === password
    )
  }

  return { isUserExist, addUser }
}
