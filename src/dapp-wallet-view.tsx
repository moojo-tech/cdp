import { useEVMAddress, useWalletContext } from "@coinbase/waas-sdk-web-react";
import { LoginButton, LogoutButton, ViewMyAddressLabel } from "./component";
import { SignTransactionButton } from "./sign-transaction-button";

// some component in your app which needs an embedded wallet.
//
// NOTE: You can use `address` to check whether your user is signed in + has an address.
export const DappWalletView = () => {
  const {wallet} = useWalletContext();
  const address = useEVMAddress(address);
 
  return (
    <>
      {!address && <LoginButton />}
      {address && <>
        <ViewMyAddressLabel />
        <SignTransactionButton />
        <LogoutButton />
      </>}
    </>
  )
}
