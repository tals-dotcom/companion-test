import React from 'react'
import Img from './Img.tsx'

// Layer C: The "Live Now" Tease
// Shows the active circle session as a peek-a-boo card
// Distinguished from the Companion Card with a warm brown/peach background

interface LiveNowTeaseProps {
    sessionTitle: string;
    facilitatorName: string;
    participantCount: number;
}

function LiveNowTease({ sessionTitle, facilitatorName, participantCount }: LiveNowTeaseProps) {
    return (
        <div className="live-now-tease" data-v-live-tease>
            {/* Live badge */}
            <div className="live-now-tease-header" data-v-live-tease>
                <div className="live-now-tease-badge" data-v-live-tease>
                    <span className="live-now-tease-dot" data-v-live-tease></span>
                    <span className="live-now-tease-label" data-v-live-tease>Live now</span>
                </div>
                <span className="live-now-tease-participants" data-v-live-tease>
                    {participantCount} {participantCount === 1 ? 'person' : 'people'} here
                </span>
            </div>

            {/* Session preview with facilitator peek */}
            <button className="live-now-tease-card" data-v-live-tease>
                {/* Facilitator face - visible for peek-a-boo effect */}
                <div className="live-now-tease-avatar" data-v-live-tease>
                    <Img id="2" />
                </div>

                {/* Session info */}
                <div className="live-now-tease-info" data-v-live-tease>
                    <h3 className="live-now-tease-title" data-v-live-tease>
                        {sessionTitle}
                    </h3>
                    <div className="live-now-tease-facilitator" data-v-live-tease>
                        <Img id="3" />
                        <span className="live-now-tease-name" data-v-live-tease>
                            with {facilitatorName}
                        </span>
                    </div>
                </div>

                {/* Join indicator */}
                <div className="live-now-tease-join" data-v-live-tease>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            </button>
        </div>
    );
}

export default LiveNowTease
