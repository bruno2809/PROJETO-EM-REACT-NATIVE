import http from "../http-common"

const getAll = () => {
    return http.get("/produtos")
}


const get = id => {
    return http.get(`/produtos/${id}`)
}


const create = data => {
    return http.post("/produtos/", data)
}

const update = (id, data) => {
    return http.put(`/produtos/{id}`, data)
}

const remove = id => {
    return http.delete (`/produtos/${id}`)
}
export default {
  getAll,
  get, 
  create, 
  update, 
  remove  
}