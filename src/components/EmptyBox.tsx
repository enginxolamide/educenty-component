import styled from "@emotion/styled";
import  emptyBox  from "../assets/EmptyBox.svg";

export const EmptyBox = () => {
  return (
    <EmptyBody>
        <img src={emptyBox} alt="Empty Box" />
        <div className="emptyBoxContent">
            <p>No Application is currently installed. </p>
            
            <ul>
                <li>What is an App in Educenty?</li>
                <li>How to install an App?</li>
                <li>Take me to where to install an App?</li>
            </ul>
        </div>

    </EmptyBody>
  )
}

const EmptyBody = styled.div`
display: inline-flex;
align-items: center;
gap: 24px;
text-align: left;
img{
    width: 132px;
height: 132px;
}
li{
color: #FFF;
font-family: Gilroy;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.24px;
list-style:none;
:hover{
    text-decoration: underline;
    cursor: pointer;
}
}
`