'use client';

import { Keypair } from '@solana/web3.js';
import { useSelfCustodialFacebookProgram } from './self-custodial-facebook-data-access';

export function SelfCustodialFacebookCreate() {
  const { greet } = useSelfCustodialFacebookProgram();

  return (
    <button
      className="btn btn-xs lg:btn-md btn-primary"
      onClick={() => greet.mutateAsync(Keypair.generate())}
      disabled={greet.isPending}
    >
      Run program{greet.isPending && '...'}
    </button>
  );
}

export function SelfCustodialFacebookProgram() {
  const { getProgramAccount } = useSelfCustodialFacebookProgram();

  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!getProgramAccount.data?.value) {
    return (
      <div className="alert alert-info flex justify-center">
        <span>
          Program account not found. Make sure you have deployed the program and
          are on the correct cluster.
        </span>
      </div>
    );
  }
  return (
    <div className={'space-y-6'}>
      <pre>{JSON.stringify(getProgramAccount.data.value, null, 2)}</pre>
    </div>
  );
}
