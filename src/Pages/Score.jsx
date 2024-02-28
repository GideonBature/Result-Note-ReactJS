import {React, useState} from 'react';
import Layout from '../components/Layout.jsx';
import StudentData from '../components/students/StudentData.jsx';


function Scores() {
    const [newScore, setNewScore] = useState(true)

    const columnNames = [
        'Name',
        'Student ID',
        'Class',
        'Subject',
        'Score (%)',
        'Bulk',
    ];

    const contents = [
        {
            name: 'Gideon B',
            id: 3245,
            class: 'SS2',
            subject: 'Mathematics',
            score: 90,
            bulk: true,
        },
        {
            name: 'Elgibbor C',
            id: 3246,
            class: 'SS3',
            subject: 'Mathematics',
            score: 80,
            bulk: false,
        },
        {
            name: 'Caleb O',
            id: 3247,
            class: 'SS1',
            subject: 'English',
            score: 70,
            bulk: false,
        }
    ]

    return (
        newScore ? (
            <Layout>
                <section className='mt-16 font-sans font-bold text-black'>
                    <h1 className='mb-3'>Scores</h1>
                    
                    <div>
                        <p className="mt-1 text-left text-2xl text-gray-500 font-kumbh px-20">Add Scores</p>
                        <form className="space-y-6 mx-auto text-center px-20">
                            <div className='flex justify-start items-end'>
                                <div className="w-1/3 mr-8">
                                    <select required name="subject" className="input mt-1 p-3 rounded-md w-full border-gray-300 bg-white border-2 text-gray-900">
                                        <option value="">Subject</option>
                                        <option value="english">English</option>
                                        <option value="mathematics">Mathematics</option>
                                        <option value="physics">Physics</option>
                                    </select>
                                </div>
                                <div className="w-1/3 mr-8">
                                    <select required name="class" className="input mt-1 p-3 rounded-md w-full border-gray-300 bg-white border-2 text-gray-900">
                                        <option value="">Class</option>
                                        <option value="sss1">SSS 1</option>
                                        <option value="sss2">SSS 2</option>
                                        <option value="sss3">SSS 3</option>
                                    </select>
                                </div>
                                <div className="w-1/3 mr-8">
                                    <select required name="student" className="input mt-1 p-3 rounded-md w-full border-gray-300 bg-white border-2 text-gray-900">
                                        <option value="">Student</option>
                                        <option value="123">Caleb O</option>
                                        <option value="234">Gideon B</option>
                                        <option value="345">Elgibbor C</option>
                                    </select>
                                </div>
                                <div className="w-1/3">
                                    <input required type="number" name="score" className="input mt-1 p-3 w-full rounded-md border-gray-300 bg-white border-2 text-gray-900" placeholder='Enter score' />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button type="button" className="btn-next w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                                <button className='btn-next w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={() => setNewScore(false)}>View Scores</button>
                                <button type="button" className="btn-next w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btnColor hover:bg-btnHoverColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Cancel</button>
                            </div>
                        </form>
                    </div>
                </section>
            </Layout>
        ) :
        <Layout>
            <section className='mt-16 font-sans font-bold text-black'>
                <h1 className='mb-3'>Scores</h1>
                    {contents.length === 0 ? (
                        <div className='text-center'>
                            <p>No score data available</p>
                            <p>Scores will appear here after they enroll in your school.</p>
                        </div>
                    ) :
                        <StudentData headings={columnNames} contents={contents} profile={false}/>}
            </section>
        </Layout>
    );
}
export default Scores;


