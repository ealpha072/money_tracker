import { useState, useEffect } from "react"
import Form from "../Components/Form"
import { Link } from "react-router-dom"
import accountService from "../services/account"

const Dashboard = () => {
    const [activeLink, setActiveLink] = useState("Expense")
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        accountService.getAllAccounts()
        .then(response => {
            console.log(response)
            setAccounts(response.data) 
        }
        ).catch(error => {
            console.log(error)
        }
        )
    }, [])


    const handleLinkClick = (linkname) => {
        setActiveLink(linkname)
    }

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo)

    return (
      <div className="card">
        <div className="row">
          <div className="col-4">
            <div className="mt-4 ml-4">
              <h4>NET WORTH</h4>
            </div>
            <div className="card-body ml-4">
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, .
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Collapsible Group Item #2
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad.
                        </div>
                        </div>
                    </div>

                </div>
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