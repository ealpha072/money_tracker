import { useState, useEffect } from "react"
import Form from "../Components/Form"
import { Link, useNavigate } from "react-router-dom"
import accountService from "../services/account"
import utilities from "../Utilities/helpers"
import Accordion from "../Components/Accordion"

const Dashboard = () => {
    //const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState("Expense")
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        accountService.getAllAccounts()
        .then(response => {
            console.log(response.accounts)
            setAccounts(response.accounts) 
        }
        ).catch(error => {
            console.log(error)
        }
        )
    }, [])

    //console.log(accounts)
    const handleLinkClick = (linkname) => {
        setActiveLink(linkname)
    }

    return (
      <div className="card">
        <div className="row">
          <div className="col-4">
            <div className="mt-4 ml-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="pt-2 pb-2 pl-2">NET WORTH</h4>
                    <h4 className="pt-2 pb-2 pr-2 text-success">{utilities.getTotalNetworth(accounts).toLocaleString('en-US')} USD</h4>
                </div>
            </div>
            <div className="card-body p-0 ml-4">
                <Accordion accounts={accounts}/>
            </div>
          </div>

          <div className="col-8">
            <div className="mt-4 ml-2">
              <h4>NEW TRANSACTION</h4>
            </div>
            <div className="card-body border rounded mr-2 mb-4 networthCard">
                <div className="row nav-link-div">
                <ul className="nav nav-tabs row" role="tablist">
                  <li className="nav-item col">
                    <Link
                      className={`nav-link text-danger ${
                        activeLink === "Expense" ? "active" : ""
                      }`}
                      href="#"
                      onClick={() => handleLinkClick("Expense")}
                    >
                      Expense
                    </Link>
                  </li>
                  <li className="nav-item col">
                    <Link
                      className={`nav-link ${
                        activeLink === "Transfer" ? "active" : ""
                      }`}
                      href="#"
                      onClick={() => handleLinkClick("Transfer")}
                    >
                      Transfer
                    </Link>
                  </li>
                  <li className="nav-item col">
                    <Link
                      className={`nav-link text-success ${
                        activeLink === "Income" ? "active" : ""
                      }`}
                      href="#"
                      onClick={() => handleLinkClick("Income")}
                    >
                      Income
                    </Link>
                  </li>
                </ul>
              </div>

              <Form active={activeLink} buttonText="Add Income" />
            </div>

            <div className="mr-2 mb-2">
              <div className="header ml-2">
                <h2>RECENT TRANSACTIONS</h2>
              </div>

              <div className="card">
                <div className="mt-2 ml-2 mb-2">
                  29 Oct Standard Chatered ---Alpha Transfer to me 200.00USD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard