"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from React Icons
import Footer from '../../sections/Footer'

const AllUsersPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/pending/get');
                setUsers(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleEditPendingStatus = async (userId) => {
        try {
            // Send a PUT request to your backend API endpoint to update the user's pending status
            const response = await axios.put(`http://localhost:5000/api/users/${userId}/status`, { isReviewed: 'mentor' });

            // Check if the request was successful
            if (response.status === 200) {
                console.log('Pending status updated successfully for user:', userId);
                // Optionally, you can update the UI or perform any other actions after a successful update
            } else {
                // Handle errors or unexpected responses
                console.error('Failed to update pending status for user:', userId);
            }
        } catch (error) {
            console.error('Error updating pending status:', error);
            // Handle errors that occur during the request
        }
    };


    return (
        <div className=' h-full bg-black flex flex-col '>
            <h2 className='flex justify-center text-[3rem] text-transparent bg-clip-text bg-gradient-to-b from-[#fff] via-gray-300 to-[#000] poppins'>All Unreviewed Mentees</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map(user => {
                        // Check if the user's applyingAs field is 'mentor'
                        if (user.applyingAs === 'mentee') {
                            return (
                                <div className="flex flex-row justify-evenly" key={user._id}>
                                    <div className='bg-balck border-[0.2rem] border-white rounded-lg w-[80%]  justify-evenly m-auto mt-8rem mb-6 text-[gray]'>
                                        <li key={user._id}>
                                            <div className="flex flex-row">
                                                <div className='flex-col ml-6 w-full justify-start'>
                                                    <div>
                                                        <strong className='poppins text-[#A962FF] text-[1rem]'>Username:</strong>{user.username}
                                                    </div>
                                                    <div>
                                                        <strong className='poppins text-[#A962FF] text-[1rem] '>Email:</strong> {user.email}
                                                    </div>
                                                </div>
                                                {/* Button to edit pending status */}
                                                <div className='flex flex-col justify-center gap-4 my-2'>
                                                    <div className="flex flex-row gap-4">
                                                        <a href={user.linkedinLink} target="_blank" rel="noopener noreferrer">
                                                            <FaLinkedin />
                                                        </a>
                                                        <a href={user.githubLink} target="_blank" rel="noopener noreferrer">
                                                            <FaGithub />
                                                        </a>
                                                    </div>
                                                    {/* Display GitHub link as icon */}
                                                    <button onClick={() => handleEditPendingStatus(user._id)} className='p-2 poppins rounded-lg text-[#fff] bg-[#A962FF]'>Approve</button>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            );
                        } else {
                            return null; // Return null for users who are not mentors
                        }
                    })}




                </ul>
            )}
            <Footer />
        </div>
    );
};

export default AllUsersPage;
