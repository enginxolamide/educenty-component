import styled from "@emotion/styled";
import { Header } from "./Components/SetupSchoolHeader";
import { useState } from "react";
import coverImage from "../../assets/SchoolCoverImage.jpg";


interface props{
  coverImageUrl: string;
  logoUrl: string;
  schoolName: string;
  operationLGA: string
}


export const SetupschoolLogo = ({coverImageUrl,logoUrl, schoolName, operationLGA}:props) => {
  const[isActive, setIsactive] = useState(false)
coverImageUrl=coverImage
logoUrl="data:image/png;base64,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"
schoolName="Queensland Academy"
operationLGA="Okota"
  return (
    <Card>
     <Header heading="Logo & Cover Image" onToggle={()=>{setIsactive(!isActive)}} isActive={isActive}/>
     {isActive && <div className="accordionContent">
      
     <p>Only jpg, png, Cover image : max size 5mb, Logo : max size 1mb </p>
     <div>
     <CardTop imageUrl={coverImageUrl}></CardTop>
      <CardBody>
      <div className="mainInfo">
          <img sizes="cover" src={logoUrl} alt="School Logo" />
            <div>
              <h2>{schoolName}</h2>
              <p>{operationLGA}</p>
            </div>
          </div>
            </CardBody>
     </div>

     </div>}
      </Card>
  )
}

// type style ={
// imageUrl?: URL
// }
type style = {
  imageUrl: string;
};

const Card = styled.div`
height: fit-content;
  width: 100%;
  max-width: 900px;
  background-color: #2f2f2f;
  border-radius: 8px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
  justify-content: space-between;
  text-align: left;
  font-family: Gilroy;
  :hover {
    background: #404040;
    filter: drop-shadow(3px 3px 5px #1d1d1d);
    // border: 1px dotted #8E81F6;
  }
  .accordionContent{
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 4px;
  }
`
const CardTop = styled.div`
height: 148.837px;
background-color: #8E81F6;
border-radius: 4px;
display: flex;
padding: 24px;
justify-content: end;
border-radius: 8px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%), url(${({imageUrl}:style)=>imageUrl}), lightgray 50% / cover  no-repeat;
background-position: center center;
.moreOption{
    
    border-radius: 30px;
    height: 30px;
    width: 30px;
    
    background: #2f2f2f;
    padding: 5px;
    text-align: center;
    :hover{
        color: #467FFF;
        background: #404040;
    }
}
`;
const CardBody = styled.div`
margin-top: -40px;

padding: 0 24px 16px;
.mainInfo{
display: flex;
align-items: end;
align-self: stretch;

width: fit-content;
gap: 8px;
}
img{
    width: 92.968px;
    height: 92.968px;
    border-radius: 4px;
    background-color:#fff;
    border: 2px solid white;
    object-fit: cover;
    box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.25);
}
h2{
    color: #FFF;
    font-family: Gilroy;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.345px;
}
p{
    color: #FFF;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.24px;
    font-size: 16px;
}


`;