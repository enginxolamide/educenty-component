import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { RiArrowRightSLine } from "react-icons/Ri";
// import { Link } from "react-router-dom";

interface Props {
  buttonName?: string;
  helper?: string;
  // url?: string;
}

export const BigButtons = ({ buttonName, helper }: Props) => {
  buttonName = "Create a branch";
  helper = "Create & manage schools";
  // url = "url"

  return (
    //    <Link>
    <Button media="true">
      <div className="BigButtonText">
        <h3>{buttonName}</h3>
        <p>{helper}</p>
      </div>
      <RiArrowRightSLine size="24px" className="arrow" />
    </Button>
    //    </Link>
  );
};

type style = {
  media: string;
};

const Button = styled.button`
  height: fit-content;
  width: 100%;
  max-width: 900px;
  background-color: #2f2f2f;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  gap: 2px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  font-family: Gilroy;
  border: none;

  :hover {
    color: white;
    filter: drop-shadow(3px 3px 5px #1d1d1d);
    background-color: #404040;
  }

  :hover .arrow {
    color: white;
    border-radius: 100%;
    background-color: #2f2f2f;
  }

  .BigButtonText {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    text-align: left;

    h3 {
      font-size: 18px;
    }

    p {
      font-weight: 100;
    }
  }

  .arrow {
    color: #404040;
    :hover{
        background-color: #467FFF;
    }
  }

  ${({ media }: style) =>
    media &&
    css`
      @media (max-width: 470px) {
        padding: 8px 16px;
        .BigButtonText {
          gap: 4px;
          width: 90%;
        }
      }
    `}
`;
