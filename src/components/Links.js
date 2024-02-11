import React from 'react'
import user from '../data/user'

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={user.links.githib}>{user.links.github}</a>
            <a href={user.links.linkedin}>{user.links.linkedin}</a>
        </div>
    )
}

export default Links