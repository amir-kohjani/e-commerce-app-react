import axios from "axios";
const apiAddress = "http://localhost:4000/product"

const headers = {
    "Content-Type": "application/json"
    
  };

export  const HomeService = {
    testConnection:()=>{
        return axios.get(apiAddress, {headers});
    },
    getProductsByCategory: (category) => {
      
        let params = {
            "category": category
        }
        return axios.get(apiAddress+"/byCategory", {headers,params})
    }
}