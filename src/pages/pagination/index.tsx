import { Pagination, Icon } from 'antd-mobile'
import './index.scss'

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
}

export default function Index () {
  return (
    <div className='demo-pagination-container' >
      <p className='demo-sub-title'>Button with text</p>
      <Pagination total={5} current={1} locale={locale} />

      <p className='demo-sub-title'>Button with text and icon</p>
      <Pagination total={5}
        className='demo-custom-pagination-with-icon'
        current={1}
        locale={{
          prevText: (<span className='demo-arrow-align'>{/* <Icon type='left' /> */}上一步</span>),
          nextText: (<span className='demo-arrow-align'>下一步{/* <Icon type='right' /> */}</span>),
        }}
      />

      <p className='demo-sub-title'>Hide number</p>
      <Pagination simple total={5} current={1} locale={locale} />

      <p className='demo-sub-title'>Show number only</p>
      <Pagination mode='number' total={5} current={3} />

      <p className='demo-sub-title'>Point style</p>
      <Pagination mode='pointer' total={5} current={2} style={{ marginBottom: '16px' }} />
    </div>
  )
}

