import React, {Component} from 'react';

import {ListLecturesStyled} from './styleLecturesLayout';

import LessonCardComponent from '../../Components/Lectures/LessonCardComponent';
import CoursesHomePage from '../../Layouts/Lectures/CoursesHomePage';
import DateSearchBar from '../../Components/Searchbar/DateSearchBar';

import {connect} from 'react-redux';
import {GetAllLessons} from "../../Store/actions/LecturesActions";
import {SearchLessonsByDate} from "../../Store/actions/SearchLecturesActions";

class LessonsListLayout extends Component {
    state={
        date:'',
    }

    searchDate=(e)=>{
        e.preventDefault()
        this.setState({date : e.target.value})
    }

    searchingAction =(e)=>{
        e.preventDefault()
        this.props.dispatch(SearchLessonsByDate(this.state.date))
    }

    componentDidMount(){
        console.log('mounting in Lessons List');
        this.props.dispatch(GetAllLessons())
    }

    render(){
        return (
            <ListLecturesStyled>
                <CoursesHomePage/>
                <div className="cards-list">
                    <DateSearchBar date={this.state.date } searchDate={this.searchDate} searchingAction={this.searchingAction}/>
                    <div className="lectures">
                        { this.props.get_all_lessons && !this.props.search_lessons.length ? this.props.get_all_lessons.map((data, index)=>
                            <LessonCardComponent key={index} data={data} />) : this.props.search_lessons.length ?
                            this.props.search_lessons.map((data, index)=>
                                <LessonCardComponent key={index} data={data} />) :
                            'Loading '}
                    </div>
                </div>
            </ListLecturesStyled>
        )}
}

const mapStateToProps = (state) => {
    console.log("Lessons: ",state.get_all_lessons);
    return {
        token: state.token,
        get_all_lessons: state.get_all_lessons,
        search_lessons: state.search_lessons,
    }};


export default connect(mapStateToProps) (LessonsListLayout);
