import React, { useState, useEffect } from 'react';
import StudentListing from './StudentListing';
import Spinner from './Spinner';

const StudentListings = ({ isHome = false }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genderFilter, setGenderFilter] = useState('All');

  useEffect(() => {
    const apiurl = isHome
      ? '/api/students?_limit=4'
      : '/api/students';

    const fetchStudents = async () => {
      try {
        const res = await fetch(apiurl);
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [isHome]);

  // Filtered list
  const filteredStudents =
    genderFilter === 'All'
      ? students
      : students.filter((student) => student.gender === genderFilter);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-secondary">
        {isHome ? 'Our Students' : 'All the Students'}
      </h2>

      {/* Filter Dropdown - Show only when not home */}
      {!isHome && (
        <div className="mb-4 text-center">
          <select
            className="form-select w-auto mx-auto"
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="All">All Students</option>
            <option value="Male">Male Students</option>
            <option value="Female">Female Students</option>
          </select>
        </div>
      )}

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          filteredStudents.map((student) => (
            <StudentListing key={student.id} student={student} />
          ))
        )}
      </div>
    </div>
  );
};

export default StudentListings;
