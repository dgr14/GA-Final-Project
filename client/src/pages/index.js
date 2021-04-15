import axios from 'axios'
import React, { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObjTwo } from '../components/InfoSection/Data'
// import { homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TeamList from '../components/teams/TeamList'
import TeamProvider from '../components/teams/TeamProvider'

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ teams, setTeams ] = useState([])

    // create a function that updates state - toggle
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        axios.get("https://api.football-data.org/v2/competitions/PL/teams")
    })
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            {/* <InfoSection {...homeObjOne}/> */}
            <InfoSection {...homeObjTwo}/>
            <TeamProvider>
                <TeamList />
            </TeamProvider>
        </>
    )
}

export default Home
