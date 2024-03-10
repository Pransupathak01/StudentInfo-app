import React, { useState } from "react"
import '.././App.css';
import Header from "./Header";
import Footer from "./Footer";
import AddStudent from "./AddStudent";
import Records from "./Records";
const Datacom = () => {
    const [student, setStudent] = useState(false)
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()

    const handleAddStudent = () => {
        setStudent(true);

    }
    const FormSubmit = (e) => {
        e.preventDefault();
        console.log(fullName, email)
        setFullName(' ')
        setEmail(' ')

        alert("your response is submitted")
    }

    return (
        <div>
            <Header/>
            <div className='popdata'>
                <p>For adding new students data click on the next button</p>
                <button className='popbutt' onClick={handleAddStudent}>New student</button>
            </div>
            <AddStudent student={student} setStudent={setStudent} FormSubmit={FormSubmit} fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} />
            <Records />
            <Footer/>
        </div>
    )
}
export default Datacom;