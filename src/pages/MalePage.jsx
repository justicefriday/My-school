import React, { useState, useEffect } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import Spinner from '../components/Spinner';

const MalePage = () => {
  const [maleStudents, setMaleStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchMaleStudents = async () => {
      try {
        const res = await fetch('/api/students');
        const data = await res.json();
        const males = data.filter((student) => student.gender === 'Male');
        setMaleStudents(males);
      } catch (error) {
        console.error('Failed to fetch male students:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaleStudents();
  }, []);


  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-secondary">Male Students</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {loading ? <Spinner loading={loading} /> :
          <>
            {maleStudents.map((student) => (
              <div key={student.id} className="col">
                <div className="card h-100 shadow-sm p-3">
                  {/* Profile Icon */}
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#03A6A1',
                      color: '#fff',
                      fontSize: '24px',
                    }}
                  >
                    <FaUserGraduate />
                  </div>
                  <h5 className="mb-1">{student.name}</h5>
                  <p className="mb-0"><strong>Age:</strong> {student.age}</p>
                  <p className="mb-0"><strong>Class:</strong> {student.class}</p>
                  <p className="mb-0"><strong>Email:</strong> {student.parent?.email}</p>
                </div>
              </div>
            ))}
          </>
        }
      </div>
    </div>
  );
};

export default MalePage;
