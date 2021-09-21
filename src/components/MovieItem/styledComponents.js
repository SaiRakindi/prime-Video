// Style your elements here

import styled from 'styled-components'

export const MovieItemContainer = styled.div``

export const Thumbnail = styled.img`
  height: 150px;
  width: 250px;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 170px;
    width: 254px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 28px;
  height: 28px;
  margin-top: 18px;
  margin-right: 18px;
  cursor: pointer;
  outline: none;
  border: none;
`

export const MoviePlayerContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 48px;
  margin-right: 48px;
  margin-left: 48px;
`
