import React, { useEffect, useState } from 'react';
import Map from '../../components/map';
import { Input, Button, Space, Form } from "antd";
import dummydata from '../../Data/data.json';

interface IPData {
    ipaddress: string,
    longitude: number,
    latitude: number,
    city: string,
}

export default function Home() {
    const [data, setData] = useState<IPData[] | null>()
    const [ip, setIp] = useState('')

    useEffect(() => {
        setData(dummydata);
    },[])

    // const handleInputChange = (e) => {
    //     setIp(e.target.value);
    // }

    // const handleClick = () => {
    //     fetch("ip_list", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(ip)
    //     }).then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //         })
    //         .then(data => {
    //         // Handle the response data
    //         console.log('Response:', data);
    //         setData(data)
    //         })
    //         .catch(error => {
    //         // Handle errors
    //         console.error('There was a problem with your fetch operation:', error);
    //         });
    // };

    return (
        <div className='page'>
            <h1>TraceMap</h1>
            <p>Welcome to <em>TraceMap</em>!</p>
            <p>With TraceMap, you can watch how your packet hops from one router to another, all depicted on a dynamic and interact map interface.</p>
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
                            // onChange={handleInputChange}
                        />
                        <Button type="primary" style={{height:"40px"}} /*onClick={handleClick} */>Submit</Button>
                    </Space.Compact>
                </Form.Item>
            </Form>
            
            
            {
                data?<Map markersData={data}/>:<p>Loading</p>   
            }

            {/* <Map /> */}
        </div>
    );
}