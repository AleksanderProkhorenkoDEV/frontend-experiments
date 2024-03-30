import PropTypes from 'prop-types';

const Button = ({updateCounter, counter}) =>{

    const handlerClick = () =>{
        updateCounter(counter+1)
    }

    return(
        <button onClick={handlerClick}>
            Increase counter
        </button>
    )
}

Button.propTypes = {
    updateCounter: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};


export default Button