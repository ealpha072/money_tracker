import React from 'react'

const Settings = () => {
  return (
    <div className="card bg-light mb-3">
        <div className="card-header">CURRENCY</div>
        <div className="card-body">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <label for="exampleDataList" class="form-label">Base Currency</label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                        <datalist id="datalistOptions">
                            <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                        </datalist>
                    </div>

                    <div className="col">
                        <label for="exampleDataList" class="form-label">Additional Currency</label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                        <datalist id="datalistOptions">
                            <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                        </datalist>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default Settings