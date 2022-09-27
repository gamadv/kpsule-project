import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 1rem;
    font-weight: 900;
    max-width: 302px;
    text-align: center;
  }

  #buttonsContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;

    margin-top: 2rem;
    button {
      width: 100%;
      max-width: 165px;
      min-height: 44px;

      color: #fff;
      background: #21E7C5;
      border-radius: 29px;
    }

    button + button {
      background: #e6e7ec;
    }
  }
`;
