'use client';

import clsx from 'clsx';
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';
import React, { FC } from 'react';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean;
    color?: string;
}

const Input: FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled,
    color = 'text-gray-800'
}) => {
    return (
        <div>
            <label
                className={clsx(`
                    block 
                    text-md 
                    font-medium 
                    ${color}`)}
                htmlFor={id}
            >
                { label }
            </label>
            <div className='mt-2'>
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    { ...register(id, { required } )}
                    className={clsx(`
                        form-input
                        block
                        w-full
                        rounded-md
                        border-0
                        py-1.5
                        text-gray-900
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-gray-300
                        placeholder:text-gray-400
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-sky-300
                        sm:text-sm
                        sm:leading-6
                        `,
                        errors[id] && 'focus:ring-rose-500',
                        disabled && 'opacity-50')}
                    />
            </div>
        </div>
    );
}

export default Input;