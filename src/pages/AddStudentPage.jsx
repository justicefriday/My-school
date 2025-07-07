import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddStudentPage = ({ AddStudentSubmit }) => {
  
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [gender, setGender] = useState('Male');
const [studentClass, setStudentClass] = useState('JSS 1');
const [math, setMath] = useState('');
const [english, setEnglish] = useState('');
const [science, setScience] = useState('');
const [parentEmail, setParentEmail] = useState('');
const [parentPhone, setParentPhone] = useState('');
const [parentAddress, setParentAddress] = useState('');

  const navigate = useNavigate();
  
  const submitForm = (e) => {
    e.preventDefault();
    
    const newStudent = {
    name,
    age,
    gender,
   class: studentClass,
    subjects: {
      math,
      english,
      science,
    },
    parent: {
      parentEmail,
      parentPhone,
      parentAddress,
    
    }
    
    }
    AddStudentSubmit(newStudent)
    toast.success(` Student Added Successfully`)
   return navigate('/students')
  }

  return (
    <div className="container py-5">
  <h2 className="text-center mb-4 text-white p-2 rounded" style={{ backgroundColor: '#03A6A1' }}>
    Add New Student
  </h2>

  <form onSubmit={submitForm} className="card shadow p-4">
    {/* Student Info */}
    <h5 className="text-white p-2 rounded mb-3" style={{ backgroundColor: '#03A6A1' }}>
      Student Information
    </h5>
    <div className="row g-3">
      <div className="col-md-6">
        <label className="form-label">Full Name</label>
            <input type="text"
              className="form-control"
              name="name" required
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
      </div>
      <div className="col-md-3">
        <label className="form-label">Age</label>
            <input type="number" className="form-control"
              name="age"
              required
              value={age}
            onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <div className="col-md-3">
        <label className="form-label">Gender</label>
            <select className="form-select"
              name="gender"
              required
              value={gender}
            onChange={(e)=> setGender(e.target.value)}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label">Class</label>
            <select className="form-select"
              name="class"
              required
              value={studentClass}
            onChange={(e)=> setStudentClass(e.target.value)}>
          <option>JSS 1</option>
          <option>JSS 2</option>
          <option>JSS 3</option>
          <option>SSS 1</option>
          <option>SSS 2</option>
          <option>SSS 3</option>
        </select>
      </div>
    </div>

    {/* Subject Scores */}
    <h5 className="text-dark mt-4 p-2 rounded mb-3" style={{ backgroundColor: '#FFC107' }}>
      Subject Scores
    </h5>
    <div className="row g-3">
      <div className="col-md-4">
        <label className="form-label">Math</label>
            <input type="number"
              className="form-control"
              name="math"
              required
              value={math}
            onChange={(e)=> setMath(e.target.value)}/>
      </div>
      <div className="col-md-4">
        <label className="form-label">English</label>
            <input type="number" className="form-control"
              name="english"
              required
              value={english}
            onChange={(e)=>setEnglish(e.target.value)}/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Science</label>
            <input type="number"
              className="form-control"
              name="science"
              required
              value={science}
              onChange={(e)=> setScience(e.target.value)}
            />
      </div>
    </div>

    {/* Parent Info */}
    <h5 className="text-white mt-4 p-2 rounded mb-3" style={{ backgroundColor: '#03A6A1' }}>
      Parent/Guardian Information
    </h5>
    <div className="row g-3">
      <div className="col-md-4">
        <label className="form-label">Email</label>
            <input type="email" className="form-control"
              name="email"
              required
              value={parentEmail}
              onChange={(e)=>setParentEmail(e.target.value)}
            />
      </div>
      <div className="col-md-4">
        <label className="form-label">Phone</label>
            <input type="tel" className="form-control"
              name="phone"
              required
              value={parentPhone}
            onChange={(e)=> setParentPhone(e.target.value)}/>
      </div>
      <div className="col-md-4">
        <label className="form-label">Address</label>
            <input type="text" className="form-control"
              name="address"
              required
              value={parentAddress}
            onChange={(e)=> setParentAddress(e.target.value)}/>
      </div>
    </div>

    {/* Submit */}
    <div className="text-center mt-4">
      <button
        type="submit"
        className="btn text-white px-4 py-2"
        style={{ backgroundColor: '#03A6A1', border: 'none' }}
      >
        Add Student
      </button>
    </div>
  </form>
</div>

  )
}

export default AddStudentPage