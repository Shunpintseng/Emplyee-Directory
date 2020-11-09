import axios from "axios";

//request employee lsit

export default {
employeeList: function() {

       return axios.get("https://randomuser.me/api/?results=200&nat=us");
        
    }
};

