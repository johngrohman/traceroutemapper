import React, { useState, useEffect }from 'react';
import Map from '../components/Map/Map';
import '../App.scss';

export default function Home() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("ip_list", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            // Handle the response data
            console.log('Response:', data);
          })
          .catch(error => {
            // Handle errors
            console.error('There was a problem with your fetch operation:', error);
          });
    }, []);

    return (
        <div className='Container'>
            <h1>Home</h1>
            <p>Welcome to <em>Packet Mapper</em> !</p>
            <p>This tool can give you a visual as to where your packet travels through the internet!</p>
            <p>Insert an IP address below, and see tracerouting in action!</p>
            {
                (typeof data.members === "undefined") ? (
                    <p>Loading</p>
                ): (
                    <p>{data}</p>
                )}
            <p>here</p>
        </div>
    );
}