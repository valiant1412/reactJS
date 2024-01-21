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
        <div className="About">
            
            <div className="Infor">
                <h1>Hi Everyone. This is Nguyen Minh Duc!</h1><br></br>
            {Object.entries(background_information).map(([key,value])=>
            
                <div>
                    <p><b>{key}</b>: {value}</p>
                    
                </div>
            )}
            <div className="btn">
                <button className="btn-contact"><b>Contact me</b></button>
                <a href="/">Check my CV</a>
            </div>
            </div>
            <div className="Avatar">
                <img className="avatar-image"src={MyImage} alt="avatar"/>
            </div>
        </div>
    )
}