import "./gitRepos.scss";
import React from 'react';

import {observable} from "mobx"
import {observer, inject} from 'mobx-react';

@inject("gitStore")
@observer
export default class GitRepos extends React.Component {

    @observable sortBy = ""; //sort by which attribute - see switch case for attributes

    constructor(props) {
        super();
        this.state = {descending: true};
    }
    componentWillMount() {
      this.props.gitStore.getUserRepos();
    }
    renderTable(){
      if (this.props.gitStore.userRepos && typeof  this.props.gitStore.userRepos.map ==="function"){
        let table = this.props.gitStore.userRepos.sort((rep1, rep2)=>{
              switch (this.sortBy){
                case "name":{
                  return this.state.descending? rep1.name.localeCompare(rep2.name): rep2.name.localeCompare(rep1.name)
                }
                case "description":{
                  if (!rep1.description){
                    return  this.state.descending ?  -1 : 1;
                  }
                  if (!rep2.description){
                    return !this.state.descending ?  -1 : 1;
                  }
                  return this.state.descending ? rep1.description.localeCompare(rep2.description) : rep2.description.localeCompare(rep1.description);
                }
                case "url":{
                  return this.state.descending ? rep1.url.localeCompare(rep2.url): rep2.url.localeCompare(rep1.url);

                }
                case "forks_count":{
                  let forks = rep1.forks_count >= rep2.forks_count ? 1 : -1;
                  return this.state.descending ? forks : -forks;

                }
                case "watchers_count":{
                  let watchers = rep1.watchers_count >= rep2.watchers_count ? 1 : -1;
                  return this.state.descending ? watchers : -watchers;
                }
              }
        }).map(repo=>{
          return <tr key={repo.id}>
            <td>{repo.name}</td>
            <td>{repo.description}</td>
            <td>{repo.url}</td>
            <td>{repo.forks_count}</td>
            <td>{repo.watchers_count}</td>
          </tr>
        });
        return table;
      }
    }
  sort(sortBy){
      if (this.sortBy == sortBy){
        this.setState({descending: !this.state.descending});
      }else{
        this.setState({descending: true});
      }
      this.sortBy = sortBy;
  }

    render() {
        return (
            <div className="GitRepos">
              <table>
                <tr>
                  <th onClick={()=>this.sort("name")}>name</th>
                    <th onClick={()=>this.sort("description")}>description</th>
                    <th onClick={()=>this.sort("url")}>url</th>
                    <th onClick={()=>this.sort("forks_count")}>forks_count</th>
                    <th onClick={()=>this.sort("watchers_count")}>watchers_count</th>
                </tr>
                {this.renderTable()}
                </table>
            </div>
        );
    }
}

