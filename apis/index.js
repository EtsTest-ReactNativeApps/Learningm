import axios from 'axios';

const ROOT_URL ='http://maulihelp-env.eba-jkv3rqr6.ap-south-1.elasticbeanstalk.com/generic/';


export default class ApiUser {
    static async signUp(action){
        const url = `${ROOT_URL}addNewUser`;
        console.log(action.payload)
        const request =  await axios.post(url,action.payload)
        console.log("request is api call", request)
        return request
    }

    static async fetchUser(action){
        // console.log("action in api call",action.payload)
        const url = `${ROOT_URL}validateUser`;
        const request = await axios.post(url,action.payload)
        // console.log("request is api call", request)
        return request;
    }

    
}
