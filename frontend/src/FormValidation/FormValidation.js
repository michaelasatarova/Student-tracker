export default function validateProfile(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
  
    if (!values.firstName.trim()) {
        errors.firstName = 'First name required';
      }

    if (!values.lastName.trim()) {
    errors.lastName = 'Last name required';
    }

    if (!values.city.trim()) {
        errors.city = 'City required';
        }
    
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.about.trim()) {
        errors.about = 'About is required';
    } else if (values.about.length < 50) {
        errors.about = 'About is too short';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }
