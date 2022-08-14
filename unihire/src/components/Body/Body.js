import React from 'react';
import './Body.css'
import Graph from '../Graph/Graph.js';
import Table from '../Table/Table.js';

function Body() {
  return (
    <div className="hero">
        <Graph />
        <Table />
    </div>
  )
}

export default Body