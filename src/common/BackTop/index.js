import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { BackTop as BackTopWrapper } from './style'
import { actionCreators } from './store'

class BackTop extends PureComponent {
  handleBackTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    const { showBackTop } = this.props
    return (
      <Fragment>
        {showBackTop ? (
          <BackTopWrapper onClick={this.handleBackTop}></BackTopWrapper>
        ) : null}
      </Fragment>
    )
  }

  componentDidMount() {
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
  showBackTop: state.getIn(['backTop', 'showBackTop'])
})

const mapDispatch = dispatch => {
  return {
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
)(BackTop)
