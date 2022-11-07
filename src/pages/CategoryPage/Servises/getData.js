import axios from "axios";
const apiAddress = "http://localhost:4000/product"

const headers = {
    "Content-Type": "application/json"
};

export const categoryService = {
    getProductsByCategory: (category) => {
        let params = {
            "category": category
        }
        return axios.get(apiAddress + "/byCategory", { headers, params })
    }
}