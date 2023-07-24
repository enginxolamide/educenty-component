import styled from "@emotion/styled";
import underconstruction from "../assets/UnderConstruction.svg";

interface props{
    timeLeft?: string;
}


export const UnderConstruction = ({timeLeft}:props) => {
    timeLeft ="2 months, 30 days"
    
  return (
    <TimeLeft>
      <img src={underconstruction} alt="Page under construction" />
      <p>Check back in {timeLeft}</p>
    </TimeLeft>
  );
};

const TimeLeft = styled.div`
p{
    color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.24px;
}
`