import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from '../Axes/Axes';
import Bars from '../Bars/Bars';
import data from '../../../constants/productBarChart';
import Tooltip from '../Tooltip/Tooltip';
import './BarChart.css';

class BarChart extends Component {
	constructor(props) {
		super(props);
		this.xScale = scaleBand();
		this.yScale = scaleLinear();
		this.state = {
			hoveredBar: null
		};
	}
	render() {
		const margins = { top: 50, right: 20, bottom: 100, left: 50 };
		const svgDimensions = { width: 900, height: 500 };

		const maxValue = Math.max(...data.map((d) => d.countOfsells));
		console.log(maxValue);
		// console.log(data.countOfsells);
		// scaleBand type
		const xScale = this.xScale
			.padding(0.5)
			// scaleBand domain should be an array of specific values
			// in our case, we want to use movie titles
			.domain(data.map((d) => d.title))
			.range([ margins.left, svgDimensions.width - margins.right ]);

		// scaleLinear type
		const yScale = this.yScale
			// scaleLinear domain required at least two values, min and max
			.domain([ 0, maxValue ])
			.range([ svgDimensions.height - margins.bottom, margins.top ]);

		return (
			<div style={{ position: 'relative', marginTop: '40px' }}>
				<svg className="BarChart" width={svgDimensions.width} height={svgDimensions.height}>
					<Axes scales={{ xScale, yScale }} margins={margins} svgDimensions={svgDimensions} />
					<Bars
						scales={{ xScale, yScale }}
						margins={margins}
						data={data}
						maxValue={maxValue}
						svgDimensions={svgDimensions}
						onMouseOverCallback={(datum) => this.setState({ hoveredBar: datum })}
						onMouseOutCallback={(datum) => this.setState({ hoveredBar: null })}
					/>
				</svg>
				{this.state.hoveredBar ? (
					<Tooltip hoveredBar={this.state.hoveredBar} scales={{ xScale, yScale }} />
				) : null}
			</div>
		);
	}
}

export default BarChart;
