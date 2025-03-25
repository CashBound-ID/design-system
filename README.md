## Getting Started
This repository contains our design system component. The main reason that we created this repository was to unify our shared components into a single source and make development easier without having to build atomic components. For development, engineers must install the following apps:

- [Node JS (v20)](https://nodejs.org/en/download/package-manager)
- PNPM
- [Makefile](https://formulae.brew.sh/formula/make)

After you have installed the library, below are the steps for running the apps on your local system:

- **Clone the Repository:**
<br>Before cloning the repository, make sure your local machine has previously installed the github.

  ```bash
  git clone https://github.com/CashBound-ID/design-system.git
  cd design-system
  ```

- **Install Dependencies & Husky:**
<br>After you clone the repository, the dependency is not immediately installed; you may install the mandatory dependencies and husky by running this command on your terminal.

  ```bash
  pnpm install
  ```

- **Run The Storybook:**
  <br> For running the storybook you can run this command; by default we will copy the development env and also running the apps using pnpm.

  ```bash
  pnpm run storybook
  ```

- **Open In Your Browser:**
   <br>You can visit http://localhost:6006 to see the app in browser.
