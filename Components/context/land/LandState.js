import React, { useState } from 'react'
import LandContext from './LandContext'

const LandState = (props) => {

    const land = [{
        id: 1,
        name: 'Salman Land',
        price: '3,250,000',
        area: '256 Yds 120 M',
        address: 'Behria Town, Phase II',
        description: 'Great!'
    },
    {
        id: 2,
        name: 'Ali Raza Land',
        price: '6,520,000',
        area: '526 Yds 230 M',
        address: 'Behria Town, Phase XI',
        description: 'Nice!'
    }]

    const forSale = []

    const removeItem = (item) => {
        const index = forSale.findIndex((element) => element === item)
        if(index === -1){
            forSale.splice(index, 1)
            // console.log(forSale)
        }
        // console.log(forSale)
    }

    return (
        <LandContext.Provider value={{land, forSale, removeItem}}>
            {props.children}
        </LandContext.Provider>
    )
}

export default LandState