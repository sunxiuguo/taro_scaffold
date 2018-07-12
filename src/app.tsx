import Taro, { Component } from '@tarojs/taro';
import '@tarojs/async-await';
import { Provider } from '@tarojs/redux';

import Index from './pages/index';
import store from './store';
import { debugAdd, globalAdd } from './utils/debug';
import Services from './services';

import './app.scss';

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  }

  constructor(props) {
    super(props);
    debugAdd('app', this);
  }

  componentDidMount = () => {}

  componentDidShow = () => {}

  componentDidHide = () => {}

  componentCatchError = () => {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));

globalAdd('Services', Services);
globalAdd('Taro', Taro);
globalAdd('store', store);
