import axios from "axios";

//search random generated employee list
export default {
search: function() {

       return axios.get("https://randomuser.me/api/?results=200&nat=us");
        
    }
};

