import React, { Component } from 'react';
import { tsThisType } from '@babel/types';
import '/home/nineleaps/work/src/components/emailContainer/email.css';
import faceIcon from '../../assets/download.jpeg';


class Email extends Component {
    
    state = {
        emailInputField: '',
    }

    handleChange  = (e) => {
        e.preventDefault();
        this.setState({
            emailInputField: e.target.value,
        })
    }


    validateEmail = (mail) => 
    {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      {
        return (true)
      }
        alert("You have entered an invalid email address!")
        return (false)
    }

    callAddEmail = async () => {
        const { emailInputField } = this.state;
        if (this.validateEmail(emailInputField)) {
            await this.props.addEmail(this.props.index, emailInputField);
            this.setState({
                emailInputField: '',
            })
        }
        
    }

    render() {
    const { title, email_list, index } = this.props;
        return (  
            <div className="container">
                <div className="header">
                    {title}
                </div>
                <div className="body">
                    <div className='email-ul'>
                        {email_list.map((data, i) => <div className='email-li'>
                        <img className='email-li-img' src={data.img ? data.img : faceIcon}/>
                        <div className='email-li-add'>{data}</div>
                        <div className='email-li-cross'  onClick={() => this.props.removeEmail(index, i)}>X</div></div>)}
                    </div>
                </div>

                <div className="footer">
                    <input
                    value={this.state.emailInputField}
                    onChange={this.handleChange}
                    className='email-input'
                    placeholder="Add new email" />
                    <div className='email-add-btn'  onClick={this.callAddEmail}> +</div>
                </div>


            </div>
        );
    }
}
 
export default Email;