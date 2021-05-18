# Ant Design Mobile

> Taro v3.3+

在 Taro 中使用支付宝移动端组件库 [Ant Design Mobile](https://mobile.ant.design/docs/react/introduce-cn)。

`Ant Design Mobile` 官方示例：https://mobile.ant.design/kitchen-sink/?lang=zh-CN。

能直接兼容使用的组件大概为 **80%**，具体适配情况请见下文。

## Getting Start

```bash
# 安装 CLI
npm i @tarojs/cli@alpha -g

# 启动项目
cd taro-antd
npm i
taro build --type weapp --watch

# 预览项目时需要以 prod 模式打包
taro build --type weapp
```

## 兼容工作

相对于官方示例的 H5 代码，本项目主要做了以下兼容工作：

### 1. 浏览器默认样式

#### 方式一、开发者可以选择在全局引入浏览器的默认样式

Taro 提供两种内置样式我们可以直接引入生效：

- `@tarojs/taro/html.css`: W3C HTML4 的内置样式，只有 HTML4 标签样式，体积较小，兼容性强，能适应大多数情况。
- `@tarojs/taro/html5.css`: Chrome(Blink) HTML5 的内置样式，内置样式丰富，包括了大多数 HTML5 标签，体积较大，不一定支持所有小程序容器。

```scss
// app.css
// html4
import '@tarojs/taro/html.css';
// html5
import '@tarojs/taro/html5.css';
```

#### 方式二、只摘取部分需要的浏览器默认样式

以往编写 H5 应用时，我们常常会写一些样式去重置浏览器默认样式。所以一般情况不需要引入，或者可以手动挑选必须的样式。

```scss
// app.css
// 以下是为了适配 Antd 项目所需要的默认样式
.h5-span {
  display: inline;
}
```

### 2. 尺寸单位

Taro 默认会对开发者编写的尺寸进行转换：

- 小程序：px -> rpx
- H5：px -> rem

但是组件库一般按照 750px 设计稿的 1/2 编写尺寸，Taro 不需要再对组件库的尺寸进行转换。

可以配置 `@tarojs/plugin-html` 的 `pxtransformBlackList` 选项进行过滤：

```js
// config/index.js
config = {
  plugins: [
    ['@tarojs/plugin-html', {
      // 过滤 antd 组件库的前缀：am-
      pxtransformBlackList: [/am-/, /demo-/, /^body/]
    }]
  ]
  // ...
}
```

### 3. SVG 图标

小程序不支持 SVG，目前组件库中的 SVG 图标都不能使用。

开发者可以配置的图标尽量使用 `<img>`，组件内置的 SVG 图标则暂时没有办法处理。

### 4. 获取元素尺寸

因为在小程序中获取元素尺寸的 API（SelectorQuery） 是**异步**的，和 H5 的**同步**获取（如 `elment.offsetHeight`）不一样。所以需要调用 H5 DOM API 获取元素尺寸的组件，如 `SwipeAction`、`Search`，均不能使用。

### 5. 样式选择器

以下选择器不能正常工作：

- 通配符 `*`
- 媒体查询
- 属性选择器，当属性不是对应小程序组件的内置属性时

## 组件支持列表

### 布局 Layout

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| Flex | ✓ | |
| WhiteSpace | ✓ | |
| WingBlank | ✓ | |

### 导航 Navigation

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| Drawer | ✓ | |
| Menu | ✓ | |
| NavBar | ✓ | Icon 需要自定义 |
| Pagination | ✓ | |
| Popover | ✗ | 不支持 `ReactDOM.unstable_renderSubtreeIntoContainer` |
| SegmentedControl | ✓ | |
| TabBar | ✓ | |
| Tabs | ✓ | |

### 数据录入 Data Entry

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| Button | ✓ | 带 SVG Icon 的不能使用 |
| Calendar | - | |
| Checkbox | ✓ | |
| DatePicker | - | 使用小程序的 `<Picker>` 代替 |
| DatePickerView | - | 使用小程序的 `<PickerView>` 代替 |
| ImagePicker | - | |
| InputItem | ✓ | 不支持模拟键盘 |
| Picker | - | 使用小程序的 `<Picker>` 代替 |
| PickerView | - | 使用小程序的 `<PickerView>` 代替 |
| Radio | ✓ | |
| Range | - | |
| SearchBar | ✗ | |
| Slider | - | 使用小程序的 `<Slider>` 代替 |
| Stepper | ✗ | |
| Switch | - | 使用小程序的 `<Switch>` 代替 |
| TextareaItem | - | |

### 数据展示 Data Display

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| Accordion | ✓ | 属性选择器有问题，动画会失效 |
| Badge | ✓ | |
| Card | ✓ | 图片要显式设置宽高 |
| Carousel | ✗ | 使用小程序的 `Swiper` 代替 |
| Grid | ✓ | |
| Icon | ✓ | 不支持 SVG |
| List | ✓ | |
| NoticeBar | ✗ | 组件内部有报错，不支持 SVG Icon |
| Steps | ✓ | 把 SVG ICON 替换为自定义 Icon 才能使用 |
| Tag | ✓ | |

### 操作反馈 Feedback

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| ActionSheet | ✗ | 使用小程序的 `<Picker>` 代替 |
| ActivityIndicator | ✓ | |
| Modal | ✗ | 使用 `Taro.showModal` 代替 |
| Progress | ✓ | |
| Toast | ✗ | 使用 `Taro.showToast` 代替 |


### 手势 Gesture

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| PullToRefresh | ✗ | |
| SwipeAction | ✗ | 不支持以浏览器的同步 API 获取 DOM 尺寸 |


### 组合组件 Combination

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| ListView | ✗ | 使用 Taro 提供的 `VirtualList` 组件代替 |
| Result | ✓ | 不能使用 SVG Icon  |


### 其他 Other

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| LocaleProvider | ✓ | 只能适配 `Menu` 和 `Pagination` 组件 |

## 共建

组件库还有若干组件未完成兼容测试，如**是否支持**列为 `-`，备注为空的组件，欢迎各位同学进行共建～

另外，有一些组件如 `SwipeAction`、`Search` 针对小程序环境作一些修改后是可以使用的，也欢迎各位进行共建～
