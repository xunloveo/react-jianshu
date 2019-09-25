import React, { PureComponent } from 'react'
import {
  ListItem,
  ListItemInfo,
  ListItemPic,
  LoadMore,
  LoadMoreEnd
} from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { articleList, articlePage, getMoreList } = this.props

    return (
      <div>
        <ul>
          {articleList &&
            articleList.map(item => {
              return (
                <ListItem key={item.get('id')}>
                  <ListItemInfo>
                    <Link className="title" to={`/detail/${item.get('id')}`}>
                      {item.get('title')}
                    </Link>
                    <p className="desc">{item.get('desc')}</p>
                    <div className="meta">
                      <span className="jsd-meta">
                        <i className="iconfont">&#xe600;</i> {item.get('paid')}
                      </span>
                      <a className="nickname" href="#">
                        {item.get('nickname')}
                      </a>
                      <span>
                        <i className="iconfont">&#xe720;</i> {item.get('like')}
                      </span>
                      <span>
                        <i className="iconfont">&#xe690;</i> {item.get('shang')}
                      </span>
                    </div>
                  </ListItemInfo>
                  <ListItemPic src={item.get('pic')} alt="aaaa"></ListItemPic>
                </ListItem>
              )
            })}
        </ul>
        {articleList.size >= 12 ? (
          <LoadMoreEnd>已经触碰底线了</LoadMoreEnd>
        ) : articleList.size > 0 ? (
          <LoadMore onClick={() => getMoreList(articlePage)}>查看更多</LoadMore>
        ) : null}
      </div>
    )
  }
}

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = dispatch => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(List)
