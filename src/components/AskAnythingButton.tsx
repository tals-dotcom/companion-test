import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Chat_bubble_question from './icons/Chat_bubble_question.tsx'


// Component

        function AskAnythingButton({
            title,
            subtitle
        }: {
            title: string;
            subtitle: string;
        }) {
            return (
                <button data-v-a31cde8c={""} className={"ama-touchpoint-button"}>
                    <Chat_bubble_question />
                    <div className={"ama-text-container"} data-v-a31cde8c={""}>
                        <span className={"ama-title"} data-v-a31cde8c={""}>
                            {title}
                        </span>
                        <span className={"ama-subtitle"} data-v-a31cde8c={""}>
                            {subtitle}
                        </span>
                    </div>
                </button>
            );
        }
    

export default AskAnythingButton
