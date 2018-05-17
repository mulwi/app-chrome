import axios, {AxiosPromise} from "axios"

let URL = "https://mulwi.com/"
if (!URL) {
    URL = ""
}

type Promise<T> = AxiosPromise<T>

export {Promise}

const agentInstance = axios.create({
    baseURL: URL,
    timeout: 10000,
    withCredentials: true,
})

export default agentInstance
