import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props
    return (
      <RecommendWrapper>
        {recommendList &&
          recommendList.map(recommend => {
            return (
              <RecommendItem href="#" key={recommend.get('id')}>
                <img src={recommend.get('pic')} alt={recommend.get('alt')} />
              </RecommendItem>
            )
          })}
      </RecommendWrapper>
    )
  }
}

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(
  mapState,
  null
)(Recommend)
