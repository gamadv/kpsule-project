import styled from "styled-components";

export const Container = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;

      margin: 1rem 0;
      padding: 1rem 1.063rem 1.875rem;
      min-width: 396px;
      max-width: 396px;
      min-height: 334px;

      box-shadow: 0px 6px 6px #c6c9d6;
      border-radius: 8px;

      header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 1rem;

        gap: 0.5rem;

        max-height: 24px;

        span {
          display: flex;
          align-items: center;

          padding: 4px;
          background: #f5f7fe;
          border-radius: 4px;

          font-size: 1rem;
          line-height: 1.125rem;

          color: #545976;
        }
      }

      #titleContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div strong {
          max-width: 212px;
          font-size: 1.125rem;
          line-height: 1.375rem;
        }

        p {
          color: #545976;
          strong {
            margin-left: 0.25rem;
            color: #21e7c5;
          }
        }
      }

      #detailsContainer {
        display: flex;
        align-items: center;
        flex-direction: column;

        background: #f5f7fe;
        border-radius: 8px;

        margin: 1.5rem 0;
        padding: 1.063rem 1rem;

        div {
          display: flex;
          justify-content: space-between;
          width: 100%;
          section {
            display: flex;
            flex-direction: column;
          }
        }

        div + div {
          margin-top: 1rem;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 172px;
        height: 28px;

        gap: 0.5rem;

        margin-top: auto;
        margin-left: auto;

        background: #21e7c5;
        border-radius: 30px;

        p {
          font-weight: 900;
          font-size: 1rem;
          color: #ffff;
        }
      }

      @media screen and (min-width: 1024px) {
        min-width: 363px;
        max-width: 363px;
      }
    }
  }
`;
