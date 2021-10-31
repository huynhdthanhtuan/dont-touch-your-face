
import React from 'react';

function ContentChild ({ onIncrease }) {

    console.log('re-render ContentChild');

    return (
        <button
            onClick={onIncrease}
        >
            Count
        </button>
    );
}

export default React.memo(ContentChild);
