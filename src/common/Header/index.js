import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  HeaderLimit,
  Logo,
  LogoImg,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style.js'
import beta from '../../static/beta.png'

function Header(props) {
  return (
    <HeaderWrapper>
      <HeaderLimit>
        <Logo>
          <LogoImg />
        </Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper className={props.focused ? 'focused' : ''}>
            <NavSearch
              onFocus={props.handleOnFocus}
              onBlur={props.handleOnBlur}
            ></NavSearch>
            <i className="iconfont">&#xe62b;</i>
          </SearchWrapper>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right cud">
            <img src={beta} height="25" className="beta" alt="beta" />
          </NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting">
            <i className="iconfont">&#xe652;</i>
            <span>写文章</span>
          </Button>
        </Addition>
      </HeaderLimit>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleOnFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleOnBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
