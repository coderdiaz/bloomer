import * as React from 'react';
import { shallow } from 'enzyme';

import { Section } from './../../src/layout/Section';

describe('Section', () => {
    it('should render a section with .section', () => {
        const container = shallow(<Section>My Section</Section>);
        expect(container.contains(<section className='section'>My Section</section>)).toBe(true)
    });

    it('should render a section with .section and modifiers', () => {
        const container = shallow(<Section isSize='large'/>);
        expect(container.hasClass('section')).toBe(true);
        expect(container.hasClass('is-large')).toBe(true);
    });

    it('should render a section with .section, modifiers and custom classNames', () => {
        const container = shallow(<Section isSize='medium' className='custom loader' />);
        expect(container.hasClass('section')).toBe(true);
        expect(container.hasClass('is-medium')).toBe(true);
        expect(container.hasClass('custom')).toBe(true);
        expect(container.hasClass('loader')).toBe(true);
    });

    it('should render a section with .section with custom classNames', () => {
        const container = shallow(<Section className='custom' />);
        expect(container.hasClass('custom')).toBe(true);
    });
});