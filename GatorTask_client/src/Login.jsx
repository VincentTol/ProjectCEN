import { useState } from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }
        })
        .catch(err=> console.log(err))
    }

    return (
        <>
            <div className="">
                <img src='./src/assets/comp-logo.png' alt="react" className="logo"/>
            </div>
            <div className="min-h-screen flex justify-end">
                <div className="bg-slate-200 pt-10 pl-10 pr-10 pb-20 max-w-xl">
                    <h1 className="font-noto font-bold text-4xl mb-3">Login</h1>

                    <form onSubmit={handleSubmit}>
            
                        {/* Email Field */}
                        <div className="mb-3">
                            <label htmlFor="email" className="signup-label">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0 font-noto italic"
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-3">
                            <label htmlFor="password" className="signup-label">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                className="form-control rounded-0 font-noto italic"
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>

                        <button type="submit" className="btn font-noto btn-success button-register w-100 pt-2 pb-2 border rounded-0 border-color-blue-500">
                            Login
                        </button>
                    </form>                
                </div>
            </div>
        </>
    );
}

export default Login;
