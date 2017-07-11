import * as React from 'react';
import styled from '../../styled-components';
import Style from '../../Style';
import {StyledComponentClass} from '../../styled-components';
import Theme from '../../Theme';

// Typescript needs these names to be exported, because they are implicitly used
export {StyledComponentClass, Theme};

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  'data-test-id'?: string;
  to: string;
  replace?: boolean;
}
export type LinkRenderer = (props: LinkProps) => JSX.Element | null | false;

const defaultLink = ({to, replace, ...props}: LinkProps) => {
  return <a {...props} href={to}/>;
};
let renderLink: LinkRenderer = defaultLink;

export function setLinkRenderer(renderer: LinkRenderer) {
  renderLink = renderer;
}

export interface AbstractButtonProps {
  children: React.ReactNode,
  className?: string,
  'data-test-id'?: string,
  href?: string,
  style?: Style,
  to?: string,
  type?: 'submit' | 'reset' | 'button',
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
}
/**
 * Abstract button functionality so that the styling is only needed once
 * for links and buttons. You should rarely need to use this directly.
 */
export class AbstractButton extends React.Component<AbstractButtonProps, {}> {
  _onClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  _onMouseUp = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.currentTarget.blur();
  }
  render() {
    const props = this.props;
    if (props.to) {
      return renderLink({
        className: props.className,
        'data-test-id': props['data-test-id'],
        style: props.style,
        to: props.to,
        onClick: this._onClick,
        onMouseUp: this._onMouseUp,
        children: props.children,
      });
    }
    if (props.href) {
      return (
        <a
          className={props.className}
          data-test-id={props['data-test-id']}
          href={props.href}
          style={props.style}
          onClick={this._onClick}
          onMouseUp={this._onMouseUp}
        >
          {props.children}
        </a>
      );
    }
    return (
      <button
        className={props.className}
        data-test-id={props['data-test-id']}
        style={props.style}
        type={props.type || 'button'}
        onClick={this._onClick}
        onMouseUp={this._onMouseUp}
      >
        {props.children}
      </button>
    );
  }
}

export default styled(AbstractButton)`
  align-items: flex-start;
  background: white;
  border-color: inherit;
  border-image: initial;
  border-style: none;
  border-width: 2px;
  box-sizing: border-box;
  color: inherit;
  cursor: default;
  display: inline-block;
  font: 11px system-ui;
  letter-spacing: normal;
  margin: 0em;
  padding: 2px 6px 3px;
  text-align: center;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-transform: none;
  word-spacing: normal;
`;