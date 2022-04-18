# react-table-card-responsive
Super responsive react table component

### Install
`npm i react-table-card-responsive@latest`
### How to use?
```javascript
// import
import StyledButton, { Sizes } from "react-table-card-responsive";

// usage
<StyledButton size={Sizes.md}>
    <span>Custom Button</span>
</StyledButton>
```

### Props
- size: `size` of the button can be `lg`, `md` or `sm`


## Contribute

### Testing Locally
Testing the package locally, before you release to npm registry is critical. You can easily test the changes to components while you develope, by linking the package to the ReactJS app using this package. Follow the steps described in this [tutorial](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/).
### Steps to Release
(commit any pending changes)
- Run `npm version <version>`. Eg. `npm version 0.1.0` or `npm version 0.1.0-beta.0`
- Run `npm run release` - builds the project for both `dev` and `prod` usage
- Run `npm publish` - Optionally add `--tag beta` attribute if releasing a beta version

### References
- [Blog](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/): for NPM package creation