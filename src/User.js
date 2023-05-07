import React,{useState}  from "react";
import{Modal,ModalHeader,ModalBody} from "reactstrap"
const User = () =>{
    const[uname,setUname] =useState(false)
    const UpdateUname = () =>{
        setUname(true);
    }
    return(
         <div className="user-btn">
        <Modal
        className="modal-btn"
        isOpen={uname}
        toggle={()=>setUname(!uname)}
        >
            <ModalHeader
            className="hmodal-btn">
                Add User
            </ModalHeader>
            <ModalBody className="mbody-btn">
                <form>
                    <div>
                        <label>User First name</label>
                        <input type="text" placeholder="Enter first name"/>
                    </div>
                    <div>
                        <label>User Last name</label>
                        <input type="text" placeholder="Enter first name"/>
                    </div>
                    <div>
                        <label>User Email Add.</label>
                        <input type="text" placeholder="Enter email"/>
                    </div>
                    <div>
                        <label>User Mobile No.</label>
                        <input type="text" placeholder="Enter mobile number"/>
                    </div>
                    <div>
                        <label>User Home Add.</label>
                        <input type="text" placeholder="Enter home address"/>
                    </div>
                    <div>
                        <input type="checkbox" id="T/C"/>
                        <label>Accept terms and conditions</label>
                    </div>
                    <div >
                        <button className="submit-btn" type="submit">Submit</button>
                    </div>
                </form>
            
            </ModalBody>
        </Modal>


            <button onClick={UpdateUname}>
               New User
            </button>


        </div>
       

    );
}
export default User;