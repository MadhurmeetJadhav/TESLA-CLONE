import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Translate } from "@mui/icons-material";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="../images/logo.svg"></img>
      </a>

      <Menu>
        <a href="#">Modal S</a>
        <a href="#">Modal Y</a>
        <a href="#">Modal 3</a>
        <a href="#">Modal Z</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomIcons onClick={()=>setBurgerStatus(true)}></CustomIcons>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <ArrowIcon onClick={()=>setBurgerStatus(false)}></ArrowIcon>
        </CloseWrapper>
        <li>Eisting Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-in</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Eisting Inventory</li>
        <li>Eisting Inventory</li>
        <li>Eisting Inventory</li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transformation: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
    font-weight: 600;
    text-transformation: uppercase;
  }
`;

const CustomIcons = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const ArrowIcon = styled(ArrowForwardIcon)``;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
