'use client';
import React, { useState } from 'react';
import storage from './config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Footer from '../sections/Footer';
import Link from 'next/link';

const FaceDetectionComponent = () => {
    const [gender, setGender] = useState('');
    const [videoStream, setVideoStream] = useState(null);
    const [videoRef, setVideoRef] = useState(null);


    // Assume gender is obtained from user input or some other source
    var userGender = gender; // Example value

    // Check if localStorage is supported by the browser
    if (typeof (Storage) !== "undefined") {
        // Store gender in localStorage
        localStorage.setItem("userGender", userGender);
        console.log("Gender stored successfully!");
    } else {
        console.log("Sorry, your browser does not support localStorage.");
    }

    const push = () => {
        if (gender === 'male') {
            alert('As this application is only running for female users you are not further entertained ☠️')
            window.location.href = '/';

        }
        if (gender === 'female') {

            window.location.href = '/';

        }
    }

    push();

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setVideoStream(stream);
            if (videoRef) {
                videoRef.srcObject = stream;
                videoRef.play();
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopCamera = () => {
        if (videoStream) {
            videoStream.getTracks().forEach(track => track.stop());
            setVideoStream(null);
        }
    };

    const capturePhoto = async () => {
        if (videoRef) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.videoWidth;
            canvas.height = videoRef.videoHeight;
            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(videoRef, 0, 0, canvas.width, canvas.height);
                const dataURL = canvas.toDataURL('image/jpeg');
                const base64Data = dataURL.split(',')[1];
                try {
                    const downloadURL = await uploadImage(base64Data, 'captured_image.jpg');
                    sendPhotoToAPI(downloadURL);
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }
        }
    };

    const uploadImage = async (base64Image, fileName) => {
        const byteCharacters = atob(base64Image);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/jpeg' });

        const storageRef = ref(storage, fileName);
        const snapshot = await uploadBytes(storageRef, blob);
        return getDownloadURL(snapshot.ref);
    };

    const sendPhotoToAPI = async (dataURL) => {
        const apiUrl = 'https://face-detection6.p.rapidapi.com/img/face-age-gender';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '88ab405972mshf3d13f4a87952abp146749jsnead0ffc85a91',
                'X-RapidAPI-Host': 'face-detection6.p.rapidapi.com'
            },
            body: JSON.stringify({
                url: dataURL,
                accuracy_boost: 3
            })
        };

        try {
            const response = await fetch(apiUrl, options);
            const resultText = await response.text();
            const resultObject = JSON.parse(resultText);
            const extractedGender = resultObject.detected_faces?.[0]?.Gender?.Gender || 'Gender not detected';
            setGender(extractedGender);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='bg-black'>
            <h2 className='poppins justify-center text-center text-[3rem] text-transparent bg-clip-text bg-gradient-to-b from-[#fff] via-gray-300 to-[#000] poppins '>Gender Identification</h2>
            <div className='bg-transparent border border-purple-500  text-white py-4 poppins text mx-auto   px-4 w-[40%]  rounded-lg'>
                <video ref={ref => setVideoRef(ref)} width="400" height="300" autoPlay playsInline className='flex justify-center' />
                <div className='poppins text-white flex flex-row justify-evenly'>
                    <button onClick={startCamera} className='text-[gray]'>Start Camera</button>
                    <button onClick={stopCamera} className='text-[white]'>Stop Camera</button>
                    <button onClick={capturePhoto} className='text-[#A962FF]'>Capture Photo</button>
                </div>
            </div>
            <div className='text-[#fff] my-8 poppins text-center text-[2rem]'>
                <h2><span className='text-[#A962FF]'>Gender:</span> {gender}</h2>

            </div>

            <Footer />
        </div>
    );
};

export default FaceDetectionComponent;
