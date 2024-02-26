import React from 'react';
import Layout from '../components/Layout.jsx';
import StudentData from '../components/students/StudentData.jsx';


function Students() {
    const columnNames = [
        'Name',
        'Student ID',
        'Email Address',
        'Class',
        'Gender',
        'Bulk'
    ];

    const contents = [
        {
            details: {
                name: 'Gideon Bature',
                src: '/src/assets/gideon.jpeg'
            },
            id: 3245,
            email: 'caleb@gmail.com',
            class: 'SS2',
            gender: 'male',
            bulk: true,
        },
        {
            details: {
                name: 'Gideon Bature',
                src: '/src/assets/gideon.jpeg'
            },
            id: 3246,
            email: 'caleb@gmail.com',
            class: 'SS2',
            gender: 'male',
            bulk: true,
        }
    ]

    return (
        <Layout>
            <section className='mt-16 font-sans font-bold text-black'>
                <StudentData headings={columnNames} contents={contents}  />
            </section>
        </Layout>
    );
}
export default Students;


