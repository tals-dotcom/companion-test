import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { MessageCircle, User } from 'lucide-react'

// Floating Companion Pill - A persistent presence that walks with the user throughout the app
// Named "Kai" to give the companion a personal identity

function CompanionPill() {
    // Try to load the generated avatar, fall back to a styled placeholder
    const [avatarLoaded, setAvatarLoaded] = React.useState(false);
    const [avatarError, setAvatarError] = React.useState(false);

    return (
        <button className="companion-pill" data-v-companion-pill>
            {/* Kai's avatar - a warm, friendly face */}
            <div className="companion-pill-avatar" data-v-companion-pill>
                {!avatarError ? (
                    <img
                        src="/images/kai-companion-avatar.avif"
                        alt="Kai"
                        className="companion-pill-avatar-img"
                        onLoad={() => setAvatarLoaded(true)}
                        onError={() => setAvatarError(true)}
                        style={{ display: avatarLoaded ? 'block' : 'none' }}
                    />
                ) : null}
                {(!avatarLoaded || avatarError) && (
                    <div className="companion-pill-avatar-placeholder">
                        <User size={20} strokeWidth={1.5} />
                    </div>
                )}
            </div>

            {/* Contextual message */}
            <span className="companion-pill-text" data-v-companion-pill>
                Here if you need me
            </span>

            {/* Chat action */}
            <div className="companion-pill-action" data-v-companion-pill>
                <MessageCircle size={16} strokeWidth={2} />
            </div>
        </button>
    );
}

export default CompanionPill
