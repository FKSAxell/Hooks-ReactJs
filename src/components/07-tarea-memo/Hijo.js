import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="mr-3 btn btn-primary"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
