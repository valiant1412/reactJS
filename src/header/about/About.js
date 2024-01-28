import "./style.css"
import MyImage from "./images/avatar.jpg"
export function About(){
    const background_information = {
        "Name":"Nguyễn Minh Đức",
        "Date of birth": "14/12/2001",
        "Address":"47 Mai Dich, Ha Noi",
        "Phone":"0366505194"
    };
    
    return(
        
            <div className="About-container">
                <div className = "Information-container">
                    <h1>Hi everyone, this is me!</h1>
                     {Object.entries(background_information).map(([key,value])=>(
                        <div className ="detail-element"key={key}>
                            <strong>{key}</strong>: {value}
                        </div>
                     ))}
                     <div className="btn-container">
                        <button className = "button"> Contact me</button>
                        <a href="">Check my CV</a>
                     </div>
                </div>
                <div className = "Avatar-container">
                <img src={MyImage} className="avatar-image"alt = "avatar"/>
                </div>
            </div>
            
        
    )
}