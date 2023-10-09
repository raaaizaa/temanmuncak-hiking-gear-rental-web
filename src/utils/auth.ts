import { user } from '@/types/user'

function checkPassword(password: string, confirmPassword: string) {
  return password === confirmPassword
}

function checkUser(email: string, password: string) {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  return users.some(
    (user: user) => user.email === email && user.password === password
  )
}

export function register(
  email: string,
  password: string,
  confirmPassword: string
) {
  const passwordIsSame = checkPassword(password, confirmPassword)
  const userExist = checkUser(email, password)

  if (passwordIsSame) {
    if (!userExist) {
      const newUser: user = { email, password }
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      alert('Registration Successful!')
      return true
    } else {
      alert('User already exist!')
    }
  } else {
    alert('Password do not match!')
  }
}

export function login(email: string, password: string) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const foundUser = users.find((user: user) => user.email === email);

  if (foundUser && foundUser.password === password) {
    alert('Success!');
    return true;
  } else {
    alert('Invalid!');
    return false;
  }
}
