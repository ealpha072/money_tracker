import { Link } from "react-router-dom"
import { useState } from "react"
import Form from "./Form"

const Transmodal = () => {
    const [activeLink, setActiveLink] = useState("Expense")

    const handleLinkClick = (linkname) => {
        setActiveLink(linkname)
    }

    return (
        <div>
            <div className="modal fade" id="transModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><i className='fa fa-file'></i> New Account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body modal-card-body">
                            <div className="row nav-link-div">
                                <ul className="nav nav-tabs row" role="tablist">
                                    <li className="nav-item col">
                                        <Link 
                                            className={`nav-link text-danger ${activeLink === "Expense" ? 'active' : ''}`} 
                                            href="#" 
                                            onClick={() => handleLinkClick("Expense")}
                                        >
                                            Expense
                                        </Link>
                                    </li>
                                    <li className="nav-item col">
                                        <Link 
                                            className={`nav-link ${activeLink === "Transfer" ? 'active' : ''}`}
                                            href="#" 
                                            onClick={() => handleLinkClick("Transfer")}
                                        >
                                            Transfer
                                        </Link>
                                    </li>
                                    <li className="nav-item col">
                                        <Link 
                                            className={`nav-link text-success ${activeLink === "Income" ? 'active' : ''}`}
                                            href="#" 
                                            onClick={() => handleLinkClick("Income")}
                                        >
                                            Income
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <Form transfer="Transfer" buttonText="Create Account" />
                        </div>
                        <div className="modal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}


export default Transmodal