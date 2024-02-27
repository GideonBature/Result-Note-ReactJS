import React from 'react';
import StudentProfile from './StudentProfile';

import Table from '../table/Table';


const StudentData = ({headings, contents}) => {
    return (
        <div className="flex">
            <div className="mr-8 flex-1 overflow-x-auto">
                <Table headings={headings} contents={ contents} />
            </div>
            {/* Student profile at the right hand side */}
            <div>
                <StudentProfile />
            </div>
        </div>
    );
};

export default StudentData;