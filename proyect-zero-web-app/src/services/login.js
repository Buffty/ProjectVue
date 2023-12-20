import { HTTP } from './axios'

const loginService = {
    fGetUserInfo(){
        HTTP.get(`posts`).then(response => {
            console.log(response.data)
        }).catch(e => {
            console.log("puto")
        })
    }
}

export default loginService