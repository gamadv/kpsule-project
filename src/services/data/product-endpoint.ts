import { api } from "../api";

export function getAllProducts(){
    return api.get('/productList');
}
