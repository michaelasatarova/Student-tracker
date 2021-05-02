import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//style
import {EditProfileStyled} from './style';

//Components
import Navigation from '../../../Components/Navigation/Navigation';
//Redux
import {connect} from 'react-redux';
// import {CreateNewUser} from '../../../Store/actions/EditProfile';
import {GetAllUsers} from '../../../Store/actions/GetUserData';
import {GetPrograms} from '../../../Store/actions/GetPrograms';
import baseUrl from '../../../Helpers/BaseUrl';

// img
import user from  '../../../Assets/user.jpg';
import loading from '../../../Assets/loading.gif'

class NewProfile extends Component {
    constructor() {
        super();  
        this.state = {
          username: "", 
          first_name:"",
          last_name:"",
          email:"",
          ststus:"",
          program:"",    
        };
      }   

      handleEmail = (event) => {
        this.setState({ email: event.target.value });
      };
      handleFirstName = (event) => {
        this.setState({ first_name: event.target.value });
      };
      handleLastName = (event) => {
        this.setState({ last_name: event.target.value });
      };
      handleUsername = (event) => {
        this.setState({ username: event.target.value });
      };
      handleStatus = (event) => {
        this.setState({ status: event.target.value });
      };
      handleProgram = (event) => {
        this.setState({ program: event.target.value });
      };


      componentDidMount(){
        // console.log('Mounting in programs');
        this.props.dispatch(GetPrograms())
    }

     
      //1st version doesn´t work
    //   handleSubmit = (e) => {
    //       e.preventDefault();
    //       this.props.dispatch(CreateNewUser(this.state.username, this.state.first_name, this.state.last_name, this.state.email, this.props.history))
    //   };

    handleSubmit = (e) => {
        e.preventDefault();

      const config = {
        body: JSON.stringify({ 
            username: this.state.username,
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            status:this.state.status,
            program:this.state.program,
        }),
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.props.token}`
        }),
      };
      fetch(`${baseUrl}/backend/api/users/`, config) 
        .then((res) => res.json())  
        .then((data)=>{
            this.props.dispatch(GetAllUsers())
            this.setState({
                username: "", 
                first_name:"",
                last_name:"",
                email:"",
                status:"" ,
                program: ""});
            this.props.history.push('/global_grades/1');

        });       
    };




    render(){
    // console.log(this.props);
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
                                    <label htmlFor="username" >Username</label>
                                    <input type="text" name="username" onChange={this.handleUsername} value={this.state.username}/>
                                    
                                </div>
                                <div className="form-col">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="first_name" onChange={this.handleFirstName} value={this.state.first_name} />
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="last_name" onChange={this.handleLastName} value={this.state.last_name}/>
                                   <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" name="email" onChange={this.handleEmail} value={this.state.email} />
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="status">Status</label>
                                    <input type="text" name="status"  onChange={this.handleStatus} value={this.state.status} />
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="program">Program</label>
                                    <select name="program" onChange={this.handleProgram} value={this.state.program} >
                                        <option ></option>
                                        {this.props.get_all_programs? this.props.get_all_programs.map((data, index)=>
                                            <option key={index}>{data.name}</option>
                                        ): <img className='Loading' src={loading} alt="Loading"/>}
                                        
                                    </select>
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" />
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city"  />
                                    <p className="errorMessage"></p>
                                </div>
                                {/* <div className="form-col">
                                    <label htmlFor="street">Street</label>
                                    <input type="text" name="street" />
                                    <p className="errorMessage"></p>
                                </div>    
                                <div className="form-col">
                                    <label htmlFor="zip_code">Zip Code</label>
                                    <input type="text" name="zip_code" />
                                    <p className="errorMessage"></p>
                                </div> */}
                                
                                 <div className="form-col">
                                    <label htmlFor="gitlab_profile">Gitlab Profile</label>
                                    <input  type="url" name="gitlab_profile" ></input>
                                    <p className="errorMessage"></p>
                                </div>
                                <div className="form-col">
                                    <label htmlFor="about">About</label>
                                    <textarea  id="" cols="30" rows="5" name="about"></textarea>
                                    <p className="errorMessage"></p>
                                </div> 
                               
                                <div className="form-btns">
                                    <button className="btn-save" type='submit' onClick={this.handleSubmit} >Save</button>
                                    <Link to='/students_list'><button className="btn-cancle">Cancle</button></Link>
                                </div>                    
                            </form>

                 </div>
            </EditProfileStyled>
        )
    }
}

const mapStateToProps = (state)=>{
    // console.log('Post user:', state.get_all_users)
    // console.log('Programs:', state.get_all_programs)
    return{
        get_all_users: state.get_all_users,
        get_all_programs: state.get_all_programs,
    }
}

export default connect(mapStateToProps)(NewProfile)
