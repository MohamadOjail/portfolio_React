import React, { useState } from "react";
import styled from "styled-components";
// cards info source
import { Info } from "./GitProjectSource";
import { motion } from "framer-motion";
import { fader, containerAnim } from "../animation";

function GitSection() {
  const [Cards] = useState(Info);
  return (
    <Section>
      <h2>Latest on Github</h2>
      <Container>
        {Cards.map((Card) => (
          <CardDiv
            key={Card.title}
            image={Card.image}
            title={Card.title}
            text={Card.text}
            link={Card.link}
          ></CardDiv>
        ))}
      </Container>
    </Section>
  );
}

export default GitSection;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-top: 4rem;
    font-weight: 500;
    font-size: 2rem;
  }
  background-image: url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(motion.div)`
  backdrop-filter: blur(30px);
  background: #1234567d;
  border: 0.1rem solid #ffffff62;
  box-shadow: #00000057 5px 4px 4px 2px;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20rem;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  h3 {
    font-weight: 500;
    font-size: 1.6rem;
    color: #ccff6c;
  }
`;

const CardDiv = ({ image, title, text, link }) => {
  return (
    <StyledCard variants={containerAnim} initial="hidden" animate="show">
      <motion.img src={image} alt="image" variants={fader} />
      <motion.h3 variants={fader}>{title}</motion.h3>
      <motion.p variants={fader}>{text}</motion.p>
      <motion.a href={link} target={"_blank"} variants={fader}>
        Github link
      </motion.a>
    </StyledCard>
  );
};
