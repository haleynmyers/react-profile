import React from "react";
import Card from "../components/Card";

function Resume() {
  
    return(
      <Card title="Resume"  >
        <img style={{maxWidth: "100%"}} src={process.env.PUBLIC_URL + "/resume-HM.png"} alt="Haley Myers Resume - Full Stack Web Dev" />
      </Card>

    );
};
export default Resume;