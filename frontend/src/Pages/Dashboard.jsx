import Form from "../Components/Form"

const Dashboard = () => {
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

                    </div>
                </div>

                <div className="col-8">
                    <div className="mt-4 ml-2">
                        <h4>NET WORTH</h4>
                    </div>
                    <div className="card-body border rounded mr-2 mb-4 networthCard">
                        <div className="row border-bottom ">
                            <div className="col bg-light pt-4 pb-4 border-right">Expenses</div>
                            <div className="col bg-light pt-4 pb-4 border-right">Expenses</div>
                            <div className="col bg-light pt-4 pb-4">Expenses</div>
                        </div>

                        <Form 
                            transfer="Transfer"
                            buttonText="Add Income"
                        />

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
  )
}

export default Dashboard