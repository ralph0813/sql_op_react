import React from 'react'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import store from './store';
import loadable from './utils/loadable'
import { Provider } from 'react-redux';
import 'animate.css'
import './style/base.scss'
import './style/App.scss'

// 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))

// 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/Others/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './views/Others/500'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact render={() => <Redirect to='/sql'/>}/>
                <Route path='/sql' exact render={() => <Redirect to='/sql/list'/>}/>
                <Route path='/500' component={View500}/>
                <Route path='/login' component={Login}/>
                <Route path='/404' component={View404}/>
                <Route component={DefaultLayout}/>
            </Switch>
        </Router>
    </Provider>

)

export default App
