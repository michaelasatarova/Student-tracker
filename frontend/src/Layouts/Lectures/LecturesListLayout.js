// src/Layouts/LecturesLayout/LecturesListLayout

import React, {Component} from 'react';

//style
import {ListLecturesStyled} from './styleLecturesLayout';

//components
import LectureCardComponent from '../../Components/Lectures/LectureCardComponent';
import CoursesHomePage from '../../Layouts/Lectures/CoursesHomePage';
import TitleSearchBar from '../../Components/Searchbar/TitleSearchBar';

//redux
import {connect} from 'react-redux';
import {LecturesActions} from "../../Store/actions/LecturesActions";
import {SearchLecturesByTitle} from "../../Store/actions/SearchLecturesActions";

class LecturesListLayout extends Component {
    state = {
        title: '',
    }

    searchTitle = (e) => {
        e.preventDefault()
        this.setState({title: e.target.value})
    }

    searchingAction = (e) => {
        e.preventDefault()
        this.props.dispatch(SearchLecturesByTitle(this.state.title))
    }

    componentDidMount() {
        console.log('mounting in LecturesLayout List');
        this.props.dispatch(LecturesActions())
    }

    render() {
        return (
            <ListLecturesStyled>
                <CoursesHomePage/>
                <div className="cards-list">
                    <TitleSearchBar title={this.state.title}
                                    searchTitle={this.searchTitle}
                                    searchingAction={this.searchingAction}/>
                    <div className="lectures">
                        {this.props.get_all_lectures &&
                        !this.props.search_lectures.length
                            ? this.props.get_all_lectures.map((data, index) =>
                                <LectureCardComponent key={index}
                                                      data={data}/>)
                            : this.props.search_lectures.length ?
                                this.props.search_lectures.map((data, index) =>
                                    <LectureCardComponent key={index}
                                                          data={data}/>) :
                                'Loading '}
                    </div>
                </div>
            </ListLecturesStyled>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("LecturesListLayout get_all_lectures: ", state.get_all_lectures);
    return {
        token: state.token,
        get_all_lectures: state.get_all_lectures,
        search_lectures: state.search_lectures,
    }
};

export default connect(mapStateToProps)(LecturesListLayout);
