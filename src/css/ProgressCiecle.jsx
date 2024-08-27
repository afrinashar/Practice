/* eslint-disable react/prop-types */
import './progressCircle.css';

const ProgressCircle = ({ percentage }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="progress-circle">
            <svg width="100" height="100">
                <circle
                    className="circle-bg"
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                    fill="none"
                />
                <circle
                    className="circle-fg"
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#4caf50"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 0.35s' }}
                />
            </svg>
            <div className="progress-text">{percentage}%</div>
        </div>
    );
};

export default ProgressCircle;
