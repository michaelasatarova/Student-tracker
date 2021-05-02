let baseUrl = 'https://student-tracker.propulsion-learn.ch';

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000'
} 

export default baseUrl;
