import React , {useState} from "react"


const Login = ({handleLogin }) => {

    //  console.log(handleLogin)
     const [email, setEmail] = useState('')
     const [password,setPassword] = useState('')

     const submitHandler = (e) => {
        e.preventDefault()
        // console.log("Email is :",email);
        // console.log("Password is ",password);
        handleLogin(email,password)
        setEmail('')
        setPassword('')
     }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-emerald-500 rounded-xl p-10 border-2'>
            <form 
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
              <input 
                value={email}
                onChange={(e) =>{
                  setEmail(e.target.value)
                }} 
                required 
                className="text-white outline-none bg-transparent border-2 border-emerald-400 py-3 px-5 text-xl rounded-full w-full placeholder:text-black-400"type="email" placeholder="Enter Your Email" />

              <input 
                value={password}
                onChange={(e) =>{
                 setPassword(e.target.value)
                }}
                required 
                className="text-white outline-none bg-transparent border-2 border-emerald-400 py-3 px-5 w-full text-xl rounded-full m-4 placeholder:text-black-400"type="password" placeholder="Enter Password"/>
               
              <button className="mt-7 text-white outline-none border-none bg-emerald-600 hover:bg-emerald-400 py-2 px-8 w-full m-5 text-lg rounded-full placeholder:text-black">Log in</button>
              
            </form>
        </div>
    </div>
    
  )
}

export default Login;