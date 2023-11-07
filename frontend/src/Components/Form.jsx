import useForm from "../hooks/Forms";
import transactService from "../services/transact";
import accountService from "../services/account";

const Form = (props) => {
    const userId = JSON.parse(localStorage.getItem("userInfo"))._id
    //console.log(props.active)

    const initialState = {
        user_id: userId,
        transactionType: props.active,
        from: "",
        to: "",
        amount: "",
        date: "",
        note: "",
    }

    const onSubmit = (formData) => {
        console.log(formData)
        transactService.transfer(formData)
        .then(response => {
            console.log(response)
            /*const transactionData = {
                user_id: userId,
                transactionId: response.transactionDetails._id,
                to: response.transactionDetails.to,
                from: response.transactionDetails.from,
                amount: response.transactionDetails.amount,
            }

            /*accountService.updateBalance(transactionData)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })*/
        }).catch(error => {
            console.log(error)
        }
        )
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)

    return (
        <form action="" className="mt-4" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-9">

                    <label htmlFor="Account_name">{props.active === "Income" ? "To" : "From"}</label>
                    <select 
                        className="custom-select" 
                        name={props.active === "Income" ? "to" : "from"}
                        onChange={handleInputChange}
                        value={formData.from}
                        required
                    >
                        <option defaultValue={""}>Choose...</option>
                        {
                            props.accountNames.map((accountName, index) => {
                                return (
                                    <option key={index} value={accountName.accountname}>{accountName.accountname}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="col-3">
                    <label htmlFor="Account_name">Amount</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control form-control-md"
                            placeholder="Amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <strong>USD</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                props.active === "Transfer" ? (
                    <div className="form-row mt-4">
                        <div className="col-9">
                            <label htmlFor="Account_name">To</label>
                            <select 
                                className="custom-select" 
                                name="to"
                                onChange={handleInputChange}
                                value={formData.to}
                                required
                            >
                                <option defaultValue={""}>Choose...</option>
                                {
                                    props.accountNames.map((accountName, index) => {
                                        return (
                                            <option key={index} value={accountName.accountname}>{accountName.accountname}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-3">
                            <label htmlFor="Account_name">Amount</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control form-control-md"
                                    placeholder="Amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <strong>USD</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    null
                )
            }

            <div className="form-row mt-4">
                <div className="col-9">
                    <label htmlFor="Account_name">Note</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Transaction Note"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="col-3">
                    <label htmlFor="Account_name">Date</label>
                    <input
                        type="date"
                        //defaultValue={getCurrentDate()}
                        className="form-control"
                        placeholder="Balance"
                        name="date"
                        onChange={handleInputChange}
                    />

                    <button type="submit" className="btn btn-block btn-primary mt-4">
                        {props.buttonText}  
                    </button>
                </div>
            </div>
        </form>
  );
};

export default Form;
