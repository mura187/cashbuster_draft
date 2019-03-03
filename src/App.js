import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'antd/lib/button';
import { Layout, Menu, Icon } from 'antd';
import STATIC_DATA_TABLE from './constants/mainTable';
import Table from './components/Table/Table';
import Sidebar from './components/Sidebar/Sidebar';
import BarChart from './components/D3Components/BarChart/BartChart';

import Aux from './hoc/Aux';
import d3 from 'd3';
import Chart from './components/chart';

const { Header, Content, Footer, Sider } = Layout;

const persons = STATIC_DATA_TABLE.map((object) => {
	return {
		idPerson: object.idPerson,
		name: object.name,
		age: object.age,
		tel: object.tel
	};
});
const products = [].concat.apply(
	[],
	STATIC_DATA_TABLE.map((object) => {
		return object.checks.products.map((product) => {
			console.log(product.productName);
			return {
				idPerson: object.idPerson,
				product: product.productName,
				cashback: product.cashback
			};
		});
	})
);

const tableValues = products.map((product) => {
	let idPerson = product.idPerson;
	return Object.assign(
		{},
		product,
		persons.find((person) => {
			console.log(person.idPerson);
			return idPerson === person.idPerson;
		})
	);
});
console.log(tableValues);
var dataset = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var el = d3.select('#d3Ex').selectAll('p').data(dataset).enter().append('p').text('Suka');
console.log(el, 'el');
class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Sidebar />
					<Layout style={{ marginLeft: 200 }}>
						<Header style={{ background: '#fff', padding: 0 }} />
						<Content style={{ margin: '24px 16px 0' }}>
							<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
								<Table data={tableValues} />
							</div>
						</Content>
						<Content>
							<BarChart />
						</Content>
						<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
					</Layout>
				</Layout>
				<div className="d3Ex">
					<Chart data={[ 5, 10, 1, 3 ]} size={[ 500, 500 ]} />
				</div>
			</div>
		);
	}
}

export default App;
