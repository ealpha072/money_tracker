import Form from "../Components/Form"

const Dashboard = () => {
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
                <div className="card-body border rounded mr-2 mb-4">
                    <div className="row border-bottom">
                        <div className="col">Expenses</div>
                        <div className="col">Expenses</div>
                        <div className="col">Expenses</div>
                    </div>

                    <Form 
                        transfer="Transfer"
                        buttonText="Add Income" 
                    />


                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Dashboard