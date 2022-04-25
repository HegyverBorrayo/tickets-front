//const SERVER_URL = 'https://tickets-information.herokuapp.com'
const SERVER_URL = 'http://localhost:3002'

export const api = async (service, options) => {
  await new Promise(resolve => setTimeout(resolve, 0))

  return fetch(`${SERVER_URL}/${service}`, options)
    .then(response => {
      console.log({ response })
      response.text()
    })
    .then(res => {
      console.log({ res })
      res.json()
    })
    .catch(err => {
      throw new Error(`error en el api ${err}`)
      //console.error('dio error: ', err)
    })
}
