import axios from "axios";
axios.defaults.baseURL = "https://api-dev.logikoss.com/v1";
axios.defaults.headers.common["x-app"] = "B2B";

export const http = {
  data() {},

  methods: {
    login(data) {
      return this.httRequest("post", "/auth/login", data).then(({ data }) => {
        console.log(data);
        if (data) {
          console.log(data.access_token);
          localStorage.setItem("token", data.access_token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.access_token}`;
        }
        return data;
      });
    },
    async getUser() {
      return await axios.get("/users/me").then(({ data }) => {
        return data;
      });
    },
    async logoutUser() {
        let token = localStorage.getItem('token')
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.headers.common["x-app"] = "B2B";
      return await axios.post("/auth/logout").then(({ data }) => {
        return data;
      });
    },
    async getProyects(){
        // axios.defaults.headers.common["x-app"] = "";
        axios.defaults.headers.common= "";
return await axios({
    method: 'get',
    url: 'https://api.github.com/search/repositories?q={term}',
    headers: {
        'Authorization': '',
    },
}).then(({data})=> {
    return data;
})

    //   return await  axios.get('https://api.github.com/search/repositories?q={term}',).then(({data})=>{
    //     return data;
    //     })
    },

    httRequest(method, url, data) {
      return new Promise((resolve, reject) => {
        axios[method](url, data)
          .then(
            (response) => {
              resolve(response);
            },
            ({ response }) => {
              reject(response);
            }
          )
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
