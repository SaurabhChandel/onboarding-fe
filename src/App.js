import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar';
import AntDSider from './components/sidebar/antSidebar';
import './index.css';
import Content from './components/content';
import Email from './components/emailContainer/email';

class App extends Component {
  state = { data: [{
    title: 'HR Recruiter',
    email_list: [ 'xyz@gmail.com', 'sadsa@sdsa.com','xyz@gmail.com', 'sadsa@sdsa.com','xyz@gmail.com', 'sadsa@sdsa.com','xyz@gmail.com', 'sadsa@sdsa.com']
  },
  {
    title: 'HR Recruiter',
    email_list: [ 'xyz@gmail.com', 'sadsa@sdsa.com']
  },
  {
    title: 'HR Recruiter',
    email_list: [ 'xyz@gmail.com', 'sadsa@sdsa.com']
  },
  {
    title: 'HR Recruiter',
    email_list: [ 'xyz@gmail.com', 'sadsa@sdsa.com']
  },
  {
    title: 'HR Recruiter',
    email_list: [ 'xyz@gmail.com', 'sadsa@sdsa.com']
  },
  {
    title: 'HR Recruiter',
    email_list: [ 'xyz@gmail.com', 'sadsa@sdsa.com']
  },
  {
    title: 'HR Recruiter',
    email_list: [ 'xyz@gmail.com', 'sadsa@sdsa.com']
  }
] }

  addEmail = (index, email) => {
    let { data } = this.state;
    data[index].email_list.push(email);
    this.setState({ data });
  }

  removeEmail = (parentIndex, childIndex) => {
    let { data } = this.state;
    data[parentIndex].email_list.splice(childIndex, 1);
    this.setState({ data });
  }

  render() { 
    return ( <div className='main'>
      
      <AntDSider />
      <div className='section'>
        {
          this.state.data.map((d, index) => <Email {...d} index={index}
          addEmail={this.addEmail}
          removeEmail={this.removeEmail}/>)
        } 
      </div>
          </div>
           );
  }
}
 
export default App;