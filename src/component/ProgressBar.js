import React from 'react';
import './styles/progressbar.css';

const ProgressBar = ({ progress = 80 }) => {
    const dots = [];
    const totalDots = 100;
    const remianingDots = totalDots - progress;

    for (let i = 0; i < progress; i++) {
        let colorClass = '';
        if (i <= 30) {
            colorClass = 'low-progress';
        } else if (i <= 70) {
            colorClass = 'medium-progress';
        } else {
            colorClass = 'high-progress';
        }
        dots.push(<div key={i} className={`dot ${colorClass}`} />)
    }

    for (let i = 0; i < remianingDots; i++) {
        dots.push(<div key={i} className='dot' />)
    }

    return (
        <div className='progress-bar'>
            {dots}
        </div>
    )
}

export default ProgressBar;