import React from 'react';

interface Props {
    asOverlay?: boolean;
}

export const LoadingSpinner: React.FC<Props> = ({asOverlay}) => {

    return (
        <div className={`${asOverlay && 'loading-spinner__overlay'}`}>
            <div className="lds-dual-ring"></div>
        </div>
    );

};

export default LoadingSpinner;
