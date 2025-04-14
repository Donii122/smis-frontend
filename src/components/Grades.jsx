import React, { useState } from 'react';

const Grades = () => {
  const [grades] = useState([
    { id: 1, studentId: '2023001', studentName: 'John Doe', courseCode: 'CS101', courseName: 'Introduction to Computer Science', grade: 'A', score: 95 },
    { id: 2, studentId: '2023002', studentName: 'Jane Smith', courseCode: 'ENG201', courseName: 'Engineering Fundamentals', grade: 'B+', score: 88 },
    { id: 3, studentId: '2023003', studentName: 'Robert Johnson', courseCode: 'BUS301', courseName: 'Business Management', grade: 'A-', score: 90 },
    { id: 4, studentId: '2023004', studentName: 'Emily Davis', courseCode: 'BIO101', courseName: 'Introduction to Biology', grade: 'A', score: 94 },
    { id: 5, studentId: '2023005', studentName: 'Michael Wilson', courseCode: 'PHY201', courseName: 'Physics II', grade: 'C+', score: 77 },
    { id: 6, studentId: '2023006', studentName: 'Sarah Brown', courseCode: 'CHEM101', courseName: 'General Chemistry', grade: 'B', score: 85 },
    { id: 7, studentId: '2023007', studentName: 'David Miller', courseCode: 'MATH301', courseName: 'Advanced Mathematics', grade: 'A-', score: 91 },
    { id: 8, studentId: '2023008', studentName: 'Jennifer Taylor', courseCode: 'PSY101', courseName: 'Introduction to Psychology', grade: 'B+', score: 87 },
    { id: 9, studentId: '2023009', studentName: 'William Anderson', courseCode: 'HIST201', courseName: 'World History', grade: 'B', score: 83 },
    { id: 10, studentId: '2023010', studentName: 'Elizabeth Thomas', courseCode: 'ENG101', courseName: 'English Composition', grade: 'A', score: 93 },
  ]);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Grades</h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Grade
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
                          Student Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Grade
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Score
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {grades.map((grade) => (
                        <tr key={grade.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {grade.studentId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {grade.studentName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {grade.courseCode} - {grade.courseName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                              grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                              grade.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'
                            }`}>
                              {grade.grade}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {grade.score}
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

export default Grades; 