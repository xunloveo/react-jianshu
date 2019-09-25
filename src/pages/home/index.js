import React, { PureComponent, Fragment } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Header from '../../common/Header'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {
  handleBackTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    const { showBackTop, location } = this.props
    return (
      <Fragment>
        <Header path={location.pathname + location.search}></Header>
        <HomeWrapper>
          <HomeLeft>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
          {showBackTop ? (
            <BackTop onClick={this.handleBackTop}></BackTop>
          ) : null}
        </HomeWrapper>
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.getHomeData()
    this.handleEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleScroll)
  }

  handleEvents() {
    window.addEventListener('scroll', this.props.handleScroll)
  }
}

const mapState = state => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
})

const mapDispatch = dispatch => {
  return {
    getHomeData: () => dispatch(actionCreators.getHomeData()),
    handleScroll: () => {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop >= 100) {
        dispatch(actionCreators.toggleBackTop(true))
      } else {
        dispatch(actionCreators.toggleBackTop(false))
      }
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Home)
