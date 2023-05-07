//import logo from './logo.svg';
import './App.css';
import PageData from './PagData';
import Header from './Header';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import {Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useState } from 'react';


const App = () =>{ 
  const[student,setStudent]=useState(false)
  const[fname,setFname] =useState()
  const[lname,setLname]=useState()
  const[course,setCourse]=useState()
  const[branch,setBranch] = useState()
  const[eno,setEno]=useState( )
  //const [alldata ,setAlldata]=useState( )

  const UpdateStudent = () =>{
    setStudent(true);

  }
  const FormSubmit = (e) =>{
    e.preventDefault();
  //  console.log(e.target.value)
   // const newdata = {Fname:fname,Lname:lname,Course:course,Branch:branch,Eno:eno}
      //  setAlldata(newdata);
        //console.log(alldata)
        console.log( fname,lname,course,branch,eno)
        setFname(' ')
        setLname(' ')
        setCourse(' ')
        setBranch(' ')
        setEno(' ')

        alert("your response is ubmitted")
  }
  return (
     <div> 
      <Header />
      <div className='popdata'> 
        <p>For adding new students data click on the next button</p>
        <button className='popbutt' onClick={UpdateStudent}>New student</button>
        
        <Modal isOpen={student} toggle={()=>setStudent(!student)}>

          <ModalHeader toggle={()=>setStudent(!student)}>
            Add your information
          </ModalHeader>
          <ModalBody>
            <form onSubmit={FormSubmit}>
            <label>First Name</label>
            <input type="text" placeholder='Enter your first name' onChange={( e)=>{setFname(e.target.value)} } value={fname}/><br/>
            <label>Last Name</label>
            <input type="text" placeholder='Enter your last name' onChange={( e)=>{setLname(e.target.value)} } value={lname} /><br/>
            <label>Course</label>
            <input type="text" placeholder='Enter your course' onChange={( e)=>{setCourse(e.target.value)}} value={course} /><br/>
            <label>Branch</label>
            <input type="text" placeholder='Enter your branch' onChange={( e)=>{setBranch(e.target.value)}} value={branch} /><br/>
            <label>Enroll No.</label>
            <input type="text" placeholder='Enter your enroll no.' onChange={( e)=>{setEno(e.target.value)}} value={eno} /><br/>
            <button type="submit">Submit</button>
            </form>
            

          </ModalBody>
        </Modal>
        
      </div>
      
      <PageData/>
      <Footer />

    
  </div>
  
  )
 
}
export default App;
  