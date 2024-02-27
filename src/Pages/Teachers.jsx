import React from 'react';
import Layout from '../components/Layout';
import StudentData from '../components/students/StudentData';

function Teachers() {
    const columnNames = [
        'Name',
        'ID',
        'Email Address',
        'Class',
        'Bulk'
    ];

    const contents = [
        {
            details: {
                name: 'Gideon B',
                src: '/src/assets/gideon.jpeg'
            },
            id: 3245,
            email: 'caleb@gmail.com',
            class: 'SS2',
            bulk: true,
        },
        {
            details: {
                name: 'Elgibbor C',
                src: '/src/assets/elgibbor.png'
            },
            id: 3246,
            email: 'elgibbor@gmail.com',
            class: 'SS3',
            bulk: false,
        },
        {
            details: {
                name: 'Caleb O',
                src: '/src/assets/caleb.jpeg'
            },
            id: 3247,
            email: 'caleb@gmail.com',
            class: 'SS1',
            bulk: false,
        }
    ]

    return (
        <Layout>
            <section className='mt-16 font-sans font-bold text-black'>
                <h1 className='mb-3'>Teachers</h1>
                {contents.length === 0 ? "<p className=''>No teacher data available</p>" :
                    <StudentData headings={columnNames} contents={contents} />}
            </section>
        </Layout>
    );
}

export default Teachers;
