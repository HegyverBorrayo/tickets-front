import { api } from 'api'

export const signIn = values => {
  let raw = JSON.stringify({
    email: values.email,
    password: values.password,
  })

  api(`api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: raw,
  })
}
