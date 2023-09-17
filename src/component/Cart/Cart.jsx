import './Cart.css'
import PropTypes from 'prop-types';

const Cart = ({ selectedCourse,remaining,totalPrice,totalCredit }) => {
    
    return (
        <div>
             
            <h3>Credit Hour Remaining: {remaining} hr</h3>
            <hr />
            <h2>Course Name </h2>
            {
                selectedCourse.map((course) => (
                    <li type="1" key={course.id}>{course.Title}</li>
                ))
            }
            <hr />
            <h3>Total Credit Hours: {totalCredit} hr</h3>
            <hr />
            <h3>Total Price: {totalPrice}   USD</h3>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.object,
    remaining: PropTypes.object,
    totalPrice: PropTypes.object,
    totalCredit: PropTypes.object
}

export default Cart;