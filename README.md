# Coinbase Embedded Wallet Quickstart Debug

This project is an implementation of the Coinbase Embedded Wallet quickstart guide, created to debug issues with the integration.

## Project Overview

This React application demonstrates the integration of Coinbase's Embedded Wallet SDK. It includes components for user authentication, wallet creation/restoration, and basic transaction signing. This project follows the quickstart guide provided by Coinbase, which can be found at [https://docs.cdp.coinbase.com/embedded-wallets/docs/quickstart](https://docs.cdp.coinbase.com/embedded-wallets/docs/quickstart).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/moojo-tech/cdp.git
   ```

2. Install dependencies:
   ```
   yarn --frozen-lockfile
   ```

3. Start the development server:
   ```
   yarn start
   ```

The app will run on the local machine at port `3000`.

Important: The CDP project ID is taken from the hash of the URL. Specifically, if you use https://127.0.0.1:96116f00-370c-4fdb-ba50-cf88d63ab9a6 the app will take `96116f00-370c-4fdb-ba50-cf88d63ab9a6` as the project ID value.

