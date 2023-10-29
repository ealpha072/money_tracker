import Form from "./Form"

const Transmodal = () => {
  return (
    <div>
         <div className="modal fade" id="transModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><i className='fa fa-file'></i> New Account</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">Expenses</div>
                            <div className="col">Transfer</div>
                            <div className="col">Income</div>
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