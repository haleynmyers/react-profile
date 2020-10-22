import React from "react";
import Card from "../components/Card";
import { Document } from "react-pdf";

function Resume() {
    return(
      <Card title="Resume" >
        <Document file="../../public/HM-resume.pdf" />
      </Card>

    );
};
export default Resume;