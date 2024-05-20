'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { ExplorerLink } from '../cluster/cluster-ui';
import { WalletButton } from '../solana/solana-provider';
import { AppHero, ellipsify } from '../ui/ui-layout';
import { useSelfCustodialFacebookProgram } from './self-custodial-facebook-data-access';
import {
  SelfCustodialFacebookCreate,
  SelfCustodialFacebookProgram,
} from './self-custodial-facebook-ui';

export default function SelfCustodialFacebookFeature() {
  const { publicKey } = useWallet();
  const { programId } = useSelfCustodialFacebookProgram();

  return publicKey ? (
    <div>
      <AppHero
        title="SelfCustodialFacebook"
        subtitle={'Run the program by clicking the "Run program" button.'}
      >
        <p className="mb-6">
          <ExplorerLink
            path={`account/${programId}`}
            label={ellipsify(programId.toString())}
          />
        </p>
        <SelfCustodialFacebookCreate />
      </AppHero>
      <SelfCustodialFacebookProgram />
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[64px]">
        <div className="hero-content text-center">
          <WalletButton className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
}
