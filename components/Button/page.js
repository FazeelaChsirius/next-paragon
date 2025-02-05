import React from 'react';

const Button = ({ children, color='primary', ...rest}) => {
    if(color === 'primary') {
        return (
            <button type="button" className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:shadow-lg hover:brightness-125 text-white font-semibold py-3 px-4 rounded-md text-medium flex justify-center items-center capitalize">
                <span className="capitalize">{children}</span>
            </button>
        )
    }
    else if(color === 'secondary') {
        return (
            <button type="button" className="bg-gradient-to-r from-purple-500 to-blue-600 hover:shadow-lg hover:brightness-125 text-white font-semibold py-4 px-4 rounded-md text-medium flex justify-center items-center capitalize">
                <span className="capitalize">{children}</span>
            </button>
        )

    }

    return (
        <button {...rest}>{children}</button>
    )

}

export default Button;