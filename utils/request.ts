import fetch from 'cross-fetch'
import md5 from 'md5';

export interface Request {
  error: {
    message?: string
    error?: object[]
  }
  data: any
  statusCode?: number
}

export const request = (resource: string, params: string, options: RequestInit): Promise<Request> =>
  new Promise((resolve, reject) => {
    const date = Date.now()
    const hash = md5(`${date}${process.env.marvelApiPrivateKey}${process.env.marvelApiPublicKey}`);
    let url = `${process.env.marvelApiUrl}/${resource}?apikey=${process.env.marvelApiPublicKey}&ts=${date}&hash=${hash}`
    url += params !== '' ? `&${params}` : ''
    
    fetch(url, options)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        resolve(json)
      })
      .catch((err) => reject(err))
  })
