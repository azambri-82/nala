import React from "react";
import styled from "styled-components";

interface HeaderProps {
  logoSrc: string;
  buttonText: string;
  onClick: () => void;
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Button = styled.button`
  border: none;
  background-color: #5a8dfa;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const Header: React.FC<HeaderProps> = ({ logoSrc, buttonText, onClick }) => {
  return (
    <>
      <HeaderContainer>
        <Logo src={logoSrc} />
        <Button onClick={onClick}>{buttonText}</Button>
      </HeaderContainer>
    </>
  );
};

export default Header;
