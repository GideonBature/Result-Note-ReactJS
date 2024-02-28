import React from 'react';
import StudentProfile from './StudentProfile';

import Table from '../table/Table';


const StudentData = ({headings, contents, profile}) => {
    return (
        <div className="flex">
            <div className="mr-8 flex-1 overflow-x-auto">
                <form className="my-3 text-center justify-start w-full">
                    <input required type="text" name="fullName" className="input p-1 w-full rounded-md border-gray-300 bg-gray-100 text-gray-700 text-md" placeholder='Search by name, email, class, subject or score'/>
                </form>    
                <Table headings={headings} contents={ contents} />
            </div>
            {/* Student profile at the right hand side */}
            {
                profile && (
                    <div>
                        <StudentProfile />
                    </div>
                )
            }
        </div>
    );
};

export default StudentData;