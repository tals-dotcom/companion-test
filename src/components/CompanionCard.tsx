import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { ArrowRight } from 'lucide-react'

// Companion Component - A warm, conversational prompt that catches users not ready for group sessions

function CompanionCard() {
    return (
        <button className="companion-prompt" data-v-companion>
            {/* Warm abstract avatar with soft glow */}
            <div className="companion-avatar-glow" data-v-companion>
                <div className="companion-avatar" data-v-companion>
                    {/* Abstract warm shape - represents caring presence */}
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="companion-avatar-svg">
                        <circle cx="20" cy="16" r="8" fill="rgba(255,255,255,0.9)" />
                        <ellipse cx="20" cy="32" rx="12" ry="8" fill="rgba(255,255,255,0.9)" />
                    </svg>
                </div>
            </div>

            {/* Conversational text */}
            <div className="companion-text" data-v-companion>
                <span className="companion-headline" data-v-companion>
                    Not feeling the group dynamic?
                </span>
                <span className="companion-subtext" data-v-companion>
                    I'm here to chat 1-on-1 <ArrowRight size={12} strokeWidth={2.5} className="companion-arrow" />
                </span>
            </div>
        </button>
    );
}

export default CompanionCard
