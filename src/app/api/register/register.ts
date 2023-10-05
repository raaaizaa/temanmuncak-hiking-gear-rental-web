import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    console.log('Email: ', email)
    console.log('Password: ', password)

    res.status(200).json({ message: 'Registration successful' })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
