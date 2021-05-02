import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
//style
import {NewGradeStyled} from './style';
import {GetGrades} from '../../Store/actions/GetGrades';
import {sendGrade} from '../../Store/actions/PostGrade';
import { useHistory, withRouter} from 'react-router';

const NewGrade = (props) => {
    const[ grade, setGrade] = useState({
        grade:0,
        lecture:'',
        student:'',
    })

    const dispatch = useDispatch()
    const history = useHistory()
    // console.log('this is history:', history)
    const program_id = props.match.params.id;

    //event handlers
    const newGradeHandler = (event) => {
    const{name, value}= event.target
    setGrade({
        ...grade, 
        [name]:value
    })
    };



    useEffect(() => {
        console.log('mounting in NewGrade');
        dispatch(GetGrades())
    }, [])


    const handleSubmit = e =>{
            e.preventDefault()
            props.toggleClass()
            dispatch(sendGrade(grade, program_id,  history))
      
    }


    return (

        <NewGradeStyled>
            {console.log('New student grade:', grade)}

            <h1>Choose a student and Rate his Work</h1>
            <form >
                <div className="form-grade">
                    <label htmlFor="grade">Grade</label>
                    <input type="number" name="grade" value={grade.grade} onChange={newGradeHandler}/>
                </div>
                {/* <div className="form-grade">
                    <label htmlFor="repository">Repository</label>
                    <input type="url" name="repository"/>
                </div> */}
                <div className="form-grade">
                    <label htmlFor="student">Student</label>
                    <select name="student" onChange={newGradeHandler} >
                        <option ></option>
                        <option >Michaela</option>
                        {props.students.map((student, index)=> <option value={student.id} key={index}>{student.username}</option>)}
                    </select>
                </div>
                <div className="form-grade">
                    <label htmlFor="lecture">Lecture</label>
                    <select name="lecture" onChange={newGradeHandler}>
                        <option ></option>
                        {props.lectures ? props.lectures.map((lecture, index)=> <option key={index}>{lecture.title}</option>): ''}
                    </select>
                </div>
                <div className="btn-group">
                    <button className="save" onClick={handleSubmit}>Save</button>
                    <Link to='/'><button>Cancle</button></Link>
                </div>
            </form>

        </NewGradeStyled>
    )
}

export default withRouter(NewGrade)
