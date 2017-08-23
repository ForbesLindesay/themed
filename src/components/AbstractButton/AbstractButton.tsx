// @themable Button

import * as React from 'react';
import styled from 'styled-components';
import {StyledComponentClass} from 'styled-components';

export enum ButtonVariant {
  Primary,
  Secondary,
  Success,
  Info,
  Warning,
  Danger,
  Link,
  InlineLink,
}

// Typescript needs these names to be exported, because they are implicitly used
export {StyledComponentClass};

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  'data-test-id'?: string;
  to: string;
  replace?: boolean;
}
export type LinkRenderer = (props: LinkProps) => JSX.Element | null | false;

const defaultLink = ({to, replace, ...props}: LinkProps) => {
  return <a {...props} href={to} />;
};
let renderLink: LinkRenderer = defaultLink;

export function setLinkRenderer(renderer: LinkRenderer) {
  renderLink = renderer;
}

export interface AbstractButtonProps {
  children: React.ReactNode;
  className?: string;
  'data-test-id'?: string;
  href?: string;
  style?: React.CSSProperties;
  to?: string;
  type?: 'submit' | 'reset' | 'button';
  variant?: ButtonVariant;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseDown?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseUp?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseEnter?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseLeave?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
}

/**
 * Abstract button functionality so that the styling is only needed once
 * for links and buttons. Use this for buttons in navbars and other complex
 * components where you don't want the applicaiton's typical "button" style
 */
export class AbstractButton extends React.Component<AbstractButtonProps, {}> {
  static defaultProps: Partial<AbstractButtonProps> = {
    variant: ButtonVariant.Primary,
    type: 'button',
  };
  _onMouseUp = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.currentTarget.blur();
    if (this.props.onMouseDown) {
      this.props.onMouseDown(e);
    }
  };
  render() {
    const props = this.props;
    if (props.to) {
      return renderLink({
        className: props.className,
        'data-test-id': props['data-test-id'],
        style: props.style,
        to: props.to,
        onClick: this.props.onClick,
        onMouseDown: this.props.onMouseDown,
        onMouseUp: this._onMouseUp,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
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
          onClick={this.props.onClick}
          onMouseDown={this.props.onMouseDown}
          onMouseUp={this._onMouseUp}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
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
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this._onMouseUp}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        {props.children}
      </button>
    );
  }
}

export default styled(AbstractButton)`
  align-items: flex-start;
  background: lightgray;
  border: none;
  border-radius: .3em;
  box-sizing: border-box;
  color: inherit;
  cursor: default;
  display: inline-block;
  font: inherit;
  letter-spacing: normal;
  margin: 0em;
  padding: .4em .8em;
  text-align: center;
  text-decoration: inherit;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-transform: none;
  touch-action: manipulation;
  word-spacing: normal;

  &:focus, &:hover {
    outline: none;
    background: gray;
  }
  &:active {
    background: dimgray;
  }
`;
