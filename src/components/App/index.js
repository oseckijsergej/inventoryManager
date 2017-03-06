import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar';
import TopNav from '../TopNav';

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div id="wrapper">
        <Sidebar />
        <div id="page-wrapper" className="gray-bg">
          <TopNav />

          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-12">
                { children }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default connect()(App);
