import React from "react";
import styled from "styled-components";
import MoPic from "../img/Mohamad_Ojail.jpg";
// Icons
import { Github, LinkedIn } from "../icons/social-icons";
// animation
import { motion } from "framer-motion";
import { fader, containerAnim } from "../animation";

function HeroSection() {
  return (
    <Section>
      <Container variants={containerAnim} initial="hidden" animate="show">
        <Card>
          <motion.h1 variants={fader}>Mohamad Ojail</motion.h1>
          <motion.h2 variants={fader}>Student Developer</motion.h2>
          <Social variants={fader}>
            <LinkedIn />
            <Github />
          </Social>
        </Card>
        <StyledImg src={MoPic} alt="Mohamad" variants={fader} />
      </Container>
    </Section>
  );
}

export default HeroSection;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  backdrop-filter: blur(10px);
  background: #1234567d;
  border: 0.1rem solid #ffffff62;
  box-shadow: #00000057 5px 4px 4px 2px;
  border-radius: 4px;
  width: 50rem;
  height: 25rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const Social = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 2.8rem;
`;

const StyledImg = styled(motion.img)`
  width: 18rem;
`;
