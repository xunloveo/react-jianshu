import React, { PureComponent } from 'react'
import { WriterWrapper, WriterItem } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Writer extends PureComponent {
  constructor(props) {
    super(props)
    this.formatWord = this.formatWord.bind(this)
  }

  render() {
    const {
      writerList,
      currentPage,
      writePageSize,
      writeTotalPage,
      changeWriterList
    } = this.props

    return (
      <WriterWrapper>
        <div className="title">
          <span className="title-author">推荐作者</span>
          <span
            className="title-change"
            onClick={() =>
              changeWriterList(currentPage, writePageSize, writeTotalPage)
            }
          >
            <i className="iconfont spin">&#xe851;</i>换一批
          </span>
        </div>
        <ul>
          {writerList.map(writer => {
            return (
              <WriterItem key={writer.get('id')}>
                <a href="#" className="avatar">
                  <img src={writer.get('avatar_source')} alt="" />
                </a>
                <a href="#" className="follow">
                  +关注
                </a>
                <a href="#" className="name">
                  {writer.get('nickname')}
                </a>
                <p>
                  写了{this.formatWord(writer.get('total_wordage'))}字 ·{' '}
                  {this.formatWord(writer.get('total_likes_count'))}喜欢
                </p>
              </WriterItem>
            )
          })}
        </ul>
      </WriterWrapper>
    )
  }

  componentDidMount() {
    const { writeTotalPage, writePageSize, changeWriterList } = this.props
    changeWriterList(0, writePageSize, writeTotalPage)
  }

  // 格式化数字输出
  formatWord(word) {
    let wordNum = parseInt(word)
    if (wordNum > 1000) {
      word = (word / 1000).toFixed(1) + 'k'
    }
    return word
  }
}

const mapState = state => ({
  writerList: state.getIn(['home', 'writerList']),
  currentPage: state.getIn(['home', 'writeCurrentPage']),
  writePageSize: state.getIn(['home', 'writePageSize']),
  writeTotalPage: state.getIn(['home', 'writeTotalPage'])
})

const mapDispatch = dispatch => {
  return {
    changeWriterList(page, pageSize, totalPage) {
      if ((page + 1) * pageSize > totalPage) page = 0
      dispatch(actionCreators.getWriterList(page))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Writer)
