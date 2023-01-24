import React from 'react';
import css from './home.module.css';

const Home = () => {
    return (
        <section className={css['home']}>
            <h1>Welcome to Flight Finder</h1>
            <p className="intro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam labore magnam minus nulla officia quae qui quidem vel vero voluptates? At blanditiis deserunt facere facilis fugiat fugit maiores non nulla quae quod sint tempora voluptatem, voluptates? Accusamus amet animi asperiores consequuntur dignissimos doloribus dolorum eligendi eos error eum ex fugit impedit itaque iusto nam neque nesciunt odio odit perferendis, quae, quo reprehenderit saepe sapiente sequi similique sit, tempore unde voluptates!
            </p>

            <article>
                <h2>Why use flight finder?</h2>
                <div className={css['text-column-wrapper']}>

                    <div>
                        <h3>Search any flight</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur assumenda consequatur esse facere incidunt laboriosam libero modi mollitia, nisi nulla quaerat quisquam quod quos, repudiandae rerum soluta suscipit tempora tenetur voluptate! Architecto cum enim exercitationem harum libero quam vero.</p>
                    </div>
                    <div>
                        <h3>Always up to date</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur assumenda consequatur esse facere incidunt laboriosam libero modi mollitia, nisi nulla quaerat quisquam quod quos, repudiandae rerum soluta suscipit tempora tenetur voluptate! Architecto cum enim exercitationem harum libero quam vero.</p>
                    </div>
                    <div>
                        <h3>Fun to use</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur assumenda consequatur esse facere incidunt laboriosam libero modi mollitia, nisi nulla quaerat quisquam quod quos, repudiandae rerum soluta suscipit tempora tenetur voluptate! Architecto cum enim exercitationem harum libero quam vero.</p>
                    </div>


                </div>
            </article>

        </section>
    )
}

export default Home;