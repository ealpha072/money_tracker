import React from 'react'

const Modal = ({modalId}) => {
  return (
    <div className="modal fade" id={modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    
                    <h5 className="modal-title" id="exampleModalLabel"><i className='fa fa-file'></i> New Account</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form action="">
                        <div class="form-row">
                            <div class="col">
                                <label htmlFor="Account_name">Name</label>
                                <input type="text" class="form-control" placeholder="First name" />

                                <div class="form-check mt-4">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Default checkbox
                                    </label>
                                </div>
                                <div class="form-check mt-4">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show on dashboard
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <label htmlFor="Account_name">Group</label>
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">Cahs</option>
                                    <option value="2">Bank Account</option>
                                    <option value="3">Deposit</option>
                                </select>

                                
                                <div class="input-group mb-2 mt-4">
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Balance" />
                                    <div class="input-group-append">
                                        <div class="input-group-text"><strong>USD</strong></div>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-block btn-primary">Save changes</button>
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