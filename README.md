# Coinbase Embedded Wallet Sandbox

This project serves as a debugging tool for the Coinbase Embedded Wallet integration, based on the official [quickstart guide](https://docs.cdp.coinbase.com/embedded-wallets/docs/quickstart).

## Overview

Built with React, this application follows, almost verbatim, the code snippets from Coinbase's Embedded Wallet quickstart guide. Some additional code was added to gain visibility into the value retruned from `useWalletContext()`.


## Setup Instructions

Follow these steps to set up the project:

1. Clone the repository:
   ```
   git clone https://github.com/moojo-tech/cdp-embedded-wallet-sandbox.git
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


