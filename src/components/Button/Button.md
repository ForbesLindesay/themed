### Anchor Tag

If you provide it with an `href` it renders a link that is styled as a button.

```example
<Button href="#">This is a link</Button>
```

### Button Tag

If you pass in an onClick handler, you can use it like a normal button.

```example
<Button onClick={() => alert("Clicked")}>Click Me</Button>
```

You can also use it to submit forms by passing in `type="submit"`.

```example
<form onSubmit={e => {e.preventDefault(); alert('submitted');}}>
  <Button type="submit">Submit this form</Button>
</form>
```

### React Router Link Tag

If you set the "link renderer", themed will use it when rendering a button with a `to` property.

```js
import {Link} from 'react-router-dom';
import Button, {setLinkRenderer} from 'themed/Button';

// you only need to call this once, in your entire application
setLinkRenderer(props => <Link {...props} />);

const myLink = <Button to="/somewhere">Go Somewhere</Button>;
```

```example
<Button to="#">This is a link</Button>
```

### Variants

You can select from 7 different variants to expresss intent in your applicaiton.

```js
import {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
} from 'themed/Button';

function Buttons() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <PrimaryButton>Example</PrimaryButton>
        <SecondaryButton>Example</SecondaryButton>
        <SuccessButton>Example</SuccessButton>
        <InfoButton>Example</InfoButton>
        <WarningButton>Example</WarningButton>
        <DangerButton>Example</DangerButton>
        <LinkButton>Example</LinkButton>
      </div>
      <p>
        To put a <LinkButton display="inline" href="#">link</LinkButton> or
        <LinkButton display="inline" onClick={() => alert('Clicked!')}>button</LinkButton>
        in some text, make sure you mark it as `display="inline"`
      </p>
    </div>
  );
}
```

```example
const {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
} = require('./Button');

<div style={{display: 'flex', justifyContent: 'space-around'}}>
  <PrimaryButton>Primary</PrimaryButton>
  <SecondaryButton>Secondary</SecondaryButton>
  <SuccessButton>Success</SuccessButton>
  <InfoButton>Info</InfoButton>
  <WarningButton>Warning</WarningButton>
  <DangerButton>Danger</DangerButton>
  <LinkButton>Link</LinkButton>
</div>
```

### display="flex"

If you want your buttons to be full-width, give them `display="flex"`.

```example
const {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
} = require('./Button');

<div style={{display: 'flex', flexDirection: 'column'}}>
  <PrimaryButton display="flex" style={{marginBottom: '8px'}}>Primary</PrimaryButton>
  <SecondaryButton display="flex" style={{marginBottom: '8px'}}>Secondary</SecondaryButton>
  <SuccessButton display="flex" style={{marginBottom: '8px'}}>Success</SuccessButton>
  <InfoButton display="flex" style={{marginBottom: '8px'}}>Info</InfoButton>
  <WarningButton display="flex" style={{marginBottom: '8px'}}>Warning</WarningButton>
  <DangerButton display="flex" style={{marginBottom: '8px'}}>Danger</DangerButton>
  <LinkButton display="flex">Link</LinkButton>
</div>
```

### display="inline"

Link Buttons can be rendered inline in passages of text via:

```js
import {LinkButton} from 'themed/Button';

const btn = <LinkButton display="inline">Click Me!</LinkButton>;
```

```example
const {LinkButton} = require('./Button');

<p>
  You can put a <LinkButton display="inline" href="#">link</LinkButton> or
  <LinkButton display="inline" onClick={() => alert('Clicked!')}>button</LinkButton> inline
  in some text too! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Cras in tortor sapien. Sed eu aliquam mauris, id consectetur urna. Etiam ut rhoncus
  felis, sit amet tristique magna. Fusce sit amet feugiat dui. Integer consequat risus
  sit amet dolor sodales varius. Cras et commodo massa, quis egestas augue. Nulla aliquam
  maximus felis sed cursus. Sed eu nulla iaculis, varius mauris sed, laoreet quam. Etiam a
  iaculis tortor, nec suscipit sapien.
</p>
```

### Theme

You can theme various properties via the `Button` object in your theme.

Currently, you can theme:

 name             | type   | description
------------------|--------|-----------
activeBackground  | string | The background color when the button is being pressed. Defaults to slightly darker than the `background` when non-active.
background        | string | The background color. By default, this varies depending on the `variant` you pass into the button.
borderColor       | string | The border color. By default, the border matches the background, except for "secondary" buttons, where it is a light gray.
borderRadius      | string | The border radius, defaults to `.2em`
color             | string | The foground color, defaults to `white` except for "secondary" buttons, where it defaults to black.
focusBorderColor  | string | The border color when the button is focused. This is important for accessibility for keyboard only users. It defaults to a darker version of the normal `borderColor`.
shadowStyle       | `ButtonShadowStyle` | The shadow style lets you choose between raised, hovering and flat buttons.
padding           | string | This lets you customise the button's padding

#### Raised Buttons

```example
const ThemeProvider = require('themed/ThemeProvider').default;
const {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
  ButtonShadowStyle,
} = require('./Button');

const theme = {
  Button: {
    shadowStyle: ButtonShadowStyle.Raised,
  }
};

<ThemeProvider theme={theme}>
  <div>
    <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 16}}>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SuccessButton>Success</SuccessButton>
      <InfoButton>Info</InfoButton>
      <WarningButton>Warning</WarningButton>
      <DangerButton>Danger</DangerButton>
      <LinkButton>Link</LinkButton>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <PrimaryButton style={{fontSize: '4em'}}>Large Button</PrimaryButton>
    </div>
  </div>
</ThemeProvider>
```

#### Flat Buttons

```example
const ThemeProvider = require('themed/ThemeProvider').default;
const {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
  ButtonShadowStyle,
} = require('./Button');

const theme = {
  Button: {
    shadowStyle: ButtonShadowStyle.None,
  }
};

<ThemeProvider theme={theme}>
  <div>
    <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 16}}>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SuccessButton>Success</SuccessButton>
      <InfoButton>Info</InfoButton>
      <WarningButton>Warning</WarningButton>
      <DangerButton>Danger</DangerButton>
      <LinkButton>Link</LinkButton>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <PrimaryButton style={{fontSize: '4em'}}>Large Button</PrimaryButton>
    </div>
  </div>
</ThemeProvider>
```

#### Pill Buttons

```example
const ThemeProvider = require('themed/ThemeProvider').default;
const {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
  ButtonShadowStyle,
} = require('./Button');

const theme = {
  Button: {
    // set the border radius to a high enough value that the browsers will truncate it
    borderRadius: '1000em',
    shadowStyle: ButtonShadowStyle.SoftRaised,
  }
};

<ThemeProvider theme={theme}>
  <div>
    <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 16}}>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SuccessButton>Success</SuccessButton>
      <InfoButton>Info</InfoButton>
      <WarningButton>Warning</WarningButton>
      <DangerButton>Danger</DangerButton>
      <LinkButton>Link</LinkButton>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <PrimaryButton style={{fontSize: '4em'}}>Large Button</PrimaryButton>
    </div>
  </div>
</ThemeProvider>
```

#### Custom Colors

```example
const ThemeProvider = require('themed/ThemeProvider').default;
const {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
} = require('./Button');

const theme = {
  Button: {
    Primary: {
      background: 'black',
    },
    Success: {
      background: '#008000',
    },
    Info: {
      background: 'blue',
    },
    Warning: {
      background: 'orange',
    },
    Danger: {
      background: 'red',
    },
  },
};

<ThemeProvider theme={theme}>
  <div>
    <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 16}}>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SuccessButton>Success</SuccessButton>
      <InfoButton>Info</InfoButton>
      <WarningButton>Warning</WarningButton>
      <DangerButton>Danger</DangerButton>
      <LinkButton>Link</LinkButton>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <PrimaryButton style={{fontSize: '4em'}}>Large Button</PrimaryButton>
    </div>
  </div>
</ThemeProvider>
```
