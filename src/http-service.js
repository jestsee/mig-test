import axios from "axios";
import Cookies from 'js-cookie';

class HttpService {
  constructor () {
    this.baseURL = "https://mitramas-test.herokuapp.com"
  }

  getToken() {
    var token = Cookies.get('token');
    if (typeof token === 'undefined') {
      // generate new token
      this.generateNewToken()
  
      // get new token
      token = Cookies.get('token');
    }
    return token;
  }

  generateNewToken() {
    console.log("Generate new token!");
    // TODO masukin ke .env
    const data = JSON.stringify({
      "email": "akun28@mig.id",
      "password": "2C6490B8"
    });
  
    const config = {
      method: 'post',
      url: this.baseURL + '/auth/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    var token = ''
    axios(config).then(function (response) {
      token = response.data.access_token
      Cookies.set('token', token)
      console.log(Cookies.get('token'));
    }).catch(function (error) {
      console.log(error);
    });

    return token === "" ? false : true
  }

  httpService() {
    console.log("API Called");
    return axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.getToken()
      },
    });
  } 
}

export default new HttpService;