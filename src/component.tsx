import React from 'react';
//////////////// [frontend] component.tsx - 2. Use `useWalletContext` to login and setup your user!
import { useWalletContext, useEVMAddress } from '@coinbase/waas-sdk-web-react';

// a button to login your user.
// this will trigger Coinbase Managed Auth
export const LoginButton = () => {
  const c = useWalletContext();
  const { waas, user } = c;
  return (
    <>
      <button
        disabled={!waas || !!user}
        onClick={() => {
          waas!.login();
        }}
      >
        Login
      </button>
      <p>
        state=
        {JSON.stringify({
          context: c,
          'typeof waas': typeof waas,
          'typeof user': typeof user,
          waas: waas,
          user: user,
          '!waas': !waas,
          '!!user': !!user,
        })}
      </p>
    </>
  );
};

export const CreateOrResumeWalletButton = () => {
  const { waas, user, wallet, isCreatingWallet } = useWalletContext();

  return (
    <button
      disabled={!waas || !user || isCreatingWallet || !!wallet}
      onClick={async () => {
        // check if your user has a wallet, and restore it if they do!
        if (user!.hasWallet) {
          // restores the user's existing wallet.
          user!.restoreFromHostedBackup!();
        } else {
          // creates a new wallet.
          user!.create();
        }
      }}
    >
      {isCreatingWallet ? 'Creating wallet...' : 'Create/Resume Wallet'}
    </button>
  );
};

// a <p> to see your user's address.
export const ViewMyAddressLabel = () => {
  const { wallet } = useWalletContext();
  const address = useEVMAddress(wallet);
  return (
    <div>
      {address && <p>Your address is: {address.address}</p>}
      {!address && <p>No wallet.</p>}
    </div>
  );
};

// a button to logout your user.
export const LogoutButton = () => {
  const { waas, user } = useWalletContext();
  return (
    <button
      onClick={async () => {
        await waas?.logout();
      }}
      disabled={!user}
    >
      Logout
    </button>
  );
};
