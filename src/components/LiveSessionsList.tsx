import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import TextBlock from './TextBlock.tsx'
import InfoRow from './InfoRow.tsx'
import JoinCircleButton from './JoinCircleButton.tsx'


// Component

        function LiveSessionsList({
            sessionTitle,
            facilitatorName,
            participantCount
        }: {
            sessionTitle: string;
            facilitatorName: string;
            participantCount: number;
        }) {
            return (
                <div data-v-a31cde8c={""} className={"live-sessions-list"}>
                    <div data-v-0279e24a={""} data-v-a31cde8c={""} className={"live-session-card"}>
                        <div data-v-0279e24a={""} className={"live-session-top-section"}>
                            <div data-v-0279e24a={""} className={"support-group-badge"}>
                                <Img id="1" />
                                <span data-v-0279e24a={""}>
                                    Support group
                                </span>
                            </div>
                            <div data-v-0279e24a={""} className={"facilitator-image-container"}>
                                <Img id="2" />
                                <div data-v-0279e24a={""} className={"participant-avatars-container"}>
                                </div>
                            </div>
                        </div>
                        <div data-v-0279e24a={""} className={"live-session-bottom-section"}>
                            <div data-v-0279e24a={""} className={"session-title"}>
                                {sessionTitle}
                            </div>
                            <div data-v-0279e24a={""} className={"footer-content-row"}>
                                <div data-v-0279e24a={""} className={"footer-left"}>
                                    <TextBlock
                                        dataAttribute="data-v-0279e24a"
                                        className="footer-label"
                                        label="Group Facilitator"
                                    />
                                    <InfoRow
                                        wrapperClass="facilitator-row"
                                        textClass="facilitator-name"
                                        text={facilitatorName}
                                        imgId="3"
                                        dataAttr="data-v-0279e24a"
                                    />
                                </div>
                                <div data-v-0279e24a={""} className={"footer-separator"}>
                                </div>
                                <div data-v-0279e24a={""} className={"footer-right"}>
                                    <TextBlock
                                        dataAttribute="data-v-0279e24a"
                                        className="footer-label"
                                        label="Participants"
                                    />
                                    <InfoRow
                                        wrapperClass="participants-row"
                                        textClass="participants-count"
                                        text={participantCount}
                                        imgId="4"
                                        dataAttr="data-v-0279e24a"
                                    />
                                </div>
                            </div>
                            <JoinCircleButton label="Join Circle" />
                        </div>
                    </div>
                </div>
            );
        }
    

export default LiveSessionsList
