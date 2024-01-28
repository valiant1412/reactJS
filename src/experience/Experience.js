import "./style.css"
import { ExperienceDetail } from "./ExperienceDetail";
import LogoImage from "./image/logo1.png"
export function Experience(){

    const experiences =[
        {
        image:LogoImage,
        companyName:"HCL Tech Company",
        time:"From 28/9/2023 to Now",
        projectName:"REDARC",
        language:"C#",
        details:['Create DEE Actions, Refactor code, Update document, Set up connect IOT'],}
    ];

  return (
    <div>
      <h1>Experience</h1>
      {experiences.map((experience, index) => (
        <ExperienceDetail key={index} {...experience} />
      ))}
    </div>
  );
}