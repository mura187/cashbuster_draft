import React from 'react';
import './Tooltip.css';

export default ({ hoveredBar, scales }) => {
	const { xScale, yScale } = scales;
	const styles = {
		left: `${xScale(hoveredBar.title) + 200}px`,
		top: `${yScale(hoveredBar.countOfsells) + 30}px`
	};

	return (
		<div className="Tooltip" style={styles}>
			<table>
				<thead>
					<tr>
						<th colSpan="2">{hoveredBar.title}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={{ fontSize: '12px', fontWeight: 'bold' }} colSpan="1">
							Продаано товара:
						</td>
						<td style={{ fontSize: '14px', fontWeight: 'bold' }} colSpan="1">
							{hoveredBar.countOfsells} шт
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
