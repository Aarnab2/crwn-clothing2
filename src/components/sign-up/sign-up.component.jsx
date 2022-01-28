import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import '../sign-up/sign-up.styles.scss'
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

class SignUp extends React.Component{
constructor(){
    super()
    this.state = {
        email:'',
        displayName:'',
        password:'',
        confirmPassword:''
    }
}

handleSubmit = async(event)=>{
    event.preventDefault()
    const {signUpStart} = this.props
    const {email , displayName , password , confirmPassword} = this.state
    if(password!==confirmPassword)
    {
        alert('password did not match!')
        return
    }
    try{
    //    const {user} = await auth.createUserWithEmailAndPassword(email,password)
    //    await createUserProfileDocument(user,{displayName})
    signUpStart(email,displayName,password)
    this.setState({email:'', displayName:'', password:'', confirmPassword:''})
    }catch(e){
    console.log(e.message)
    }
}

handleChange = (event)=>{
    const {name,value} = event.target
    this.setState({[name]:value})
}

render(){
    const {email,displayName,password,confirmPassword} = this.state
return (
    <div className='sign-up-form'>
    <h2 className='title'>I do not have an account</h2>
    <span>Sign up with your email and password</span>
    <form onSubmit={this.handleSubmit}>
    <FormInput
    type='text'
    name='displayName'
    value={displayName}
    handleChange = {this.handleChange}
    label='Display Name'
    required
    />
    <FormInput
    type='email'
    name='email'
    value={email}
    handleChange = {this.handleChange}
    label='Email'
    required
    />
    <FormInput
    type='password'
    name='password'
    value={password}
    handleChange = {this.handleChange}
    label='Password'
    required
    />
    <FormInput
    type='password'
    name='confirmPassword'
    value={confirmPassword}
    handleChange = {this.handleChange}
    label='Confirm Password'
    required
    />
    <CustomButton type='submit'>SIGN UP</CustomButton>
    </form>
    </div>
)
}
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email,displayName,password) => dispatch(signUpStart({email,displayName,password}))
})

export default connect(null,mapDispatchToProps)(SignUp)