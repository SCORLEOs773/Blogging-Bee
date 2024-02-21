import React, { Component } from 'react';
// import Error404 from './components/Error404';
import Error404 from './Error404';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <Error404 />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
