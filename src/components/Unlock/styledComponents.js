// Style your elements here

import styled from 'styled-components'

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
`
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
`

export const Image = styled.img`
  width: 60px;
  @media screen and (min-width: 576px) {
    width: 150px;
  }
`

export const DescriptionParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #e2e8f0;
  text-align: center;
  margin: 20px 0;
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`

export const ButtonUnlockLock = styled.button`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  color: #ffffff;
  background-color: #06b6d4;
  padding: 6px 10px;
  border-radius: 5px;
  border: none;
  margin-top: 100px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    padding: 12px 20px;
    border-radius: 10px;
  }
`
