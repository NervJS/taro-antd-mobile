import { NoticeBar, WhiteSpace } from 'antd-mobile'
import './index.scss'

const NoticeBarExample = () => (
  <div>
    <WhiteSpace size='lg' />
    <NoticeBar icon={null} marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size='lg' />
    <NoticeBar icon={null} mode={null} onClick={() => alert('1')}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size='lg' />
    <NoticeBar mode={null} icon={null}>Remove the default icon.</NoticeBar>
    <WhiteSpace size='lg' />
    <NoticeBar mode={null} icon={null}>
      Customized icon.
    </NoticeBar>
    <WhiteSpace size='lg' />
    <NoticeBar mode={null} icon={null} action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
      Closable demo for `actionText`.
    </NoticeBar>
    <WhiteSpace size='lg' />
    <NoticeBar mode={null} icon={null} action={<span>去看看</span>}>
      Link demo for `actionText`.
    </NoticeBar>
  </div>
)

export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>通告栏</div>
        <NoticeBarExample />
      </div>
    </body>
  )
}

