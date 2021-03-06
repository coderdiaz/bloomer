import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Container } from './../../../../../../src/layout';
import { Title, Subtitle } from './../../../../../../src';

const Start = (props) => (
    <Container>
        <Title isSpaced>How to Start?</Title>
        <Subtitle>1. Install via npm</Subtitle>
        <div className='npm'><code><span className='is-unselectable'>$ </span>npm install bloomer</code></div>
        <hr />
        <div></div>
        <Subtitle>2. Import and use Bloomer components.</Subtitle>
        <Highlight className='javascript'>
            {`import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Box  } from 'bloomer';

ReactDOM.render(
    <Container>
        <Box>Hello World!</Box>
    </Container>,
    document.getElementById('root')
)`}
        </Highlight>
        <Subtitle>You're done!</Subtitle>
        <p>
            Since <strong>Bloomer</strong> is written with Typescript, the library is ship with typings. 
            That means that you have the benefit of IntelliSense in your editor. 
        </p>
        <p>Remember, with great power comes great responsibility.</p>
    </Container>
)

export default Start;