import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function TextBlock({
            dataAttribute,
            className,
            label
        }: {
            dataAttribute: string;
            className: string;
            label: string;
        }) {
            return (
                <div {...{ [dataAttribute]: "" }} className={className}>
                    {label}
                </div>
            );
        }
    

export default TextBlock
