
const validation = (values) => {
    let errors={}
    if(!values.full_name){
        errors.full_name="Name is required"
    }
    if(!values.Equipment){
        errors.Equipment="Equipment is required"
    }
    if(!values.serialNo){
        errors.serialNo="Serial No is required"
    }
    if(!values.Location){
        errors.Location="Location is required"
    }
    if(!values.Problem){
        errors.Problem="Problem is required"
    }
    if(!values.Observation){
        errors.Observation="Observation is required"
    }
    return errors;
}

export default validation
