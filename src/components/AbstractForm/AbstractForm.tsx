import * as React from 'react';

export interface AbstractFormProps {
  action?: string;
  allowDefaultSubmit?: boolean;
  children: React.ReactNode;
  className?: string;
  method?: string;
  style?: React.CSSProperties;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onInvalid: (e: React.FormEvent<HTMLFormElement>) => void;
}

class AbstractForm extends React.Component<AbstractFormProps> {
  _onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      typeof e.currentTarget.checkValidity === 'function' &&
      !e.currentTarget.checkValidity()
    ) {
      e.preventDefault();
      return;
    }
    if (!this.props.allowDefaultSubmit) {
      e.preventDefault();
    }
    this.props.onSubmit(e);
  };
  _onInvalid = (e: React.FormEvent<HTMLFormElement>) => {
    if (this.props.onInvalid) {
      this.props.onInvalid(e);
    }
  };
  render() {
    return (
      <form
        action={this.props.action}
        className={this.props.className}
        method={this.props.method}
        style={this.props.style}
        onSubmit={this._onSubmit}
        onInvalid={this._onInvalid}
      >
        {this.props.children}
      </form>
    );
  }
}
export default AbstractForm;
