import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {EditLectureStyled} from './styleLecturesLayout';

import {connect} from 'react-redux';
import {EditProgramAction} from '../../Store/actions/LecturesActions';
import CoursesHomePage from "./CoursesHomePage";

class ProgramEditLayout extends Component {
    state = {
        program: this.props.program_data
    }

    formHandler = (e) => {
        console.log("--- ProgramEditLayout formHandler ---");
        const {value, name} = e.target
        this.setState({
            program: {...this.state.program, [name]: value}
        })
    }

    handleSubmit = (e) => {
        console.log("--- ProgramEditLayout handleSubmit ---");
        e.preventDefault();
        this.props.dispatch(EditProgramAction(this.state.program.id, this.state.program, this.props.history))
    }

    render() {
        console.log("ProgramEditLayout this.props.history:", this.props.history);
        console.log("ProgramEditLayout this.state.program:", this.state.program);
        return (
            <EditLectureStyled>
                <CoursesHomePage/>
                <div className="edit-profile">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-col">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name"
                                   value={this.state.program ? this.state.program.name : ''}
                                   onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                        </div>
                        <div className="form-col">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description"
                                   value={this.state.program ? this.state.program.description : ''}
                                   onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                        </div>
                        <div className="form-col">
                            <label htmlFor="start_date">Start Date</label>
                            <input type="text" name="start_date"
                                   value={this.state.program ? this.state.program.start_date : ''}
                                   onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                        </div>
                        <div className="form-col">
                            <label htmlFor="end_date">End Date</label>
                            <input type="text" name="end_date"
                                   value={this.state.program ? this.state.program.end_date : ''}
                                   onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                        </div>

                        <div className="form-btns">
                            <button className="btn-save" type='submit'>Save
                            </button>
                            <Link to='/programs'>
                                <button className="btn-cancle">Cancel
                                </button>
                            </Link>

                        </div>
                    </form>
                </div>
            </EditLectureStyled>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("--- ProgramEditLayout mapStateToProps ---");
    return {
        program_data: state.program_data
    }
}

export default connect(mapStateToProps)(ProgramEditLayout)
