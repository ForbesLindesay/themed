### Normal Mode

```example
const {TextInput, SearchInput, EmailInput, UrlInput, PasswordInput, DateInput, LocalTimeInput} = require('./TextInput');

class Form extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      myText: null,
      mySearch: null,
      myEmail: null,
      myURL: null,
      myPassword: null,
      myDate: null,
      myTime: null,
    };
    this._onChange = e => {
      this.setState({[e.name]: e.value});
    };
  }
  render() {
    return (
      <form>
        <TextInput
          label="Text field"
          name="myText"
          value={this.state.myText}
          errorMessage="Enter no more than 3 characters"
          hasError={this.state.myText && this.state.myText.length > 3}
          onChange={this._onChange}
        />
        <SearchInput label="Search field" name="mySearch" value={this.state.mySearch} onChange={this._onChange} />
        <EmailInput label="Email field" name="myEmail" value={this.state.myEmail} onChange={this._onChange} />
        <UrlInput label="URL field" name="myURL" value={this.state.myURL} onChange={this._onChange} />
        <PasswordInput label="Password field" name="myPassword" value={this.state.myPassword} onChange={this._onChange} />
        <DateInput label="Date field" name="myDate" value={this.state.myDate} onChange={this._onChange} />
        <LocalTimeInput label="Time field" name="myTime" value={this.state.myTime} onChange={this._onChange} />
        <pre><code>{JSON.stringify(this.state, null, '  ')}</code></pre>
      </form>
    );
  }
}

<Form />
```

### With a Suffix/prefix

```example
const {LocalTimeInput} = require('./TextInput');
class Form extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {slug: null, time: null};
    this._onChange = e => {
      this.setState({[e.name]: e.value});
    };
  }
  render() {
    return (
      <form>
        <TextInput
          label="Slug"
          name="slug"
          value={this.state.slug}
          suffix=".example.com"
          onChange={this._onChange}
        />
        <LocalTimeInput label="Time" name="time" value={this.state.time} prefix="Local Time: " onChange={this._onChange} />
      </form>
    );
  }
}

<Form />
```