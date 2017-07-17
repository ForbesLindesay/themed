Edit a number.  This input type supports positive and negative floating point numbers.

```example
class Form extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      myNumber: 42,
    };
    this._onChange = e => {
      this.setState({[e.name]: e.value});
    };
  }
  render() {
    return (
      <form>
        <NumberInput name="myNumber" label="Date Time" value={this.state.myNumber} onChange={this._onChange} />
        <pre><code>{JSON.stringify(this.state, null, '  ')}</code></pre>
      </form>
    );
  }
}

<Form />
```