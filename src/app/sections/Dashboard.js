import { useUser } from '@auth0/nextjs-auth0/client';
import { BackgroundBeams } from '../components/ui/BackgroundBeams';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaBrain } from 'react-icons/fa';

export default function Dashboard() {
    const { user, error, isLoading } = useUser();

    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [gender, setGender] = useState('');
    const [domain, setDomain] = useState('');
    const [clicked, setClicked] = useState(false);
    const [role, setRole] = useState('');


    const handleShow = () => {
        setClicked(true);
    }

    const genderLocalstorage = localStorage.getItem('userGender');
    const mentor = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users', {
                githubLink: link1,
                linkedinLink: link2,
                username: user.name,
                email: user.email,
                gender,
                applyingAs: 'mentor',

            });
            alert('Application submitted successfully!');
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Error submitting application. Please try again later.');
        }
    };


    const applicant = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users', {
                githubLink: link1,
                linkedinLink: link2,
                username: user.name,
                email: user.email,

                role: role,

            });
            alert('Application submitted successfully!');
            window.location.href = '/mentee';

        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Error submitting application. Please try again later.');
        }
    };


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div>
            <main className='bg-[#000] pt-8 sm:pb-0 pb-[4rem] relative' id='#'>
                <div className="flex h-[48rem] sm:h-[44rem] md:h-[39rem] lg:h-[36rem] xl:h-[38rem] justify-center w-full bg-red flex-col md:flex-row">
                    <div className="h-full w-full flex flex-col justify-center hero-txt mt-[8rem] sm:mt-[4rem] md:mt-0 hero1">
                        <div className="flex flex-row w-[60%] m-auto gap-1 justify-center">
                            <div className="text-[1.6rem] textJS sm:text-[2.8rem] poppins flex flex-col ">
                                <span style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                                    {user.name}
                                </span>
                                <div className="buttons flex flex-row gap-6 mb-[1rem] roboto text-[#FFD1E3]">
                                    <p className="text-gray-400 text-lg mt-6 mb-6 lg:text-xl">
                                        <span className='text-[#A962FF]'>Gmail:</span> {user.email}
                                    </p>
                                </div>
                                <div className='flex justify-center  z-40 mb-8 w-full text-[1rem]'>
                                    {genderLocalstorage === 'male' && (
                                        <button className="relative bg-transparent border bg-purple-500 hover:bg-purple-900 text-white py-4 poppins text px-4 w-[80%] rounded-lg" onClick={applicant}>
                                            Submit Application
                                        </button>
                                    )}
                                </div>

                            </div>
                        </div>

                    </div>
                    <BackgroundBeams />
                    <div className='mt-8 z-40'>
                        <form className="bg-[#333] shadow-glow poppins border-[#A962FF] border pb-[2rem] p-6 mt-6 h-[95%] m-auto mx-auto w-[80%] rounded-lg border-1 border-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                            <label htmlFor="role" className='text-[#A962FF] font-bold text-[1.4rem]'>Want to become a:</label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="w-full border p-2 mb-4 rounded-lg bg-[#333] bg-opacity-5 poppins text-[#fff]"
                            >
                                <option className='bg-black' value="">Mentor/Mentee</option>
                                <option className='bg-black' value="mentor">Mentor</option>
                                <option className='bg-black' value="mentee">Mentee</option>

                            </select>
                            <label htmlFor="domain" className='text-[#A962FF] font-bold text-[1.4rem]'>Domain:</label>
                            <select
                                id="Domain"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                required
                                className="w-full border p-2 mb-4 rounded-lg bg-[#333] bg-opacity-5 text-[#fff]"
                            >
                                <option className='bg-black' value="">Select</option>
                                <option className='bg-black' value="Software development">Software Development</option>
                                <option className='bg-black' value="Marketing">Marketing</option>
                                <option className='bg-black' value="Businessr">eCommerce</option>
                                <option className='bg-black' value="Banking">Banking</option>
                                <option className='bg-black' value="Communication">Communication Skills</option>
                                <option className='bg-black' value="Healthcare">Healthcare</option>
                                <option className='bg-black' value="other">Other</option>
                            </select>
                            <label htmlFor="linkedin" className='text-[#A962FF] font-bold text-[1.4rem]'>LinkedIn Profile:</label>
                            <input
                                type="text"
                                id="link1"
                                value={link1}
                                onChange={(e) => setLink1(e.target.value)}
                                required
                                className="w-full border p-2 mb-4 rounded-lg bg-[#333] bg-opacity-5 text-[#fff]"
                            />
                            <label htmlFor="github" className='text-[#A962FF] font-bold text-[1.4rem]'>GitHub Profile:</label>
                            <input
                                type="text"
                                id="link2"
                                value={link2}
                                onChange={(e) => setLink2(e.target.value)}
                                required
                                className="w-full border p-2 mb-4 rounded-lg bg-[#333] bg-opacity-5 text-[#fff]"
                            />
                            <div className='flex justify-center'>
                                <button
                                    required

                                    className="relative bg-transparent border border-purple-500 text-white py-4 poppins text px-4 w-[80%] rounded-lg"
                                >
                                    <Link href='/face'><span className='text-[#A962FF] text-[2rem]'>Ai  </span> based Gender Identification</Link>
                                    <span className="absolute top-0 right-0 text-[#A962FF] mt-2 mr-2">
                                        <FaBrain /> {/* AI icon */}
                                    </span>
                                </button >
                            </div>






                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
