import styled from "styled-components";

export const BoxCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;

  .form {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
    border-radius: 10px;

    width: 550px;
    padding: 1.5rem 2.5rem;

    @media (max-width: 720px) {
      width: 100%;
    }

    .field {
      margin-bottom: 2rem;
    }

    h1 {
      margin: 3rem 0 2rem 0rem;
    }

    .field label {
      display: block;
      margin-bottom: 0.5rem;
    }

    .field input {
      width: 100%;
      height: 46.39px;
      border: none;
      background: rgba(217, 217, 217, 0.4);
      border-bottom: 1px solid #7a6e6e;
      border-radius: 5px 5px 0px 0px;
      padding: 5px;
      font-size: 1rem;
    }

    .field a{
      font-weight: bold;
      text-decoration-line: underline;
    }

    .action {
      text-align: center;
      padding-top: 1rem;
    }

    .action button {
      background: #3152ff;
      border-radius: 10px;
      padding: 1rem 2rem;
      border: none;
      color: white;
      border: 1px solid #3152ff;
      font-size: 15px;

      &:hover{
        background: transparent;
        color: #3152ff;
        font-weight: 600;
      }

    }
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 15px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid currentColor;
  padding: 10px 5px;
  border-radius: 5px;
`;
