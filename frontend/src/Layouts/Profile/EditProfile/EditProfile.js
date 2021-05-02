import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//style
import {EditProfileStyled} from './style';

//Components
import Navigation from '../../../Components/Navigation/Navigation';
//Redux
import {connect} from 'react-redux';
import {EditProfileAction} from '../../../Store/actions/EditProfile';

// img
import user from  '../../../Assets/user.jpg'

class EditProfile extends Component {
    state={
        user:this.props.user_data
    }

    formHandler=(e)=>{
        const {value, name} = e.target
         this.setState({

            user: {...this.state.user,[name]: value}
        })
     }

     handleSubmit=(e)=>{
        e.preventDefault();
        this.props.dispatch(EditProfileAction(this.state.user, this.props.history))
        
    //     validityErrors = formValidity({first_name: "my value here"})
        
    //     if(Object.keys(validityErrors).length === 0)
    //     {
    //       dispatch 
    //     } else {
    //        setErrors(validityErrors)
    //     }
    //   }
     }

    render(){
    // console.log(this.props.history);
        return (
            <EditProfileStyled>
                <Navigation/>
                 <div className="edit-profile">
                        <form  onSubmit={this.handleSubmit}>
                                <div className="form-col">
                                    <label htmlFor="upload-photo" className="edit-photo">
                                        <img src={user} alt="user"/>
                                        <h1>Browse...</h1>
                                    </label>
                                    <input type="file" name="profile_picture" id="upload-photo" />
                                </div>
                                <div className="form-col">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" value={this.state.user ?  this.state.user.username : '' } onChange={this.formHandler}/>
                                    
                                </div>
                                <div className="form-col">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="first_name" value={this.state.user ?  this.state.user.first_name : '' } onChange={this.formHandler} />
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="last_name" value={this.state.user ?  this.state.user.last_name : '' } onChange={this.formHandler}/>
                                   <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" name="email" value={this.state.user ?  this.state.user.email : '' } onChange={this.formHandler}/>
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" value={this.state.user ?  this.state.user.country : '' } onChange={this.formHandler}/>
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" value={this.state.user ?  this.state.user.city : '' } onChange={this.formHandler} />
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="street">Street</label>
                                    <input type="text" name="street" value={this.state.user ?  this.state.user.street : '' } onChange={this.formHandler}/>
                                    <p className="errorMessage"></p>
                                </div>    
                                <div className="form-col">
                                    <label htmlFor="zip_code">Zip Code</label>
                                    <input type="text" name="zip_code" value={this.state.user ?  this.state.user.zip_code : '' } onChange={this.formHandler}/>
                                    <p className="errorMessage"></p>
                                </div>
                                 {/* <div className="form-col">
                                    <label htmlFor="gitlab_profile">Gitlab Profile</label>
                                    <input  type="url" name="gitlab_profile" value={this.state.user ?  this.state.user.gitlab_profile : '' } onChange={this.formHandler}></input>
                                    <p className="errorMessage"></p>
                                </div> */}
                                <div className="form-col">
                                    <label htmlFor="about">About</label>
                                    <textarea  id="" cols="30" rows="5" name="about" value={this.state.user ?  this.state.user.about : '' } onChange={this.formHandler}></textarea>
                                    <p className="errorMessage"></p>
                                </div> 
                               
                                <div className="form-btns">
                                    <button className="btn-save" type='submit' >Save</button>
                                    <Link to='/profile'><button className="btn-cancle">Cancle</button></Link>
                                </div>                    
                            </form>

                 </div>
            </EditProfileStyled>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user_data: state.user_data
    }
}

export default connect(mapStateToProps)(EditProfile)
