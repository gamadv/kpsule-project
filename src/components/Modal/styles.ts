import styled from "styled-components";

export const ModalContainer = styled.div`
  #modalOverlay {
    background-color: #121214;
    opacity: 0.7;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 100vw;
    height: -webkit-fill-available;

    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 4;
    overflow: auto;
  }

  #modalWrapper {
    position: fixed;
    top: 20%;
    left: 0;
    z-index: 15;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #modal {
    position: relative;
    overflow: auto;

    width: auto;
    max-width: 396px;
    max-height: 299px;

    height: 100%;
    z-index: 20;
    background: #ffffff;
    margin: 1.75rem auto;

    box-shadow: 0px 6px 6px #c6c9d6;
    border-radius: 8px;

    padding: 0 1rem 1rem;

    header {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      padding: 1rem 0 0;

      button {
        display: flex;
        
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;

        border-radius: 3px;
      }
    }
  }
`;

export const ModalContent = styled.div``;
