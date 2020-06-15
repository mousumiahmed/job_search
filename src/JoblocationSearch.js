import React from "react";





export default class JobLocationSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            joblocation:"",
            jobexperience:"",
        }
    }
    onChangeJobLocation=(e)=>{
        this.setState({
            joblocation:e.target.value
        })
    }
    onChangeJobExp=(e)=>{
        this.setState({
            jobexperience:e.target.value
        })
    }
    render(){
        console.log(this.props.jobdata)
        console.log(this.state.joblocation)
        console.log(this.state.jobexperience)
        return(
            <React.Fragment>
                 <form style={{marginTop:"100px"}} >
                       <select value={this.state.joblocation} onChange={this.onChangeJobLocation}>
                           <option>Select location</option>
                           <option value="All">All</option>
                           <option value="Bangalore">Bangalore</option>
                           <option value="Delhi">Delhi</option>
                           <option value="Pune">Pune</option>
                           <option value="Mumbai">Mumbai</option>
                       </select>
                       <select style={{marginLeft:"10px"}} value={this.state.jobexperience} onChange={this.onChangeJobExp}>
                           <option>Select Experience</option>
                           <option value="1-2 Years">1-2 Years</option>
                           <option value="2-5 Years">2-5 Years</option>
                           <option value="3-5 Years">3-5 Years</option>
                           <option value="5-7 Years">5-7 Years</option>
                       </select>
                       
                    <div > 
                    </div>
                </form> 

                {this.props.jobdata.map((val,index)=>{
                  if((this.state.joblocation==="All") && (this.state.jobexperience===val.experience)){
                    
                    return(
                      <div className="blockstyle">
                      <h3>{val.jobprofile}</h3>
                      <p>{val.company}|{val.location}|{val.experience}</p>
                      <p>Skills: {val.skills+" , "} etc</p>
                     
                      </div>
                      )

                  }
                  else if((this.state.joblocation===val.location) && (this.state.jobexperience===val.experience)){
                    return(
                        <div className="blockstyle">
                        <h3>{val.jobprofile}</h3>
                        <p>{val.company}|{val.location}|{val.experience}</p>
                        <p>Skills: {val.skills+" , "} etc</p>
                       
                        </div>
                    )
                  }                
                })}

            </React.Fragment>
        )
    }
}