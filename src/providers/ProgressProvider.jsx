'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressProvider = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#21d6ef"
                options={{ showSpinner: true }}
                shallowRouting
            />
        </>
    );
};

export default ProgressProvider;