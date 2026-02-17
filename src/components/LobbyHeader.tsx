import React from 'react'

// Layer A: The Header/Greeting - Centered, prominent headline
// No distracting profile button - pure focus on the greeting
function LobbyHeader() {
    // Get current date formatted nicely
    const now = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    // Determine time of day for greeting
    const hour = now.getHours();
    let greeting = 'Good evening';
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 17) greeting = 'Good afternoon';

    return (
        <div className="lobby-header" data-v-lobby-header>
            <p className="lobby-header-date" data-v-lobby-header>
                {formattedDate}
            </p>
            <h1 className="lobby-header-greeting" data-v-lobby-header>
                {greeting}, Sarah
            </h1>
        </div>
    );
}

export default LobbyHeader
