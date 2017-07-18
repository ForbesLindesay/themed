Edit a number.  This input type supports positive and negative floating point numbers.

```example
class Form extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      color: '#663399',
    };
    this._onChange = e => {
      this.setState({[e.name]: e.value});
    };
  }
  render() {
    return (
      <form>
        <ColorInput name="color" label="Color" value={this.state.color} disableAlpha={true} onChange={this._onChange} />
        <pre style={{borderRadius: '1em', padding: '1em', border: '5px solid', borderColor: this.state.color}}><code>{JSON.stringify(this.state, null, '  ')}</code></pre>
      </form>
    );
  }
}

<Form />
```