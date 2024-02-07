import React, { useEffect } from 'react';

function Analytics() {

    const tempData = 5;

    // Implement request logic to fetch registered students, classes,
    //  subjects and results from API.

    //  const [data, setData] = useState({
    //     registeredStudents: 0,
    //     totalClasses: 0,
    //     subjectsListed: 0,
    //     resultsDeclared: 0
    // });

    // useEffect(() => {
    //     fetch('url to fetch data')

    // }, []);

    return (
        <>
            <div className='h-60 mt-12 mr-10 flex'>
                <div>
                    {/* Registered Students */}
                    <div className='bg-primaryColor h-28 w-56 rounded-lg mb-4'>
                        <i className='bx bx-user-check rounded-md font-semibold text-xl bg-white px-1.5 ml-4 mt-4'></i>
                        <p className='text-white font-bold mt-2 ml-7'>{tempData}</p>
                        <p className='text-white font-light ml-4'>Registered Students</p>
                    </div>
                    {/* Total classes listed */}
                    <div className='bg-primaryColor h-28 w-56 rounded-lg'>
                        <i className='bx bx-group rounded-md font-semibold text-lg bg-white py-0 px-1.5 ml-4 mt-4'></i>
                        <p className='text-white font-bold mt-2 ml-7'>{tempData}</p>
                        <p className='text-white font-light ml-4'>Total Classes Listed</p>
                    </div>
                </div>
                <div>
                    {/* Subjects listed */}
                    <div className='bg-primaryColor ml-4 h-28 w-56 rounded-lg mb-4'>
                        <i className='bx bx-list-check rounded-md font-semibold text-lg bg-white py-0 px-1.5 ml-4 mt-4'></i>
                        <p className='text-white font-bold mt-2 ml-7'>{tempData}</p>
                        <p className='text-white font-light ml-4'>Subjects Listed</p>
                    </div>
                    {/* Results declared */}
                    <div className='bg-primaryColor ml-4 h-28 w-56 rounded-lg'>
                        <i className='bx bx-task rounded-md font-bold text-xl bg-white py-0 px-1.5 ml-4 mt-4'></i>
                        <p className='text-white font-bold mt-2 ml-7'>{tempData}</p>
                        <p className='text-white font-light ml-4'>Results Declared</p>
                    </div>
                </div>
                {/* Class Analytics */}
                <div className='bg-primaryColor ml-16 w-full rounded-lg'>
                    <i className='bx bxs-bar-chart-alt-2 rounded-md font-semibold text-lg bg-white py-0 px-1.5 ml-4 mt-3'></i>
                    <p className='text-white font-light ml-14 -mt-6'>Class Analytics</p>
                </div>
            </div>
        </>
    );
}

export default Analytics;
