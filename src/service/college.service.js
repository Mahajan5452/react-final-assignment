import axios from "axios";

const BASE_API_URL = 'http://localhost:8080/colleges';  
class CollegeService {  
    saveCollege(college) {
        return axios.post(BASE_API_URL + '/', college)
            .catch(error => {
                
                console.error('Error saving college:', error);
                
            });
    }

    getAllColleges() {
        return axios.get(BASE_API_URL + '/')
            .catch(error => {
                console.error('Error getting all colleges:', error);
              
            });
    }

    getCollegeById(id) {
        return axios.get(BASE_API_URL + '/' + id)
            .catch(error => {
                console.error('Error getting college by ID:', error);
                throw error;
            });
    }

    deleteCollegeById(id) {
        return axios.delete(BASE_API_URL + '/' + id)
            .catch(error => {
                console.error('Error deleting college by ID:', error);
                
            });
    }

    updateCollegeById(id, college) {
        return axios.put(BASE_API_URL + '/' + id, college)
            .catch(error => {
                console.error('Error updating college by ID:', error);
                
            });
    }
    getAllBranchesbyClgId(clgId) {
        return axios.get(BASE_API_URL +"/" + clgId+'/branches' )
           .catch(error => {
                console.error('Error getting branches by college ID:', error);
               
            });
    }
    saveBranch(cid,branch){
        return axios.post(BASE_API_URL  +"/" + cid+'/branches', branch)
          .catch(error => {
                console.error('Error saving branch:', error);
                
            });
    }
    deleteBranchbyid(cid,bid){
        console.log(cid, bid);
        return axios.delete(BASE_API_URL  +"/" + cid+'/branches/'+bid)
         .catch(error => {
                console.error('Error deleting branch by ID:', error);
            });
    }
}

export default new CollegeService;
