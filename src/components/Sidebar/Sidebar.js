import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const Sider = Layout.Sider;
class Sidebar extends Component {
	render() {
		return (
			<Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
				<div className="logo" />
				<Menu theme="dark" mode="inline">
					<Menu.Item key="dashboard">
						<NavLink to="/orders">
							<Icon type="area-chart" />
							<span>Заказы</span>
						</NavLink>
					</Menu.Item>
					<Menu.Item key="clients">
						<NavLink to="/clients">
							<Icon type="team" />
							<span>Клиенты</span>
						</NavLink>
					</Menu.Item>
					<Menu.Item key="employees">
						<NavLink to="/orders">
							<Icon type="idcard" />
							<span>Сотрудники</span>
						</NavLink>
					</Menu.Item>
					<Menu.Item key="stats">
						<NavLink to="/cli">
							<Icon type="appstore-o" />
							<span>Статистика</span>
						</NavLink>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default Sidebar;
