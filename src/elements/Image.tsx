import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    withHelpersModifiers
} from './../bulma';
import { combineModifiers, getHTMLProps, is } from './../helpers';

export interface Size {
    isSize?: '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128';
}

export interface Ratio {
    isRatio?: 'square' | '1by1' | '4by3' | '3by2' | '16by9' | '2by1'
}

export interface Image<T> extends Size, Ratio,
    React.HTMLProps<T> {

}

const isRatio = is({
    'square': true,
    '1by1': true,
    '4by3': true,
    '3by2': true,
    '16by9': true,
    '2by1': true,
})

const isSize = is({
    '16x16': true,
    '24x24': true,
    '32x32': true,
    '48x48': true,
    '64x64': true,
    '96x96': true,
    '128x128': true,
});

function getSizeModifiers<T>({ isSize: size }: Image<T>) {
    return {
        ...(isSize(size) ? { [`is-${size}`]: true } : {}),
    }
}

function getRatioModifiers<T>({ isRatio: ratio }: Image<T>) {
    return {
        ...(isRatio(ratio) ? { [`is-${ratio}`]: true } : {}),
    }
}

function removeImageProps<T>(props: Image<T>) {
    const {
        isSize,
        isRatio,
        ...rest } = props;
    return rest;
}

export const Image: React.SFC<Image<HTMLSpanElement>> = (props) => {
    const className = classNames(
        'image',
        {
            ...combineModifiers(props, getSizeModifiers, getRatioModifiers),
        },
        props.className,
    );

    const { children, src, ...HTMLProps } = getHTMLProps(props, removeImageProps);

    return (
        <figure {...HTMLProps} className={className}>
            <img src={src}  />
        </figure>
    )
}

export default withHelpersModifiers(Image);