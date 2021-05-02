import React from 'react';
import GradesCard from  '../../Components/GradesCard/index'
import Navigation from '../../Components/Navigation/Navigation';
import { MainGradesStyle } from './style'
// import { HomePageStyled } from './style';
import { useEffect } from 'react';
import { useSelector,useDispatch }  from 'react-redux';
import { fetchAllStudentGrades} from '../../Store/actions/grades.js'
// import GraphicChart from '../../Components/GraphicChart/index.js'

const Grades = () => {
    const grades = useSelector( state => state.all_grades)
    const dispatch = useDispatch()
    //    console.log('grade',grades)
          useEffect(() => {
          dispatch(fetchAllStudentGrades())
          }, [dispatch])

    return (
           <MainGradesStyle>
                <Navigation/>
             <section className="grades-card-container">
                 {grades.length ? grades.map((grade) => <GradesCard grade={grade} key={grade.id}/>) : "Loading ..."}
             </section>

           </MainGradesStyle>






    )
}

export default Grades;