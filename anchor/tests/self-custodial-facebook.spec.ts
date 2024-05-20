import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

import type { Program } from "@coral-xyz/anchor";
import type { SelfCustodialFacebook } from "../target/types/self_custodial_facebook";

describe("self-custodial-facebook", () => {
	const provider = anchor.AnchorProvider.env();
	anchor.setProvider(provider);
	const program = anchor.workspace
		.SelfCustodialFacebook as Program<SelfCustodialFacebook>;

	const [userFacebookAccountPDA] = PublicKey.findProgramAddressSync(
		[
			Buffer.from("self-custodial-facebook"),
			provider.wallet.publicKey.toBuffer(),
		],
		program.programId,
	);

	it("Creating a new account for user", async () => {
		const ix = await program.methods
			.createFacebook("Deep", "always tinkering", "0xdeep")
			.accounts({
				facebookAccount: userFacebookAccountPDA,
			});
		const userFacebookAddress = (await ix.pubkeys()).facebookAccount;
		console.log("User facebook address :: ", userFacebookAddress?.toString());
		// Create user's facebook address
		const tx = await ix.rpc();
		console.log("Your transaction signature", tx);
		// User Details
		if (userFacebookAddress) {
			const userDetails =
				await program.account.facebookAccount.fetch(userFacebookAddress);
			console.log(
				`Created a new account with following details \n Name :: ${userDetails.name} \n Status :: ${userDetails.status} \n Twitter :: ${userDetails.twitter}`,
			);
		}
	});

	it("Update My Status", async () => {
		const ix = await program.methods
			.updateStatus("Always tinkering with Anchor")
			.accounts({
				facebookAccount: userFacebookAccountPDA,
			});
		const userFacebookAddress = (await ix.pubkeys()).facebookAccount;
		// Update user's status
		const tx = await ix.rpc();
		console.log("Your transaction signature", tx);
		// User Details
		if (userFacebookAddress) {
			const userDetails =
				await program.account.facebookAccount.fetch(userFacebookAddress);
			console.log(
				`Updated status to :: ${userDetails.status} \n Name :: ${userDetails.name} \n Twitter :: ${userDetails.twitter}`,
			);
		}
	});

	it("Close My Facebook Account", async () => {
		const ix = await program.methods.deleteAccount().accounts({
			facebookAccount: userFacebookAccountPDA,
		});
		const userFacebookAddress = (await ix.pubkeys()).facebookAccount;

		if (userFacebookAddress) {
			// User Details
			const userDetails =
				await program.account.facebookAccount.fetch(userFacebookAddress);
			console.log(
				`Closing account with following details \n Name :: ${userDetails.name} \n Status :: ${userDetails.status} \n Twitter :: ${userDetails.twitter}`,
			);
		}

		// Close user's account
		const tx = await ix.rpc();
		console.log("Your transaction signature", tx);
	});
});
