import styled from 'styled-components';

export const InforBar = styled.div`
  height: 85px;
  margin: 0 150px;
  background-color: #f8f8f8;
  border-radius: 10px;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
  }

  li {
    height: 85px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 15px;

    strong {
      color: black;
    }

    span {
      color: black;
    }
  }
`;

export const LogoContent = styled.div`
  height: 480px;
  margin: 0 80px;
  display: flex;

  .title {
    display: flex;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 3.5em;
      color: #86c171;
    }

    p {
      justify-content: left;
      margin: 35px 0px;
    }

    button {
      border-radius: 8px;
      border: 1;
      border-color: transparent;
      background: #86c171;
      color: #fff;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 30px;
      font-size: 1.5em;
      border-bottom: 9px solid black;
    }
  }

  img {
    width: 50%;
    display: flex;
    align-content: center;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 17%;
    display: flex;
    align-content: center;
    margin: 5px 25px 0px;
  }

  strong {
    color: #ffffff;
    margin-left: 17px;
  }
`;

export const Container = styled.div`
  background: #c72828;
  padding: 30px 0;
  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          .text {
            padding: 16px 24px;
          }
          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
