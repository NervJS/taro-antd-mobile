import React from 'react'
import {
  Pagination, LocaleProvider, Menu, WhiteSpace, WingBlank, ActivityIndicator, NavBar, List
} from 'antd-mobile'
import enUS from 'antd-mobile/lib/locale-provider/en_US'
import ruRU from 'antd-mobile/lib/locale-provider/ru_RU'
import { Picker, View } from '@tarojs/components'
import './index.scss'

const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
]

class MultiMenuExample extends React.Component {
  state = {
    initData: '',
    show: false
  }

  onChange = (value) => {
    console.log(value)
  }

  onOk = (value) => {
    console.log(value)
    this.onCancel()
  }

  onCancel = () => {
    this.setState({ show: false })
  }

  handleClick = (e) => {
    e.preventDefault() // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    })
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        })
      }, 500)
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    const { initData, show } = this.state
    const menuEl = (
      <Menu
        className='demo-single-multi-foo-menu'
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        onOk={this.onOk}
        onCancel={this.onCancel}
        height={document.documentElement.clientHeight * 0.6}
        multiSelect
      />
    )
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: '60vh', display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </div>
    )
    return (
      <div className={show ? 'demo-single-multi-menu-active' : ''}>
        <div>
          <NavBar
            leftContent='Menu'
            mode='light'
            onLeftClick={this.handleClick}
            className='demo-single-multi-top-nav-bar'
          >
            Single Multi menu
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className='demo-menu-mask' onClick={this.onMaskClick} /> : null}
      </div>
    )
  }
}

const Page = () => (
  <div>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <MultiMenuExample />
  </div>
)

class App extends React.Component {
  state = {
    index: 0,
    locale: '中国'
  }

  array = ['中国', 'English', 'Русский']
  languages = [
    {
      value: '中国',
      label: '中国',
      language: undefined,
    },
    {
      value: 'English',
      label: 'English',
      language: enUS,
    },
    {
      value: 'Русский',
      label: 'Русский',
      language: ruRU,
    }
  ]

  onChange = e => {
    const idx = e.detail.value
    this.setState({
      index: idx,
      locale: this.array[idx]
    })
  }

  render () {
    const { locale, index } = this.state

    const currentLocale = this.languages.find(item => item.value === locale)?.language

    return (
      <WingBlank>
        <WhiteSpace size='xl' />

        <Picker onChange={this.onChange} value={index} range={this.array}>
          <View className='picker'>
          <List.Item arrow='horizontal'>当前选择：{this.array[index]}</List.Item>
          </View>
        </Picker>

        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />

        <LocaleProvider locale={currentLocale}>
          <Page />
        </LocaleProvider>
      </WingBlank>
    )
  }
}

export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>国际化</div>
        <App />
      </div>
    </body>
  )
}

