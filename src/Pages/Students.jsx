import React from 'react';
import Layout from '../components/Layout';
import StudentTable from '../components/StudentResults/StudentTable.jsx';

function Students() {
    return (
        <Layout>
            <section className='mt-16 font-sans font-bold text-black'>
                <StudentTable />
            </section>
        </Layout>
    );
}
export default Students;


