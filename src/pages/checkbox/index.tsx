import React from 'react'
import { List, Checkbox, Flex } from 'antd-mobile'

const CheckboxItem = Checkbox.CheckboxItem
const AgreeItem = Checkbox.AgreeItem

class Demo extends React.Component {
  onChange = (val) => {
    console.log(val)
  }

  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ]
    return (<div>
      <List renderHeader={() => 'CheckboxItem demo'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)} checked>
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem key='disabled' data-seed='logId' disabled defaultChecked multipleLine>
          Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
      </List>

      <Flex>
        <Flex.Item>
          <AgreeItem data-seed='logId' onChange={e => console.log('checkbox', e)}>
            Agree <a onClick={(e) => { e.preventDefault(); alert('agree it') }}>agreement</a>
          </AgreeItem>
        </Flex.Item>
      </Flex>
    </div>)
  }
}


export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>基本</div>
        <Demo />
      </div>
      <div>
        {'小程序的 <Checkbox> 没有 bindchange 事件，即使用 bindtap 事件去模拟，事件对象 e.target 也不存在 checked 属性。'}
      </div>
    </body>
  )
}

