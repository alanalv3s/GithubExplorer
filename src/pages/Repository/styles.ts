import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.3s;

    &:hover {
      color: #444;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      box-shadow: 1px 1px 8px #aaa;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 32px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #747480;
        margin-top: 8px;
      }
    }
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin-top: 40px;

    li {
      strong {
        display: block;
        font-size: 36px;

        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 50px;

  a {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: 0.3s;
    box-shadow: 2px 2px 4px #bbb;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 16px;
      flex: 1;
      display: flex;
      align-items: center;

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        box-shadow: 1px 1px 8px #aaa;
      }

      div {
        display: block;
        margin-left: 24px;

        strong {
          font-size: 20px;
          color: #3d3d4d;
        }

        p {
          font-size: 18px;
          color: #a8a8b3;
          margin-top: 4px;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
