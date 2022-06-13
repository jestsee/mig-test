import axios from "axios";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU1MTA1NjQ2LCJleHAiOjE2NTUxMDkyNDYsIm5iZiI6MTY1NTEwNTY0NiwianRpIjoiWmJEeGJXdHEzZWFwWHRaZCIsInN1YiI6MTc1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ULF6rncOOXcrWCs7SyX3IFaC3m6DbW0FXx0DOEuMvdg"

console.log(token);
export default axios.create({
  baseURL: "https://mitramas-test.herokuapp.com",
  headers: {
    // TODO
    Authorization: `${token}`
  },
});