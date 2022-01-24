import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../icons/logo.png";

import { motion } from "framer-motion";
import { fader, containerAnim } from "../animation";

// email.js
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("user_LzRZJx8mpVHKx5wUhqn9C");

function Contact() {
  const [status, setStatus] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jj9lewp",
        "template_de4cjch",
        form.current,
        "user_LzRZJx8mpVHKx5wUhqn9C"
      )
      .then(
        (result) => {
          console.log(result);
          setStatus("sent");
          e.target.reset();
        },
        (error) => {
          alert(error);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setStatus("");
    }, 3000);
  }, [status]);

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Section>
        <Container variants={containerAnim} initial="hidden" animate="show">
          <HeaderContainer>
            <img src={logo} alt="logo" />
            <h2>Contact Form</h2>
          </HeaderContainer>
          <p>Your Name:</p>
          <INPUT type="text" name="user_name" />
          <p>Your e-mail address:</p>
          <INPUT type="text" name="user_email" />
          <p>Message:</p>
          <TEXTAREA name="message" />
          <BUTTON type="submit" value="Send">
            Submit
          </BUTTON>
          {status === "sent" && <SENT />}
        </Container>
      </Section>
    </form>
  );
}

export default Contact;

const SENT = () => {
  return (
    <MessageSent>
      <h3>You Message Has Been Sent</h3>
    </MessageSent>
  );
};

const MessageSent = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    color: #00ff00;
  }

  margin-top: 1rem;
`;

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
`;

const Container = styled(motion.div)`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  background: #1234567d;
  border: 0.1rem solid #ffffff62;
  box-shadow: #00000057 5px 4px 4px 2px;
  border-radius: 4px;
  width: 30rem;
  padding: 2rem;
  text-align: left;
  p {
    color: #e7e7e7;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 2rem;
  margin-bottom: 2rem;
  img {
    width: 2rem;
    margin-right: 1rem;
  }
`;

const INPUT = styled.input`
  width: 20rem;
  height: 2rem;
  font-size: medium;
  margin-bottom: 1rem;
  background: #ffffff10;
  border: none;
  border-bottom: 2px solid #e7e7e778;
  color: #e7e7e7;
  text-indent: 0.6rem;
`;

const TEXTAREA = styled.textarea`
  width: 20rem;
  min-width: 20rem;
  max-width: 20rem;
  height: 8rem;
  font-size: large;
  background: #ffffff10;
  border: none;
  border-bottom: 2px solid #e7e7e778;
  color: #e7e7e7;
  text-indent: 0.6rem;
`;

const BUTTON = styled.button`
  width: 20rem;
  height: 2rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  background: #0038a09d;
  color: #e2e2e2;
  border-radius: 8px;
  border: 1.4px solid #f3f8d5;
  cursor: pointer;
  :hover {
    border: 2px solid #c8d38e;
    background: #0244c0c3;
  }
  :active {
    background: #999ca3c3;
    color: #123123;
  }
`;
