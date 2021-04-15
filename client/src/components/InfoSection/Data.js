import axios from 'axios'
import React from 'react'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Soccer Data',
    headline: `Get access to Europe's top 5 leagues`,
    description: 'Find all the latest data and match results',
    buttonLabel: 'Get started',
    imgStart: false,
    // img: require('../../images/svg-1.svg'),
    // alt: 'Clubs',
    dark: true,
    dark2: true,
    primary: true,
    darkText: false,
    bigOrSmall: true
}
export const homeObjTwo = {
    id: 'clubs',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Choose your favorite club: ',
    headline: `Club: `,
    description: 'After you choose your favorite club, see what happens!',
    // buttonLabel: 'Get started',
    imgStart: false,
    // img: require('../../images/svg-2.svg'),
    // alt: 'Clubs',
    dark: true,
    dark2: true,
    primary: true,
    darkText: false,
    teamUrl: "https://api.football-data.org/v2/competitions/PL/teams",
    bigOrSmall: true
}
export const homeObjThree = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Soccer Data',
    headline: `Get access to Europe's top 5 leagues`,
    description: 'Find all the latest data and match results',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/svg-3.svg'),
    alt: 'Clubs',
    dark: true,
    dark2: true,
    primary: true,
    darkText: false
}
