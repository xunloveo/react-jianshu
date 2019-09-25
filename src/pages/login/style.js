import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f1f1f1;
  position: relative;

  h3 {
    line-height: 40px;
    text-align: center;
    font-size: 20px;
  }
`

export const Login = styled.div`
  position: absolute;
  left: 50%;
  top: 60px;
  transform: translate(-50%, 0);
  width: 400px;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
`

export const Account = styled.input`
  width: 100%;
  padding: 0 10px;
  line-height: 40px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #ccc;
`
export const Password = styled.input`
  margin-top: 20px;
  width: 100%;
  padding: 0 10px;
  line-height: 40px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #ccc;
`

export const Button = styled.div`
  width: 100%;
  margin-top: 20px;
  border-radius: 15px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #3194d0;
  cursor: pointer;

  &:hover {
    background: #187cb7;
  }
`
