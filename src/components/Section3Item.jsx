import React from 'react'

export const Section3Item = ({ image, title, list }) => {
    return (
        <>
            <div>
                <img src={image} alt={title} />
                <div className="list">
                    <h3 className="text-secondary"><strong>{title}</strong></h3>
                    <ul>
                        {
                            list.map(({id, lis}) => (
                                <li key={id}>{lis}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
