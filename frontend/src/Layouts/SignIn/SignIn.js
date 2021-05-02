import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import baseUrl from '../../Helpers/BaseUrl';

//STORE
import { connect } from "react-redux";
import { authAction } from "../../Store/actions/auth";

//img
import logoPropulsion from "../../Assets/propulsion-logo.png";

//css
import {SignInStyled} from './style';

class SignIn extends Component {
    constructor() {
        super();
    
        this.state = {
          email: "",
          password: "",
          emailError: "",
          passwordError:"",

        };
      }

    handlePassword = (event) => {
    this.setState({ password: event.target.value });
    };
    
    handleemail = (event) => {
    this.setState({ email: event.target.value });
    };
 

     //validation
    validation =()=>{
      let emailError;
      let passwordError;

      //let passwordError
        if (!this.state.password) {
              passwordError = 'Password is required';
        }

       //email validation

       if(!this.state.email){
        emailError = "Email cannot be blank";
       }
       else if(!/\S+@\S+\.\S+/.test(this.state.email)){
        emailError = "This is not valid email";
       }
      
        //channging state in constructor 
          if(emailError || passwordError){
            this.setState({emailError, passwordError});
            return false;
          }
          return true;
        };
        

    //sending form
    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validation();
        let emailError;
        let passwordError;
        
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(emailError, passwordError);
        }

  
        // send email and password to api
        const { password } = this.state;
        const config = {
          body: JSON.stringify({ email: this.state.email, password }),
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        };
        fetch(`${baseUrl}/backend/api/auth/token/`, config)
          .then((res) => res.json())
          // retrieve token from api response
          .then((data) => {
            // console.log(data)
            // set the token to redux
            this.props.dispatch(authAction(data.access));
            // set token to localstorage
            if(data.access){
              localStorage.setItem("token", data.access)
              this.props.history.push('/home_page');
            };            
          });        
      };


    render(){
        return (
            <SignInStyled>
                <div className="sign-in">
                    <div className="propulsion-logo-main-page">
                        <img src={logoPropulsion} alt="propulsion logo"/>
                    </div>

                    <div className="form-row">
                        <h1>Welcome to Student Tracker</h1>
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-col">
                            <label htmlFor='Email'>Email</label>
                            <input type="email" value={this.state.email} onChange={this.handleemail} required/>
                            {this.state.emailError ?<p className="error">{this.state.emailError}</p> : null}
                        </div>
                        <div className="form-col">
                            <label htmlFor='Password'>Password</label>
                            <input type="password"  value={this.state.password} onChange={this.handlePassword} required/>
                            {this.state.passwordError ?<p className="error">{this.state.passwordError}</p> : null}
                        </div>
                        <button onClick={this.handleSubmit}>Sign In</button>
                        </form>
                    <Link to="/sign_up"><p>Don´t you have an account? <br/> Become a member</p></Link> 
                                        
                    </div>            
                </div>         
            </SignInStyled>
        )}
}

const mapStateToProps = (state) => {
  // console.log('token:', state.token)
    return {
      token: state.token,
    };
  };

export default connect(mapStateToProps)(SignIn);
