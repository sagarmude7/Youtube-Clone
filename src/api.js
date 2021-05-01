import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: "AIzaSyCwFw5H9MUsksL19TcVSHpUSk0HlB4Y7ls"
   },
})

export default request