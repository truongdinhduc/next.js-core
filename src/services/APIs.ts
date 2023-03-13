import axios from 'axios'

export const BASE_URL = 'http://192.168.2.12:5050'

export const Create = (baseURL = BASE_URL) => {

    const api = axios.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
        },
        timeout: 50000,
    })

    /* Example */
    const exampleAPI = (payload: any) => {
        console.log(`Example call an API action with payload: "${payload}".`)
    }

    return {
        exampleAPI
    }
}

const APIs: any = Create()

export default APIs
