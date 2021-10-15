
import useForm from './useForm'
const SignUpForm = ({submitForm}) => {
    const {handleChange,handleForm,errors,values}=useForm(submitForm)
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Register Materials</h2>
                </div>
                <form className="form-wrapper">
                <div className="name">
                        <label className="label">Full Name</label>
                        <input className="input" type="text" name="full_name" value={values.full_name}
                            onChange={handleChange} />
                        {errors.full_name && <p className="error">{errors.full_name}</p>}
                    </div>
                    <div className="name">
                        <label className="label">Equipment</label>
                        <input className="input" type="text" name="Equipment" value={values.Equipment}
                            onChange={handleChange} />
                        {errors.Equipment && <p className="error">{errors.Equipment}</p>}
                    </div>
                    <div className="name">
                        <label className="label">serial No</label>
                        <input className="input" type="text" name="serialNo" value={values.serialNo}
                            onChange={handleChange} />
                        {errors.serialNo && <p className="error">{errors.serialNo}</p>}
                    </div>
                    <div className="name">
                        <label className="label">Location</label>
                        <input className="input" type="text" name="Location" value={values.Location}
                            onChange={handleChange} />
                        {errors.Location && <p className="error">{errors.Location}</p>}
                    </div>
                    <div className="name">
                        <label className="label">Problem</label>
                        <input className="input" type="text" name="Problem" value={values.Problem}
                            onChange={handleChange} />
                        {errors.Problem && <p className="error">{errors.Problem}</p>}
                    </div>
                    <div className="name">
                        <label className="label">Observation</label>
                        <input className="input" type="text" name="Observation" value={values.Observation}
                            onChange={handleChange} />
                        {errors.Observation && <p className="error">{errors.Observation}</p>}
                    </div>
                    <div className="name">
                        <button className="submit" onClick={handleForm}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUpForm

