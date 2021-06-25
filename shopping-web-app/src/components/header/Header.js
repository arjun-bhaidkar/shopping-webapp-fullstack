import React, { useContext } from 'react'
import './Header.css'
import 'materialize-css/dist/css/materialize.min.css'
import { withStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { Badge, AppBar } from '@material-ui/core'
import { ProductStoreContext } from '../productStoreContext/ProductStoreContext'


const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -4,
		top: 28,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))(Badge);

export default function Header() {
	const [products] = useContext(ProductStoreContext)
	return (
		<AppBar position='sticky'>
			<nav className='navbar'>
				<div className='header-container nav-wrapper white'>
					<div className='logo-container'>
						<img src={logo} className="logo left" alt="logo" />
					</div>

					<div className='title-container'>
						<Link to={{ pathname: '/' }} className='title right'>Grocery Store</Link>
					</div>

					<div className='cart-container'>
						<div title="Trends">
							<Link to={{ pathname: '/chart' }}>
								<i className='material-icons title' size={2} >
									equalizer
								</i>
							</Link>
						</div>

						<span title="Cart">
							<StyledBadge
								badgeContent={
									
									products && products.filter(
										(product) =>
											product.inCart === true
									).length
								}
								color='secondary'
							>
								<Link to={{ pathname: '/cart' }}>
									<i  className='material-icons title' size={2}>shopping_cart</i>
								</Link>
							</StyledBadge>
						</span>
					</div>
				</div>
			</nav>
		</AppBar>
	)
}