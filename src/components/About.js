import React from 'react'

function About() {
    return (
        <div className='container my-5 text-light'>
            <div>
                <p>This page is created as a first project assignment given at UP School Front-end Development Program by <strong>Imran Cagla Eyuboglu</strong>. <a href="https://www.mmobomb.com/api">MMO Games</a> API used from <a href="https://github.com/public-apis/public-apis">https://github.com/public-apis/public-apis</a>. MMO Games API provides a database, news and giveaways about MMO Games.  </p>
                <p>A table, which all games in the database are included in, can be found in the games section. Also, you can search for MMO Games from home section. Finally, you can learn the details about your favorites.</p>
            </div>
            <div>
                <h4>Technologies</h4>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>   
                    <li>Bootstrap</li>
                    <li>Public API</li>
                </ul>
            </div>
        </div>
    )
}

export default About
