import React, { useState, useEffect }from 'react';
import Map from '../components/Map/Map.tsx';
import '../App.scss';
import { Input, Button, Space, Form } from "antd";

export default function Home() {
    const [data, setData] = useState(null)
    const [ip, setIp] = useState('')

    const handleInputChange = (e) => {
        setIp(e.target.value);
    }

    const handleClick = () => {
        fetch("ip_list", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ip)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then(data => {
            // Handle the response data
            console.log('Response:', data);
            setData(data)
            })
            .catch(error => {
            // Handle errors
            console.error('There was a problem with your fetch operation:', error);
            });
    };

    console.log("here")
    console.log(data)
    return (
        <div className='Container'>
            <h1>Packet Mapper</h1>
            <p>Welcome to <em>Packet Mapper</em> !</p>
            <p>This tool can give you a visual as to where your packet travels through the internet!</p>
            <Form 
                name="ipform"
            >
                <Form.Item
                >
                    <Space.Compact>
                        <Input
                            placeholder='IP Address'
                            allowClear
                            size='large'
                            value={ip}
                            onChange={handleInputChange}
                        />
                        <Button type="primary" style={{height:"40px"}} onClick={handleClick}>Submit</Button>
                    </Space.Compact>
                </Form.Item>
            </Form>
            
            
            {
                data?<Map markersData={data}/>:<p>Loading</p>
                
            }
        </div>
    );
}