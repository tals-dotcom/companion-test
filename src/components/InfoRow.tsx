import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


    
// Component

        function InfoRow({
            wrapperClass,
            textClass,
            text,
            imgId,
            dataAttr
        }: {
            wrapperClass: string;
            textClass: string;
            text: string | number;
            imgId: string;
            dataAttr: string;
        }) {
            return (
                <div {...{ [dataAttr]: "" }} className={wrapperClass}>
                    <Img id={imgId} />
                    <span {...{ [dataAttr]: "" }} className={textClass}>
                        {text}
                    </span>
                </div>
            );
        }
    

export default InfoRow
