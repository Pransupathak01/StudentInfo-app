import {Modal, ModalBody, ModalHeader } from 'reactstrap';

const AddStudent = ({student,setStudent,FormSubmit,fullName,email,setEmail,setFullName}) => {
    return (
        <div>
            <Modal isOpen={student} toggle={() => setStudent(!student)}>

                <ModalHeader toggle={() => setStudent(!student)}>
                    Add your information
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={FormSubmit}>
                        <label>Full Name</label>
                        <input type="text" placeholder='Enter your first name' onChange={(e) => { setFullName(e.target.value) }} value={fullName} />
                        <br />
                        <label>Email</label>
                        <input type="text" placeholder='Enter your course' onChange={(e) => { setEmail(e.target.value) }} value={email} /><br />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )

}
export default AddStudent;