import { observable, action } from 'mobx';
import {get} from 'ajax';

class GitStore {

    @observable user = null;
    @observable loadingUser = false;
    @observable searchText = "";
    @observable userRepos = null;



  /**
   * getting user from Git API
   * @param user
   */
    getUserDetails(user){
      this.loadingUser = true;
      let url = "https://api.github.com/users/" + user;
      get(url, null, (response)=>{
        this.loadingUser = false;
        this.user = response;
        });
    }
    getUserRepos(){
      this.userRepos = null; //removing old data
      let url = "https://api.github.com/users/" + this.searchText + "/repos";
      get(url, null, (response)=>{
        this.userRepos = response;
        });
    }


}

export default new GitStore();
