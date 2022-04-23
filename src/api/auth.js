import { api } from 'api'

export const signIn = values => {
  let raw = JSON.stringify({
    email: values.email,
    password: values.password,
  })

  api(`api/auth/signin`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: raw,
  })
}
