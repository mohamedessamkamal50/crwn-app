import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomBoutton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SingIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        };
    }

    handelSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email : '', password : ''});
        } catch (error){
            console.log(error)
        }
        
    }

    handelChange = event => {
        const { name, value} = event.target;
        this.setState({[name] : value})
    };

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form  onSubmit={this.handelSubmit}>
                    <FormInput 
                    name='email'
                    type='email'
                    handelChange={this.handelChange}
                    value={this.state.email}
                    label='Email'
                    required/>
                    
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handelChange={this.handelChange} 
                    label= 'Password'
                    required />
                    <div className='buttons'>
                    <CustomBoutton type='submit'>Sign in </CustomBoutton>
                     
                    <CustomBoutton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with google  
                    </CustomBoutton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn;