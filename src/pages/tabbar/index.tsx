import { useCallback } from 'react'
import { WhiteSpace, WingBlank, Button } from 'antd-mobile'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Index () {
  const navigateTo = useCallback(function (url) {
    Taro.navigateTo({ url })
  }, [])

  return (
    <body>
      <div>
        <WhiteSpace />
        <WingBlank>
          <Button onClick={() => navigateTo('/pages/tabbar/demo-0/index')}>APP 型选项卡</Button>
        </WingBlank>
      </div>
      <div>
        <WhiteSpace />
        <WingBlank>
          <Button onClick={() => navigateTo('/pages/tabbar/demo-1/index')}>Tabbar 在顶部</Button>
        </WingBlank>
      </div>
    </body>
  )
}

