"use client"
import { ChangeEvent, useState } from "react";
const Login=()=>{
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    console.log(username);
    console.log(password);
    
 
          
    return(
        <form className="w-6/12 border p-10">
        <h2>LOGIN</h2>
        <input placeholder="Enter Password" type="text" className="border border-gray-400 py-4 w-full px-2 mt-2 py-4" onChange={(event:ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} required/>
        <br />
        <input placeholder="Enter Password" type="text" className="border border-gray-400 py-4 w-full px-2 mt-2 py-4 my-4" onChange={(event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} required/>
        <br />
        <button type="submit" className="bg-green-500 text-white py-2 px-3 rounded-md">Submit</button>

        </form>
    )
}
export default Login