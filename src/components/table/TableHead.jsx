import React from 'react';
import StudentData from '../students/StudentData';

function TableHead({headings}) {

    return (
        <thead className="bg-gray-50">
            <tr>
                {/* Dynamic - Map over student column names and render each header */}
                {headings.map((heading, index) => (
                    <th key={index} scope="col" className="py-2 px-2 text-left text-xs text-black">
                        {heading}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHead;
