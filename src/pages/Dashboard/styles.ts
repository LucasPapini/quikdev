import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 2rem;

  .menu {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      background: #3152ff;
      border-radius: 10px;
      padding: 1rem 2rem;
      border: none;
      color: white;
      border: 1px solid #3152ff;
      font-size: 15px;

      &:hover {
        background: transparent;
        color: #3152ff;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const BoxPost = styled.div`
  height: 210px;
  width: 333px;
  margin-top: 1rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;

  h2 {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  p{
    margin-bottom: 1rem;
  }

  @media (max-width: 720px) {
    width: 100%;
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      width: 100%;
      border-radius: 10px;
      padding: 1rem;
      color: white;
      font-size: 14px;
      background: green;
      text-transform: uppercase;
      font-weight: 500;
      border: 1px solid green;

      &:hover {
        background: transparent;
        border: 1px solid green;
        color: green;
      }

      & + button {
        background: red;
        border: 1px solid red;
        &:hover {
          background: transparent;
          border: 1px solid red;
          color: red;
        }
      }
    }
  }
`;
