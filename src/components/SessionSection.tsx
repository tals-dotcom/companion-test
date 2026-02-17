import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Chevron_right from './icons/Chevron_right.tsx'
import TimeBlock from './TimeBlock.tsx'
import Badge from './Badge.tsx'


        type SessionSectionData = {
            title: string;
            sessions: {
                imgId: string;
                day: string;
                time: string;
                sessionTitle: string;
                facilitatorName: string;
            }[];
        }
    
// Component

        function SessionSection({
            dataId
        }: {
            dataId: string;
        }) {
            const { title, sessions }: SessionSectionData = getSessionSectionData(dataId);
            return (
                <div data-v-a31cde8c={""} className={"session-section"}>
                    <div data-v-a31cde8c={""} className={"section-title"}>
                        {title}
                    </div>
                    {sessions.map((session, index) => (
                        <RoomCard
                            key={index}
                            imgId={session.imgId}
                            day={session.day}
                            time={session.time}
                            sessionTitle={session.sessionTitle}
                            facilitatorName={session.facilitatorName}
                        />
                    ))}
                </div>
            );
        }
    

// Subcomponents

        function RoomCard({
            imgId,
            day,
            time,
            sessionTitle,
            facilitatorName
        }: {
            imgId: string;
            day: string;
            time: string;
            sessionTitle: string;
            facilitatorName: string;
        }) {
            return (
                <div data-v-53aaf1d1={""} data-v-a31cde8c={""} className={"room-card"}>
                    <div data-v-53aaf1d1={""} className={"avatar-content"}>
                        <div data-v-53aaf1d1={""} className={"image-cover"}>
                            <Img id={imgId} />
                        </div>
                        <div data-v-53aaf1d1={""} className={"content"}>
                            <div data-v-53aaf1d1={""} className={"top"}>
                                <TimeBlock day={day} time={time} />
                                <p data-v-53aaf1d1={""} className={"title"}>
                                    {sessionTitle}
                                </p>
                            </div>
                            <div data-v-53aaf1d1={""} className={"bottom"}>
                                <p data-v-53aaf1d1={""} className={"facilitator-name"}>
                                    {facilitatorName}
                                </p>
                                <Badge text="AI Group Facilitator" imgId="6" />
                            </div>
                        </div>
                    </div>
                    <div data-v-53aaf1d1={""} className={"chevron-icon"}>
                        <Chevron_right />
                    </div>
                </div>
            );
        }
    

function getSessionSectionData(id): SessionSectionData  {
    switch (String(id)) {
    case "0":
        return {
                  "title": "Today",
                  "sessions": [
                    {
                      "imgId": "5",
                      "day": "Sunday",
                      "time": "4 pm",
                      "sessionTitle": "Restoring Emotional Balance and Inner Safety",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "7",
                      "day": "Sunday",
                      "time": "5 pm",
                      "sessionTitle": "Reclaiming Yourself: Healing After Narcissistic Abuse",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "8",
                      "day": "Sunday",
                      "time": "6 pm",
                      "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "9",
                      "day": "Sunday",
                      "time": "7 pm",
                      "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "10",
                      "day": "Sunday",
                      "time": "8 pm",
                      "sessionTitle": "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "11",
                      "day": "Sunday",
                      "time": "8 pm",
                      "sessionTitle": "When your Empathy is Weaponized: Reclaim your Gift",
                      "facilitatorName": "Emily and Adam"
                    },
                    {
                      "imgId": "12",
                      "day": "Sunday",
                      "time": "9 pm",
                      "sessionTitle": "After Betrayal: Trusting Yourself Again",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "13",
                      "day": "Sunday",
                      "time": "10 pm",
                      "sessionTitle": "From Invisible to Valued: Honoring Your Inner Experience",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "14",
                      "day": "Sunday",
                      "time": "11 pm",
                      "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                      "facilitatorName": "Maya"
                    }
                  ]
                }
            ;
    case "1":
        return {
                  "title": "Tomorrow",
                  "sessions": [
                    {
                      "imgId": "8",
                      "day": "Monday",
                      "time": "12 am",
                      "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "7",
                      "day": "Monday",
                      "time": "1 am",
                      "sessionTitle": "Reclaiming Yourself: Healing After Narcissistic Abuse",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "14",
                      "day": "Monday",
                      "time": "2 am",
                      "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "9",
                      "day": "Monday",
                      "time": "3 am",
                      "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "10",
                      "day": "Monday",
                      "time": "3:45 am",
                      "sessionTitle": "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "15",
                      "day": "Monday",
                      "time": "4:30 am",
                      "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "12",
                      "day": "Monday",
                      "time": "5:15 am",
                      "sessionTitle": "After Betrayal: Trusting Yourself Again",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "9",
                      "day": "Monday",
                      "time": "6 am",
                      "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "14",
                      "day": "Monday",
                      "time": "6:45 am",
                      "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "5",
                      "day": "Monday",
                      "time": "7:30 am",
                      "sessionTitle": "Restoring Emotional Balance and Inner Safety",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "7",
                      "day": "Monday",
                      "time": "8:15 am",
                      "sessionTitle": "Reclaiming Yourself: Healing After Narcissistic Abuse",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "15",
                      "day": "Monday",
                      "time": "9 am",
                      "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "13",
                      "day": "Monday",
                      "time": "10 am",
                      "sessionTitle": "From Invisible to Valued: Honoring Your Inner Experience",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "15",
                      "day": "Monday",
                      "time": "11 am",
                      "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "5",
                      "day": "Monday",
                      "time": "12 pm",
                      "sessionTitle": "Restoring Emotional Balance and Inner Safety",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "7",
                      "day": "Monday",
                      "time": "1 pm",
                      "sessionTitle": "Reclaiming Yourself: Healing After Narcissistic Abuse",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "10",
                      "day": "Monday",
                      "time": "2 pm",
                      "sessionTitle": "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "13",
                      "day": "Monday",
                      "time": "3 pm",
                      "sessionTitle": "From Invisible to Valued: Honoring Your Inner Experience",
                      "facilitatorName": "Maya"
                    }
                  ]
                }
            ;
    case "2":
        return {
                  "title": "Tuesday",
                  "sessions": [
                    {
                      "imgId": "8",
                      "day": "Tuesday",
                      "time": "12 am",
                      "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "7",
                      "day": "Tuesday",
                      "time": "1 am",
                      "sessionTitle": "Reclaiming Yourself: Healing After Narcissistic Abuse",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "14",
                      "day": "Tuesday",
                      "time": "2 am",
                      "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "9",
                      "day": "Tuesday",
                      "time": "3 am",
                      "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "10",
                      "day": "Tuesday",
                      "time": "3:45 am",
                      "sessionTitle": "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "15",
                      "day": "Tuesday",
                      "time": "4:30 am",
                      "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "12",
                      "day": "Tuesday",
                      "time": "5:15 am",
                      "sessionTitle": "After Betrayal: Trusting Yourself Again",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "9",
                      "day": "Tuesday",
                      "time": "6 am",
                      "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "14",
                      "day": "Tuesday",
                      "time": "6:45 am",
                      "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "5",
                      "day": "Tuesday",
                      "time": "7:30 am",
                      "sessionTitle": "Restoring Emotional Balance and Inner Safety",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "7",
                      "day": "Tuesday",
                      "time": "8:15 am",
                      "sessionTitle": "Reclaiming Yourself: Healing After Narcissistic Abuse",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "15",
                      "day": "Tuesday",
                      "time": "9 am",
                      "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "13",
                      "day": "Tuesday",
                      "time": "10 am",
                      "sessionTitle": "From Invisible to Valued: Honoring Your Inner Experience",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "15",
                      "day": "Tuesday",
                      "time": "11 am",
                      "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                      "facilitatorName": "Maya"
                    }
                  ]
                }
            ;
    case "3":
        return {
                    "title": "Wednesday",
                    "sessions": [
                        {
                            "imgId": "8",
                            "day": "Wednesday",
                            "time": "12 am",
                            "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "7",
                            "day": "Wednesday",
                            "time": "1 am",
                            "sessionTitle": "Reclaiming Yourself: Healing After Narcissistic Abuse",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "14",
                            "day": "Wednesday",
                            "time": "2 am",
                            "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "9",
                            "day": "Wednesday",
                            "time": "3 am",
                            "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "10",
                            "day": "Wednesday",
                            "time": "3:45 am",
                            "sessionTitle": "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "15",
                            "day": "Wednesday",
                            "time": "4:30 am",
                            "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "12",
                            "day": "Wednesday",
                            "time": "5:15 am",
                            "sessionTitle": "After Betrayal: Trusting Yourself Again",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "9",
                            "day": "Wednesday",
                            "time": "6 am",
                            "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "14",
                            "day": "Wednesday",
                            "time": "6:45 am",
                            "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "5",
                            "day": "Wednesday",
                            "time": "7:30 am",
                            "sessionTitle": "Restoring Emotional Balance and Inner Safety",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "15",
                            "day": "Wednesday",
                            "time": "9 am",
                            "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "15",
                            "day": "Wednesday",
                            "time": "11 am",
                            "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "5",
                            "day": "Wednesday",
                            "time": "12 pm",
                            "sessionTitle": "Restoring Emotional Balance and Inner Safety",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "13",
                            "day": "Wednesday",
                            "time": "3 pm",
                            "sessionTitle": "From Invisible to Valued: Honoring Your Inner Experience",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "5",
                            "day": "Wednesday",
                            "time": "4 pm",
                            "sessionTitle": "Restoring Emotional Balance and Inner Safety",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "8",
                            "day": "Wednesday",
                            "time": "6 pm",
                            "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "9",
                            "day": "Wednesday",
                            "time": "7 pm",
                            "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "10",
                            "day": "Wednesday",
                            "time": "8 pm",
                            "sessionTitle": "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "12",
                            "day": "Wednesday",
                            "time": "9 pm",
                            "sessionTitle": "After Betrayal: Trusting Yourself Again",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "13",
                            "day": "Wednesday",
                            "time": "10 pm",
                            "sessionTitle": "From Invisible to Valued: Honoring Your Inner Experience",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "14",
                            "day": "Wednesday",
                            "time": "11 pm",
                            "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                            "facilitatorName": "Maya"
                        }
                    ]
                }
            ;
    case "4":
        return {
                    "title": "Thursday",
                    "sessions": [
                        {
                            "imgId": "8",
                            "day": "Thursday",
                            "time": "12 am",
                            "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "10",
                            "day": "Thursday",
                            "time": "3:45 am",
                            "sessionTitle": "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "15",
                            "day": "Thursday",
                            "time": "4:30 am",
                            "sessionTitle": "Its Not Your Fault! Release Shame and Let Go of Unfair Blame",
                            "facilitatorName": "Maya"
                        },
                        {
                            "imgId": "12",
                            "day": "Thursday",
                            "time": "5:15 am",
                            "sessionTitle": "After Betrayal: Trusting Yourself Again",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "8",
                            "day": "Thursday",
                            "time": "6 pm",
                            "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "12",
                            "day": "Thursday",
                            "time": "9 pm",
                            "sessionTitle": "After Betrayal: Trusting Yourself Again",
                            "facilitatorName": "Serena"
                        }
                    ]
                }
            ;
    case "5":
        return {
                    "title": "Friday",
                    "sessions": [
                        {
                            "imgId": "8",
                            "day": "Friday",
                            "time": "12 am",
                            "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                            "facilitatorName": "Serena"
                        },
                        {
                            "imgId": "11",
                            "day": "Friday",
                            "time": "4 am",
                            "sessionTitle": "When your Empathy is Weaponized: Reclaim your Gift",
                            "facilitatorName": "Emily and Adam"
                        },
                        {
                            "imgId": "12",
                            "day": "Friday",
                            "time": "5:15 am",
                            "sessionTitle": "After Betrayal: Trusting Yourself Again",
                            "facilitatorName": "Serena"
                        }
                    ]
                }
            ;
    default:
        return {
                  "title": "Today",
                  "sessions": [
                    {
                      "imgId": "5",
                      "day": "Sunday",
                      "time": "4 pm",
                      "sessionTitle": "Restoring Emotional Balance and Inner Safety",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "7",
                      "day": "Sunday",
                      "time": "5 pm",
                      "sessionTitle": "Reclaiming Yourself: Healing After Narcissistic Abuse",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "8",
                      "day": "Sunday",
                      "time": "6 pm",
                      "sessionTitle": "When Love Hurts: Making Sense of Narcissistic Relationships",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "9",
                      "day": "Sunday",
                      "time": "7 pm",
                      "sessionTitle": "Walking on Eggshells: Living With Constant Tension and Control",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "10",
                      "day": "Sunday",
                      "time": "8 pm",
                      "sessionTitle": "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "11",
                      "day": "Sunday",
                      "time": "8 pm",
                      "sessionTitle": "When your Empathy is Weaponized: Reclaim your Gift",
                      "facilitatorName": "Emily and Adam"
                    },
                    {
                      "imgId": "12",
                      "day": "Sunday",
                      "time": "9 pm",
                      "sessionTitle": "After Betrayal: Trusting Yourself Again",
                      "facilitatorName": "Serena"
                    },
                    {
                      "imgId": "13",
                      "day": "Sunday",
                      "time": "10 pm",
                      "sessionTitle": "From Invisible to Valued: Honoring Your Inner Experience",
                      "facilitatorName": "Maya"
                    },
                    {
                      "imgId": "14",
                      "day": "Sunday",
                      "time": "11 pm",
                      "sessionTitle": "Trying to Keep the Peace: People-Pleasing and Self-Silencing",
                      "facilitatorName": "Maya"
                    }
                  ]
                }
            ;
    }
}


export default SessionSection
