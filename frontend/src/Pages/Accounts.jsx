import Modal from "../Components/Modal"

const Accounts = () => {
  return (
    <div className="card">
        <div className="card-header">
            <button type="button" data-toggle="modal" data-target="#accountModal" className="btn btn">
                <i className="fa fa-plus mr-2" aria-hidden="true">  </i>
                 New
            </button>
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>

        <Modal modalId={"accountModal"} />
    </div>
  )
}

export default Accounts