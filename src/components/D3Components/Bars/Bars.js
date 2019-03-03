import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

export default class Bars extends Component {
	constructor(props) {
		super(props);

		this.colorScale = scaleLinear()
			.domain([ 0, this.props.maxValue ])
			.range([ '#80cbc4', '#80cbc4;' ])
			.interpolate(interpolateLab);
	}

	render() {
		const { scales, margins, data, svgDimensions } = this.props;
		const { xScale, yScale } = scales;
		const { height } = svgDimensions;

		const bars = data.map((datum) => (
			<rect
				key={datum.title}
				x={xScale(datum.title)}
				y={yScale(datum.countOfsells)}
				height={height - margins.bottom - scales.yScale(datum.countOfsells)}
				width={xScale.bandwidth()}
				fill={this.colorScale(datum.countOfsells)}
				onMouseOver={() => this.props.onMouseOverCallback(datum)}
				onMouseOut={() => this.props.onMouseOutCallback(null)}
			/>
		));

		return <g>{bars}</g>;
	}
}
