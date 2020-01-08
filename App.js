import React from 'react';
import logo from './logo.svg';
import './App.css';

class Checkinput extends React.Component{
  render(){
    return(
        <label> {this.props.value}
          <input type = "checkbox" checked/> {this.props.o1}
          <input type = "checkbox" /> {this.props.o2}
        </label>
    );
  }
}

class Selectinput extends React.Component{
  render(){
    return(
      <label> {this.props.value}
      <select>
        <option value = 'mr'> {this.props.o1} </option>
        <option value = 'ms'> {this.props.o2} </option>
        <option value = 'mrs'> {this.props.o3} </option>
        <option value = 'mrs'> {this.props.o4} </option>
      </select>  </label>
    );
  }
}

class Dateinput extends React.Component{
  render(){
    return(
        <label> {this.props.value} <input type = "date"/> </label>
    );
  }
}

class Textinput extends React.Component{
  render(){
    return(
        <label> {this.props.value} <input type="text" onChange={() => this.props.onChange(this.target.value)}/> </label>
    );
  }
}

class Travelit extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tot : null,
    };
  }

  render(){
    return(
      <div>
        <div>
          <h3> TRAVEL ITENARY</h3>
          <Selectinput value = "Type of travel" o1=" " />
          <Selectinput value = "Type of visa" o1=" " />
          <Selectinput value = "Child count" o1="1" o2="2" />
          <Checkinput value = "Spouse" o1="Yes" o2="No" />
          <Checkinput value = "Children(s)" o1="Yes" o2="No" />
        </div>
        <div>
          <Selectinput value = "From location" o1="1" o2="2" />
          <Selectinput value = "To location" o1="1" o2="2" />
          <Dateinput value = "Journey Start Date" />
          <Dateinput value = "Journey End Date" />
        </div>
      </div>
    );
  }
}

class Details extends React.Component{
  constructor(props){
    super(props);
    this.state={
      titleValue: null,
      surname :null,
      gname : null,
      passnum : null,
      visanum : null,
      commadd : null,
    };
  }

    render(){
      return(
        <div>
          <h3> {this.props.value} </h3>
          <form>
            <div className="row-1">
              <Selectinput value = "Title" o1="Mr." o2="Ms." o3="Mrs."/>
              <Textinput value = "Surname as per Passport" />
              <Textinput value = "Given name as per Passport" />
              <Dateinput value = "Date of birth (As per passport)" />
            </div>
            <div className="row-2">
                <Textinput value = "Passport Number"  />
                <Textinput value = "Visa Number"  />
                <Textinput value = "Communication address with pincode" />
            </div>
          </form>
        </div>
      );
    }
}



class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
    //unsure of framing the design
    comments : null,
    };
  }

  mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are submitting " + this.state.comments);
    }

    myChangeHandler = (value) => {
        this.setState({comments: value});
      }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <div className="travelRequest">
        <h1> NEW TRAVEL REQUEST </h1>
        <div className="travelRequest1">
          <Travelit />
          <Details value = "PERSONAL INFORMATION (SELF)"/>
          <Details value = "SPOUSE INFORMATION"/>
          <Details value = "CHILD01 INFORMATION"/>
          <Details value = "CHILD02 INFORMATION"/>
        </div>
        <div>
        <h3> NOMINEE INFORMATION FOR INSURANCE </h3>
          <Selectinput value = "Title" o1="Mr." o2="Ms." o3="Mrs."/>
          <Textinput value = "Name"/>
          <Selectinput value = "Purpose of stay" o1="Intercompany exchange" o2="Etc" o3="Etc"/>
        </div>
        <div> <Textinput value = "Add comments" onChange={() => this.myChangeHandler()}/> </div>
      </div>
      <input type = 'submit' />
      </form>
    );
  }
}

export default App;
