import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    font-family: "Share Tech Mono", monospace;
    margin-bottom: 40px;
`
export const FlipWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const DigitDiv = styled(motion.div)`
    font-size: 4em;
    display: inline-block;
    width: 3rem;
    text-align: center;
    perspective: 1000px;
    background-color: ${({ theme }) => theme.bgColor};
    margin-bottom: 50px;
`

export const ToggleButton = styled(motion.button)`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 40px;
`;

export const IconWrap = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.bgColor};
  border-radius: 999px;

  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.textColor};
  }
`;


export const ScoreListWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin-bottom: 40px;
`
export const ScoreList = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`
export const ScoreText = styled.span`
    display: block;
    font-size: 1.8em;
`
export const SetTimer = styled(motion.button)`
    display: block;
    width: 400px;
    text-align: center;
    background-color:${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
    font-size: 3em;
    padding: 10px 0;
    border-radius: 10px;
    font-family: "Share Tech Mono", monospace;
    cursor: pointer;
`
export const PopupBg = styled(motion.div)`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`
