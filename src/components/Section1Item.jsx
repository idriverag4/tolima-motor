import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Section1Item = ({icon, title, desc}) => {
    return (
        <>
            <div>
                <i><FontAwesomeIcon icon={icon} /></i>
                <div>
                    {title}
                    {desc}
                </div>
            </div>
        </>
    )
}
