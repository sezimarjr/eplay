import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupPorps = {
  maxWidth?: string
}
type rowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}
export const Row = styled.div<rowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupPorps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    color: #eeeeee;
    margin-bottom: 8px;
    display: block;
  }
  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-size: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
