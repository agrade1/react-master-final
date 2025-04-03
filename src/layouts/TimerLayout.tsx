import styled from "styled-components";
import { FlipDigit } from "../components/FlipDigit";
import { DigitDiv, FlipWrap, PopupBg, ScoreList, ScoreListWrap, ScoreText, SetTimer, Title } from "../styles/TimerStyles";
import { useTimer } from "../hooks/useTimer";
import { ProgressCircleButton } from "../components/ProgressBtn";
import { TimeEditor } from "../components/TimeEditor";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

function Timer() {
    const {
        secondsLeft,
        defaultTime,
        isRunning,
        toggle,
        pause,
        roundCount,
        goalCount,
    } = useTimer();

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    const [mTens, mOnes] = String(minutes).padStart(2, '0').split('').map(Number);
    const [sTens, sOnes] = String(seconds).padStart(2, '0').split('').map(Number);

    const progress = 1 - secondsLeft / defaultTime;

    const [popupActive, setPopupActive] = useState(false);

    return (
        <>
            <Title>Pomodoro</Title>
            <FlipWrap>
                <FlipDigit digit={mTens} />
                <FlipDigit digit={mOnes} />
                <DigitDiv>:</DigitDiv>
                <FlipDigit digit={sTens} />
                <FlipDigit digit={sOnes} />
            </FlipWrap>
            <ProgressCircleButton
                progress={progress}
                isRunning={isRunning}
                onClick={toggle}
            />
            <ScoreListWrap>
                <ScoreList>
                    <ScoreText>{roundCount}/4</ScoreText>
                    <ScoreText>Round</ScoreText>
                </ScoreList>
                <ScoreList>
                    <ScoreText>{goalCount}/12</ScoreText>
                    <ScoreText>Goal</ScoreText>
                </ScoreList>
            </ScoreListWrap>
            <AnimatePresence mode="wait">
            <SetTimer whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} layoutId="circle" onClick={() => { pause(); setPopupActive(true)}}>Set Timer</SetTimer>
            {popupActive ? <PopupBg>
                <TimeEditor layoutId="circle" onClose={() => setPopupActive(false)}/>
            </PopupBg> : null}
            </AnimatePresence>
            <ThemeSwitcher />
        </>
    )
}





export default Timer;
