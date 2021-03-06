import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const CardContent: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('card-content', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(CardContent);