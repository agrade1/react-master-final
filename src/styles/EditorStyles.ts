import { motion } from "framer-motion";
import styled from "styled-components";

export const EditorWrap = styled(motion.div)`
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
    width: 300px;
    padding: 2rem 1.5rem;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
`;

export const EditorTitle = styled.span`
    display: block;
    font-size: 2em;
    font-family: "Share Tech Mono", monospace;
    font-weight: 500;
    margin-bottom: 1.5rem;
`;

export const EditorInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    outline: none;

    &::placeholder {
    color: #888;
    }
`;

export const SaveButton = styled.button`
    width: 100%;
    margin-top: 1.2rem;
    padding: 0.7rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: "Share Tech Mono", monospace;
    transition: transform 0.15s ease;
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 0.9rem;
    margin-top: 0.5rem;
`;