import { Link } from "react-router-dom"
import Transmodal from "../Components/Transmodal"
import Translist from "../Components/Translist"

const Transactions = () => {

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" data-toggle="modal" data-target="#transModal" className="btn btn-secondary">
                            <i  className="fa fa-plus"></i> 
                            <span className="ml-4 text-center">New</span>
                        </button>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-calendar mr-4'></i>
                                29-08-2023
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to={"#"} className="dropdown-item">Today</Link>
                                <Link to={"#"} className="dropdown-item">Yesterday</Link>
                                <Link to={"#"} className="dropdown-item">Last seven days</Link>
                                <Link to={"#"} className="dropdown-item">Last 30 days</Link>
                                <Link to={"#"} className="dropdown-item">Custom date</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {/* <Accordion /> */}
                    {/* <Translist /> */}
                </div>
            </div>
            <Transmodal />
        </div>
  )
}

export default Transactions