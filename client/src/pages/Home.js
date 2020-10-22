import React from "react";
import Card from "../components/Card";

function Home() {
  return(
    <Card title="About Me">
      <>
       <div className="card-image">
          <figure className="is-4by3">
            <img src="../../public/assets/Profilepic-250x250.jpg" alt="Thumbnail of Haley" />
          </figure>
        </div>

        <div className="card-content">
          <p><span style="font-size:2.5rem">Haley Myers</span></p>
        </div>

        <div className="content">
          <p>Born in Jackson, MS, and raised in an artisitic and  crafty family. I've been in Nashville
              for almost a decade and love the community here. After staying home with my son for a few
              years, I was itching to challenge myself creatively and intellectually. Coding is something
              that really stretches me to constantly be learning and trying new things. I hope to take my
              minimalistic style and background in art and design to create elegant layouts and interface
              for apps and websites.
          </p>
        </div>

        <div className="content">
          <p>
            I'm an avid gardener, crafter, and reader. My husband Josh and I have been married for 10 years!
            I have one son, Peter. Together we enjoy house projects, enjoying our property, gardens, and
            creek, and camping when we get the chance.
          </p>
        </div>
      </>
    </Card>
  );
};

export default Home;