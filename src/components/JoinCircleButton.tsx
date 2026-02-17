import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Vertical_equalizer_bars from './icons/Vertical_equalizer_bars.tsx'


// Component

        function JoinCircleButton({
            label
        }: {
            label: string;
        }) {
            return (
                <button data-v-0279e24a={""} className={"join-circle-button"}>
                    <div data-v-0279e24a={""} className={"lottie-container"}>
                        <Vertical_equalizer_bars />
                    </div>
                    <span data-v-0279e24a={""}>
                        {label}
                    </span>
                </button>
            );
        }
    

export default JoinCircleButton
