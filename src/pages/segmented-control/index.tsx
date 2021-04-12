import React from 'react'
import { SegmentedControl, WingBlank } from 'antd-mobile'
import './index.scss'

class SegmentedControlExample extends React.Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`)
  }

  onValueChange = (value) => {
    console.log(value)
  }

  render() {
    return (
      <WingBlank size='lg' className='demo-sc-example'>
        <p className='demo-sub-title'>Simplest</p>
        <SegmentedControl values={['Segment1', 'Segment2']} />

        <p className='demo-sub-title'>Disabled</p>
        <SegmentedControl values={['Segment1', 'Segment2']} disabled />

        <p className='demo-sub-title'>SelectedIndex</p>
        <SegmentedControl selectedIndex={1} values={['Segment1', 'Segment2', 'Segment3']} />

        <p className='demo-sub-title'>TintColor</p>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          tintColor='#ff0000'
          style={{ height: '40px', width: '250px' }}
        />

        <p className='demo-sub-title'>onChange/onValueChange</p>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </WingBlank>
    )
  }
}

export default function Index () {
  return (
    <>
      <SegmentedControlExample />
    </>
  )
}

