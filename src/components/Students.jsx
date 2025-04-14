import React, { useState } from 'react';

const Students = () => {
  const [students] = useState([
    { id: 1, name: 'John Doe', studentId: '2023001', major: 'Computer Science', gpa: 3.8, status: 'Active' },
    { id: 2, name: 'Jane Smith', studentId: '2023002', major: 'Engineering', gpa: 3.5, status: 'Active' },
    { id: 3, name: 'Robert Johnson', studentId: '2023003', major: 'Business', gpa: 3.2, status: 'Active' },
    { id: 4, name: 'Emily Davis', studentId: '2023004', major: 'Biology', gpa: 3.9, status: 'Active' },
    { id: 5, name: 'Michael Wilson', studentId: '2023005', major: 'Physics', gpa: 3.1, status: 'Inactive' },
    { id: 6, name: 'Sarah Brown', studentId: '2023006', major: 'Chemistry', gpa: 3.7, status: 'Active' },
    { id: 7, name: 'David Miller', studentId: '2023007', major: 'Mathematics', gpa: 3.6, status: 'Active' },
    { id: 8, name: 'Jennifer Taylor', studentId: '2023008', major: 'Psychology', gpa: 3.4, status: 'Active' },
    { id: 9, name: 'William Anderson', studentId: '2023009', major: 'History', gpa: 3.3, status: 'Active' },
    { id: 10, name: 'Elizabeth Thomas', studentId: '2023010', major: 'English', gpa: 3.8, status: 'Active' },
  ]);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Student
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Major
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          GPA
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {students.map((student) => (
                        <tr key={student.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {student.studentId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.major}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.gpa}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">Edit</a>
                            <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students; 