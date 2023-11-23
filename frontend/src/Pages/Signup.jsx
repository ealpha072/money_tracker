import { Link, useNavigate } from "react-router-dom"
import useForm from "../hooks/Forms"
//import userService from "../services/users"
import { signupUser, userSelector, clearState } from "../Redux/userSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch
    const {isRegistered, errorMessage } = useSelector(userSelector)

    useEffect(() => {
        if (isRegistered === true){
            dispatch(clearState)
            navigate('/')
        }
    }, [isRegistered])

    const initialState = {
        email:"",
        password:"",
        confirmPassword:""
    }

    const onSubmit = (formData) => {
        console.log(formData)
        dispatch(signupUser(formData))
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)

    const errorDiv = errorMessage !== '' ?
		<div className="error-message"><h5>{errorMessage}</h5></div> : null

    return (
        <div className="container h-100 loginDiv">
            <div className="row h-100 justify-content-center align-items-center ">
                <div className="col-sm-6">
                    <h2 className="text-center">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        {errorDiv}
                        <div className="input-group input-group-lg mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                placeholder="Email address" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
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
                                name="password" 
                                className="form-control" 
                                placeholder="Password" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-group input-group-lg mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-unlock"></i></span>
                            </div>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                className="form-control" 
                                placeholder="Confirm Password" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4 mb-4">
                            <small id="passwordHelpInline" className="text-muted">
                            Have an account ? <Link to={"/"} className="text-success">Login</Link>
                            </small>
                        </div>
                    
                        <button type="submit" className="btn btn-block btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup