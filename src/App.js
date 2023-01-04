import "./styles.css";
import React, { useState } from "react";
import styled from "styled-components";
import * as TextStyles from "./TextStyles";

import Logo from "./components/Logo";
import PlayButton from "./components/PlayButton";
import ImgControl from "./images/controls.png";
import Header from "./components/Header";
import CloseButton from "./components/CloseButton";
import SplineScene from "./components/SplineScene";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper className="App">
      <LogoCon>
        <Logo />
      </LogoCon>
      <ConWrapper>
        <Container>
          <TextCon>
            <Title>GAME ROOM DESIGN</Title>
            <Description>
              3D Game Room Desgin Using React and Spline by AnshulxD
            </Description>
          </TextCon>
          <ButtonCon>
            <PlayButton onClick={() => setIsOpen(true)} />
          </ButtonCon>
          <GradientLine />
          <ControlCon1>
            <Subtitle>Keyboard Keys</Subtitle>
            <ControlImg src={ImgControl} alt="Control_img" />
          </ControlCon1>
        </Container>
        <SplineCon isOpen={isOpen}>
          <Header />
          <CloseButton isOpen={isOpen} onClick={() => setIsOpen(false)} />
          <SplineScene />
        </SplineCon>
      </ConWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const LogoCon = styled.div`
  position: absolute;
  top: 34px;
  left: 0px;
`;

const TextCon = styled.div`
  display: grid;
  top: 44px;
  gap: 24px;
  max-width: 460px;
  padding: 125px 0px 0px 56px;

  @media (max-width: 560px) {
    padding: 145px 20px 0px;
  }
`;

const Title = styled(TextStyles.H1)``;
const Description = styled.div`
  max-width: 360px;
  text-align: left;
  font-family: "Inter", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

const ButtonCon = styled.div`
  position: absolute;
  left: 0%;
  right: 23.81%;
  bottom: 36%;
  display: grid;
  grid-template-columns: auto;
  justify-content: start;
  gap: 20px;
  background: linear-gradient(
    3000deg,
    #f1f1f1 12.86%,
    rgba(455, 355, 155, 0) 83.72%
  );
  mix-blend-mode: normal;
  padding: 30px 0px 30px 100px;
  margin-top: 53px;

  @media (max-width: 560px) {
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
    align-content: center;
    padding: 32px 20px;
    margin-top: 40px;
  }
`;

const GradientLine = styled.div`
  width: 0%;
  height: 100px;
  background: linear-gradient(
    185deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0) 50%
  );

  @media (max-width: 1400px) {
    display: block;
  }
`;

const ControlCon1 = styled.div`
  display: block;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const Subtitle = styled(TextStyles.BodyMain)`
  color: rgba(0, 0, 0, 0.6);
  padding-left: 14px;
  margin-top: 56px;

  @media (max-width: 560px) {
    padding: 0px 20px;
  }
`;

const ControlImg = styled.img`
  max-width: 326px;
  padding: 14px 0px 0px 56px;

  @media (max-width: 560px) {
    padding: 0px 20px;
  }
`;

const ConWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 855px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    align-content: center;
    padding-bottom: 40px;
  }
`;

const Container = styled.div`
  position: relative;
`;

const SplineCon = styled.div`
  position: ${(props) => (props.isOpen ? "fixed" : "relative")};
  padding: ${(props) => (props.isOpen ? "0px" : "24px 20px 24px 0px")};

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

  .spline {
    border-radius: ${(props) => (props.isOpen ? "0px" : "20px")};
  }

  .closeButton {
    top: 50%;
    left: -32px;
  }

  @media (max-width: 1400px) {
    padding: ${(props) => (props.isOpen ? "0px" : "0px 20px 10px")};

    @closebutton (
      top: -44px;
      left:50%;
      margin-left: -50px;
      transform: rotate(90%)
    );
  }
`;
