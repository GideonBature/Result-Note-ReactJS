import React from 'react';
import StudentProfile from './StudentProfile';
import StudentData from './StudentData';

function StudentTable() {
    const columnNames = [
        'Name',
        'Student ID',
        'Email Address',
        'Class',
        'Gender',
        'Bulk'
    ];

    return (
        <div className="flex">
            <div className="mr-8 flex-1 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            {/* Dynamic - Map over student column names and render each header */}
                            {columnNames.map((columnName, index) => (
                                <th key={index} scope="col" className="py-2 px-2 text-left text-xs text-black">
                                    {columnName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {/* tableDetails - Student data */}
                    <StudentData />
                </table>
            </div>
            {/* Student profile at the right hand side */}
            <div>
                <StudentProfile />
            </div>
        </div>
    );
}

export default StudentTable;
