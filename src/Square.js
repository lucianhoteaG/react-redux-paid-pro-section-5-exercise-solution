import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default class Square extends React.Component {
    constructor (props) {
        super(props);
        this.squareElem = null;
        this.state = {
            x: 0,
            y: 0,
        };
    }

    updatePosition (e) {
        const { clientX, clientY } = e;
        const { top, left } = this.squareElem.getBoundingClientRect();
        this.setState({
            x: clientX - left,
            y: clientY - top,
        });
    }

    resetPosition () {
        this.setState({
            x: 0,
            y: 0,
        });
    }

    render () {
        let textInput;
        const size = `${this.props.size}px`;
        const style = {
            width: size,
            height: size,
            backgroundColor: this.props.initialColor,
        };
        const { x, y } = this.state;
        return (
            <div 
                className="SquareContainer"
                onMouseMove={(e) => this.updatePosition(e)}
                onMouseOut={() => this.resetPosition()}
            >
                <div style={style} className="Square" ref={(elem) => this.squareElem = elem}>
                    <div>{`${x}, ${y}`}</div>
                </div>
            </div>
        );
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
    size: PropTypes.number.isRequired,
};

Square.defaultProps = {
    initialColor: 'blue',
};