import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<div className='logo'>Womanlike</div>
		</NavMenu>
		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/commnunity' activeStyle>
			Quiz
		</NavLink>
		<NavLink to='/quiz' activeStyle>
			Community
		</NavLink>
		<NavLink to='/faq' activeStyle>
			FAQ
		</NavLink>
        </NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
