import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, Login, Account, Password, Button } from './style'
import { actionCreators } from './store'

class LoginBar extends PureComponent {
  render() {
    const { location } = this.props
    return (
      <LoginWrapper>
        <Login>
          <h3>登录</h3>
          <Account
            placeholder="账号"
            ref={input => (this.account = input)}
          ></Account>
          <Password
            placeholder="密码"
            type="password"
            ref={input => (this.password = input)}
          ></Password>
          <Button
            onClick={() =>
              this.props.submit(
                this.account,
                this.password,
                this.changePath(location.search),
                this.props
              )
            }
          >
            提交
          </Button>
        </Login>
      </LoginWrapper>
    )
  }

  changePath(path) {
    return path.replace(/^\?path=/, '')
  }
}

const mapDispatch = dispatch => {
  return {
    submit(account, password, to, props) {
      let accountV = account.value
      let passwordV = password.value
      if (accountV === 'admin' && passwordV === '123') {
        dispatch(actionCreators.toggleLogin(true))
        sessionStorage.setItem('login', true)
        props.history.push(to)
      } else {
        alert('用户名或密码错误！')
      }
    }
  }
}
export default connect(
  null,
  mapDispatch
)(LoginBar)
