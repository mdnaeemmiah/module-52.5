import { Link, Navigate, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {singIn} =useContext(AuthContext)
    const location = useLocation();
    console.log('location in the location page',location);

    const handleLogin = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password);
    // create
    singIn(email,password)
    .then(result=>{
        console.log(result.user);
        // navigate after login
        navigator( location?.state? location.state: '/');
    })
    .catch(error=>{
        console.log(error);
    })


    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please login</h2>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    
                </form>
                <p className="text-center mt-3">Dont’t Have An Account ?
                    <Link className="text-blue-600 font-bold" to='/register'> Register</Link></p>
            </div>
        </div>

    );
};

export default Login;