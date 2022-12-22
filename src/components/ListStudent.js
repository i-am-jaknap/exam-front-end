import { useEffect, useState } from "react"
import { getAllStudents } from "../api/studentsApi"

export default function ListStudent(props){

    const [students,setStudents]=useState([])

    const fetchData = async ()=>{
        try{
            const data= await (await getAllStudents()).data
            setStudents(data)
         }catch(err){
             console.log("Error fetching data",);
         }
    }

    useEffect(()=>{  
        fetchData()           
    },[])

    const studentRow=(data)=>{

        const html= data.map((v)=>{
           return( <tr key={v._id}>
                <td >{v.firstName}</td>
                <td  >{v.lastName}</td>
                <td >{v.email}</td>
                <td >{v.address}</td>
                <td  >{v.dob}</td>

            </tr>)
        })   
        return html   
    }



    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>

                <tbody>
                  {studentRow(students)}
                </tbody>
            </table>
        </>
    )
}