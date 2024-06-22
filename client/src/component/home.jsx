import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();
    const {user,setUser}=useContext(UserContext);

    function finalorder(event){
        event.preventDefault();
        const data=new FormData(event.target);
        const senddata={
            userid:user.userid,
            cheeseandcorn:data.get("cheeseandcorn"),
            capsicum:data.get("capsicum"),
            margherita:data.get("margherita"),
            onion:data.get("onion"),
            address:user.address,
            totalamount:data.get("cheeseandcorn")*310+data.get("capsicum")*280+data.get("margherita")*260+data.get("onion")*210
        }
        setUser(senddata)
        navigate("/Mycart")
    }
    // function finalorder(event){
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     const formData = {};
    //     for (let [key, value] of data.entries()) {
    //         formData[key] = value;
    //     }
    //     console.log(formData);
    // }

    if(user){

    return(
        <><div className="header"><h2>Welcome, {user.userid}</h2>
        <h3>Your Order will be delivered to, {user.address} Order ID:{user.orderid}</h3></div>
        <form onSubmit={finalorder}>
            <div className="menu">
                <div className="card">
                    <img src="pizza.jpeg" alt="Avatar" className="icon"/>
                    <div class="container-card">
                        <h4><b>Cheese & Corn</b></h4>
                        <h4><b>Price: Rs.310</b></h4>
                <input type="number" name="cheeseandcorn" min="0" defaultValue={0}/>
                </div>
            </div>
                <div className="card">
                    <img src="capsicum3.jpeg" alt="Avatar" className="icon"/>
                    <div class="container-card">
                        <h4><b>Capsicum</b></h4>
                        <h4><b>Price: Rs.280</b></h4>
                        <input type="number" name="capsicum" min="0" defaultValue={0}/>
                </div>
            </div>
                <div className="card">
                    <img src="pepperoni.jpeg" alt="Avatar" className="icon"/>
                    <div class="container-card">
                        <h4><b>Margherita</b></h4>
                        <h4><b>Price: Rs.260</b></h4>
                        <input type="number" name="margherita" min="0" defaultValue={0}/>
                </div>
            </div>
                <div className="card">
                    <img src="onion.jpeg" alt="Avatar" className="icon"/>
                    <div class="container-card">
                        <h4><b>Onion</b></h4>
                        <h4><b>Price: Rs.210</b></h4>
                        <input type="number" name="onion" min="0" defaultValue={0}/>
                </div>
            </div>
            <div className="container"><button type="submit">Add pizza</button></div>
            </div>
        </form>
        </>
    )
    }
    else{
        return(<><h1>You are not login bruuu</h1></>)
    }
}
export default Home;