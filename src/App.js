import React, { Component } from 'react';
import {BrowserRouter as Router, Routes,Route,Link,Navigate} from 'react-router-dom'
import Home from './pages/home'
import Find from './pages/find'
import News from './pages/news'
import My from './pages/my'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <nav>
            <Link to='/home'>首页</Link>
            <Link to='/find'>找房</Link>
            <Link to='/news'>资讯</Link>
            <Link to='/my'>我的</Link>
          </nav>
          <section>
            <Routes>
              <Route path='/' element={<Navigate to='/home'/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/find' element={<Find/>}></Route>
              <Route path='/news' element={<News/>}></Route>
              <Route path='/my' element={<My/>}></Route>
            </Routes>
          </section>
        </Router>
      </div>
    );
  }
}

export default App;