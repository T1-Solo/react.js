
// import { useState } from "react"
// import "./Example.css"


import {useState} from  "react"
import "./Example.css"

export const  Example_child = () => {
    const [state, setState] = useState([])
    return (
        <>
            <button onClick={ async () => {
                const request =  await fetch("https://jsonplaceholder.typicode.com/users")
                const response = await request.json()
                setState(response)
            }
            }>submit</button>
            {
                state.map((item ,index ) => {
                    return (
                        <h1 key={index}>{item.name}</h1>
                    )
                })
            }
        </>
    )
}
// export const Example_child = () => {
//     const [emailText , setEmailText] = useState("") 
//     const [passwordText , setPasswordText] = useState("") 
//     const handleSubmit = (event) => {
//         event.preventDefault()

//     }
//     const handleChange = (event) => {
//         let re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//         switch(event.target.id){
//             case "email":{
//                 if(re.test(event.target.value) !== true){
//                     setEmailText("email xato")
//                 }else{
//                     setEmailText("")
//                 }
//             }break
//             case "password" :{
//                 if(event.target.value.length > 3 && event.target.value.length < 8){
//                     setPasswordText("")
//                 }else{
//                     setPasswordText("password 3dan katta va 8dan kichik bolishi kerak")
//                 }
//             }break
//             default : return false
//         }
//     }
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={handleChange} id="email" type="email" />
//                 {emailText !== ""? <p>{emailText}</p> :false}
//                 <input onChange={handleChange} id="password" type="password" />
//                 {passwordText !== ""? <p>{passwordText}</p> : false}
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

// export const Example_child = () => {
//     const [email ,setEmail] = useState("")
//     const [password , setPassword] = useState("")
//     return (
//         <>
//             <form>
//                 <input type="text" onChange={(event) => setEmail(event.target.value)} id="email"  />
//                 {email.length >= 1 && !(email.length > 12) && <p>Min 3 Max 12</p>}
//                 <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} />
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

