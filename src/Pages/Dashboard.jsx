import React from 'react';
import Layout from '../components/Dashboard/Layout';
import Analytics from '../components/Dashboard/Analytics';
import TopNavBar from '../components/Dashboard/TopNavBar';

function Dashboard() {
    return (
        <Layout>
            <section className='flex font-sans font-bold '>
                <h1 className='mt-2'>Welcom to your dashboard!</h1>
                <TopNavBar/>
                <Analytics />
            </section>
        </Layout>
    );
}

export default Dashboard;
