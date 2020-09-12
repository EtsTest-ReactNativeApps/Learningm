import axios from 'axios';

const ROOT_URL ='http://maulihelp-env.eba-jkv3rqr6.ap-south-1.elasticbeanstalk.com/generic/';


export default class ApiUser {
    static signUp(action){
        const url = `${ROOT_URL}addNewUser`;
        console.log(action.payload.data)
        const request = axios.post(url,action.payload.data)

        return request;
    }

    static fetchUser(action){
        const url = `${ROOT_URL}validateUser`;
        const request = axios.get(url);

        return request;
    }

    
}
