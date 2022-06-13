import axios from "axios";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU1MDk5Njg4LCJleHAiOjE2NTUxMDMyODgsIm5iZiI6MTY1NTA5OTY4OCwianRpIjoia3J1ajZvb0s4ZzBaQmRheSIsInN1YiI6MTc1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.exjpSCFlDZnJYIIQNgRu3Vz1n_tw5yHbNrDzlsvg4oM"

console.log(token);
export default axios.create({
  baseURL: "https://mitramas-test.herokuapp.com",
  headers: {
    // TODO
    Authorization: `${token}`
  },
});