import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div class="container h-100 loginDiv">
        <div class="row h-100 justify-content-center align-items-center ">
            <div class="col-sm-6">
                <h2 class="text-center">Login</h2>
                <form>
                    <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                        </div>
                        <input type="email" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i className="fa fa-unlock"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="mt-4 mb-4">
                        <small id="passwordHelpInline" class="text-muted">
                            No, account ? <Link to={"/signup"} className="text-success">Signup</Link>
                        </small>
                    </div>
                   
                    <button type="submit" class="btn btn-block btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Login