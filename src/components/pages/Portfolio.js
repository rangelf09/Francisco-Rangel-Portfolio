import React from "react";
import PortfolioOutline from "../PortfolioOutline";
import projects from "../../assests/projects.json";


function Portfolio() {
  return (
    <div>



      <div className="container portfolio-container">
        <h1 className="title">Projects List</h1>
        <div className="row">
          <PortfolioOutline
            name={projects[0].name}
            project={projects[0].project}
            location={projects[0].location}
          />
        </div>
        <div className="row">
          <PortfolioOutline
            name={projects[1].name}
            project={projects[1].project}
            location={projects[1].location}
          />

          <PortfolioOutline
            name={projects[2].name}
            project={projects[2].project}
            location={projects[2].location}
          />
        </div>

        <div className="row">

          <PortfolioOutline
            name={projects[3].name}
            project={projects[3].project}
            location={projects[3].location}
          />

          <PortfolioOutline
            name={projects[4].name}
            project={projects[4].project}
            location={projects[4].location}
          />

        </div>
      </div>



    </div >
  );
}

export default Portfolio;