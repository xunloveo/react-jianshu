import styled from 'styled-components'

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  height: 40px;
  width: 40px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 5px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #000;
  }
  &:after {
    content: '';
    position: absolute;
    left: 10px;
    top: 6px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
`
