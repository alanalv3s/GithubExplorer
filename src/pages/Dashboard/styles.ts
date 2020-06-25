import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  margin-top: 80px;
  line-height: 56px;
  text-shadow: 2px 2px 4px #ccc;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 8px 0 0 8px;
    box-shadow: 2px 2px 4px #bbb;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border: 0;
    border-radius: 0 8px 8px 0;
    color: #fff;
    font-weight: bold;
    transition: 0.2s;
    box-shadow: 2px 2px 4px #04d361;

    &:hover {
      background: ${shade(0.2, '#04d361')};
      box-shadow: 0px 0px 8px ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  align-self: flex-end;
  color: #c53030;
  margin-top: 8px;
  padding-left: 12px;
`;

export const Repositories = styled.div`
  margin-top: 50px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    padding: 24px;
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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      box-shadow: 1px 1px 8px #aaa;
    }

    div {
      margin: 16px;
      flex: 1;

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

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
