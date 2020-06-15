import React from 'react';
import logo1 from './logo1.png';
import CheckBox from "./CheckBox.js";
import JoblocationSearch from "./JoblocationSearch.js";


import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      jobprogile:"",

      jobDetails:[{"jobprofile":"FrontEnd Developer","type":"Fulltime","company":"ABC Software","logo":logo1,"location":"Bangalore","experience":"1-2 Years",skills:["java","c++","c,Reactjs"]},
      {"jobprofile":"FrontEnd Developer","type":"Fulltime","company":"ABC Software","logo":logo1,"location":"Delhi","experience":"2-5 Years",skills:["java","c++"]},
      {"jobprofile":"BackEnd Developer","type":"Parttime","company":"A Software","logo":logo1,"location":"Pune","experience":"1-2 Years",skills:["java","c++","sql"]},
      {"jobprofile":"FrontEnd Developer","type":"Fulltime","company":"C Software","logo":logo1,"location":"Bangalore","experience":"3-5 Years",skills:["java","c++","mongodb"]},
      {"jobprofile":"FullStack Developer","type":"Freelancer","company":"xyz Software","logo":logo1,"location":"Mumbai","experience":"1-2 Years",skills:["java","c++","javascript"]},
      {"jobprofile":"BacktEnd Developer","type":"Fulltime","company":"ABC Software","logo":logo1,"location":"Bangalore","experience":"1-2 Years",skills:["java","c++","html"]},
      {"jobprofile":"FrontEnd Developer","type":"Fulltime","company":"AB Software","logo":logo1,"location":"Bangalore","experience":"5-7 Years",skills:["java","c++","python"]},
      {"jobprofile":"FullStack Developer","type":"Parttime","company":"AB Software","logo":logo1,"location":"Mumbai","experience":"3-5 Years",skills:["java","c++","python","Go"]},
      {"jobprofile":"BackEnd Developer","type":"Fulltime","company":"AB Software","logo":logo1,"location":"Bangalore","experience":"5-7 Years",skills:["java","c#","python"]}]
    }
  }

  onChangeJobprofile=(e)=> {
    this.setState({
      jobprofile: e.target.value
    })  
  }
  render(){
    console.log(this.state.jobDetails)
    console.log(this.state.jobprofile)

    
    return(
      <React.Fragment>
        <form >
                       <select value={this.state.jobprofile} onChange={this.onChangeJobprofile}>
                           <option>Select</option>
                           <option value="FrontEnd Developer">FrontEnd Developer</option>
                           <option value="BackEnd Developer">BackEnd Developer</option>
                           <option value="FullStack Developer">FullStack Developer</option>
                       </select>
                    <div > 
                    </div>
                </form> 
                
                {this.state.jobDetails.map((val,index)=>{
                  if(val.jobprofile === this.state.jobprofile){
                    
                    return(
                      <div className="blockstyle">
                      <h3>{val.jobprofile}</h3>
                      <p>{val.company}|{val.location}|{val.experience}</p>
                      <p>Skills: {val.skills+" , "} etc</p>
                     
                      </div>
                      )

                  }
                 
                })}
              <CheckBox jobdata={this.state.jobDetails}/>
              <JoblocationSearch jobdata={this.state.jobDetails} />
             

      </React.Fragment>
    )
  }
}