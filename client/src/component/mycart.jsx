import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./style/style.css";

function Mycart(){
    const {user,setUser}=useContext(UserContext);
    const navigate=useNavigate();

    //for API timeStamp-1.44.44
    function placeorder(){
        fetch("http://localhost:8000/placeorder",
        {method:"post",body:JSON.stringify(user),headers:{"Content-Type":"application/json"}})
        .then((res)=>res.json())
        .then((d)=>{
            const result={userid:user.userid,address:user.address,orderid:d.orderid}
            setUser(result)
            navigate("/Home")
        })
        .catch((err)=>console.log(err));

    }
    return(
        <>
        <div className="header"><h1>My Cart</h1></div>
        <div className="container">
            <div className="imgcontainer">
                <img src="/cart4.jpeg" alt="Avatar" className="avatar"/>
            </div>
        <table>
            <tbody>
                <tr><td>UserID</td><td>{user.userid}</td></tr>
                <tr><td>Cheese and corn</td><td>{user.cheeseandcorn}</td></tr>
                <tr><td>Capsicum</td><td>{user.capsicum}</td></tr>
                <tr><td>Margherita</td><td>{user.margherita}</td></tr>
                <tr><td>Onion</td><td>{user.onion}</td></tr>
                <tr><td>Address</td><td>{user.address}</td></tr>
                <tr><td>Total Amount is only</td><td>{user.totalamount}</td></tr>
            </tbody>
        </table>
        <button onClick={placeorder}>place order</button>
        </div>
        </>
    )
}
export default Mycart;