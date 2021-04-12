import { WingBlank, WhiteSpace } from 'antd-mobile'
import './index.scss'

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} demo-placeholder`} {...restProps}>Block</div>
);

const WingBlankExample = () => (
  <div style={{ padding: '15px 0' }}>
    <WingBlank><PlaceHolder /></WingBlank>

    <WhiteSpace size='lg' />
    <WingBlank size='md'><PlaceHolder /></WingBlank>

    <WhiteSpace size='lg' />
    <WingBlank size='sm'><PlaceHolder /></WingBlank>
  </div>
)

export default function Index () {
  return (
    <>
      <WingBlankExample />
    </>
  )
}

