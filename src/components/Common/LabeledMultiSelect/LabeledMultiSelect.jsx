import React, { useMemo } from 'react';
import MultiSelect from 'react-multi-select-component';

const LabeledMultiSelect = ({
    title,
    options,
    onChange,
    selected,
    overrideStrings,
}) => {
    const preselected = useMemo(
        () => selected.map((element) => ({ label: element, value: element })) || [],
        [selected]
    );

    return (
        <label>
            {title}
            <MultiSelect
                options={options}
                value={preselected}
                onChange={onChange}
                hasSelectAll={false}
                overrideStrings={overrideStrings}
                disableSearch={true}
                focusSearchOnOpen={false}
            />
        </label>
    );
};

export default LabeledMultiSelect;
