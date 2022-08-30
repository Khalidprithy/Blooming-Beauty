import React from 'react';
import { useLoading, Audio } from "@agney/react-loading";

const Loading = () => {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="50" />
    });
    return (
        <div>
            <section {...containerProps}>
                {indicatorEl} {/* renders only while loading */}
            </section>
        </div>
    );
};

export default Loading;