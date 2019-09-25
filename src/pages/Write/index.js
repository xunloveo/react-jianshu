import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Write extends PureComponent {
  render() {
    const { login } = this.props
    console.log('l', login)
    {
      return login ? (
        <div>写文章</div>
      ) : (
        <Redirect to="/login?path=/write"></Redirect>
      )
    }
  }
}

const mapState = state => ({
  login: state.getIn(['login', 'login'])
})

export default connect(
  mapState,
  null
)(Write)
