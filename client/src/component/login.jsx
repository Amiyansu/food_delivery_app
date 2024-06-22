import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "./style/style.css";

function Login(){
    const navigate=useNavigate();
    const {user,setUser}=useContext(UserContext);
    const [k,updatek]=useState("")
    function getdata(event){
        event.preventDefault();
        const data=new FormData(event.target);
        const senddata={
            userid:data.get("userid"),
            password:data.get("password")
        }
        fetch("http://localhost:8000/checklogin",
        {method:"post",body:JSON.stringify(senddata),headers:{"Content-Type":"application/json"}})
        .then((res)=>res.json())
        .then((d)=>{
            if(d){
                const result={userid:d.userid,address:d.address,orderid:"No order yet"}
                setUser(result)
                navigate("/Home")
            }
            else{
                updatek("Incorrect ID or Password")
            }
        })
        .catch((err)=>console.log(err));
        
    }
    return(

        <>
        <div className="header"><h1>Amiya's Quality Food</h1></div>
        <div className="container">
            <div className="imgcontainer">
                <img src="/logo3.png" alt="Avatar" className="avatar"/>
            </div>
        <form onSubmit={getdata}>
            <label htmlFor="userid"><b>Username</b></label>
            <input type="text" name="userid"/>
            <label htmlFor="userid"><b>Password</b></label>

            <input type="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        <h3>{k}</h3>
        <div className="side">
        <a href="/CreateAccount">Sign-up</a>
        <a href="/Adminlogin">I am a shopkeeper(Admin)</a>
        </div>
        </div>
        </>
    )
}
export default Login;