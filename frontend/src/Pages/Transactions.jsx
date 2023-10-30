import { Link } from "react-router-dom"
import Transmodal from "../Components/Transmodal"

const Transactions = () => {
  return (
    <div>
        <div className="card">
            <div className="card-header">
                <div class="btn-group bg-dark" role="group" aria-label="Basic example">
                    <button type="button" data-toggle="modal" data-target="#transModal" class="btn btn-secondary"><i  className="fa fa-plus"></i></button>
                    <button type="button" class="btn btn-secondary">New</button>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className='fa fa-calendar mr-4'></i>
                            29-08-2023
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
        <Transmodal />
    </div>
  )
}

export default Transactions