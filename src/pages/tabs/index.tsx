import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'
import './index.scss'

const tabs1_1 = [
  { title: <Badge text='3'>First Tab</Badge> },
  { title: <Badge text='今日(20)'>Second Tab</Badge> },
  { title: <Badge dot>Third Tab</Badge> },
]

const tabs1_2 = [
  { title: 'First Tab', sub: '1' },
  { title: 'Second Tab', sub: '2' },
  { title: 'Third Tab', sub: '3' },
]

const TabExample1 = () => (
  <div>
    <Tabs tabs={tabs1_1}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab) }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab) }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
    <Tabs tabs={tabs1_2}
      initialPage={1}
      tabBarPosition='bottom'
      renderTab={tab => <span>{tab.title}</span>}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
)

const tabs3 = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
]

const TabExample3 = () => (
  <div>
    <WhiteSpace />
    <Tabs tabs={tabs3} initialPage={2} animated={false} useOnPan={false}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
)

const tabs4 = [
  { title: 'First Tab', key: 't1' },
  { title: 'Second Tab', key: 't2' },
  { title: 'Third Tab', key: 't3' },
]

const TabExample4 = () => (
  <div>
    <WhiteSpace />
    <div style={{ height: 200 }}>
      <Tabs tabs={tabs4}
        initialPage='t2'
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of first tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </div>
  </div>
)

const tabs5 = [
  { title: '1 Tab', key: 't1' },
  { title: '2 Tab', key: 't2' },
  { title: '3 Tab', key: 't3' },
]

const TabExample5 = () => (
  <div style={{ height: 200 }}>
    <WhiteSpace />
    <Tabs tabs={tabs5}
      initialPage='t2'
      tabBarPosition='left'
      tabDirection='vertical'
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
)

class TabExample6 extends React.Component {
  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>)

  render() {
    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ]

    return (
      <div>
        <WhiteSpace />
          <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
            {this.renderContent}
          </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}


export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>基本用法</div>
        <TabExample1 />
      </div>

      <div>
        <div className='demo-title'>无动画</div>
        <TabExample3 />
      </div>

      <div>
        <div className='demo-title'>固定高度</div>
        <TabExample4 />
      </div>

      <div>
        <div className='demo-title'>垂直样式</div>
        <TabExample5 />
      </div>

      <div>
        <div className='demo-title'>自定义</div>
        <TabExample6 />
      </div>
    </body>
  )
}

