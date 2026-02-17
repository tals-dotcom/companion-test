import React from 'react'
import { Send } from 'lucide-react'

// ATMOSPHERIC COMPANION SECTION - Final Polish
// "The Sky" - where users process feelings
// Hierarchy: Eyebrow Greeting → Hero Question → Subtitle → Floating Input

function CompanionAtmosphere() {
    // Determine time of day for greeting
    const hour = new Date().getHours();
    let greeting = 'Good evening';
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 17) greeting = 'Good afternoon';

    return (
        <div className="companion-atmosphere" data-v-atmosphere>
            {/* The Breathing Aura - large diffused radial gradient */}
            <div className="atmosphere-aura" data-v-atmosphere />

            {/* The Voice - Tightly grouped as one thought bubble */}
            <div className="atmosphere-voice" data-v-atmosphere>
                {/* Eyebrow - warm, small greeting (no date) */}
                <p className="atmosphere-eyebrow" data-v-atmosphere>
                    {greeting}, Sarah
                </p>

                {/* Hero Question - THE largest element */}
                <h1 className="atmosphere-headline" data-v-atmosphere>
                    Still up?
                </h1>

                {/* Subtitle - supportive context */}
                <p className="atmosphere-subtext" data-v-atmosphere>
                    You don't have to carry tonight alone. There are people in a Circle right now if you want company.
                </p>
            </div>

            {/* Input Field - Floating in "The Sky", above the horizon */}
            <button className="atmosphere-input" data-v-atmosphere>
                <span className="atmosphere-input-text" data-v-atmosphere>
                    Share what's on your mind...
                </span>
                <div className="atmosphere-input-icon" data-v-atmosphere>
                    <Send size={16} strokeWidth={2} />
                </div>
            </button>
        </div>
    );
}

export default CompanionAtmosphere
