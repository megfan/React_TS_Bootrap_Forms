export default function validate(data: any){
    const errors = {
        email: '',
        password: '',
        checked: ''
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 5) {
      errors.password = "Minimum 5 characters";
    }
    if (!data.checked){
      errors.checked = 'Please agree'
    }
    return errors
}