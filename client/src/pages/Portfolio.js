import React from "react";
import Project from "../components/Project";
import projects from "../utils/project.json";

class Portfolio extends React.Component() {
  state = { projects };

    render(){
      return (
        <div className="card-group d-flex flex-wrap">
          {this.state.projects.map((p, key) => {
            return (
              <Project
                key={p.id}
                title={p.title}
                image={p.image}
                description={p.description}
                repo={p.repo}
                link={p.link}
              />
            );
          })}
        </div>
      );
    };
}
export default Portfolio;