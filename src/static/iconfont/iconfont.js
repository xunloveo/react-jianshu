import { createGlobalStyle } from 'styled-components'

export const Iconfont = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1568703499152'); /* IE9 */
  src: url('iconfont.eot?t=1568703499152#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1568703499152') format('woff'),
  url('./iconfont.ttf?t=1568703499152') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1568703499152#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
