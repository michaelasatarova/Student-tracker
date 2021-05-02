import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//style
import {HomePageStyled} from './style';

//img
import user from '../../Assets/user.jpg';
import loading from '../../Assets/loading.gif';

//components
import Navigation from '../../Components/Navigation/Navigation';
import HPStudent from '../../Components/HPStudent/HPStudent'
//redux
import {connect} from 'react-redux';
import {GlobalGradesAction} from '../../Store/actions/GlobalGrades';

class HomePage extends Component {
    
    componentDidMount(){
        // console.log('mounting in Home Page');
        this.props.dispatch(GlobalGradesAction())
    }

    render(){
        return (
            <HomePageStyled>
                    <Navigation/>
                    <div className="hp-layout">
                        <h1>What is new?</h1>                    
                        <div className="hp-sublayout">                         
                            <div className="program-hp">
                                <h1>Current courses</h1>
                                <div className="wrap">
                                    {this.props.global_grades ? this.props.global_grades.map((data, index)=> 
                                    <div className="program-hp-top">
                                        <h2>{data.name}</h2>
                                        <p>{data.description}</p>
                                        {/* <p>DATE IS MISSING!!!</p> */}
                                        <Link to={`/global_grades/${data.id}`}><h3>Click for more details ▶</h3></Link>
                                    </div>): ''}
                                </div>                               
                            </div> 

                            <div className="students-hp">
                                <h1>Students from current boootcamp</h1>
                                <div className="students-render">
                                        {this.props.global_grades ? this.props.global_grades.map((data)=> data.students.map((student)=><HPStudent student={student}/> )
                                        ): <img className='Loading' src={loading} alt="Loading"/>}                   
                                </div>
                            </div>
                        </div>
    

                    </div>  
            </HomePageStyled>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("programs global: ",state.global_grades);
    return {
   global_grades: state.global_grades,
}}


export default connect(mapStateToProps)(HomePage)











// VERSION2
// const HomePage = () => {
//     return (
//         <HomePageStyled>
//             <div class="wrapper">
//                 <div class="parent" onclick="">
//                     <div class="child bg-one">
//                     <Link to='/'>Programs</Link>
//                     </div>
//                 </div>

//                 <div class="parent right" onclick="">
//                     <div class="child bg-two">
//                     <Link to='/'>LecturesLayout</Link>
//                     </div>
//                 </div>

//                 <div class="parent" onclick="">
//                     <div class="child bg-three">
//                     <Link to='/profile'>Profile</Link>
//                     </div>
//                 </div>

//                 <div class="parent right" onclick="">
//                     <div class="child bg-four">
//                     <Link to='/'>Student Tracker</Link>
//                     </div>
//                 </div>

//                 <div class="parent" onclick="">
//                     <div class="child bg-five">
//                     <Link to='/students_list'>Students</Link>
//                     </div>
//                 </div>

//                 <div class="parent right" onclick="">
//                     <div class="child bg-six">
//                     <Link to='/profile_teachers_list'>Teachers</Link>
//                     </div>
//                 </div>
//                 </div>
                            
//         </HomePageStyled>
//     )
// }

// export default HomePage
