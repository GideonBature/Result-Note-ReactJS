import React from 'react';
import Layout from '../components/Dashboard/Layout';
import Analytics from '../components/Dashboard/Analytics';
import Header from '../components/Dashboard/TopNavBar';

function Dashboard() {
    return (
        <Layout>
            <section className='font-sans font-bold'>
                <Header />
                <Analytics />
            </section>
        </Layout>
    );
}

export default Dashboard;
