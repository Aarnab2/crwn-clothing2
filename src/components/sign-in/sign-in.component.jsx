import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { useState } from "react";
import { googleSignInStart , emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

 const SignIn = ({googleSignInStart,emailSignInStart}) => {
  const [userCredentials,setCredentials] = useState({email:'',password:''})

  const {email,password} = userCredentials

 const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      //await auth.signInWithEmailAndPassword(email,password)
      emailSignInStart(email,password)
      setCredentials({ email: "", password: "" });
    }catch(e)
    {
      console.log(e)
    }
   
  };

 const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials,[name]:value})
    //this.setState({ [name]: value });
  };

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
          <div className="buttons">
          <CustomButton type="submit"  >SignIn</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
            SignIn With Google
          </CustomButton>  
          </div>
        </form>
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
