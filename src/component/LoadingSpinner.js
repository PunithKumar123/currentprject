import React, { useState, useEffect, CSSProperties } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "../css/LoadingSpinner.css"


const LoadingSpinner = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)

    }, [])
    return (
    <div className="Loading-spinner">
        <div className="Loading-spinner-child">
        <PuffLoader
            color={'#36d7b7'}
            loading={loading}
            
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
        </div>
    )
}

export default LoadingSpinner