import { Flex, WhiteSpace } from 'antd-mobile'
import './index.scss'

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} demo-placeholder`} {...restProps}>Block</div>
);

const FlexExample = () => (
  <div className='demo-flex-container'>
    <div className='demo-sub-title'>Basic</div>
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size='lg' />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size='lg' />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size='lg' />

    <div className='demo-sub-title'>Wrap</div>
    <Flex wrap='wrap'>
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
    </Flex>
    <WhiteSpace size='lg' />

    <div className='demo-sub-title'>Align</div>
    <Flex justify='center'>
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
    </Flex>
    <WhiteSpace />
    <Flex justify='end'>
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
    </Flex>
    <WhiteSpace />
    <Flex justify='between'>
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline' />
    </Flex>

    <WhiteSpace />
    <Flex align='start'>
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline small' />
      <PlaceHolder className='inline' />
    </Flex>
    <WhiteSpace />
    <Flex align='end'>
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline small' />
      <PlaceHolder className='inline' />
    </Flex>
    <WhiteSpace />
    <Flex align='baseline'>
      <PlaceHolder className='inline' />
      <PlaceHolder className='inline small' />
      <PlaceHolder className='inline' />
    </Flex>
  </div>
)

export default function Index () {
  return (
    <>
      <FlexExample />
    </>
  )
}
