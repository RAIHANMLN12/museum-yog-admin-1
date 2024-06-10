import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import AddReportEvent from "../../components/AddReportEvent"
import axios from 'axios';
import React, { useState, useEffect } from "react";

const AddReportScreen = () => {

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        console.log(localStorage.getItem('token'))
        axios.get('http://localhost:3000/currentUser', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(response => {
          setCurrentUser(response.data);
          
        }
        ).catch(error => {
          console.error(error);
        }
        );
    
      }, []);
      
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar user={currentUser} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <AddReportEvent />
                </div>
            </div>
        </>
    )
}

export default AddReportScreen;