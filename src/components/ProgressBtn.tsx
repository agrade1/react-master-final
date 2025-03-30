import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import { IconWrap, ToggleButton } from '../styles/TimerStyles';
import { useTheme } from 'styled-components';

interface Props {
    progress: number;
    isRunning: boolean;
    onClick: () => void;
}

export const ProgressCircleButton = ({ progress, isRunning, onClick }: Props) => {
    const radius = 80;
    const stroke = 5;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress * circumference;
    const theme = useTheme();

    return (
        <ToggleButton
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={onClick}>
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke={theme.textColor}
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="#3090f7"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                    transform={`rotate(-90 ${radius} ${radius})`}
                />
            </svg>
            <IconWrap
                key={isRunning ? 'pause' : 'play'}
                initial={{ scale: 1, x: '-50%', y: '-50%' }}
                animate={{ scale: [1.5, 1], x: '-50%', y: '-50%' }}
                transition={{ duration: 0.3 }}
            >
                {isRunning ? <PauseIcon /> : <PlayIcon />}
            </IconWrap>
        </ToggleButton>
    );
};


