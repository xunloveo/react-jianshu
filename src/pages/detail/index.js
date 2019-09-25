import React, { PureComponent, Fragment } from 'react'
import { DetailWrapper, DetailContent, DetailAside } from './style'
import Header from '../../common/Header'
import BackTop from '../../common/BackTop'

class Detail extends PureComponent {
  render() {
    const { location } = this.props
    return (
      <Fragment>
        <Header path={location.pathname + location.search}></Header>
        <DetailWrapper>
          <DetailContent></DetailContent>
          <DetailAside></DetailAside>
          <BackTop></BackTop>
        </DetailWrapper>
      </Fragment>
    )
  }
}

export default Detail
