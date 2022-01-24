import './chart.css'
import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart({title, data, dataKey, grid}) {
    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
              {/* 400w 100h */}
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <Line type="monotone" dataKey={dataKey} />
                    {/* <YAxis dataKey="" /> */}
                    <Tooltip />
                   {grid &&  <CartesianGrid stroke='#eeefdf' strokeDasharray='5 5' /> }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
