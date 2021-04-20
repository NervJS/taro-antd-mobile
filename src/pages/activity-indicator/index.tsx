import React from 'react'
import './index.scss'

import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class App extends React.Component {
  state = {
    animating: false
  }

  componentWillUnmount() {
    clearTimeout(this.closeTimer)
  }

  closeTimer: NodeJS.Timeout

  showToast = () => {
    this.setState({ animating: !this.state.animating })
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating })
    }, 1000)
  }
  render() {
    return (
      <div>
        <WingBlank>
          <div className='loading-container'>
            <p className='demo-sub-title'>Without text</p>
            <div className='loading-example'>
              <ActivityIndicator animating />
            </div>
            <p className='demo-sub-title'>With text</p>
            <div className='loading-example'>
              <ActivityIndicator
                text='Loading...'
              />
            </div>
            <p className='demo-sub-title'>With large size and customized text style</p>
            <div className='loading-example'>
              <div className='align'>
                <ActivityIndicator size='large' />
                <span style={{ marginTop: 8 }}>Loading...</span>
              </div>
            </div>
          </div>
          <div className='toast-container'>
            <WhiteSpace size='xl' />
            <Button onClick={this.showToast}>click to show Toast</Button>
            <div className='toast-example'>
              <ActivityIndicator
                toast
                text='Loading...'
                animating={this.state.animating}
              />
            </div>
          </div>
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
        <App />
      </div>
    </body>
  )
}

