import React, { Component } from 'react';
//import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd'; 
const Sider = Layout.Sider;
class Sidebar extends Component {
	render() {
		return (
			<Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
				<div className="logo" />
				<Menu theme="dark" mode="inline">
					<Menu.Item key="dashboard">
							<Icon type="area-chart" />
							<span>Заказы</span>
						
					</Menu.Item>
					<Menu.Item key="clients">
							<Icon type="team" />
							<span>Клиенты</span>
						
					</Menu.Item>
					<Menu.Item key="employees">
							<Icon type="idcard" />
							<span>Сотрудники</span>
						
					</Menu.Item>
					<Menu.Item key="stats">
							<Icon type="appstore-o" />
							<span>Статистика</span>
						
					</Menu.Item>
				</Menu>  
			</Sider> 
		);
	}
}

export default Sidebar;
