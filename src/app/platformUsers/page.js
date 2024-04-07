'use client';
import React, { useEffect, useState } from 'react';
import Review from './review';
import MenteePage from './MenteePage'; // Import MenteePage component
import MentorPage from './MentorPage'; // Import MentorPage component

function Page() {
    const { user, error, isLoading } = useUser();
    const [applicant, setApplicant] = useState(null); // State to store the applicant data

    useEffect(() => {
        // Function to fetch applicant data
        const findUserByEmail = async () => {
            try {
                const response = await fetch(`/api/users?email=${encodeURIComponent(user?.email)}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setApplicant(data); // Update applicant state with fetched data
            } catch (error) {
                console.error('Error finding user by email:', error);
            }
        };

        findUserByEmail(); // Call the function to fetch applicant data
    }, [user]); // Dependency array to ensure useEffect runs when user changes

    // Conditional rendering based on applicant's review status and applying role
    if (isLoading) {
        return <div>Loading...</div>; // Render loading indicator while data is being fetched
    } else if (error) {
        return <div>Error: {error.message}</div>; // Render error message if an error occurred
    } else if (!applicant) {
        return null; // Do not render anything if applicant data is not available yet
    } else if (applicant.isReviewed === 'pending') {
        return <Review applicant={applicant} />; // Render Review component if applicant's review status is pending
    } else if (applicant.applyingAs === 'mentee') {
        return <MenteePage applicant={applicant} />; // Render MenteePage component if applicant is a mentee
    } else if (applicant.applyingAs === 'mentor') {
        return <MentorPage applicant={applicant} />; // Render MentorPage component if applicant is a mentor
    } else {
        return null; // Handle other cases or render nothing
    }
}

export default Page;
