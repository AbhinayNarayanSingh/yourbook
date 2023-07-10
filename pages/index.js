import React from 'react'

const index = () => {
  return (
    <div className='container-fluid'>






















      <div className='mt-5'></div>

      <div className='container-md border'>
        <h5 className='mt-2'>Receipt  No. <span class="badge bg-primary ">879</span></h5>

        <div class="table-responsive">
          <table class="table table-borderless mb-0">
            <thead>
              <tr>
                <th scope="col" style={{ width: "100px", textAlign: "right" }}></th>
                <th scope="col">Particular</th>
                <th scope="col" style={{ width: "150px" }}>Debit</th>
                <th scope="col" style={{ width: "150px" }}>Crebit</th>
                <th scope="col" style={{ width: "25px" }}></th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  <select class="form-select">
                    <option selected>Cr</option>
                    <option value="1">Dr</option>
                  </select>
                </td>

                <td>
                  <select class="form-select">
                    <option selected>Rahul Capital A/c</option>
                  </select>
                </td>

                <td><input type="email" class="form-control" /></td>
                <td><input type="email" class="form-control" value={"35,00,000.00"} /></td>
              </tr>

              <tr>
                <td></td>
                <td colSpan={3}>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                </td>

              </tr>


              <tr>
                <td>
                  <select class="form-select">
                    <option selected>Dr</option>
                    <option value="1">Cr</option>
                  </select>
                </td>

                <td>
                  <select class="form-select">
                    <option selected>ICICI Bank</option>
                  </select>
                </td>

                <td><input type="email" class="form-control" value={"25,00,000.00"} /></td>
                <td><input type="email" class="form-control" /></td>
              </tr>


              <tr>
                <td>
                  <select class="form-select">
                    <option selected>Dr</option>
                    <option value="1">Cr</option>
                  </select>
                </td>

                <td>
                  <select class="form-select">
                    <option selected>HDFC Current Account</option>
                  </select>
                </td>

                <td><input type="email" class="form-control" value={"10,00,000.00"} /></td>
                <td><input type="email" class="form-control" /></td>
              </tr>


              <tr>
                <td>
                  <select class="form-select">
                    <option selected>Dr</option>
                    <option value="1">Cr</option>
                  </select>
                </td>

                <td>
                  <select class="form-select">
                    <option></option>
                    <option>SBI Account</option>
                    <option>HDFC Account</option>
                  </select>
                </td>

                <td><input type="email" class="form-control" value={""} /></td>
                <td><input type="email" class="form-control" /></td>
              </tr>


              <tr>
                <th scope="col" colspan={"2"}><button className='btn btn-light'>Add Line</button></th>
                <th scope="col" style={{ paddingRight: "1rem", width: "150px", textAlign: "right" }}>35,00,000.00</th>
                <th scope="col" style={{ paddingRight: "1rem", width: "150px", textAlign: "right" }}>35,00,000.00</th>
              </tr>
            </tbody>
          </table>

          <div class="mb-3 p-2">
            <label for="exampleFormControlTextarea1" class="form-label">Narration</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div style={{ display: "flex", gap: ".5rem", justifyContent: "end" }} className='p-2'>
            <button className='btn btn-light mb-3'>Cancel</button>
            <button className='btn btn-primary text-white mb-3'>Save & Continue</button>
          </div>

        </div>
      </div>













      <div className='mt-5'></div>



      <div className='container-md border'>
        <h5 className='mt-2'>Ledger Creation</h5>

        <div className="row">

          <div class="mb-3 col-md-5">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>

          <div class="mb-3 col-md-4">
            <label for="" class="form-label">Group</label>
            <select class="form-select">
              <option selected>Capital Account</option>
            </select>
          </div>

          <div class="mb-3  col-md-3">
            <label for="exampleFormControlInput1" class="form-label">Opening Balance</label>
            <input type="email" class="form-control" value={"15,00,000.00"} />
          </div>

        </div>

        <div style={{ display: "flex", gap: ".5rem", justifyContent: "end" }} className='p-2'>
          <button className='btn btn-light mb-2'>Cancel</button>
          <button className='btn btn-primary text-white mb-2'>Save & Continue</button>
        </div>



      </div>

      <div className='mt-5'></div>





      <div className='container-md border'>
        <h5 className='mt-2'>Day Book</h5>
        <p>List of transactions that were recorded on a particular day or a period. By default, this day is set to the Current Date displayed in Gateway of Tally.</p>

        <div class="table-responsive">
          <table class="table table-striped border">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" name="" id="" /></th>
                <th scope="col">Date</th>
                <th scope="col">Particular</th>
                <th scope="col">Vch Type</th>
                <th scope="col">Vch No.</th>
                <th scope="col">Debit</th>
                <th scope="col">Crebit</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (

                <tr key={e}>
                  <th scope="col"><input type="checkbox" name="" id="" /></th>

                  <td>09-07-2023</td>
                  <td>Office Expenses</td>
                  <td>Payment</td>
                  <td>{e}</td>
                  <td>1500</td>
                  <td>1500</td>

                </tr>

              ))}

            </tbody>
          </table>
        </div>
      </div>





      <div className='mt-5'></div>


    </div>
  )
}

export default index