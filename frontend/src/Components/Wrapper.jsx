import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import transactService from "../services/transact";
import accountService from "../services/account";

const Wrapper = ({componentProp}) => {
	const userId = JSON.parse(sessionStorage.getItem('userInfo'))

	const [accounts, setAccounts] = useState([])
	const [transactions, setTransactions] = useState([])

	useEffect(() => {
        accountService.getAllAccounts({"userId":userId._id})
        .then(response => {
            //console.log(response.accounts)
            setAccounts(response.accounts) 
        }
        ).catch(error => {
            console.log(error)
        }
        )
    }, [])

	useEffect(() => {
		transactService.getTransactions({userId:userId._id, limit:5})
	 	.then(response => {
	 		console.log(response.transactions)
	 		setTransactions(response.transactions)
	 	}
	 	).catch(error => {
	 		console.log(error)
	 	}
	 	)
	 }, [])

	 const childComponentWithState = React.cloneElement(componentProp, {
		userId,
		accounts,
		transactions
	 })

  	return (
		<div className="wrapper">
			{/* Sidebar */}
			<nav id="sidebar">
				<div className="sidebar-header">
					<h3>Money Tracker</h3>
					<strong>MT</strong>
				</div>

				<ul className="list-unstyled components">
					<li className="active">
						<Link to={"/dashboard"}> <i className="fa fa-user"></i> Dashboard</Link>
					</li>
					<li>
						<Link to={"/transactions"}> <i className="fa fa-usd"></i> Transactions</Link>
					</li>
					<li>
						<Link to={"/account"}> <i className="fa fa-credit-card"></i> Accounts</Link>
					</li>
					<li>
						<Link to={"/settings"}> <i className="fa fa-cogs"></i> Settings</Link>
					</li>
				</ul>
			</nav>

		{/* <!-- Page Content  --> */}
		<div id="content">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<button type="button" id="sidebarCollapse" className="btn btn-info">
						<i className="fas fa-align-left"></i>
						<span>Toggle</span>
					</button>
					<button
						className="btn btn-dark d-inline-block d-lg-none ml-auto"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="fas fa-align-justify"></i>
					</button>

					<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
					>
						<ul className="nav navbar-nav ml-auto">
							<li className="nav-item active">
								<Link to={"/logout"} className="nav-link" href="#">
									Logout
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{childComponentWithState}
		</div>
		</div>
  );
};

export default Wrapper;
