import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { getMarksApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';


function Studentmarklist() {
    const [searchMarks, setSearchMarks] = useState({
        registerNumber: "",
        batch: ""
    })
    const [batch, setbatch]=useState("")
    const [markData, setmarkData]=useState({})
    const searchMarkStudent = async () => {
        const { registerNumber, batch } = searchMarks;
        if (!registerNumber || !batch) {
            toast.warning("Please fill the form completely", {
                position: "top-center"
            });
        }
        console.log(searchMarks)
        const result = await getMarksApi(searchMarks.registerNumber, searchMarks.batch)
        if(result.status == 200){
            const {data} = result
            const marks = data.marksData
            setmarkData(marks)
            console.log(result)
            setbatch(searchMarks.batch)
        }
       else{
        toast.warning("Register Number not matches", {
            position: "top-center"
        });
        setbatch("")
       }
    
    }
    console.log(markData)
    return (
        <>
            <div className="text-center mt-5">
                <div className="row justify-content-center mt-3">
                    <div className="col-md-3">
                        <input type="text" placeholder="Enter Register Number" className="form-control"
                            onChange={(e) => setSearchMarks({ ...searchMarks, registerNumber: e.target.value })}
                        />
                    </div>
                    <div className="col-md-3">
                        <select name="batch" id="batch" className="form-control"
                            onChange={(e) => setSearchMarks({ ...searchMarks, batch: e.target.value })}>
                            <option value="" disabled selected>Select Batch</option>
                            <option value="cse">CSE</option>
                            <option value="ece">ECE</option>
                            <option value="eee">EEE</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={searchMarkStudent}>Search Marks</button>
                    </div>
                </div>
            </div>
            {/* cse section  */}
            {
                batch == 'cse' &&
                <div className=' mt-5 d-flex justify-content-center align-items-center flex-column'>
                <table className='table w-50 shadow rounded' >
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Subject</th>
                            <th>marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Operating Systems</td>
                            <td>{markData?.operatingsystems}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Data Structure</td>
                            <td>{markData?.datastructure}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Automata</td>
                            <td>{markData?.automata}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Wireless Communication</td>
                            <td>{markData?.wirelesscommunication}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Computer Networking</td>
                            <td>{markData?.computernetworking}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Artificial Intelligence</td>
                            <td>{markData?.artificialintelligence}</td>
                        </tr>
                    </tbody>
                </table>
                <h5 className='mt-3'>Attendence: <span className='text-primary'>{markData?.attendence} %</span></h5>
            </div>
            }
            {
                 batch == 'ece' &&
                 <div className=' mt-5 d-flex justify-content-center align-items-center flex-column'>
                 <table className='table w-50 shadow rounded' >
                     <thead>
                         <tr>
                             <th>index</th>
                             <th>Subject</th>
                             <th>marks</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td>1</td>
                             <td>Embeded Systems</td>
                             <td>{markData?.embeddedsystems}</td>
                         </tr>
                         <tr>
                             <td>2</td>
                             <td>Wireless Communication</td>
                             <td>{markData?.wirelesscommunication}</td>
                         </tr>
                         <tr>
                             <td>3</td>
                             <td>Information Theory</td>
                             <td>{markData?.informationtheory}</td>
                         </tr>
                         <tr>
                             <td>4</td>
                             <td>Signals and Systems</td>
                             <td>{markData?.signalsandsystems}</td>
                         </tr>
                         <tr>
                             <td>5</td>
                             <td>Logic Designs</td>
                             <td>{markData?.logicdesign}</td>
                         </tr>
                         <tr>
                             <td>6</td>
                             <td>Electronic Circuit</td>
                             <td>{markData?.electroniccircuit}</td>
                         </tr>
                     </tbody>
                 </table>
                 <h5 className='mt-3'>Attendence: <span className='text-primary'>{markData?.attendence} %</span></h5>
             </div>
            }
            {
               batch == 'eee' &&
               <div className=' mt-5 d-flex justify-content-center align-items-center flex-column'>
               <table className='table w-50 shadow rounded' >
                   <thead>
                       <tr>
                           <th>index</th>
                           <th>Subject</th>
                           <th>marks</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>1</td>
                           <td>Singnals and Systems</td>
                           <td>{markData?.signalsandsystems}</td>
                       </tr>
                       <tr>
                           <td>2</td>
                           <td>Analog Electronics</td>
                           <td>{markData?.analogelectronics}</td>
                       </tr>
                       <tr>
                           <td>3</td>
                           <td>Communication</td>
                           <td>{markData?.communication}</td>
                       </tr>
                       <tr>
                           <td>4</td>
                           <td>Digital Design</td>
                           <td>{markData?.digitaldesign}</td>
                       </tr>
                       <tr>
                           <td>5</td>
                           <td>Control Engineering</td>
                           <td>{markData?.controlengineering}</td>
                       </tr>
                       <tr>
                           <td>6</td>
                           <td>Electro mechanics</td>
                           <td>{markData?.electromechanics}</td>
                       </tr>
                   </tbody>
               </table>
               <h5 className='mt-3'>Attendence: <span className='text-primary'>{markData?.attendence} %</span></h5>
           </div>
            }

            <ToastContainer />
        </>

    )
}

export default Studentmarklist