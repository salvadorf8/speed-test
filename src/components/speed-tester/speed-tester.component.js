import React from 'react';

import Timer from '../Timer/timer.component';
import { ReactComponent as OffButton } from '../../assets/button-off.svg';
import { ReactComponent as OnButton } from '../../assets/button-on.svg';
import { ReactComponent as StartButton } from '../../assets/start-button.svg';

import './speed-tester.styles.css';

class SpeedTester extends React.Component {
    state = { startGame: false, counter: 0, seconds: 0 };

    handleStartButtonClick = () => {
        this.setState({ counter: 0 });
        this.setState({ seconds: 0 });
        this.setState({ startGame: true });

        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1
            }));
        }, 1);
    };

    handleCounterClick = () => {
        this.setState(
            (prevState) => ({
                counter: prevState.counter + 1
            }),
            () => {
                if (this.state.counter === 30) {
                    clearInterval(this.interval);
                    // this.setState({ startGame: false });
                }
            }
        );
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='header-area'>
                        <div className='header-text'>SPEED TEST</div>
                        <div className='body-text'>Tap this button 30 times as quickly as you can</div>
                    </div>
                    <div className='main-area ' onClick={this.handleCounterClick}>
                        {this.state.startGame ? <OnButton /> : <OffButton />}
                    </div>
                    <div className='footer-area' onClick={this.handleStartButtonClick}>
                        {this.state.startGame ? <Timer seconds={this.state.seconds} /> : <StartButton className='start-button' />}
                        {this.state.counter}
                    </div>
                </div>
            </div>
        );
    }
}

export default SpeedTester;
