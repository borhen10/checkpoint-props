
import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import borhen from "./Picture/borhen.jpg";

const handleName = (name) => {
  alert(name);
};

const style = {
  width: "120px",
  height: "120px",
  
};

function App() {
  return (
    <React.Fragment>
      <Profile
        fullName="BORHEN Issaoui"
        bio="27 ans de Tunis Technicien Superieur en Technologies des resaux informatiques "
        profession="fullStack js"
        handleName={handleName}
      >
        <img src={borhen} alt="sigle" style={style} />
      </Profile>
      </React.Fragment>
    
  );
}

export default App;