// src/dashboard/PieChart.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function PieChart({ data }) {
  const svgRef = useRef();
  const colorScale = d3.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3.schemeCategory10);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 300)
      .attr('height', 300)
      .append('g')
      .attr('transform', 'translate(150,150)'); // Center the chart

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(100);

    // Tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('padding', '6px')
      .style('background', 'rgba(0,0,0,0.7)')
      .style('color', '#fff')
      .style('border-radius', '4px')
      .style('pointer-events', 'none')
      .style('display', 'none');

    // Create the slices
    svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => colorScale(d.data.name))
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .on('mouseover', (event, d) => {
        const percentage = ((d.data.value / d3.sum(data, d => d.value)) * 100).toFixed(2);
        tooltip
          .style('display', 'block')
          .html(`${d.data.name}: ${percentage}%`);
      })
      .on('mousemove', (event) => {
        tooltip
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY + 10) + 'px');
      })
      .on('mouseout', () => {
        tooltip.style('display', 'none');
      });

    // Cleanup function to avoid duplicate charts
    return () => {
      svg.selectAll('*').remove();
      tooltip.remove();
    };
  }, [data, colorScale]);

  // Calculate totals for the report
  const reportData = data.map(item => ({
    name: item.name,
    amount: item.value,
  }));

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg ref={svgRef}></svg>
      <div style={{ marginLeft: '20px' }}>
        <h4>Category</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <div style={{
                width: '15px',
                height: '15px',
                backgroundColor: colorScale(item.name),
                marginRight: '10px'
              }}></div>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <h4>Report</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {reportData.map((item, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>
              <span style={{ fontWeight: 'bold' }}>{item.name}:</span> ${item.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PieChart;
