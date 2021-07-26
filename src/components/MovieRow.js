import React from 'react'
import { Arrow } from './Arrow'
import './MovieRow.css'
import { PercentageOverlay } from './PercentageOverlay'

// title: string
// onClick: () => void
export function MovieRow(props) {

    const progressData = JSON.parse(localStorage.getItem("video-progress") || "{}")
    let progress;
    let percentage = null;
    if(props.type === "movie") {
        progress = progressData?.[props.source]?.movie?.[props.slug]?.full
        if(progress) {
            percentage = Math.floor((progress.currentlyAt / progress.totalDuration) * 100)
        }
    }

    return (
        <div className="movieRow" onClick={() => props.onClick && props.onClick()}>
            <div className="left">
                {props.title}&nbsp;
                <span className="year">({props.year})</span>
            </div>
            <div className="watch">
                <p>Watch {props.type}</p>
                <Arrow/>
            </div>
            <PercentageOverlay percentage={percentage} />
        </div>
    )
}