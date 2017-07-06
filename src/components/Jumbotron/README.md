### Basic Example

```example
<Jumbotron>
  <h1 style={{fontSize: '2em'}}>Jumbotron</h1>
  <p>In a jumbotron, everything is bigger</p>
</Jumbotron>
```

### Extra Big Example

If you increase the font size, everything else increases in proportion.

```example
<Jumbotron style={{fontSize: '4em'}}>Example</Jumbotron>
```

### Theme

You can theme various properties via the `Jumbotron` object in your theme.

Currently, you can theme:

 name           | type   | description
----------------|--------|-----------
fontSize        | string | The font-size relative to the parent, defaults to `1.5em`.
padding         | string | The padding inside the box.
backgroundColor | string | The background color defaults to a light gray color.
borderRadius    | string | The border radius, defaults to `.2em`, which looks very nearly square

#### Rounded Jumbotron

```example
const ThemeProvider = require('themed/ThemeProvider').default;

const theme = {
  Jumbotron: {
    borderRadius: '2em',
  }
};

<ThemeProvider theme={theme}>
  <div>
    <Jumbotron style={{marginBottom: '16px'}}>Normal size but with big corners</Jumbotron>
    <Jumbotron style={{fontSize: '4em'}}>Eveng bigger jumbotron</Jumbotron>
  </div>
</ThemeProvider>
```