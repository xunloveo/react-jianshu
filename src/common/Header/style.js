import styled from 'styled-components'

import logo from '../../static/logo.png'

export const HeaderWrapper = styled.header`
  height: 55px;
  border-bottom: 1px solid #f0f0f0;
`

export const HeaderLimit = styled.div`
  position: relative;
  min-width: 768px;
  max-width: 1440px;
  line-height: 56px;
  margin: 0 auto;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  display: block;
  float: left;
  width: 100px;
  height: 56px;
`

export const LogoImg = styled.img.attrs({
  alt: 'logo',
  src: logo
})`
  height: 100%;
`

export const Nav = styled.div`
  width: 930px;
  height: 56px;
  padding: 0 15px;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }

  &.cud {
    cursor: default;
  }

  .beta {
    vertical-align: middle;
    cursor: pointer;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  i {
    position: absolute;
    right: 5px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    border-radius: 50%;
  }

  &.focused {
    input {
      width: 320px;
    }

    i {
      color: #fff;
      background-color: #969696;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  border: 1px solid #eee;
  outline: 0 none;
  border-radius: 40px;
  background: #eee;
  height: 38px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  transition: width 0.5s ease-out;

  &::placeholder {
    color: #999;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 40px;
  top: 0;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.div`
  font-size: 16px;
  height: 38px;
  line-height: 38px;
  padding: 0 24px;
  border-radius: 50px;
  border: 1px solid #999;
  cursor: pointer;
  margin-left: 8px;

  &.reg {
    color: #ec6149;
    border-color: #ec7259;
  }

  &.writting {
    color: #fff;
    background-color: #ec7259;
    border-color: #ec7259;

    i {
      margin-right: 5px;
    }
  }
`
