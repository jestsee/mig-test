import axios from "axios";

export default axios.create({
  baseURL: "https://mitramas-test.herokuapp.com",
  headers: {
    // TODO
    "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU1MDg1MTY2LCJleHAiOjE2NTUwODg3NjYsIm5iZiI6MTY1NTA4NTE2NiwianRpIjoiNU1uanVGemJ6VU9UclJmTiIsInN1YiI6MTc1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.87KeeJ-_Z4o1S1PZqZkMvBaglm-FthoL63AbfXRLz5A"
  },
});