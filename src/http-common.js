import axios from "axios";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU1MDk1OTYzLCJleHAiOjE2NTUwOTk1NjMsIm5iZiI6MTY1NTA5NTk2MywianRpIjoiVXkybjJ1ZFJMeTVzSG82cyIsInN1YiI6MTc1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0._b9y6rZ4W665kSVnwFrn-NfPdgcz7MC0eEFDw2VNwqY"

console.log(token);
export default axios.create({
  baseURL: "https://mitramas-test.herokuapp.com",
  headers: {
    // TODO
    Authorization: `${token}`
  },
});