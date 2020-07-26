import React from 'react';

const DropdownContext = React.createContext({
    dropdown: false,
    dropdownHandler: () => { }
})

export default DropdownContext