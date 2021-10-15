import { useEffect, useState } from 'react'
import { HttpRequest } from "../helper/httpRequest"
import validation from "./validation"
import cogoToast from 'cogo-toast'
import { useHistory } from 'react-router'
const UpdateForm = ({submitForm}) => {
    // const {handleChange,handleUpdate,errors,values}=useForm(submitForm)
    
    const history=useHistory()
    const [errors, setErrors] = useState({})
    const [values,setValues]=useState({
        full_name: '',
        Equipment: '',
        serialNo: '',
        Location: '',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        Problem: '',
        Observation: ''
    })
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    let rawData=JSON.parse(localStorage.getItem('rawDatas'))
    console.log(rawData)
    useEffect(() => {
        setValues({
        ...values,
        ...rawData
        })
    }, [])
    const handleUpdate=async(rawData)=>{
        setErrors(validation(values))
        console.log(values)
        const resp=await HttpRequest("PATCH",`http://localhost:4200/api/uses/update?uuid=${rawData.id}`,values)
        history.push('/list')
        if(!resp.errors){

            cogoToast.success("Updated successfully")
        }
    }
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Update  Materials</h2>
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
                        <button className="submit" onClick={()=>handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateForm

