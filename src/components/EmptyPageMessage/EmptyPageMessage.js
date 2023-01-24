import React from "react";
import css from './EmptyPageMessage.module.css';

const EmptyPageMessage = ({children, title}) => {
    return (
        <article className={css['empty-page-message']}>
        <h1>{title}</h1>
        <p className={css['no-flight-error']}>
            {children}
        </p>
        </article>
    )
}

export default EmptyPageMessage;