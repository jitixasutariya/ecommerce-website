import React, { useState } from "react";
import { Button } from "../../../../styles/Button";
import styled from "styled-components";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  function SignUp() {
    let input = { name, email, password };
    console.log(input);
  }

  return (
    <Wrapper>
      <h2 className="common-heading">SignUp</h2>
      <div className="container">
        <div className="signup-form">
          <form action={SignUp()} method="POST" className="signup-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              autoComplete="off"
              placeholder="Password"
            />
            <Button>Send</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .signup-form {
      max-width: 50rem;
      margin: auto;

      .signup-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default SignUp;
