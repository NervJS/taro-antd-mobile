import { Progress, Button, WingBlank, WhiteSpace } from 'antd-mobile'
import React from 'react'
import './index.scss'

class MyProgress extends React.Component {
  state = {
    percent: 50,
  }

  add = () => {
    let p = this.state.percent + 10
    if (this.state.percent >= 100) {
      p = 0
    }
    this.setState({ percent: p })
  }

  render() {
    const { percent } = this.state
    return (
      <div className='progress-container'>
        <Progress percent={30} position='fixed' />
        <div style={{ height: 18 }} />
        <Progress percent={40} position='normal' unfilled={false} appearTransition />
        <div className='demo-show-info'>
          <div className='progress'><Progress percent={percent} position='normal' /></div>
          <div aria-hidden='true'>{percent}%</div>
        </div>
        <WhiteSpace size='xl' />
        <WingBlank>
          <Button onClick={this.add}>(+-)10</Button>
        </WingBlank>
      </div>
    )
  }
}


export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>基本</div>
        <MyProgress />
      </div>
    </body>
  )
}

