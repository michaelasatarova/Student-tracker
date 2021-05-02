//import {FETCH_ALL_LECTURES} from "../actionTypes";
import { USER_LOGIN, SIGNOUT, SIGNUP_STEP, SIGNUP_REGISTRATION, FETCH_ALL_STUDENT_GRADES}  from '../actionTypes'

const initialState = {
    token: null,
    user_data:null,
    single_user:null,
    edit_profile:null,
    single_grade:null,
    get_grades:null,
    students_groups:[],
    search_students:[],
    search_teachers:[],
    // lectures
    search_lectures:[],
    get_all_lectures:[],
    get_lecturesbyweek:[],
    lecture_data:null,
    edit_lecture:null,
    // programs
    search_programs:[],
    get_all_programs:[],
    program_data:null,
    edit_program:null,
    // lectureweeks
    search_lectureweeks:[],
    get_all_lectureweeks:[],
    lectureweek_data:null,
    edit_lectureweek:null,
    // lessons
    search_lessons:[],
    get_all_lessons:[],
    lesson_data:null,
    edit_lesson:null,

    get_all_users:[],
    get_all_students: [],
    get_all_teachers:[],
    get_user_expertise:[],
    get_git_specialists:[],
    get_html_specialists:[],
    get_sass_specialists:[],
    get_python_specialists:[],
    get_django_specialists:[],
    get_docker_specialists:[],
    get_node_specialists:[],
    get_react_specialists:[],
    get_javascript_specialists:[],
    get_all_groups:[],
};
   export const authReducer = (state = initialState, action) => {

    switch (action.type) {
      case "USER_LOGIN": {
        const token = action.payload;
        return { ...state, token };
      }
      case "GET_USER_DATA": {
        const user_data = action.payload;
        return { ...state, user_data };
      } 
      case "GLOBAL_GRADES": {
        const global_grades = action.payload;
        return { ...state, global_grades };
      } 
      case "SINGLE_GRADE": {
        const single_grade = action.payload;
        return { ...state, single_grade };
      } case "GET_SINGLE_USER": {
        const single_user = action.payload;
        return { ...state, single_user };
      } 
      // case "EDIT_PROFILE": {
      //   const edit_profile = action.payload;
      //   return { ...state, edit_profile };
      // }
      case "GET_STUDENTS_GROUPS": {
        const students_groups = action.payload;
        return { ...state, students_groups };
      }
      case "GET_ALL_USERS": {
        const get_all_users = action.payload;
        return { ...state, get_all_users };
      }
      case "GET_ALL_STUDENTS": {
        const get_all_students = action.payload;
        return { ...state, get_all_students };
      }case "SEARCH_STUDENTS": {
        const search_students = action.payload;
        return { ...state, search_students };
      }
      case "GET_ALL_TEACHERS": {
        const get_all_teachers = action.payload;
        return { ...state, get_all_teachers };
      }case "SEARCH_TEACHERS": {
        const search_teachers = action.payload;
        return { ...state, search_teachers };
      }
       case "GET_SINGLE_USER": {
      const get_grades = action.payload;
      return { ...state, get_grades };
      } 
      case "GET_USER_EXPERTISE": {
        const get_user_expertise = action.payload;
        return { ...state, get_user_expertise };
      }
      case "GET_GIT_SPECIALISTS": {
        const  get_git_specialists = action.payload;
        return { ...state,  get_git_specialists };
      }
      case "GET_HTML_SPECIALISTS": {
        const  get_html_specialists = action.payload;
        return { ...state,  get_html_specialists };
      }
      case "GET_SASS_SPECIALISTS": {
        const  get_sass_specialists = action.payload;
        return { ...state,  get_sass_specialists };
      }
      case "GET_PYTHON_SPECIALISTS": {
        const  get_python_specialists = action.payload;
        return { ...state,  get_python_specialists };
      }
      case "GET_DJANGO_SPECIALISTS": {
        const  get_django_specialists = action.payload;
        return { ...state,  get_django_specialists };
      }
      case "GET_DOCKER_SPECIALISTS": {
        const  get_docker_specialists = action.payload;
        return { ...state,  get_docker_specialists };
      }
      case "GET_JAVASCRIPT_SPECIALISTS": {
        const  get_javascript_specialists = action.payload;
        return { ...state,  get_javascript_specialists };
      }
      case "GET_NODE_SPECIALISTS": {
        const  get_node_specialists = action.payload;
        return { ...state,  get_node_specialists };
      }
      case "GET_REACT_SPECIALISTS": {
        const  get_react_specialists = action.payload;
        return { ...state,  get_react_specialists };
      }
      // LECTURES
      case "GET_ALL_LECTURES": {
        const get_all_lectures = action.payload;
        return { ...state, get_all_lectures };
      }
      case "GET_LECTURES_BY_WEEK": {
        const get_lecturesbyweek = action.payload;
        return { ...state, get_lecturesbyweek };
      }
      case "SEARCH_LECTURES": {
        const search_lectures = action.payload;
        return { ...state, search_lectures };
      }
      case "GET_LECTURE_DATA": {
        const lecture_data = action.payload;
        return { ...state, lecture_data };
      }
      case "EDIT_LECTURE": {
        const edit_lecture = action.payload;
        return { ...state, edit_lecture };
      }
      // LectureWeeks
      case "GET_ALL_LECTUREWEEKS": {
        const get_all_lectureweeks = action.payload;
        return { ...state, get_all_lectureweeks };
      }
      case "SEARCH_LECTUREWEEKS": {
        const search_lectureweeks = action.payload;
        return { ...state, search_lectureweeks };
      }
      case "GET_LECTUREWEEK_DATA": {
        const lectureweek_data = action.payload;
        return { ...state, lectureweek_data };
      }
      case "EDIT_LECTUREWEEK": {
        const edit_lectureweek = action.payload;
        return { ...state, edit_lectureweek };
      }
      // Programs
      case "GET_ALL_PROGRAMS": {
        const get_all_programs = action.payload;
        return { ...state, get_all_programs };
      }
      case "SEARCH_PROGRAMS": {
        const search_programs = action.payload;
        return { ...state, search_programs };
      }
      case "GET_PROGRAM_DATA": {
        const program_data = action.payload;
        return { ...state, program_data };
      }
      case "EDIT_PROGRAM": {
        const edit_program = action.payload;
        return { ...state, edit_program };
      }
      // Lessons
      case "GET_ALL_LESSONS": {
        const get_all_lessons = action.payload;
        return { ...state, get_all_lessons };
      }
      case "SEARCH_LESSONS": {
        const search_lessons = action.payload;
        return { ...state, search_lessons };
      }
      case "GET_ALL_GROUPS": {
        const get_all_groups = action.payload;
        return { ...state, get_all_groups };
      }
      case "SEARCH_GROUPS": {
        const search_groups = action.payload;
        return { ...state, search_groups };
      }  
      case "GET_LESSON_DATA": {
        const lesson_data = action.payload;
        return { ...state, lesson_data };
      }
      case "EDIT_LESSON": {
        const edit_lesson = action.payload;
        return { ...state, edit_lesson };
      }

      default:
        return state;
    }
  };
