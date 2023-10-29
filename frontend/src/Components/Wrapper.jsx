
const Wrapper = ({componentProp}) => {
  return (
    <div className="wrapper">
      	{/* Sidebar */}
      	<nav id="sidebar">
			<div className="sidebar-header">
				<h3>Bootstrap Sidebar</h3>
				<strong>BS</strong>
			</div>

			<ul className="list-unstyled components">
				<li className="active">
					<a href="#"> <i className="fa fa-user"></i> Dashboard</a>
				</li>
				<li>
					<a href="#"> <i className="fa fa-usd"></i> Transactions</a>
				</li>
				<li>
					<a href="#"> <i className="fa fa-credit-card"></i> Accounts</a>
				</li>
				<li>
					<a href="#"> <i className="fa fa-cogs"></i> Settings</a>
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
							<a className="nav-link" href="#">
								Page
							</a>
						</li>
					</ul>
				</div>
          	</div>
        </nav>

		{componentProp}
      </div>
    </div>
  );
};

export default Wrapper;
