import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          userInfo : {
            name: "Dummy",
            location : "Default",
            id : "123"
          }
        }
    }

    async componentDidMount() {
       // API Call
       const data = await fetch("https://api.github.com/users/bhupendra8753");
       const json = await data.json();

       console.log(json);
       this.setState({
        userInfo: json
       });
    }

    componentDidUpdate() {
      console.log(" Component Did Upadte");
    }

    componentWillUnmount() {
      console.log("Component will UnMount");
    }

  render() { 
    const {name, location, id, avatar_url} = this.state.userInfo;
    
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Id: {id}</h4>
      </div>);
  }
}

export default UserClass;



/**
 * -----Mounting------
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 * <this.setState> --- State Varible is updated
 * 
 * -----UpDate-----
 * 
 *      Render(API data)
 *      <HTML (new API Data)>
 *      Component Did Update
 */