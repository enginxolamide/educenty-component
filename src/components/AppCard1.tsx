import styled from "@emotion/styled";

//icons
import { FaCheckCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

//interface
interface Props {
  cardTitle?: string;
  cardDescription?: string;
  InstallStatus?: "installed" | "Uninstall" | "install";
  lastUpdate?: string;
  downloadCount?: number;
}

//App
export const AppCard = ({
  cardTitle,
  cardDescription,
  InstallStatus,
  lastUpdate,
  downloadCount,
}: Props) => {


  cardTitle = "My School";
  cardDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, totam.";
  InstallStatus = "installed";
  lastUpdate = "22 may, 2023";
  downloadCount = 200;


  return (
    <Card>
      <CardTop>
        <Cardlogo />
        <CardStatus>
          {/* Number of dowloads */}
          <Button buttonPadding="4px 8px">
            <FaUserCheck />
            <p>{downloadCount}</p>
          </Button>

          {/* last Update */}
          <Button buttonPadding="4px 8px">
            <MdOutlineUpdate />
            <p>{lastUpdate}</p>
          </Button>

          {/* Installation status */}
          <Button
            hoverColor="#359b9b"
            buttonColor="#2eb29e"
            buttonPadding="4px 8px"
          >
            <FaCheckCircle />
            <p>{InstallStatus}</p>
          </Button>
        </CardStatus>
      </CardTop>
      <CardBody>
        <h3>{cardTitle}</h3>
        <p>{cardDescription}</p>
      </CardBody>
      <CardFoot>
        <Button hoverColor="#525252">Learn more</Button>
      </CardFoot>
    </Card>
  );
};

//style
type props = {
  buttonColor?: string;
  buttonPadding?: string;
  hoverColor?: string;
};
const Card = styled.div`
  height: 270px;
  width: 270px;
  background-color: #2f2f2f;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: space-between;
  text-align: left;
  font-family: Gilroy;
  :hover {
    filter: drop-shadow(3px 3px 5px #1d1d1d);
    background-color: #404040;
  }
`;
const CardTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Cardlogo = styled.img`
  height: 90px;
  width: 90px;
  background-color: lightblue;
  border: none;
  border-radius: 8px;
`;
const CardStatus = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 4px;
  height: 100%;

  text-align: left;
`;
const CardBody = styled.div`
  width: 100%;

  h3 {
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
    line-height: 1.4;
    white-space: wrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
  }
`;
const CardFoot = styled.div`
  width: 100%;
`;
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
