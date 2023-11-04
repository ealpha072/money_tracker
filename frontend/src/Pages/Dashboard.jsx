import { useState, useEffect } from "react"
import Form from "../Components/Form"
import { Link, useNavigate } from "react-router-dom"
import accountService from "../services/account"

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

    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
        return result;
      }

    return (
      <div className="card">
        <div className="row">
          <div className="col-4">
            <div className="mt-4 ml-4">
              <h4>NET WORTH</h4>
            </div>
            <div className="card-body ml-4">
                <div id="accordion">
                    {accounts.map(account => {
                        const randomString = generateRandomString(7)
                        
                        return (
                            <div className="card" key={account._id}>
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse" data-target={`#${randomString}`} aria-expanded="true" aria-controls={randomString}>
                                            {account._id}
                                        </button>
                                        {account.totalBalance}
                                    </h5>
                                </div>
                                <div id={randomString} className="collapse" aria-labelledby="headingOne" data-parent="#accordion" key={account.name}>
                                    <div className="card-body">
                                        {
                                            account.accounts.map(singleAccount => {
                                                return (
                                                    <h6 key={singleAccount.accountname}>{singleAccount.accountname} <span>{singleAccount.balance}</span></h6>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )} 

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