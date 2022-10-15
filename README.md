# cypress-attributes

Cypress command to check multiple dom attributes of an element at the same time

## Installation

`npm install cypress-attributes`

## Configuration

Import the package in `cypress/support/commands.js`.

```javascript
import "cypress-attributes";
```

## Usage

```jsx
import Stepper from "./Stepper";

describe("<Stepper>", () => {
  it("should set default props", () => {
    cy.mount(
      <Stepper
        data-someattribute="attribute-value"
        id="mystepper"
        className="stepper"
      />
    );

    cy.get("#mystepper").attributes({
      "data-someattribute": "attribute-value",
      id: "mystepper",
      class: "stepper",
    });
  });
});
```
