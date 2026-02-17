import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


// Component

        function Badge({
            text,
            imgId
        }: {
            text: string;
            imgId: string;
        }) {
            return (
                <div data-v-53aaf1d1={""} className={"badge"}>
                    <Img id={imgId} />
                    <p data-v-53aaf1d1={""} className={"badge-text"}>
                        {text}
                    </p>
                </div>
            );
        }
    

export default Badge
