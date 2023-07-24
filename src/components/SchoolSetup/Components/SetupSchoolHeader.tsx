import styled  from "@emotion/styled";
import { FaQuestionCircle } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

interface Props{
  heading?: string;
onToggle:()=>void;
isActive: boolean;
}

export const Header = ({heading="provide Heading", onToggle, isActive}:Props) => {



  return (
    <SchoolHeader>
      <div className="head">
        <p>{heading}</p>
        <FaQuestionCircle/>
      </div>
     <div className="head">
     {isActive ? <Button   buttonColor="#467FFF">Edit</Button> : ''}
       
       <Button onClick={onToggle} >{isActive ?  <FaAngleUp size="24px" className="arrow" /> : <FaAngleDown size="24px" className="arrow" /> }</Button>
     </div>

      </SchoolHeader>
  )
}

type props = {
  buttonColor?: string;
  buttonPadding?: string;
  hoverColor?: string;
};

const SchoolHeader = styled.div`
display: flex;
width: 100%;
padding: 2px 16px 8px 16px;
justify-content: space-between;
align-items: center;
align-self: stretch;
border-bottom: 1px solid rgba(216, 216, 216, 0.10);
.head{
  display:flex;
 place-items: center;
  gap: 4px;
}
`
const Button = styled.button`
  font-family: Gilroy;
  display: flex;
  width: fit-content;
  justtify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-size: 16px;
  font-width: 400;
  padding: ${({ buttonPadding }: props) => buttonPadding || "8px 16px"};
  border-radius: 300px;
  border: none;
  // my button
  background-color: ${({ buttonColor }: props) => buttonColor || "#3d3d3d"};
  :hover {
    background-color: ${({ hoverColor }: props) => hoverColor || hoverColor};
  }
`;