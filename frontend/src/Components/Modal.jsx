import useForm from "../hooks/Forms"
import accountService from "../services/account"

const Modal = () => {
    const userId = JSON.parse(localStorage.getItem("userInfo"))._id
    console.log(userId)
    
    const initialState = {
        user_id: userId,
        accountname: '',
        group: '',
        balance: '',
    }

    const onSubmit = (formData) => {
        console.log(formData)
        accountService.addAccount(formData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)

    return (
        <div className="modal fade" id="accountModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><i className='fa fa-file'></i> New Account</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="col">
                                    <label htmlFor="Account_name">Account Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Account name" 
                                        name="accountname"
                                        value={formData.accountname}
                                        onChange={handleInputChange}
                                    />

                                    
                                </div>
                                <div className="col">
                                    <label htmlFor="Account_name">Group</label>
                                    <select 
                                        className="custom-select" 
                                        id="inputGroupSelect01" 
                                        onChange={handleInputChange} 
                                        name="group"
                                        value={formData.group}
                                    >
                                        <option defaultValue>Choose...</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Bank Account">Bank Account</option>
                                        <option value="Deposit">Deposit</option>
                                    </select>

                                    <div className="input-group mb-2 mt-4">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="inlineFormInputGroup" 
                                            placeholder="Balance" 
                                            name="balance"
                                            value={formData.balance}
                                            onChange={handleInputChange}
                                        />

                                        <div className="input-group-append">
                                            <div className="input-group-text"><strong>USD</strong></div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-block btn-primary">Save changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Modal