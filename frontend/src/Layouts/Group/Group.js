import React, {Component} from 'react';

//style
import {GroupStyled} from './style';

//components
import UserProfileCard from '../../Components/UserProfileCard/UserProfileCard';
import Navigation from '../../Components/Navigation/Navigation';
import SearchBar from '../../Components/Searchbar/Searchbar';

//redux
import {connect} from 'react-redux';
import {GetAllGroups} from '../../Store/actions/GetAllGroups';
import {SearchGroupsByName} from "../../Store/actions/SearchGroups";
import GroupCard from "../../Components/GroupCard/GroupCard";
// import {SearchGroupsByName} from '../../Store/actions/SearchGroups';

class Group extends Component {
        componentDidMount(){
            this.props.dispatch(GetAllGroups())
        }

    render(){
        return (
            <GroupStyled>
                <Navigation/>

                <div className="pt-layout">
                    {/*<SearchBar name={this.state.name } searchName={this.searchName} searchingAction={this.searchingAction}/>*/}
                    {
                        this.props.group.length ? this.props.group.map((data, index)=>
                            <GroupCard key={index}
                                      data={data}
                            />) :'Loading'}

                </div>
            </GroupStyled>
        )
    }
}
const mapStateToProps = (state) => {
    return {
  group: state.get_all_groups
}};

export default connect(mapStateToProps)(Group);
