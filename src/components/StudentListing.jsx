import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentListing = ({ student}) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body d-flex flex-column align-items-center text-center p-4">
          {/* Student Icon */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: student.gender === 'Male' ? '#03A6A1' : '#FFC107',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            <FaUserGraduate />
          </div>

          {/* Name and Class */}
          <h5 className="card-title fw-bold mb-1">{student.name}</h5>
          <p className=" mb-1"><strong>Class: </strong>{student.class}</p>

          {/* Age and Gender */}
          <div className="mb-2 w-100">
            <p className="mb-1"><strong>Age:</strong> {student.age}</p>
            <p className="mb-1"><strong>Gender:</strong> {student.gender}</p>
          </div>

          {/* View Profile Button */}
  <Link
  to={`/students/${student.id}`}
  className="btn  mt-auto"
  style={{
    backgroundColor: '#FFEDF3' ,
    borderColor: '#03A6A1',
    color:'#03A6A1'
  }}
>
  View Profile
</Link>

        </div>
      </div>
    </div>
  );
};

export default StudentListing;
