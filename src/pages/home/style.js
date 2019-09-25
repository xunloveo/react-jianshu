import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 10px;
  width: 625px;
  float: left;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
  padding-top: 10px;
`

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  box-sizing: border-box;
`

export const ListItemInfo = styled.div`
  width: 460px;
  padding-right: 15px;

  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #969696;
    }
  }

  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }

  .meta {
    padding-right: 0 !important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;

    .jsd-meta {
      color: #ea6f5a !important;
    }

    .iconfont {
      font-size: 12px;
    }

    span {
      margin-right: 10px;
      color: #b4b4b4;
    }

    a {
      margin-right: 10px;
      text-decoration: none;
      color: #b4b4b4;

      &:hover {
        color: #787878;
      }
    }
  }
`
export const ListItemPic = styled.img`
  width: 150px;
  border-radius: 4px;
  position: relative;
  top: -6px;
`

export const RecommendWrapper = styled.div`
  width: 100%;
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
`

export const RecommendItem = styled.a`
  color: #333;

  img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background-color: #a5a5a5;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`

export const LoadMoreEnd = styled.div`
  text-align: center;
  line-height: 40px;
  margin-bottom: 30px;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  height: 40px;
  width: 40px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 5px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #000;
  }
  &:after {
    content: '';
    position: absolute;
    left: 10px;
    top: 6px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
`

export const WriterWrapper = styled.div`
  width: 100%;

  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #969696;
    overflow: hidden;

    .title-author {
      float: left;
    }

    .title-change {
      float: right;
      cursor: pointer;
      .spin {
        display: inline-block;
        font-size: 14px;
        margin-right: 4px;
        transition: all 0.2s ease-in;
        transform-origin: center center;
      }
    }
  }
`

export const WriterItem = styled.li`
  width: 100%;
  margin-top: 15px;
  line-height: 20px;

  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }

  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }

  .name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    color: #333;
  }

  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
    padding: 0 0 10px;
  }
`
