import React from 'react'
import { List, InputItem, WhiteSpace } from 'antd-mobile'
import { createForm } from 'rc-form'
import Taro from '@tarojs/taro'
import './index.scss'

interface IProps {
  form: any
}

class BasicInputExample extends React.Component<IProps, null> {
  componentDidMount() {
    this.autoFocusInst.focus()
  }

  inputRef: HTMLInputElement
  autoFocusInst: HTMLInputElement
  labelFocusInst: HTMLInputElement

  handleClick = () => {
    this.inputRef.focus()
  }

  render() {
    const { getFieldProps } = this.props.form
    return (
      <div>
        <List renderHeader={() => 'Customize to focus'}>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder='auto focus'
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder='click the button below to focus'
            ref={el => this.inputRef = el}
          >标题</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
        </List>

        <List renderHeader={() => 'Whether is controlled'}>
          <InputItem
            {...getFieldProps('control')}
            placeholder='controled input'
          >受控组件</InputItem>
          <InputItem
            defaultValue='Title'
            placeholder='please input content'
            data-seed='logId'
          >非受控组件</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Click label to focus input'}>
          <InputItem
            placeholder='click label to focus input'
            ref={el => this.labelFocusInst = el}
          ><div onClick={() => this.labelFocusInst.focus()}>标题</div></InputItem>
        </List>

        <List renderHeader={() => 'Show clear'}>
          <InputItem
            {...getFieldProps('inputclear')}
            clear
            placeholder='displayed clear while typing'
          >标题</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Number of words for title'}>
          <InputItem
            {...getFieldProps('label8')}
            placeholder='limited title length'
            labelNumber={5}
          >标题过长超过默认的5个字</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Custom title（text / image / empty)'}>
          <InputItem
            {...getFieldProps('input3')}
            placeholder='no label'
          />
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder='title can be icon，image or text'
          >
            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Customize the extra content in the right'}>
          <InputItem
            {...getFieldProps('preice')}
            placeholder='0.00'
            extra='¥'
          >价格</InputItem>
        </List>

        <WhiteSpace />
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            })}
            type='bankCard'
          >银行卡</InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type='phone'
            placeholder='186 1234 1234'
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type='password'
            placeholder='****'
          >密码</InputItem>
          <InputItem
            {...getFieldProps('number')}
            type='number'
            placeholder='click to show number keyboard'
          >数字键盘</InputItem>
          <InputItem
            {...getFieldProps('digit')}
            type='digit'
            placeholder='click to show native number keyboard'
          >数字键盘</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Not editable / Disabled'}>
          <InputItem
            value='not editable'
            editable={false}
          >姓名</InputItem>
          <InputItem
            value='style of disabled `InputItem`'
            disabled
          >姓名</InputItem>
        </List>
      </div>
    )
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample)

class ErrorInputExample extends React.Component {
  state = {
    hasError: false,
    value: '',
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Taro.showToast({
        title: 'Please enter 11 digits',
        icon: 'none'
      })
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      })
    } else {
      this.setState({
        hasError: false,
      })
    }
    this.setState({
      value,
    })
  }
  render() {
    return (
      <div>
        <List renderHeader={() => 'Confirm when typing'}>
          <InputItem
            type='phone'
            placeholder='input your phone'
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
        </List>
      </div>
    )
  }
}

export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>基本</div>
        <BasicInputExampleWrapper />
      </div>
      <div>
        <div className='demo-title'>错误验证</div>
        <ErrorInputExample />
      </div>
    </body>
  )
}

