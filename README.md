# Coinbase Embedded Wallet Integration Debugger

This project serves as a debugging tool for the Coinbase Embedded Wallet integration, based on their official quickstart guide.

## Overview

Built with React, this application showcases the implementation of Coinbase's Embedded Wallet SDK. It features user authentication, wallet management, and transaction signing capabilities. The project adheres to the guidelines outlined in the [Coinbase quickstart documentation](https://docs.cdp.coinbase.com/embedded-wallets/docs/quickstart).

## Setup Instructions

Follow these steps to set up the project:

1. Clone the repository:
   ```
   git clone https://github.com/moojo-tech/cdp.git
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
> The CDP project ID is extracted from the URL hash. For example, using `https://127.0.0.1:96116f00-370c-4fdb-ba50-cf88d63ab9a6` will set the project ID to `96116f00-370c-4fdb-ba50-cf88d63ab9a6`.

