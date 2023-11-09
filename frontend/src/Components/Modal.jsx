import useForm from "../hooks/Forms"
import accountService from "../services/account"
//import accountService from "../services/account"

const Modal = (props) => {
    const {setAccounts, setAccountNames} = props
    const userId = JSON.parse(sessionStorage.getItem("userInfo"))._id
    //console.log(userId)
    
    const initialState = {
        user_id: userId,
        accountname: '',
        group: '',
        balance: '',
    }

    const onSubmit = async (formData) => {
        try{
            const response = await accountService.addAccount(formData)
            if (response.accounts && response.account.length > 0){
                const responseData = await accountService.getAllAccounts(userId)
                console.log(responseData)
                setAccounts(responseData.accounts)
                setAccountNames(responseData.accountNames)
            }
            document.getElementById('modalForm').reset();
        }catch(error){console.log(error)}
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
                        <form action="" onSubmit={handleSubmit} id="modalForm">
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
                                        required
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
                                        required
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
                                            required
                                        />

                                        <div className="input-group-append">
                                            <div className="input-group-text"><strong>USD</strong></div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary mb-2">Save changes</button>
                                    <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal">Close</button>
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