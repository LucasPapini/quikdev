import styled from "styled-components";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Container = styled(DialogPrimitive.Content)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .boxConteudoModal {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    width: 50%;
    height: 50%;
    padding-top: 1.5rem;
    border-radius: 10px;

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      border-radius: 50%;
      border: none;
      background-color: red;
      color: white;
      width: 24px;
      height: 24px;
    }

    input {
      width: 90%;
      height: 46.39px;
      border: none;
      background: rgba(217, 217, 217, 0.4);
      border-bottom: 1px solid #7a6e6e;
      border-radius: 5px 5px 0px 0px;
      padding: 10px;
      font-size: 17px;
      margin-bottom: 0.5rem;
      margin-top: 1.5rem;
    }

    .action {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;

      button {
        width: 100%;
        border-radius: 10px;
        padding: 1rem;
        color: white;
        font-size: 15px;
        background: green;
        text-transform: uppercase;
        font-weight: 600;
        border: none;

        & + button{
          background: red;
        }
      }
    }

    @media (max-width: 720px) {
      width: 90%;
    }
  }
`;
