import useForm from "../hooks/Forms";

const Form = (props) => {
    const initialState = {
        name: "",
        amount: "",
        category: "",
        date: "",
        type: "",
        note: "",
    }

    const onSubmit = (formData) => {
        console.log(formData)
    }
    
    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)

    return (
        <form action="" className="mt-4" onSubmit={handleSubmit}>
            <div className="form-row">
                <div class="col-9">
                    <label htmlFor="Account_name">From</label>
                    <select 
                        class="custom-select" 
                        id="inputGroupSelect01" 
                        name="from"
                        onChange={handleInputChange}
                        value={formData.from}
                    >
                        <option selected>Choose...</option>
                        <option value="1">Cash</option>
                        <option value="2">Bank Account</option>
                        <option value="3">Deposit</option>
                    </select>
                </div>

                <div className="col-3">
                    <label htmlFor="Account_name">Amount</label>
                    <div className="input-group">
                        <input
                            type="text"
                            class="form-control form-control-md"
                            id="inlineFormInputGroup"
                            placeholder="Balance"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <strong>USD</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                props.transfer ? (
                    <div className="form-row mt-4">
                        <div class="col-9">
                            <label htmlFor="Account_name">To</label>
                            <select 
                                class="custom-select" 
                                id="inputGroupSelect01"
                                name="to"
                                onChange={handleInputChange}
                                value={formData.to}
                            >
                                <option selected>Choose...</option>
                                <option value="Cash">Cash</option>
                                <option value="Bank Account">Bank Account</option>
                                <option value="Deposit">Deposit</option>
                            </select>
                        </div>

                        <div className="col-3">
                            <label htmlFor="Account_name">Amount</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    class="form-control form-control-md"
                                    id="inlineFormInputGroup"
                                    placeholder="Balance"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">
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
                <div class="col-9">
                    <label htmlFor="Account_name">Note</label>
                    <input
                        type="text"
                        class="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Balance"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="col-3">
                    <label htmlFor="Account_name">Date</label>
                    <input
                        type="date"
                        value={"2023-10-29"}
                        class="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Balance"
                        name="date"
                        onChange={handleInputChange}
                    />

                    <button type="button" className="btn btn-block btn-primary mt-4">
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </form>
  );
};

export default Form;
