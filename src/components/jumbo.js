import React from "react"

import jumboStyles from "./jumbo.module.scss"

const Jumbo = () => {
    return (
        <div className={jumboStyles.container}>
            <div className={jumboStyles.header}>
                <div className={jumboStyles.heading}>Pizza For The Brave</div>
            </div>
        </div>

    )
}

export default Jumbo