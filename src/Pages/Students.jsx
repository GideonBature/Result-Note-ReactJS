import {React, useState} from 'react';
import Layout from '../components/Layout.jsx';
import StudentData from '../components/students/StudentData.jsx';


function Students() {
    const [newStudent, setNewStudent] = useState(true)

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
                name: 'Gideon B',
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
                name: 'Elgibbor C',
                src: '/src/assets/elgibbor.png'
            },
            id: 3246,
            email: 'elgibbor@gmail.com',
            class: 'SS3',
            gender: 'male',
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
            gender: 'female',
            bulk: false,
        }
    ]

    return (
        newStudent ? (
            <Layout>
                <section className='mt-16 font-sans font-bold text-black'>
                    <h1 className='mb-3'>Students</h1>
                    
                    <div>
                        <p className="mt-1 text-left text-2xl text-gray-500 font-kumbh px-20">Add Students</p>
                        <form className="mt-8 space-y-6 mx-auto text-center px-20">
                            <div className='flex justify-between'>
                                <div className="w-2/3 mr-8">
                                    <label htmlFor="fullName" className="text-left block text-sm font-medium text-gray-900">Full Name</label>
                                    <input required type="text" name="fullName" className="input mt-1 p-3 w-full rounded-md border-gray-300 bg-white border-2 text-gray-900"  />
                                </div>
                                <div className="w-1/3">
                                    <label htmlFor="email" className="text-left block text-sm font-medium text-gray-900">Email Address</label>
                                    <input required type="email" name="email" className="input mt-1 p-3  w-full rounded-md border-gray-300 bg-white border-2 text-gray-900" />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="w-1/3 mr-8">
                                    <label htmlFor="password" className="block text-left text-sm font-medium text-gray-900">Password</label>
                                    <input required type="text" name="password" className="input mt-1 mr-3 p-3 rounded-md w-full border-gray-300 bg-white border-2 text-gray-900"/>
                                </div>
                                <div className="w-1/3 mr-8">
                                    <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-900">Phone Number</label>
                                    <input required type="phone" name="phone" className="input mt-1 mr-3 p-3 rounded-md w-full border-gray-300 bg-white border-2 text-gray-900"/>
                                </div>
                                <div className="w-1/3">
                                    <select required name="gender" className="input mt-6 p-3 rounded-md w-full border-gray-300 bg-white border-2 text-gray-900">
                                        <option value="">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="no_say">Prefer not to say</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-start'>
                                <div className="w-1/3 mr-8">
                                    <select required name="subject" className="input mt-1 p-3 rounded-md w-full border-gray-300 bg-white border-2 text-gray-900">
                                        <option value="">Subject</option>
                                        <option value="english">English</option>
                                        <option value="mathematics">Mathematics</option>
                                        <option value="physics">Physics</option>
                                    </select>
                                </div>
                                <div className="w-1/3">
                                    <select required name="class" className="input mt-1 p-3 rounded-md w-full border-gray-300 bg-white border-2 text-gray-900">
                                        <option value="">Class</option>
                                        <option value="sss1">SSS 1</option>
                                        <option value="sss2">SSS 2</option>
                                        <option value="sss3">SSS 3</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div className='flex'>
                                <div className="flex w-2/5 justify-between">
                                    <button type="button" className="btn-next w-1/7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                                        <span className='pr-1'>+ </span> Add another
                                    </button>
                                    <button type="button" className="btn-next w-2/7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Add Student</button>
                                    <button className='btn-next w-2/7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={() => setNewStudent(false)}>View Students</button>
                                    <button type="button" className="btn-next w-1/7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </Layout>
        ) :
        <Layout>
            <section className='mt-16 font-sans font-bold text-black'>
                <h1 className='mb-3'>Students</h1>
                {contents.length === 0 ? (
                    <div className='text-center'>
                        <p>No student data available</p>
                        <p>Students will appear here after they enroll in your school.</p>
                    </div>
                ) :
                    <StudentData headings={columnNames} contents={contents} />}
            </section>
        </Layout>
    );
}
export default Students;


