import React, {useState} from 'react';
import './ChatBotIcon.css';

function ChatBotIcon() {

    const [src, setSrc] = useState("images/more.jpg");
    const [more, setMore] = useState("more-icon")
    
    function change_image(){
        if(src === "images/times-circle-regular.svg")
        {
            setSrc("images/more.jpg")
        }
        else
        {
            setSrc("images/times-circle-regular.svg")
        }

        if(more === "more-icon")
        {
            setMore("cancel-icon");
        }
        else
        {
            setMore("more-icon")
        }
    }

    return (
        <div>
            <a href="#icons" data-toggle="collapse" title="More"><img onClick = {change_image} className={more} src={src} alt="faulty"/></a>
            <div id="icons" className="icon collapse">
                <a href="/feedback" data-toggle="tooltip" title="FeedBack"><img className="symbol1" src="images/feedback.svg" alt="faulty"/></a>
                <a href="/chatbot" data-toggle="tooltip" title="ChatBot"><img className="symbol2" src="images/chatbot.png" alt="faulty"/></a>
            </div>
        </div>
    )
}

export const Feedbackicon = function FeedbackIcon() {
    
        return (
            <div className="icon">
                <a href="/feedback" data-toggle="tooltip" title="FeedBack"><img className="common-icon" src="images/feedback.svg" alt="faulty"/></a>
            </div>
        )
    }

export const ChatbotIcon = function ChatbotIcon() {
    
        return (
            <div className="icon">
                <a href="/chatbot" data-toggle="tooltip" title="ChatBot"><img className="common-icon" src="images/chatbot.png" alt="faulty"/></a>
            </div>
        )
    }
    
    export default ChatBotIcon
