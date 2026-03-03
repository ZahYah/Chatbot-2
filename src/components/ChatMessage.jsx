import RobotProfileImage from "../assets/img/robot.png"
import UserProfileImage from "../assets/img/user.png"
import "./ChatMessage.css";
 
 export default function ChatMessage({ message, sender}){
          return(<div 
            className = {sender == 'user' ? "chat-message-user" : 
            "chat-message-robot"}
            >
            {sender === "robot" && <img src={RobotProfileImage} alt="user-img" className= "chat-message-profile"/>}
            <div className = "chat-message-text">{message}</div>
            {sender === "user" && <img src={UserProfileImage} alt="user-img" className = "chat-message-profile"/>}
          </div> )
        }
