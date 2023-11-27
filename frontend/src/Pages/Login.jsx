import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/Forms";
//import userService from "../services/users";
import { loginUser, userSelector, clearState } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoggedIn, errorMessage} = useSelector(userSelector)

    useEffect(()=>{
        if(isLoggedIn === true){
            dispatch(clearState)
            navigate('/')
        }
    }, [isLoggedIn])

    const initialState = {
        email:"",
        password:"",
    }

    const onSubmit = formData => {
        console.log(formData)
        dispatch(loginUser(formData))
        navigate('/')
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)

    const errorDiv = errorMessage !== '' ?
		<div className="error-message"><h5>{errorMessage}</h5></div> : null

    return (
        <div className="container h-100 loginDiv">
            <div className="row h-100 justify-content-center align-items-center ">
                <div className="col-sm-6">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleSubmit}>

                        {errorDiv}
                        <div className="input-group input-group-lg mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                            </div>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email Address" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-group input-group-lg mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-unlock"></i></span>
                            </div>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4 mb-4">
                            <small id="passwordHelpInline" className="text-muted">
                                No, account ? <Link to={"/signup"} className="text-success">Signup</Link>
                            </small>
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login