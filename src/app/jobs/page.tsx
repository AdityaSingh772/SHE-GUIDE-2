"use client"
import Navbar1 from '../sections/Navbar-in';
import Footer from '../sections/Footer';
import React, { useEffect, useState } from 'react';

const LIMIT = 8;
const API_KEY = 'f6721a37-714d-4e46-8516-325fa8808117';

interface Job {
    title: string;
    description: string;
    stipend: string;
    apply_url: string;
}

const JobsPage: React.FC = () => {
    const [jobs, setJobs] = useState<Job[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await crackeddevs();
            setJobs(data);
        };
        fetchData();
    }, []);

    const crackeddevs = async (): Promise<Job[] | null> => {
        const response = await fetch(`https://api.crackeddevs.com/v1/get-jobs?limit=${LIMIT}`,
            {
                headers: {
                    'api-key': API_KEY,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log('HTTP-Error: ' + response.status);
            return null;
        }
    };

    const [expandedJobs, setExpandedJobs] = useState<Set<number>>(new Set());

    const toggleDescription = (index: number) => {
        if (expandedJobs.has(index)) {
            expandedJobs.delete(index);
        } else {
            expandedJobs.add(index);
        }
        setExpandedJobs(new Set(expandedJobs));
    };

    return (
        <>
            <Navbar1 />
            <div className="min-h-screen flex justify-center items-center  bg-black">

                <div className="p-8 bg-black text-white rounded-lg mt-8">
                    <h1 className="text-[3rem] font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#fff] via-gray-300 to-[#000] poppins text-[#fff] justify-center text-center">Work offers Currently available </h1>
                    {jobs ? (
                        <ul>
                            {jobs.map((job, index) => (
                                <li key={index} className="border-[0.2px] border-white p-4 mb-4">
                                    <p className="font-bold   text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Title: {job.title}</p>
                                    <p>
                                        Description:{' '}
                                        {job.description.length > 100 && !expandedJobs.has(index)
                                            ? job.description.slice(0, 100) + '...'
                                            : job.description}
                                        {job.description.length > 100 && (
                                            <button
                                                className="ml-2 text-blue-500"
                                                onClick={() => toggleDescription(index)}
                                            >
                                                {expandedJobs.has(index) ? 'See less' : 'See more'}
                                            </button>
                                        )}
                                    </p>
                                    {/* <p>Stipend: {job.stipend}</p> */}
                                    <a
                                        className="text-blue-500"
                                        href={job.apply_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className='bg-[#A962FF] p-2 mt-1 border-[#000] border-[0.1px] rounded-lg text-white'  >   Apply Now</button>
                                    </a>
                                </li>
                            ))}
                        </ul>

                    ) : (
                        <p>Loading...</p>
                    )}

                </div>

            </div>
            <Footer /></>
    );
};

export default JobsPage;