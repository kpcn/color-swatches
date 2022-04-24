## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Instructions

For the server side. To add more color space, developer need to add constants, color converter function, inject the specific code into `generateColorSpace` function

1. add new constant into `constants.js` file
2. implement new color space converter function base on rgb values. in the `converter.js` file
3. inject new case into `switch` condition of `generateColorSpace` function from `index.js` file

#### Example

```javascript
// constants.js
export const SPACES = {
  hsv: 'hsv',
};

// converter.js
export const rgbToHsv = () => {
  // detail implementation here
};

// index.js
const generateColorSpace = (type, rgb) => {
  //...
  switch (type) {
    // ...
    case SPACES.hsv:
      return { ...rgbToHsv(red, green, blue), type: SPACES.hsv, hex };
    default:
      return {};
  }
};
```

For the client side. Developer need to add format description to show specific format type.

#### Example

```javascript
// helper.js
export const formatColorDescription = (color) => {
  switch (color.type) {
    // ...
    case SPACES.hsl:
    // implementation here.
    default:
      return '';
  }
};
```

## TODO

- [ ] Need to refactor randomness in api response
- [ ] Detail error handling
