import React from "react";
import "./About.css";
import logo from "../img/logo.jpg";

const About = () => {
  return (
    <div className="abt-container">
      <div className="abt-img">
        <img src={logo} alt="" />
      </div>
      <div className="abt-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        libero minus omnis vel dicta illo quod. Culpa aliquid quidem et
        similique dignissimos, delectus excepturi in dolor consequatur
        exercitationem sunt possimus eum repellat sint cum distinctio itaque,
        explicabo nam, architecto corporis quaerat labore incidunt. Reiciendis
        assumenda, debitis, repellat veritatis laudantium nesciunt quae tempora
        incidunt commodi nemo unde. Alias quis natus blanditiis omnis. Animi
        voluptatum velit cumque, commodi placeat autem molestiae pariatur
        asperiores nostrum. Vero odio accusamus facilis aliquam quia officiis
        omnis corrupti repudiandae. Autem, facere ea possimus qui ut aliquam
        inventore ad nemo repellendus, sequi, repellat maxime vero cupiditate
        perferendis dolorem!
      </div>
    </div>
  );
};

export default About;
