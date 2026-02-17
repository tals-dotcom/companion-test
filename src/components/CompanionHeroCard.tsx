import React from 'react'
import { Send } from 'lucide-react'

// Layer B: The Companion Card (The Hero) - "Brand Aura" Version
// No avatar - instead uses a "Living Light" gradient as focal point
// The soft glowing aura signals the AI is "online" and "listening"

function CompanionHeroCard() {
    return (
        <div className="companion-hero-wrapper" data-v-companion-hero>
            {/* The Card with Living Light effect */}
            <div className="companion-hero-card" data-v-companion-hero>
                {/* The Living Light - breathing gradient aura */}
                <div className="companion-hero-aura" data-v-companion-hero />

                {/* Main content with serif headline */}
                <div className="companion-hero-content" data-v-companion-hero>
                    <h2 className="companion-hero-headline" data-v-companion-hero>
                        How is your energy right now?
                    </h2>
                    <p className="companion-hero-subtext" data-v-companion-hero>
                        The circle is open, but you don't have to join yet. This space is just for you to process.
                    </p>
                </div>

                {/* Input field CTA - emotionally inviting */}
                <button className="companion-hero-input-cta" data-v-companion-hero>
                    <span className="companion-hero-input-text" data-v-companion-hero>
                        Share what's on your mind...
                    </span>
                    <div className="companion-hero-input-icon" data-v-companion-hero>
                        <Send size={16} strokeWidth={2} />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default CompanionHeroCard
