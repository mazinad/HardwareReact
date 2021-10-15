import { useState } from "react"
import { HttpRequest } from "../helper/httpRequest"
import validation from "./validation"
import cogoToast from 'cogo-toast'
import { useHistory } from "react-router"
const useForm = (submitForm) => {
    const history=useHistory()
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
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
   
    const handleForm = async(e) => {
        e.preventDefault()
        setErrors(validation(values))
        console.log(values)
        const resp=await HttpRequest("POST",'http://localhost:4200/api/uses/Register',values)
        console.log(resp)
        if(!resp.errors){
            const msg=resp.response.data.message
            cogoToast.success(msg)
            history.push('/list')
            // setValues({})
    }
}
return{handleChange,handleForm,errors,values}
}
export default useForm

