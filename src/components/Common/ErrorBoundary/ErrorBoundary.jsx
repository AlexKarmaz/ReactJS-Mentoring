import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.css';

// PATTERN: HOC
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <div className='error'>Something went wrong.</div>;
        }
        return <>{this.props.children}</>;
    }
}
ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
export default ErrorBoundary;
