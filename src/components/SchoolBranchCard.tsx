import styled from "@emotion/styled";

import { TfiMoreAlt } from "react-icons/tfi";

export const SchoolBranchCard = () => {
  return (
    <Card>
      <CardTop>
      <div className="moreOption">
          <TfiMoreAlt size="16px"/>
      </div>

      </CardTop>
      <CardBody>
      <div className="mainInfo">
          <img src="" alt="" />
            <div>
              <h2>schoolName</h2>
              <p>operationLGA</p>
            </div>
          </div>
            </CardBody>
      <CardFoot></CardFoot>
    </Card>
  );
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
`;
const CardTop = styled.div`
height: 148.837px;
background-color: #8E81F6;
border-radius: 4px;
display: flex;
padding: 24px;
justify-content: end;
.moreOption{
    
    border-radius: 30px;
    height: 30px;
    width: 30px;
    background-color: #2f2f2f;
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
    padding: 30px;
    border: 2px solid white;
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

const CardFoot = styled.div``;
