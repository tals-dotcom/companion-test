import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Badge from './Badge.tsx'

import images_ecd0fa44_2a08_4e70_a6f0_52995dfcb693_svg from '/images/ecd0fa44-2a08-4e70-a6f0-52995dfcb693.svg';
import images_0cc25cc1_956e_44d7_80e1_1a6b455cb09f_svg from '/images/0cc25cc1-956e-44d7-80e1-1a6b455cb09f.svg';
import images_33d3ebce_b036_4625_a6fa_1e14a2440b89_png from '/images/33d3ebce-b036-4625-a6fa-1e14a2440b89.png';
import images_99009050_c528_4189_aeda_c75d8ad2d020_svg from '/images/99009050-c528-4189-aeda-c75d8ad2d020.svg';
import images_543a7005_9b7e_4264_b098_a0ddd08ccd77_svg from '/images/543a7005-9b7e-4264-b098-a0ddd08ccd77.svg';
import images_03495322_9968_4c41_bd87_cb0a7472bde0_png from '/images/03495322-9968-4c41-bd87-cb0a7472bde0.png';
import images_a03c62af_c627_4777_8885_ec172e55ec44_png from '/images/a03c62af-c627-4777-8885-ec172e55ec44.png';

export const Img = ({ id }) => {
    switch (String(id)) {    case "0":
        return (
            <img data-v-a31cde8c={""} className={"user-icon"} src={images_ecd0fa44_2a08_4e70_a6f0_52995dfcb693_svg} alt={"User"}></img>
        );
    case "1":
        return (
            <img data-v-0279e24a={""} className={"microphone-icon"} src={images_0cc25cc1_956e_44d7_80e1_1a6b455cb09f_svg} alt={"Microphone"}></img>
        );
    case "2":
        return (
            <img data-v-0279e24a={""} className={"facilitator-image"} src={images_33d3ebce_b036_4625_a6fa_1e14a2440b89_png} alt={"Facilitator"}></img>
        );
    case "3":
        return (
            <img data-v-0279e24a={""} src={images_99009050_c528_4189_aeda_c75d8ad2d020_svg} alt={"AI Badge"}></img>
        );
    case "4":
        return (
            <img data-v-0279e24a={""} src={images_543a7005_9b7e_4264_b098_a0ddd08ccd77_svg} alt={"Users"}></img>
        );
    case "5":
        return (
            <img data-v-53aaf1d1={""} src={images_33d3ebce_b036_4625_a6fa_1e14a2440b89_png} alt={"Restoring Emotional Balance and Inner Safety"}></img>
        );
    case "6":
        return (
            <img data-v-53aaf1d1={""} className={"icon-ai-badge"} src={images_99009050_c528_4189_aeda_c75d8ad2d020_svg} alt={"AI Badge"}></img>
        );
    case "7":
        return (
            <img data-v-53aaf1d1={""} src={images_03495322_9968_4c41_bd87_cb0a7472bde0_png} alt={"Reclaiming Yourself: Healing After Narcissistic Abuse"}></img>
        );
    case "8":
        return (
            <img data-v-53aaf1d1={""} src={images_03495322_9968_4c41_bd87_cb0a7472bde0_png} alt={"When Love Hurts: Making Sense of Narcissistic Relationships"}></img>
        );
    case "9":
        return (
            <img data-v-53aaf1d1={""} src={images_03495322_9968_4c41_bd87_cb0a7472bde0_png} alt={"Walking on Eggshells: Living With Constant Tension and Control"}></img>
        );
    case "10":
        return (
            <img data-v-53aaf1d1={""} src={images_03495322_9968_4c41_bd87_cb0a7472bde0_png} alt={"Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust"}></img>
        );
    case "11":
        return (
            <img data-v-53aaf1d1={""} src={images_a03c62af_c627_4777_8885_ec172e55ec44_png} alt={"When your Empathy is Weaponized: Reclaim your Gift"}></img>
        );
    case "12":
        return (
            <img data-v-53aaf1d1={""} src={images_03495322_9968_4c41_bd87_cb0a7472bde0_png} alt={"After Betrayal: Trusting Yourself Again"}></img>
        );
    case "13":
        return (
            <img data-v-53aaf1d1={""} src={images_33d3ebce_b036_4625_a6fa_1e14a2440b89_png} alt={"From Invisible to Valued: Honoring Your Inner Experience"}></img>
        );
    case "14":
        return (
            <img data-v-53aaf1d1={""} src={images_33d3ebce_b036_4625_a6fa_1e14a2440b89_png} alt={"Trying to Keep the Peace: People-Pleasing and Self-Silencing"}></img>
        );
    case "15":
        return (
            <img data-v-53aaf1d1={""} src={images_33d3ebce_b036_4625_a6fa_1e14a2440b89_png} alt={"Its Not Your Fault! Release Shame and Let Go of Unfair Blame"}></img>
        );
    default:
        return null;
    }
};

export default Img
