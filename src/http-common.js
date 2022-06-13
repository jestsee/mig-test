import axios from "axios";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU1MTA5MzIwLCJleHAiOjE2NTUxMTI5MjAsIm5iZiI6MTY1NTEwOTMyMCwianRpIjoiakZiMnhrVkE4OUJOb2g0ZyIsInN1YiI6MTc1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.3lI6zbMOyCBdSvXhIeFVwa72SwvDcSWY9TUz9aHxcNs"

console.log(token);
export default axios.create({
  baseURL: "https://mitramas-test.herokuapp.com",
  headers: {
    // TODO
    Authorization: `${token}`
  },
});