// Here we export some useful types and functions for interacting with the Anchor program.
import { PublicKey } from '@solana/web3.js';
import type { SelfCustodialFacebook } from '../target/types/self_custodial_facebook';
import { IDL as SelfCustodialFacebookIDL } from '../target/types/self_custodial_facebook';

// Re-export the generated IDL and type
export { SelfCustodialFacebook, SelfCustodialFacebookIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const programId = new PublicKey(
  'aAcURKEiE1kD7brKCFjDPzbvvXAV9M7k1CWJVrEyLC5'
);
