import {React, useState} from 'react';
import Layout from '../components/Layout';
import StudentData from '../components/students/StudentData';

function Teachers() {
    const [newTeacher, setNewTeacher] = useState(true)

    const columnNames = [
        'Name',
        'Subject',
        'Class',
        'Email Address',
        'Gender',
    ];

    const contents = [
        {
            details: {
                name: 'Gideon B',
                src: '/src/assets/gideon.jpeg'
            },
            subject: 'Mathematics',
            class: 'SS2',
            email: 'caleb@gmail.com',
            gender: 'Male',
            id: 3245,
        },
        {
            details: {
                name: 'Elgibbor C',
                src: '/src/assets/elgibbor.png'
            },
            subject: 'Mathematics',
            class: 'SS3',
            email: 'elgibbor@gmail.com',
            gender: 'Male',
            id: 3246,
        },
        {
            details: {
                name: 'Caleb O',
                src: '/src/assets/caleb.jpeg'
            },
            subject: 'Mathematics',
            class: 'SS1',
            email: 'caleb@gmail.com',
            gender: 'Female',
            id: 3247,
        }
    ]

    return (
        newTeacher ? (
            <Layout>
                <section className='mt-16 font-sans font-bold text-black'>
                    <h1 className='mb-3'>Teachers</h1>
                    
                    <div>
                        <p className="mt-1 text-left text-2xl text-gray-500 font-kumbh px-20">Add Teachers</p>
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
                                    <button type="button" className="btn-next w-2/7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Add Teacher</button>
                                    <button className='btn-next w-2/7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={() => setNewTeacher(false)}>View Teachers</button>
                                    <button type="button" className="btn-next w-1/7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </Layout>
        ) :
        (<Layout>
            <section className='mt-16 font-sans font-bold text-black'>
                <h1 className='mb-3'>Teachers</h1>
                    {contents.length === 0 ? (
                        <div className='text-center'>
                            <p>No teachers at this time</p>
                            <p>Teachers will appear here after you add them to your school.</p>
                        </div>
                    ) :
                        <StudentData headings={columnNames} contents={contents} profile={true} />}
            </section>
        </Layout>)
    );
}

export default Teachers;
