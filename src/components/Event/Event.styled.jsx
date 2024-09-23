import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  padding: 20px;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  border-radius: 17px;
  transition: all 0.5s;
  color: black;
  min-height: 400px;

  margin-bottom: 20px;


  &:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 340px;
  }

  @media screen and (min-width: 1024px) {
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 26px;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const Descr = styled.p`
  font-size: 24px;
  line-height: 1.1;
  margin-bottom: 20px;
`;

export const Date = styled.p`
  font-weight: bolder;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Organizer = styled.h2`
  font-weight: 400;
  margin-bottom: 20px;
`;

export const ButtonReg = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 76px;
  height: 31px;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: 700;
  font-size: 11px;
  background-color: transparent;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 37px;
  }

  @media screen and (min-width: 1440px) {
    width: 110px;
    height: 45px;
  }
`;

export const ButtonView = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 76px;
  height: 31px;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: 700;
  font-size: 11px;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 37px;
  }

  @media screen and (min-width: 1440px) {
    width: 110px;
    height: 45px;
  }
`;
