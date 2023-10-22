import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
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