import { useFormik } from "formik"
import { createStudent } from "../api/studentsApi"
import * as Yup from 'yup'





export default function RegisterStudent(props){

    const validationSchema=Yup.object({
        firstName:Yup.string().required("First name is required"),
        lastName:Yup.string().required("Lastname is required"),
        email:Yup.string().email("Invalid email format").required("Email is required."),
        address:Yup.string().required("Address is required"),
        dob:Yup.date().required("Date of birth is required")
    })



    const formik=useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            dob:"", 
            address:""
        },

        onSubmit:async(value)=>{
          const res= await createStudent(value)
          console.log(res.status)
        },

        validationSchema
    })

    console.log(formik.errors)

    return (
       <>   
            <h1 className="mt-5">Student Registration</h1>
            <hr/>
            <form className="mt-3" onSubmit={formik.handleSubmit}>
                <div className="form-group mt-2">
                    <label htmlFor="First Name" className="pb-1">First Name</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.firstName}
                    type="text" className="form-control" placeholder="First Name" name="firstName"/>
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="Last Name" className="pb-1">Last Name</label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        type="text" className="form-control" placeholder="Last Name" name="lastName"/>
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="Email" className="pb-1">Email</label>
                    <input 
                           onChange={formik.handleChange}
                           value={formik.values.email}
                          type="email" className="form-control" placeholder="Email" name="email"/>
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="Date of Birth" className="pb-1">Date of Birth</label>
                    <input 
                        onChange={formik.handleChange}
                        value={formik.values.dob}
                    type="date" className="form-control" placeholder="Date of Birth" name="dob"/>
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="address" className="pb-1">Address</label>
                    <textarea onChange={formik.handleChange}
                        value={formik.values.address}
                    
                    
                    className="form-control" placeholder="address" name="address"/>
                </div>

                <div className="form-group mt-3" >
                    <button type="Submit"  className="btn btn-primary me-5">Register</button>
                    <button type="Reset"  className="btn btn-danger ms-5">Reset</button>

                </div>
                
            </form>
       </>
    )
}