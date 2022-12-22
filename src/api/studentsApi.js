import  axios from 'axios'

const client=axios.create({
    baseURL:"http://localhost:3001"
})



export const  getAllStudents=()=>client.get('/student')
export const  createStudent=(student)=>{
    
    return client.post('/student',student)
}
    