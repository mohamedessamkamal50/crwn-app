import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomBoutton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SingIn extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            email : '',
            password : ''
        };
       
    }

    handelSubmit = event =>{
        event.preventDefault();
        this.setState({ email : '', password : ''})
    }

    handelChange = event => {
        const {value, name} = event.target;
        this.setState = ({ [name] : value})
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput 
                    name='email' 
                    type='email'
                    handelChange={this.handelChange}
                     value={this.state.email} 
                     label = "email"
                      required />
                    
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handelChange={this.handelChange} 
                    label = "password"
                    required />
                    <div className='buttons'>
                    <CustomBoutton type='submit'>Sign in </CustomBoutton>
                     
                    <CustomBoutton onClick={ signInWithGoogle } isGoogleSignIn>
                    Sign in with google  
                    </CustomBoutton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn;