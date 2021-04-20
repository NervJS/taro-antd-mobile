import { List, Badge } from 'antd-mobile'
import './index.scss'

const BadgeDemo = () => (
  <List>
    <List.Item extra='extra content' arrow='horizontal'>
      <Badge dot>
        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
      </Badge>
      <span style={{ marginLeft: 12 }}>Dot badge</span>
    </List.Item>
    <List.Item
      thumb='https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png'
      extra={<Badge text={77} overflowCount={55} />}
      arrow='horizontal'
    >
      Content
    </List.Item>
    <List.Item><Badge text='促' corner>
      <span style={{ display: 'block'}} className='demo-corner-badge'>Use corner prop</span>
    </Badge></List.Item>
    <List.Item className='special-badge' extra={<Badge text='促' />}>
      Custom corner
    </List.Item>
    <List.Item extra='extra' arrow='horizontal'>
      <Badge text={0} style={{ marginLeft: 12 }}>Text number 0</Badge>
      <Badge text='new' style={{ marginLeft: 12 }} />
    </List.Item>
    <List.Item>
      Marketing:
      <Badge text='减' hot style={{ marginLeft: 12 }} />
      <Badge text='惠' hot style={{ marginLeft: 12 }} />
      <Badge text='免' hot style={{ marginLeft: 12 }} />
      <Badge text='反' hot style={{ marginLeft: 12 }} />
      <Badge text='HOT' hot style={{ marginLeft: 12 }} />
    </List.Item>
    <List.Item>
      Customize
      <Badge text='券' style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
      <Badge text='NEW' style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
      <Badge text='自动缴费'
        style={{
          marginLeft: 12,
          padding: '0 3px',
          backgroundColor: '#fff',
          borderRadius: 2,
          color: '#f19736',
          border: '1px solid #f19736',
        }}
      />
    </List.Item>
  </List>
)

export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>基本</div>
        <BadgeDemo />
      </div>
    </body>
  )
}

