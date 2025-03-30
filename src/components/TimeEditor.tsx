import { useSetAtom } from 'jotai';
import { defaultTimeAtom, secondsLeftAtom, isRunningAtom } from '../atoms/timerAtoms';
import { useForm } from 'react-hook-form';
import { EditorInput, EditorTitle, EditorWrap, ErrorText, SaveButton } from '../styles/EditorStyles';

interface TimeEditorProps {
    layoutId?: string;
    onClose: () => void;
}

export const TimeEditor = ({ layoutId, onClose }: TimeEditorProps) => {
    const setDefaultTime = useSetAtom(defaultTimeAtom);
    const setSecondsLeft = useSetAtom(secondsLeftAtom);
    const setRunning = useSetAtom(isRunningAtom);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<{ minutes: string }>();

    const onSubmit = ({ minutes }: { minutes: string }) => {
        const mins = parseInt(minutes);
        if (!isNaN(mins) && mins > 0) {
            const seconds = mins * 60;
            setRunning(false);
            setDefaultTime(seconds);
            setSecondsLeft(seconds);
            onClose();
        }
    };

    return (
        <EditorWrap
            layoutId={layoutId}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <EditorTitle>SET TIME</EditorTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <EditorInput
                    placeholder="분 입력"
                    {...register('minutes', {
                        required: '시간을 입력해주세요',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: '숫자만 입력 가능합니다',
                        },
                    })}
                />
                {errors.minutes && (
                    <ErrorText>{errors.minutes.message}</ErrorText>
                )}

                <SaveButton type="submit">Save</SaveButton>
            </form>
        </EditorWrap>
    );
};


