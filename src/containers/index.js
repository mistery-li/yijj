import React from 'react';
import Navigate from '../components/Navigate/index';
import Carousel from '../components/Carousel/index';
import '../components/Carousel/index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigate />
                <Carousel />
            </div>
        )
    }
}

export default App;