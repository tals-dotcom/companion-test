import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CompanionAtmosphere from './CompanionAtmosphere.tsx'
import LiveSessionsList from './LiveSessionsList.tsx'
import TextBlock from './TextBlock.tsx'
import SessionSection from './SessionSection.tsx'


// Component - "Premium Atmospheric" Layout with Sky/Ground Structure
// TOP ("The Sky"): Gradient glow, Eyebrow greeting, Hero question, Floating input
// HORIZON: Curved edge separating atmosphere from content
// BOTTOM ("The Ground/Sheet"): Solid container with Live Now and schedule

function LobbyMain() {
    return (
        <main className="lobby-atmospheric" data-v-lobby-atmospheric>
            {/* THE SKY - Companion Atmosphere floats here */}
            <div className="lobby-sky" data-v-lobby-atmospheric>
                <CompanionAtmosphere />
            </div>

            {/* THE SHEET - Grounded content container with rounded top */}
            <div className="lobby-sheet" data-v-lobby-atmospheric>
                {/* Live Now Section - properly padded inside the sheet */}
                <div className="lobby-sheet-section" data-v-lobby-atmospheric>
                    <h2 className="lobby-sheet-title" data-v-lobby-atmospheric>
                        Live now
                    </h2>
                    <LiveSessionsList
                        sessionTitle="From Invisible to Valued: Honoring Your Inner Experience"
                        facilitatorName="Maya"
                        participantCount={1}
                    />
                </div>

                {/* Schedule section - scrollable content */}
                <div className="lobby-sheet-section" data-v-lobby-atmospheric>
                    <div className="lobby-sheet-header" data-v-lobby-atmospheric>
                        <h2 className="lobby-sheet-title" data-v-lobby-atmospheric>
                            Upcoming circles
                        </h2>
                        <button className="lobby-sheet-link" data-v-lobby-atmospheric>
                            View all
                        </button>
                    </div>
                    <div className="sessions-list" data-v-a31cde8c="">
                        <SessionSection dataId="0" />
                        <SessionSection dataId="1" />
                        <SessionSection dataId="2" />
                        <SessionSection dataId="3" />
                        <SessionSection dataId="4" />
                        <SessionSection dataId="5" />
                    </div>
                </div>
            </div>
        </main>
    );
}


export default LobbyMain
