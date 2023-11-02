import useForm from "../hooks/Forms";
import transactService from "../services/transact";

const Form = (props) => {
    const userId = JSON.parse(localStorage.getItem("userInfo"))._id
    //console.log(props.active)

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Add 1 to month because it's zero-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const initialState = {
        user_id: userId,
        transactionType: props.active,
        from: "",
        to: "",
        amount: "",
        date: "",
        note: "",
    }

    const currentDate = new Date()

    const onSubmit = (formData) => {
        console.log(formData)
        transactService.transfer(formData)
        .then(response => {
            console.log(response)
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
                    <label htmlFor="Account_name">From</label>
                    <select 
                        className="custom-select" 
                        name="from"
                        onChange={handleInputChange}
                        value={formData.from}
                        required
                    >
                        <option defaultValue={""}>Choose...</option>
                        <option value="Alpha">Alpha</option>
                        <option value="Savings Account">Savings Account</option>
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
                                <option value="Cash">Alpha</option>
                                <option value="Standard Chatered">Standard Chatered</option>
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
                                    // onChange={handleInputChange}
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
