import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContex";

class About extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <div className="flex">
          LoggedIn User  -  
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    )
  }
}

/* const About = () => {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name = {"Dungeon Master"} location={"Hyderabad"}  />
      </div>
    );
  }; */
  
  export default About;