import styled from 'styled-components';

export const LogoContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    color: #86c171;
    text-align: start;
  }
  h3 {
    margin-top: 0px;
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
