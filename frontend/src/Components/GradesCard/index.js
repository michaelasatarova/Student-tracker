import { GradesCardStyle, StudentDetailStyle, CardDetailStyle } from './style';
import rocket_3  from '../../Assets/rocket_3.png';


const GradesCard = ({grade}) => {
  console.log('testing the grades',grade)
        return (
           <GradesCardStyle>
              <div className='image-card'>
                <img src={rocket_3} alt='User' className='image-card-user'/>
              </div>
            <StudentDetailStyle>
               <CardDetailStyle>{grade.student.first_name}</CardDetailStyle>
               <CardDetailStyle>{grade.student.last_name}</CardDetailStyle>
               <CardDetailStyle>{grade.grade}</CardDetailStyle>
           </StudentDetailStyle>
          </GradesCardStyle>
        )
    }


export default GradesCard;