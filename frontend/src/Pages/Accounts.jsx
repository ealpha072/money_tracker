// import { useState, useEffect } from 'react'
// import accountService from '../services/account'
import Modal from '../Components/Modal'
import Accordion from '../Components/Accordion'

const Accounts = (props) => {
   const { accounts } = props

    return (
        <div className="card">
            <div className="card-header">
                <button type="button" data-toggle="modal" data-target="#accountModal" className="btn btn">
                    <i className="fa fa-plus mr-2" aria-hidden="true">  </i>
                    New
                </button>
            </div>
            <div className="card-body">
                <Accordion accounts={accounts}/>
            </div>

            <Modal />
        </div>
    )
}

export default Accounts