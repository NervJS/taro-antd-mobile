import { Steps, WingBlank, WhiteSpace } from 'antd-mobile'
import Success from './images/success.png'
import './index.scss'

const Step = Steps.Step

const customIcon = () => (
  <img src={Success} width='18px' height='18px' />
)

const Demo1 = function () {
  return (
    <WingBlank size='lg'>
      <div className='demo-sub-title'>Small size</div>
      <WhiteSpace />
      <Steps size='small' current={1}>
        <Step title='Finished' description='This is description' />
        <Step title='In Progress' description='This is description' />
        <Step title='Waiting' description='This is description' />
      </Steps>
      <div className='demo-sub-title'>Small size, single line text</div>
      <WhiteSpace />
      <Steps size='small' current={1}>
        <Step title='Finished' />
        <Step title='In Progress' />
        <Step title='Waiting' />
      </Steps>
      <div className='demo-sub-title'>Default size</div>
      <WhiteSpace size='lg' />
      <Steps>
        <Step status='process' title='Finished' description='This is description' />
        <Step status='error' title='Error' description='This is description' />
        <Step title='Waiting' description='This is description' />
      </Steps>

      <div className='demo-sub-title'>Customized status </div>
      <WhiteSpace size='lg' />
      <Steps>
        <Step status='finish' title='Step 1' icon={customIcon()} />
        <Step status='process' title='Step 2' icon={customIcon()} />
        <Step status='error' title='Step 3' icon={customIcon()} />
      </Steps>

      <div className='demo-sub-title'>Customized icon </div>
      <WhiteSpace size='lg' />
      <Steps current={1}>
        <Step title='Step 1' icon={customIcon()} description='This is description' />
        <Step title='Step 2' icon={customIcon()} description='This is description' />
        <Step title='Step 3' icon={customIcon()} description='This is description' />
      </Steps>

      <div className='demo-sub-title'>Multiple steps </div>
      <WhiteSpace size='lg' />
      <Steps current={1}>
        <Step title='Step 1' icon={customIcon()} />
        <Step title='Step 2' icon={customIcon()} />
        <Step title='Step 3' status='error' icon={customIcon()} />
        <Step title='Step 4' icon={customIcon()} />
      </Steps>
    </WingBlank>
  )
}

export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>步骤条</div>
        <Demo1 />
      </div>
    </body>
  )
}

