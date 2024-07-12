import React from 'react';
import { useRouteError } from 'react-router-dom';
import './styles.scss';

export default function ErrorPage() {
    const error: unknown = useRouteError();
    let errorstring: string;
    console.log(error);

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* <i className='error'>{error.status} {error.statusText}</i> */}
            {/* <p>{errorstring}</p> */}
        </div>
    );
}