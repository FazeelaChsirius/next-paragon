import React from 'react';

const Button = ({ children, color='primary', ...rest}) => {
    if(color === 'primary') {
        return (
            <button type="button" className="bg-gradient-to-r from-purple-800 to-indigo-800 hover:shadow-lg hover:brightness-125 text-white font-semibold py-3 px-4 rounded-md text-medium flex justify-center items-center capitalize">
                <span className="capitalize">{children}</span>
            </button>
        )
    }

    return (
        <button {...rest}>{children}</button>
    )

}

export default Button;