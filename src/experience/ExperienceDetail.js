export function ExperienceDetail(props){
    return(
        <div className="information-container">
            <div className = "Avatar-container">
                <img className = "avatar" src = {props.image} />
            </div>
            <div className="detail-container">
                <div className="experience-detail"> 
                <h2>Company Name</h2>
                <p>{props.companyName}</p>
                </div>
                <div className="experience-detail"> <h2>Working Time</h2>
                <p>{props.time}</p>
                </div>
                <div className="experience-detail"> <h2>Project Name</h2>
                <p>{props.projectName}</p>
                </div>
                <div className="experience-detail"> <h2>Language</h2>
                <p>{props.language}</p>
                </div>
                <div>
                <h2>Description</h2>
                 {props.details.map((detail, index) => (
        <div key={index}>
          <li>{detail}</li>
        </div>
      ))}
      </div>
            </div>
        </div>
    )
}