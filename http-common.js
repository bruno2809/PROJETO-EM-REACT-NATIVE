import axios from "axios"

export default axios.create({
baseURL: "https://60bd40feb8ab3700175a04da.mockapi.io/api/v1/",
headers: {
    "Content-type": "application/json"

}


})
