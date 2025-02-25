import { IconType } from 'react-icons';
import React from 'react';

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick
}) => {
    return (
        <button 
            aria-label="Social Button" 
            onClick={onClick}
            type='button'
            className='
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-white
                px-4
                py-2
                text-teal-600
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                hover:bg-gray-50
                focus:outline-offset-0
            '
        >
            <Icon />
        </button>
    );
}

export default AuthSocialButton;