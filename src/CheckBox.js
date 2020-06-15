import React from 'react';




export default class CheckList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= { optionsChecked: [] }
    }
    

    changeEvent(event) {
      let checkedArray = this.state.optionsChecked;
      let selectedValue = event.target.value;
        
        if (event.target.checked === true) {
        
        	checkedArray.push(selectedValue);
            this.setState({
              optionsChecked: checkedArray
            });
                        
        } else {
        
        	let valueIndex = checkedArray.indexOf(selectedValue);
			checkedArray.splice(valueIndex, 1);
            
            this.setState({
              optionsChecked: checkedArray
            });
            
        }
    
    }
    
    render() {
        console.log(this.props.jobdata)
    	
        let checkBoxArray = ['Fulltime','Parttime','Freelancer'];
       
        let outputCheckboxes = checkBoxArray.map(function(string, i){
        	return (<div><CheckBox value={string} id={'string_' + i} onChange={this.changeEvent.bind(this)} /><label htmlFor={'string_' + i}>{string}</label></div>)
        }, this);
    
        return (
        	<div>
              <div>
                  {outputCheckboxes}
              </div>
              {this.props.jobdata.map((val,index)=>{
                  if(val.type === this.state.optionsChecked[0] ||val.type === this.state.optionsChecked[1]||val.type === this.state.optionsChecked[2] ){
                        return(
                            <div>
                                <div className="blockstyle">
                                <h3>{val.jobprofile}</h3>
                                <p>{val.company}|{val.location}|{val.experience}</p>
                                <p>Skills: {val.skills+" , "} etc</p>
                                <p>Job Type: {val.type}</p>
                            </div>
                        </div>
                        )

             } })}
            
            </div>
        )
    }
    
}


    class CheckBox extends React.Component {
     render() {
        return (
        	<input type="checkbox" id={this.props.id} value={this.props.value} onChange={this.props.onChange} />
        )
    }
    
}