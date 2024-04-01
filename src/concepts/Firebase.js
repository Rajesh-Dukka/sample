import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Firebase = () => {
    const [data,setData]=useState({
        fullname:'',
        email:'',
        password:'',
        confirmPassword:''
      })
      const [cread, setCread]=useState([])
      const {fullname,email,password,confirmPassword}=data
    
      const chnageHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
      }
      const submitHandler = e =>{
        e.preventDefault()
        axios.post('https://my-sample-app-570a5-default-rtdb.firebaseio.com/register.json',data)
        .then(()=>alert("Submitted Successfully"))
      }
      useEffect(()=>{
        axios.get("https://my-sample-app-570a5-default-rtdb.firebaseio.com/register.json")
        .then(response =>{
          const fetchData=response.data
         console.log(fetchData)
          const dataArray=[]
          for(const key in fetchData){
            dataArray.push({...fetchData[key], id:key})
          }
          setCread(dataArray)
         
        })
      },[])
      return (
        <div>
          <center>
            <form onSubmit={submitHandler}>
              <input type='text' name='fullname' value={fullname} onChange={chnageHandler}/> <br/>
              <input type='email' name='email' value={email} onChange={chnageHandler}/><br/>
              <input type='password' name='password' value={password} onChange={chnageHandler}/><br/>
              <input type='password' name='confirmPassword' value={confirmPassword} onChange={chnageHandler}/><br/>
              <button type='submit' name='submit'>Submit</button>
            </form>
            <table border={1} >
            <thead>
              <tr >
                <td>Name</td>
                <td>Email</td>
                <td>password</td>
              </tr>
            </thead>
            <tbody >
              {
                cread.map(
                  item => 
                    <tr key={item.id}>
                      <td proirity="true">{item.fullname}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                    </tr>
                )
              }
            </tbody>
          </table>
          </center>
          
        </div>
      )
}

export default Firebase
