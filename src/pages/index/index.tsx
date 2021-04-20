import { Component } from 'react'
import Taro from '@tarojs/taro'
import IconBottom from './images/bottom.png'
import './index.scss'

interface ListItem {
  title: string
  unfold: boolean
  items: { name: string, url?: string }[]
}

interface IState {
  list: ListItem[]
}

export default class Index extends Component<any, IState> {
  state = {
    list: [{
      title: '布局 Layout',
      unfold: false,
      items: [{
        name: 'Flex Flex布局',
        url: '/pages/flex/index'
      }, {
        name: 'WhiteSpace 上下留白',
        url: '/pages/white-space/index'
      }, {
        name: 'WingBlank 两翼留白',
        url: '/pages/wing-blank/index'
      }]
    }, {
      title: '导航 Navigation',
      unfold: false,
      items: [{
        name: 'Drawer 抽屉-基本',
        url: '/pages/drawer-base/index'
      }, {
        name: 'Drawer 抽屉-嵌入文档模式',
        url: '/pages/drawer/index'
      }, {
        name: 'Menu 菜单',
        url: '/pages/menu/index'
      }, {
        name: 'NavBar 导航栏',
        url: '/pages/navbar/index'
      }, {
        name: 'Pagination 分页器',
        url: '/pages/pagination/index'
      }, {
        name: 'Popover 气泡',
        url: '/pages/popover/index'
      }, {
        name: 'SegmentedControl 分段器',
        url: '/pages/segmented-control/index'
      }, {
        name: 'TabBar 标签栏',
        url: '/pages/tabbar/index'
      }, {
        name: 'Tabs 标签页',
        url: '/pages/tabs/index'
      }]
    }, {
      title: '数据录入 Data Entry',
      unfold: false,
      items: [
        {
          name: 'Button 按钮',
          url: '/pages/button/index'
        },
        {
          name: 'Calendar 日历'
        },
        {
          name: 'Checkbox 复选框',
          url: '/pages/checkbox/index'
        },
        {
          name: 'DatePicker 日期选择'
        },
        {
          name: 'DatePickerView 选择器'
        },
        {
          name: 'ImagePicker 图片选择器'
        },
        {
          name: 'InputItem 文本输入',
          url: '/pages/input/index'
        },
        {
          name: 'Picker 选择器'
        },
        {
          name: 'PickerView 选择器'
        },
        {
          name: 'Radio 单选框',
          url: '/pages/radio/index'
        },
        {
          name: 'Range 区域选择'
        },
        {
          name: 'SearchBar 搜索栏',
          url: '/pages/search-bar/index'
        },
        {
          name: 'Slider 滑动输入条'
        },
        {
          name: 'Stepper 步进器',
          url: '/pages/stepper/index'
        },
        {
          name: 'Switch 滑动开关'
        },
        {
          name: 'TextareaItem 多行输入'
        }
      ]
    }, {
      title: '数据展示 Data Display',
      unfold: false,
      items: [
        {
          name: 'Accordion 手风琴',
          url: '/pages/accordion/index'
        },
        {
          name: 'Badge 徽标数',
          url: '/pages/badge/index'
        },
        {
          name: 'Card 卡片',
          url: '/pages/card/index'
        },
        {
          name: 'Carousel 走马灯',
          url: '/pages/carousel/index'
        },
        {
          name: 'Grid 宫格',
          url: '/pages/grid/index'
        },
        {
          name: 'Icon 图标',
          url: '/pages/icon/index'
        },
        {
          name: 'List 列表',
          url: '/pages/list/index'
        },
        {
          name: 'NoticeBar 通告栏',
          url: '/pages/notice-bar/index'
        },
        {
          name: 'Steps 步骤条',
          url: '/pages/steps/index'
        },
        {
          name: 'Tag 标签',
          url: '/pages/tag/index'
        }
      ]
    }, {
      title: '操作反馈 Feedback',
      unfold: false,
      items: [
        {
          name: 'ActionSheet 动作面板'
        },
        {
          name: 'ActivityIndicator 活动指示器',
          url: '/pages/activity-indicator/index'
        },
        {
          name: 'Modal 对话框'
        },
        {
          name: 'Progress 进度条',
          url: '/pages/progress/index'
        },
        {
          name: 'Toast 轻提示'
        }
      ]
    }, {
      title: '手势 Gesture',
      unfold: false,
      items: [
        {
          name: 'PullToRefresh 拉动刷新'
        },
        {
          name: 'SwipeAction 滑动操作'
        }
      ]
    }, {
      title: '组合组件 Combination',
      unfold: false,
      items: [
        {
          name: 'ListView 长列表'
        },
        {
          name: 'Result 结果页',
          url: '/pages/result/index'
        }
      ]
    }, {
      title: '其他 Other',
      unfold: false,
      items: [
        {
          name: 'LocaleProvider 国际化',
          url: '/pages/locale-provider/index'
        }
      ]
    }]
  }

  toggle (idx: number) {
    this.setState(prev => {
      const list = [
        ...prev.list.slice(0, idx),
        {
          ...prev.list[idx],
          unfold: !prev.list[idx].unfold
        },
        ...prev.list.slice(idx + 1)
      ]
      return {
        list
      }
    })
  }

  navigateTo (url: string, e) {
    e.stopPropagation()
    url && Taro.navigateTo({ url })
  }

  render () {
    const list = this.state.list
    return (
      <body>
        <div id='react-content'>
          <div data-reactroot='' className='am-demo-page'>
            <div className='am-demo-hd'>
              <h1 className='am-demo-title'><span>Ant Design Mobile</span></h1>
              <h2 className='am-demo-subtitle'><span>支付宝移动端组件库</span></h2>
            </div>
            <div className='am-demo-bd'>
              {
                list.map((category, index) => (
                  <div
                    className={`am-list category-${category.unfold ? 'open' : 'closed'}`}
                    onClick={this.toggle.bind(this, index)}
                    key={category.title}
                  >
                    <div className='am-list-header'>
                      <div className='am-demo-category'>
                        <div className='am-demo-category-name'>{category.title}</div>
                        <div className='am-demo-category-arrow'>
                          <img className='am-icon am-icon-down am-icon-md' src={IconBottom} />
                        </div>
                      </div>
                    </div>
                    <div className='am-list-body'>
                      {
                        category.items.map(item => (
                          <div
                            className='am-list-item am-list-item-middle'
                            onClick={this.navigateTo.bind(this, item.url)}
                            key={item.name}
                          >
                            <div className='am-list-line'>
                              <div className='am-list-content'>{item.name}</div>
                              {item.url &&
                              <div
                                className='am-list-arrow am-list-arrow-horizontal'
                                aria-hidden='true'
                              />
                              }
                            </div>
                            <div className='am-list-ripple' style={{ display: 'none' }}></div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </body>
    )
  }
}
