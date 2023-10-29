import React from "react";

const Form = (props) => {
    return (
        <form action="" className="mt-4">
            <div className="form-row">
                <div class="col-9">
                    <label htmlFor="Account_name">From</label>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">Cahs</option>
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
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">Cahs</option>
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
