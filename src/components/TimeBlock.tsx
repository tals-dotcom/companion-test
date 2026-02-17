import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function TimeBlock({
            day,
            time
        }: {
            day: string;
            time: string;
        }) {
            return (
                <div data-v-53aaf1d1={""} className={"time-block"}>
                    <p data-v-53aaf1d1={""}>
                        {day}
                    </p>
                    <p data-v-53aaf1d1={""}>
                        ·
                    </p>
                    <p data-v-53aaf1d1={""}>
                        {time}
                    </p>
                </div>
            );
        }
    

export default TimeBlock
