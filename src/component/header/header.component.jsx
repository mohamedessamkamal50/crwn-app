import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../card-icon/cart-icon.component';
import { connect } from 'react-redux';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';
 
const Header = ({ currentUser, hidden }) => (

<div className='header'>

    <Link className='logo-container' to="/">
        <Logo className='logo' />
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        {currentUser ?(
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        ):(
            <Link className='option' to='/sign'>
                SING IN
            </Link>
         )}
         <CartIcon />
    </div>
    {
        hidden ? null:
            <CardDropdown />
        }
</div>

)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);