import React, { useState } from 'react';

const Courses = () => {
  const [courses] = useState([
    { id: 1, code: 'CS101', name: 'Introduction to Computer Science', instructor: 'Prof. Smith', credits: 3, students: 120 },
    { id: 2, code: 'ENG201', name: 'Engineering Fundamentals', instructor: 'Prof. Johnson', credits: 4, students: 85 },
    { id: 3, code: 'BUS301', name: 'Business Management', instructor: 'Prof. Williams', credits: 3, students: 95 },
    { id: 4, code: 'BIO101', name: 'Introduction to Biology', instructor: 'Prof. Brown', credits: 4, students: 110 },
    { id: 5, code: 'PHY201', name: 'Physics II', instructor: 'Prof. Davis', credits: 4, students: 75 },
    { id: 6, code: 'CHEM101', name: 'General Chemistry', instructor: 'Prof. Miller', credits: 4, students: 130 },
    { id: 7, code: 'MATH301', name: 'Advanced Mathematics', instructor: 'Prof. Wilson', credits: 3, students: 60 },
    { id: 8, code: 'PSY101', name: 'Introduction to Psychology', instructor: 'Prof. Taylor', credits: 3, students: 150 },
    { id: 9, code: 'HIST201', name: 'World History', instructor: 'Prof. Anderson', credits: 3, students: 80 },
    { id: 10, code: 'ENG101', name: 'English Composition', instructor: 'Prof. Thomas', credits: 3, students: 140 },
  ]);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Course
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
                          Course Code
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Instructor
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Credits
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Students
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {courses.map((course) => (
                        <tr key={course.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {course.code}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.instructor}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.credits}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.students}
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

export default Courses; 