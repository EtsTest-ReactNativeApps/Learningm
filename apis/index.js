import axios from 'axios';
import  {HOST} from '../environment'


const ROOT_URL = "http://8abcb71a6a4e.ngrok.io";


export default class ApiUser {
    static async signUp(action){
        const url = `${ROOT_URL}/generic/addNewUser`;
        const request =  await axios.post(url,action.payload);
        return request;
    }
    static async fetchUser(action){
        const url = `${ROOT_URL}/generic/validateUser`;
        const request = await axios.post(url,action.payload);
        
        return request;
    }
    static async fetchLevels(action){
        const url = `${ROOT_URL}/adminSecure/getAllLevels`;
        const request = await axios.post(url, action.payload);
        console.log("level data",request)
        return request;
    }
    static async fetchLevelContents(action){
        const url = `${ROOT_URL}/adminSecure/getAllContent`;
        const request = await axios.post(url,action.payload);
        return request;
    }

    
}
