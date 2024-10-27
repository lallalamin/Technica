// src/dashboard/PieChart.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function PieChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 300)
      .attr('height', 300)
      .append('g')
      .attr('transform', 'translate(150,150)');

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(100);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i))
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    // Cleanup function to avoid duplicate charts
    return () => svg.selectAll('*').remove();
  }, [data]);

  return <svg ref={svgRef}></svg>;
}

export default PieChart;
