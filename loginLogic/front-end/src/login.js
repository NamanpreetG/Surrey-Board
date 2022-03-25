import { useState } from 'react'
import Axios from 'axios'



function Login() {

    const [regEmail, setRegEmail] = useState();
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')


    const register = ()=>{
        Axios.post('http://localhost:3005/register', {
            email : regEmail,
            username: regUsername,
            password: regPassword

        }).then((res) => {
            console.log(res)
        })
    }

    const login = () =>{
        Axios.post('http://localhost:3005/login', {
            email : email,
            password: password

        }).then((res) => {

            if(res.data.message){
               console.log(res.data)
               setLoginStatus(res.data.message)
            }else{
                console.log(res.data)
                setLoginStatus(res.data[0].name)

            }
        
        })

    }
    
  return (
    <div>

        email: <input type="email"  onChange={(e)=>{
            setRegEmail(e.target.value)
        }}/>
        username: <input type="text"  onChange={(e)=>{
            setRegUsername(e.target.value)
        }}/>
        password: <input type="password"  onChange={(e)=>{
            setRegPassword(e.target.value)
        }}/>
        <button onClick={register}>Register</button> 

        <br/>
        <br/>

        email: <input type="text"  onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        password: <input type="password" onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <button onClick={login}>Log In</button>


        <h3 style={{ color:'red'}}>{loginStatus} </h3>

    </div>

  );
}


export default Login;
