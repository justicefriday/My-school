import React, { useState, useEffect} from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import Spinner from '../components/Spinner';

const FemalePage = () => {
  const [femaleStudents, setFemaleStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchFemaleStudent = async () => {
      
     try {
       const res = await fetch('/api/students')
       const data = await res.json();

      const females =data.filter((student) => student.gender ==='Female')
      setFemaleStudents(females)
     } catch (error) {
      console.log('not able to get female students',error)
     } finally {
       setLoading(false)
     }
    }
    fetchFemaleStudent()
 },[])


  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-secondary">Female Students</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {loading ? <Spinner loading={loading} /> :
          <>
             {femaleStudents.map((student) => (
          <div key={student.id} className="col">
            <div className="card h-100 shadow-sm p-3">
              {/* Profile Icon */}
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#FFC107',
                  color: '#000',
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

        {/* <Link
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
        */}
      </div>
    </div>
  );
};

export default FemalePage;
