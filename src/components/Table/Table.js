import React from 'react';
import { Table, Divider, Tag } from 'antd';

function isPrimitive(test) {
	return test !== Object(test);
}

const table = (props) => {
	let list = [];
	let dataSource = [];
	Object.keys(props.data[0]).map((igKey) => {
		let singleObj = {};
		singleObj['title'] = igKey;
		singleObj['dataIndex'] = igKey;
		singleObj['key'] = igKey;
		list.push(singleObj);
	});

	console.log(dataSource);
	return <Table dataSource={props.data} columns={list} />;
};

export default table;
