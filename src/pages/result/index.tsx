import { Result, WhiteSpace } from 'antd-mobile'
import './index.scss'

const myImg = src => <img src={src} className='spe am-icon am-icon-md' alt='' />

const ResultExample = () => (<div className='demo-result-example'>
  <div className='demo-sub-title'>支付成功</div>
  <Result
    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
    title='支付成功'
    message={<div>998.00元 <del>1098元</del></div>}
  />
  <WhiteSpace />
  <div className='demo-sub-title'>验证成功</div>
  <Result
    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
    title='验证成功'
    message='所提交内容已成功完成验证'
  />
  <WhiteSpace />
  <div className='demo-sub-title'>支付失败</div>
  <Result
    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
    title='支付失败'
    message='所选银行卡余额不足'
  />
  <WhiteSpace />
  <div className='demo-sub-title'>等待处理</div>
  <Result
    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
    title='等待处理'
    message='已提交申请，等待银行处理'
  />
  <WhiteSpace />
  <div className='demo-sub-title'>操作失败</div>
  <Result
    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
    title='无法完成操作'
    message='由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com'
  />
</div>)

export default function Index () {
  return (
    <body>
      <div>
        <div className='demo-title'>基本</div>
        <ResultExample />
      </div>
    </body>
  )
}

