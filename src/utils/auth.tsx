'use client'
import { user } from '@/types/user'
import { useEffect, useState } from 'react';

function checkPassword(password: string, confirmPassword: string) {
  return password === confirmPassword;
}

function checkUser(email: string, password: string) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return users.some(
    (user: user) => user.email === email && user.password === password
  );
}

export function Register(
  email: string,
  password: string,
  confirmPassword: string
) {
  const passwordIsSame = checkPassword(password, confirmPassword);
  const userExist = checkUser(email, password);
  const [registered, setRegistered] = useState(false)

  useEffect(() => {
    if (passwordIsSame) {
      if (!userExist) {
        const newUser: user = { email, password };
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setRegistered(true)
        alert('Registration Successful!');
      } else {
        alert('User already exists!');
      }
    } else {
      alert('Password does not match!');
    }
  }, [passwordIsSame, userExist]);

  return registered
}

export function Login(email: string, password: string) {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((user: user) => user.email === email);

    if (foundUser && foundUser.password === password) {
      alert('Success!');
      setLoggedIn(true)
    } else {
      alert('Invalid!');
    }
  }, [email, password]);

  return loggedIn
}
