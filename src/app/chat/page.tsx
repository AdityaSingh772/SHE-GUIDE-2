"use client";
import React, { useState } from "react";
import { io } from "socket.io-client";
import ChatPage from "@/app/chat/components/page";
import styles from "./page.module.css";

export default function Home() {
    const [showChat, setShowChat] = useState(false);
    const [userName, setUserName] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
    const [roomId, setRoomId] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("Hindi");

    const socket = io("http://localhost:3001");

    const handleJoin = () => {
        if (userName !== "" && roomId !== "") {
            console.log(userName, "userName", roomId, "roomId");
            socket.emit("join_room", roomId);
            setShowSpinner(true);
            setTimeout(() => {
                setShowChat(true);
                setShowSpinner(false);
            }, 4000);
        } else {
            alert("Please fill in Username and Room Id");
        }
    };


    return (
        <div>
            <div className={styles.main_div} style={{ display: showChat ? "none" : "" }}>
                <input
                    className={styles.main_input}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    disabled={showSpinner}
                />
                <input
                    className={styles.main_input}
                    type="text"
                    placeholder="Room id"
                    onChange={(e) => setRoomId(e.target.value)}
                    disabled={showSpinner}
                />
                <button className={styles.main_button} onClick={handleJoin}>
                    {!showSpinner ? (
                        "Join"
                    ) : (
                        <div className={styles.loading_spinner}></div>
                    )}
                </button>
            </div>
            <div style={{ display: !showChat ? "none" : "" }}>
                <ChatPage socket={socket} roomId={roomId} username={userName} language={selectedLanguage} />
            </div>
            <div>
                <p>Select Language:</p>
                <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
                    <option value="Hindi">Hindi</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Japanese">Japanese</option>
                    <option value="German">German</option>
                    {/* Add more language options as needed */}
                </select>
            </div>
        </div>
    );
}