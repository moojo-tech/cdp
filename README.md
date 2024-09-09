# Coinbase Embedded Wallet Sandbox

This project serves as a debugging tool for the Coinbase Embedded Wallet integration, based on the official [quickstart guide](https://docs.cdp.coinbase.com/embedded-wallets/docs/quickstart).

## Overview

Built with React, this application follows, almost verbatim, the code snippets from Coinbase's Embedded Wallet quickstart guide. Some additional code was added to gain visibility into the value retruned from `useWalletContext()`.


## Local setup/Usage

1. Clone the repository and CD to the repo's root dir:
    ```
    git clone git@github.com:moojo-tech/cdp-embedded-wallet-sandbox.git
    cd cdp-embedded-wallet-sandbox
    ```

2. Install dependencies:
   ```
   yarn --frozen-lockfile
   ```

3. Launch the development server:
   ```
   yarn start
   ```

The application will be accessible at `http://127.0.0.1:3000`.

> [!IMPORTANT]
> The CDP project ID is extracted from the URL hash. if your CDP project ID is `96116f00-370c-4fdb-ba50-cf88d63ab9a6` you should open point your browser to this URL: `https://127.0.0.1:3000#96116f00-370c-4fdb-ba50-cf88d63ab9a6`.


## Deployment

The application is deployed on github-pages at https://moojo-tech.github.io/cdp-embedded-wallet-sandbox/. 

> [!IMPORTANT]
> The CDP project ID is extracted from the URL hash. If your CDP project ID is `96116f00-370c-4fdb-ba50-cf88d63ab9a6` you should open this URL in your browser: https://moojo-tech.github.io/cdp-embedded-wallet-sandbox/#96116f00-370c-4fdb-ba50-cf88d63ab9a6.
