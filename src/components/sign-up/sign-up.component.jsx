import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import '../sign-up/sign-up.styles.scss'
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'
import { useState } from 'react'

const SignUp = ({signUpStart})=>{
const [userCredentials,setCredentials] = useState({
    email:'',
    displayName:'',
    password:'',
    confirmPassword:''
})

const {email , displayName , password , confirmPassword} = userCredentials

const handleSubmit = async(event)=>{
    event.preventDefault()
    if(password!==confirmPassword)
    {
        alert('password did not match!')
        return
    }
    try{
    //    const {user} = await auth.createUserWithEmailAndPassword(email,password)
    //    await createUserProfileDocument(user,{displayName})
    signUpStart(email,displayName,password)
    setCredentials({email:'', displayName:'', password:'', confirmPassword:''})
    }catch(e){
    console.log(e.message)
    }
}

const handleChange = (event)=>{
    const {name,value} = event.target
    setCredentials({...userCredentials,[name]:value})
}

return (
    <div className='sign-up-form'>
    <h2 className='title'>I do not have an account</h2>
    <span>Sign up with your email and password</span>
    <form onSubmit={handleSubmit}>
    <FormInput
    type='text'
    name='displayName'
    value={displayName}
    handleChange = {handleChange}
    label='Display Name'
    required
    />
    <FormInput
    type='email'
    name='email'
    value={email}
    handleChange = {handleChange}
    label='Email'
    required
    />
    <FormInput
    type='password'
    name='password'
    value={password}
    handleChange = {handleChange}
    label='Password'
    required
    />
    <FormInput
    type='password'
    name='confirmPassword'
    value={confirmPassword}
    handleChange = {handleChange}
    label='Confirm Password'
    required
    />
    <CustomButton type='submit'>SIGN UP</CustomButton>
    </form>
    </div>
)

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email,displayName,password) => dispatch(signUpStart({email,displayName,password}))
})

export default connect(null,mapDispatchToProps)(SignUp)