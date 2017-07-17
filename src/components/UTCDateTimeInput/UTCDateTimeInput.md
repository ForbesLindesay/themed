UTCDateTime displays a date time editor in the user's local time zone but stores a UTC date time.

```example
class Form extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      myDateTime: null,
      summer: '2017-06-01T13:00:00.000Z',
      winter: '2017-12-01T13:00:00.000Z',
    };
    this._onChange = e => {
      this.setState({[e.name]: e.value});
    };
  }
  render() {
    return (
      <form>
        <UTCDateTimeInput name="myDateTime" label="Date Time" value={this.state.myDateTime} onChange={this._onChange} />
        <UTCDateTimeInput name="summer" label="Summer Time" value={this.state.summer} onChange={this._onChange} />
        <UTCDateTimeInput name="winter" label="Winter Time" value={this.state.winter} onChange={this._onChange} />
        <pre><code>{JSON.stringify(this.state, null, '  ')}</code></pre>
      </form>
    );
  }
}

<Form />
```