import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: "AIzaSyBxOcZHZdzKRi6TG6C8zSFIjdYjfsi9K_g"
   },
})

export default request
