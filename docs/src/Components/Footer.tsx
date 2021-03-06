import * as React from 'react';

import { Footer, Container, Columns, Column, Content, Icon } from './../../../src/';

const Foot = (props) => (
    <Footer id='footer'>
        <Container>
            <Content>
                <Columns>
                    <Column isFull>
                        <p>
                            Made with <Icon hasTextColor='danger'><span className="fa fa-heart" aria-hidden="true" /></Icon>  by <a href="https://twitter.com/AlgusDark" target="_blank">Algus Dark</a>
                        </p>
                        <p>
                            <a href="https://twitter.com/AlgusDark" className="twitter-follow-button" data-size="large">Follow @AlgusDark</a>
                        </p>
                    </Column>
                </Columns>
                <Content isSize='small'>
                    <p>The source code is licensed under <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>.</p>
                    <p>The website content is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC ANS 4.0</a>.</p>
                </Content>
            </Content>
        </Container>
    </Footer>
)

export default Foot;
