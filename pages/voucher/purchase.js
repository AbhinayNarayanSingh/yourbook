import React from 'react'

const purchase = () => {
    return (
        <div className='container-fluid'>
            <div className='mt-4'></div>

            <div className='container-md border'>
                <h5 className='mt-2'>Purchase No. <span className="badge bg-primary ">TRR/095</span></h5>

                <div className='p-2 mb-4'>
                    <div className="form-group row mb-2">
                        <label for="" className="col-md-2 col-form-label">Reference No.</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="" placeholder="" value={"HAV/SALES/864643"}/>
                        </div>
                    </div>

                    <div className="form-group row mb-2">
                        <label for="" className="col-md-2 col-form-label">Party A/c Name</label>
                        <div className="col-md-6">
                            <select className="form-select">
                                <option selected>Havells India Pvt. Ltd</option>
                                <option >Cash</option>
                                <option>Abhinay Narayan Singh</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <p>Current Balance : 15,24,500 Dr</p>
                        </div>
                    </div>



                    {false && <>
                        <div className="form-group row mb-2">
                            <div className="col-md-2">Supplier's Details</div>
                            <div className="col-md-7">
                                <input type="email" className="form-control" value={"Abhinay Narayan Singh"} />
                            </div>
                            <div className="col-md-3">
                                <input type="email" className="form-control" value={"8795675599"} />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <div className="col-md-2"></div>
                            <div className="col-md-10">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2">Aashirvad Niketan, Near Chaura Mata Mandir, Seer Goverdhanpur, Varanasi, Uttar Pradesh, India - 221011</textarea>
                            </div>
                        </div>
                    </>}

                    <div className="form-group row mb-2">
                        <label for="" className="col-md-2 col-form-label">Purchase ledger</label>
                        <div className="col-md-6">
                            <select className="form-select">
                                <option selected>Purchase</option>
                            </select>
                        </div>
                    </div>

                </div>



                <div className="table-responsive">
                    <table className="table table-borderless mb-0">
                        <thead>
                            <tr >
                                <th scope="col">Particular</th>
                                <th scope="col" style={{ width: "150px" }}>Quantity</th>
                                <th scope="col" style={{ width: "150px" }}>Rate</th>
                                <th scope="col" style={{ width: "150px" }}>Per</th>
                                <th scope="col" style={{ width: "150px" }}>Amount</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>

                                <td>
                                    <select className="form-select">
                                        <option selected>HAVELLS S1 SELF PRIMING 1.5 HP</option>
                                    </select>
                                </td>

                                <td><input type="email" className="form-control" value={10} /></td>
                                <td><input type="email" className="form-control" value={"8,1355.59"} /></td>
                                <td>
                                    <select className="form-select">
                                        <option selected>Nos</option>
                                    </select>
                                </td>
                                <td><input type="email" className="form-control" value={"81,355.90"} readOnly /></td>

                            </tr>

                            <tr>
                                <td><textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
                                    Batch : MAMCM03M00292, MAMCM03M00293, MAMCM03M00294
                                </textarea></td>
                            </tr>


                            <tr>
                                <td>
                                    <select className="form-select">
                                        <option selected>CGST</option>
                                    </select>
                                </td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={"7,320.00"} readOnly /></td>
                            </tr>
                            <tr>
                                <td>
                                    <select className="form-select">
                                        <option selected>SGST</option>
                                    </select>
                                </td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={"7,320.00"} readOnly /></td>
                            </tr>
                            <tr>
                                <td>
                                    <select className="form-select">
                                        <option selected>Round Off</option>
                                    </select>
                                </td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={""} /></td>
                                <td><input type="email" className="form-control" value={"0.10"} readOnly /></td>
                            </tr>



                            <tr>
                                <th scope="col" colspan={"2"}>
                                    <button className='btn btn-light mx-2'>Add Line</button>
                                    <button className='btn btn-light'>Add Narration</button>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col" colspan={"2"}>
                                    <p>Amount Chargeable (in words) : INR Ninety Six Thousand Only</p>
                                </th>
                                <th />
                                <th />
                                <th scope="col" style={{ paddingRight: "1rem", width: "150px", textAlign: "right" }}>INR 96,000.00</th>
                            </tr>
                        </tbody>
                    </table>


                    {/* <div className="mb-3 p-2">
<label for="exampleFormControlTextarea1" className="form-label">Narration</label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> */}

                    <div style={{ display: "flex", gap: ".5rem", justifyContent: "end" }} className='p-2'>
                        <button className='btn btn-light mb-3'>Cancel</button>
                        <button className='btn btn-primary text-white mb-3'>Save & Continue</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default purchase