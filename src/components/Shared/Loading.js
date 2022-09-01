import React from 'react';
import { useLoading, Audio } from "@agney/react-loading";

const Loading = () => {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="100" />
    });
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <section  {...containerProps}>
                {indicatorEl}
            </section>
        </div>
    );
};

export default Loading;