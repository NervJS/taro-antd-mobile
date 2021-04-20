import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import './index.scss'

function Demo1 () {
  return (
    <WingBlank size='lg'>
      <WhiteSpace size='lg' />
      <Card>
        <Card.Header
          title='This is title'
          thumb='https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'
          thumbStyle={{
            width: '64rpx',
            height: '64rpx'
          }}
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer content='footer content' extra={<div>extra footer content</div>} />
      </Card>
      <WhiteSpace size='lg' />
    </WingBlank>
  )
}

function Demo2 () {
  return (
    <div>
      <WhiteSpace size='lg' />
      <Card full>
        <Card.Header
          title='This is title'
          thumb='https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'
          thumbStyle={{
            width: '64rpx',
            height: '64rpx'
          }}
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer content='footer content' extra={<div>extra footer content</div>} />
      </Card>
    </div>
  )
}

export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>默认</div>
        <Demo1 />
      </div>
      <div>
        <div className='demo-title'>通栏</div>
        <Demo2 />
      </div>
    </body>
  )
}

