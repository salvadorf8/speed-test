import React from 'react';

import './timer.styles.css';

const Timer = ({ seconds }) => {
    return <div className='text-font'>{seconds}s</div>;
};

export default Timer;
