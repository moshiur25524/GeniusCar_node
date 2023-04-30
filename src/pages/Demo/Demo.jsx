import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/UserContext";


const Demo = () => {

    const {user} = useContext(AuthContext)

    const handleEmailonChange = e =>{
        console.log(e.target.value);
    }

    const handleNameBlur = e =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Demo Page : {user && user?.displayName}</h1>
            <form>
                <input onBlur={handleNameBlur} type="text" name="name" id="" placeholder="Name"/><br />
                <input onChange={handleEmailonChange} type="email" name="email" id="" placeholder="Email"/><br />
                <input type="password" name="password" id="" placeholder="Password"/>
            </form>
        </div>
    );
};

export default Demo;