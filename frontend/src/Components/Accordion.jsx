import utilities from "../Utilities/helpers"

const Accordion = ({accounts}) => {
  return (
    <div id="accordion">
        {accounts.map((account) => {
        const randomString = utilities.generateRandomString(7);
        return (
          <div className="card" key={account._id}>
            <div className="card-header" id="headingOne">
              <div className="mb-0 d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target={`#${randomString}`}
                  aria-expanded="true"
                  aria-controls={randomString}
                >
                  {account._id}
                </button>
                <span className="text-success">
                  {account.totalBalance.toLocaleString("en-US")} USD{" "}
                </span>
              </div>
            </div>
            <div
              id={randomString}
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordion"
              key={account.name}
            >
              <div className="card-body">
                {account.accounts.map((singleAccount) => {
                  return (
                    <div
                      className="d-flex justify-content-between align-items-center"
                      key={singleAccount.accountname}
                    >
                      {singleAccount.accountname}
                      <span className="text-success">
                        {singleAccount.balance.toLocaleString("en-US")} USD
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion