import axios from 'axios';
import  {HOST} from '../environment'

const ROOT_URL = "http://51ba890b17e1.ngrok.io";


export default class ApiUser {
    static async signUp(action){
        const url = `${ROOT_URL}/generic/addNewUser`;
        const request =  await axios.post(url,action.payload);
        return request;
    }
    static async fetchUser(action) {
        // console.log("action in api call",action.payload)
        const url = `${ROOT_URL}/generic/validateUser`;
        const request = await axios.post(url,action.payload);
        
        return request;
    }
    static async fetchLevels(action) {
        // console.log("level action call")
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
    static async updateUserProgress(action) {
        // console.log("in user progress request")
        const url = `${ROOT_URL}/userProgress/updateLearnProg`;
        const request = await axios.post(url, action.payload)
            
        return request;
    }  
    static async postFeedBack(action) {
        // console.log("feedback")
        const url = `${ROOT_URL}/userProgress/provideFeedBack`;
        const request = await axios.post(url, action.payload)
        
        return request;
    }
}
