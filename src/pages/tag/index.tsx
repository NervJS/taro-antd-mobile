import { Tag } from 'antd-mobile'
import './index.scss'

function onChange (selected) {
  console.log(`tag selected: ${selected}`)
}

function Demo1 () {
  return (
    <div className='demo-tag-container'>
      <Tag data-seed='logId'>Basic</Tag>
      <Tag selected>Selected</Tag>
      <Tag disabled>Disabled</Tag>
      <Tag onChange={onChange}>Callback</Tag>
      <Tag closable
        onClose={() => {
          console.log('onClose')
        }}
        afterClose={() => {
          console.log('afterClose')
        }}
      >
        Closable
      </Tag>
      <Tag small>Small and Readonly</Tag>
    </div>
  )
}


export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>基本</div>
        <Demo1 />
      </div>
    </body>
  )
}

