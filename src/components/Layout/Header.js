import { Fragment } from 'react';
import classes from './Header.module.css';
import foodImage from '../../assets/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImage} alt='a table full of delicious food!'/>
            </div>
        </Fragment>
    )
}

export default Header;