import React from 'react';
import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom';
import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const StudentPage = ({ deleteStudent }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const student = useLoaderData();

  const bgColor = student.gender === 'Male' ? '#03A6A1' : '#FFC107';
  const textColor = student.gender === 'Male' ? '#fff' : '#000';

  const handleDelete = (studentId) => {
    const confirm = window.confirm(`Are you sure you want to delete ${student.name}?`);
    if (!confirm) return;

    deleteStudent(studentId);
    toast.success(`${student.name} was deleted successfully`);
    navigate('/students');
  };

  const parent = student.parent || {};
  const parentEmail = parent.email || student.parentEmail || 'N/A';
  const parentPhone = parent.phone || student.parentPhone || 'N/A';
  const parentAddress = parent.address || student.parentAddress || 'N/A';

  return (
    <div className="container py-5">
      {/* Back Button */}
      <Link to="/students" className="btn btn-outline-secondary mb-4">
        <FaArrowLeft className="me-2" />
        Back
      </Link>

      {/* Student Card */}
      <div className="card shadow-lg">
        <div className="card-body">
          {/* Top Info */}
          <div className="row g-4 text-center text-md-start align-items-start">
            {/* Avatar */}
            <div className="col-12 col-md-2 d-flex justify-content-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: bgColor,
                  color: textColor,
                  fontSize: '40px',
                }}
              >
                <FaUserGraduate />
              </div>
            </div>

            {/* Basic Info */}
            <div className="col-12 col-md-5">
              <h3 className="mb-1">{student.name}</h3>
              <p className="mb-0">
                <strong>Class:</strong> {student.class}
              </p>
              <p className="mb-0">
                <strong>Age:</strong> {student.age}
              </p>
              <p className="mb-0">
                <strong>Gender:</strong> {student.gender}
              </p>
            </div>

            {/* Subject Scores */}
            <div className="col-12 col-md-5">
              <h5 className="text-secondary mb-2">Subject Scores</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Math:</strong> {student.subjects?.math}
                </li>
                <li className="list-group-item">
                  <strong>English:</strong> {student.subjects?.english}
                </li>
                <li className="list-group-item">
                  <strong>Science:</strong> {student.subjects?.science}
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-4" />

          {/* Parent Info */}
          <div>
            <h5 className="text-secondary mb-3">Parent Information</h5>
            <p>
              <FaEnvelope className="me-2 text-primary" />
              <strong>Email:</strong> {parentEmail}
            </p>
            <p>
              <FaPhone className="me-2 text-success" />
              <strong>Phone:</strong> {parentPhone}
            </p>
            <p>
              <FaMapMarkerAlt className="me-2 text-danger" />
              <strong>Address:</strong> {parentAddress}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-footer bg-white d-flex justify-content-end gap-3 px-4 py-3">
          <Link
            to={`/edit-students/${id}`}
            className="btn text-white d-flex align-items-center gap-2"
            style={{ backgroundColor: '#03A6A1', border: 'none' }}
          >
            <FaEdit />
            Edit
          </Link>
          <button
            onClick={() => handleDelete(student.id)}
            className="btn btn-danger d-flex align-items-center gap-2"
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// Loader function to fetch student data
const studentLoader = async ({ params }) => {
  const res = await fetch(`/api/students/${params.id}`);
  if (!res.ok) {
    throw new Error('Student not found');
  }
  return res.json();
};

export { StudentPage as default, studentLoader };
