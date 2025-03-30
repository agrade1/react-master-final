import { motion, AnimatePresence } from 'framer-motion';
import { DigitDiv } from '../styles/TimerStyles';

interface FlipDigitProps {
    digit: number;
}


export const FlipDigit = ({ digit }: FlipDigitProps) => {
    return (
        <AnimatePresence mode="wait">
            <DigitDiv
                key={digit}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {digit}
            </DigitDiv>
        </AnimatePresence>
    );
};