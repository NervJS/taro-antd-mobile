import { NavBar, Icon } from 'antd-mobile'
import './index.scss'

export default function Index () {
  return (
    <div>
      <NavBar
        mode='light'
        // icon={
        //   <Icon type='left' />
        // }
        onLeftClick={() => console.log('onLeftClick')}
        // rightContent={[
        //   <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
        //   <Icon key='1' type='ellipsis' />,
        // ]}
      >NavBar</NavBar>

      <NavBar
        mode='dark'
        leftContent='Back'
        // rightContent={[
        //   <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
        //   <Icon key='1' type='ellipsis' />,
        // ]}
      >NavBar</NavBar>
    </div>
  )
}

