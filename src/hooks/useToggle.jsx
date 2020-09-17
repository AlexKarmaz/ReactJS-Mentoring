import React, {useState, useCallback} from 'react';

const useToggle = (initialValue=false) => {
    const [flag, setFlag] = useState(initialValue);

    const toggle = useCallback(() => {
        setFlag(!flag);
    }, [flag]);

    return [flag, toggle];
};

export default useToggle;
