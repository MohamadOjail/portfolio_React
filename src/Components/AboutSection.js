import React from "react";
import styled from "styled-components";
import MohPic from "../img/Mohamad_in_office.jpg";
// icons
import css from "../icons/css.svg";
import html from "../icons/html.svg";
import js from "../icons/js.svg";
import react from "../icons/react.svg";
import sharp from "../icons/c-sharp.svg";
// animation
import { motion } from "framer-motion";
import { fader } from "../animation";

function AboutSection() {
  return (
    <MyDiv>

    <Section variants={fader} initial="hidden" animate="show">
      <Container className="words">
        <img src={MohPic} alt="Mohamad" />
        <h3>Me in Words:</h3>
        <p>Problem solver, love coding, fast learner</p>
      </Container>
      <Container className="studies">
        <h3>Currently:</h3>
        <p>My undergoing studies include:</p>
        <ul>
          <li>
            <p>
              System Developer - Java at{" "}
              <a
                href="https://ya.se/yrkeshogskola/systemutvecklare-java/"
                target={"_blank"}
                >
                Yrkesakademin
              </a>
            </p>
          </li>
          <li>
            <p>JavaFx</p>
          </li>
        </ul>
        <p>Frameworks that I am learning at the moment:</p>
        <table>
          <tbody>
            <tr>
              <TD>
                <img src={html} alt="html" />
              </TD>
              <TD>
                <img src={css} alt="css" />
              </TD>
              <TD>
                <img src={js} alt="javascript" />
              </TD>
              <TD>
                <img src={react} alt="react" />
              </TD>
            </tr>
          </tbody>
        </table>
        <h3>Other competence:</h3>
        <table>
          <tbody>
            <tr>
              <TD>
                <img src={sharp} alt="c-sharp" width={"48px;"} />
              </TD>
              <TD>
                <p>
                  {" "}
                  Studied Programmering 1 at{" "}
                  <a
                    href="https://nti.se/komvux-pa-distans/programmering-1/"
                    target={"_blank"}
                    >
                    {" "}
                    NTI Skolan
                  </a>
                </p>
              </TD>
            </tr>
          </tbody>
        </table>
      </Container>
    </Section>
                    </MyDiv>
  );
}

export default AboutSection;

const Section = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  backdrop-filter: blur(10px);
  background: #1234567d;
  border: 0.1rem solid #ffffff62;
  box-shadow: #00000057 5px 4px 4px 2px;
  border-radius: 4px;
  width: 30rem;
  height: 28rem;
  padding: 2rem;
  li {
    list-style: circle;
    margin-left: 1rem;
  }

  &.words {
    width: 22rem;
    margin-right: 2rem;
    img {
      width: 18rem;
    }
  }
`;

const TD = styled.td`
  padding: 0.5rem;
  vertical-align: middle;
`;

const MyDiv = styled.div`
  background-image: url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: cover;
`