import React from "react";
import Technology from "../Technology/Technology";
import "./styles.scss";

const TechnologySection = () => {
  return (
    <div className="tech-stack">
      <Technology
        title="HTML"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML logo"
        description="Some tool"
        bgColor="#e44c2667"
      />
      <Technology
        title="CSS"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS logo"
        description="Some tool"
        bgColor="#264de467"
      />
      <Technology
        title="JavaScript"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript logo"
        description="Some tool"
        bgColor="#f7df1e67"
      />
      <Technology
        title="React"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React logo"
        description="Some tool"
        bgColor="#61dafb67"
      />
      <Technology
        title="C#"
        img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        alt="C# logo"
        description="Some tool"
        bgColor="#23912067"
      />
      <Technology
        title=".NET"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png"
        alt=".NET logo"
        description="Some tool"
        bgColor="#512bd467"
      />
      <Technology
        title="Tailwind CSS"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
        alt="Tailwind CSS logo"
        description="Some tool"
        bgColor="#06b6d467"
      />
    </div>
  );
};

export default TechnologySection;
