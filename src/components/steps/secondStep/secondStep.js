import React from 'react';

export const SecondStep = (props) => {
    return (
        <div className="main-wrapper second-step">
            <div className="top-toolbar">
                <button className="btn-prev" onClick={() => props.previous()}></button>
            </div>
            <div className="head-title">Hoe in-lite werkt</div>
            <div className="video-content">
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/lJd_TdXavy8" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div className="toolbar">
                <button className="btn btn-next" onClick={() => props.next()}>naar de vragen</button>
            </div>
        </div>
    );
}