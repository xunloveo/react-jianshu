import React, { Component } from 'react'
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
  SearchInfo,
  SearchTrending,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoItemLink,
  SearchRecent,
  SearchRecentLink,
  Addition,
  Button
} from './style.js'
import beta from '../../static/beta.png'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  showSearch() {
    const {
      focused,
      mouseIn,
      list,
      page,
      pageTotal,
      handleMouseEnter,
      handleMouseLeave,
      changePage
    } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>
            <SearchInfoItemLink>{newList[i]}</SearchInfoItemLink>
          </SearchInfoItem>
        )
      }
    }

    return (
      (focused || mouseIn) && (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchTrending>
            <SearchInfoTitle className="clearfix">
              <span>热门搜索</span>
              <SearchInfoSwitch
                onClick={() => changePage(page, pageTotal, this.spinIcon)}
              >
                <i
                  ref={spin => (this.spinIcon = spin)}
                  className="iconfont spin"
                >
                  &#xe851;
                </i>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>{list.size > 0 && pageList}</SearchInfoList>
          </SearchTrending>
          {/* <SearchRecent>
          <SearchRecentLink>搜索</SearchRecentLink>
        </SearchRecent> */}
        </SearchInfo>
      )
    )
  }

  render() {
    const { focused, list, handleOnFocus, handleOnBlur } = this.props
    return (
      <HeaderWrapper>
        <HeaderLimit>
          <Logo>
            <LogoImg />
          </Logo>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <SearchWrapper className={focused ? 'focused' : ''}>
              <NavSearch
                onFocus={() => handleOnFocus(list)}
                onBlur={handleOnBlur}
              ></NavSearch>
              <i className="iconfont zoom">&#xe62b;</i>
              {this.showSearch()}
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
}

const mapStateToProps = state => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    pageTotal: state.getIn(['header', 'pageTotal']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleOnFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleOnBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    changePage(page, pageTotal, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, '')
      originAngle = originAngle ? parseInt(originAngle, 10) : 0
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < pageTotal) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
