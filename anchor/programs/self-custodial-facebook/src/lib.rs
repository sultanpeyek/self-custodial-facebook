use anchor_lang::prelude::*;

declare_id!("aAcURKEiE1kD7brKCFjDPzbvvXAV9M7k1CWJVrEyLC5");

#[program]
pub mod self_custodial_facebook {
    use super::*;

    pub fn create_facebook(
        ctx: Context<Initialize>,
        name: String,
        status: String,
        twitter: String,
    ) -> Result<()> {
        let user_account_data = &mut ctx.accounts.facebook_account;
        user_account_data.bump = ctx.bumps.facebook_account;

        user_account_data.authority = *ctx.accounts.signer.key;
        user_account_data.name= name.to_owned();
        user_account_data.status= status.to_owned();
        user_account_data.twitter= twitter.to_owned();
        msg!("Created a new account with following details
            Name :: {0}
            Status :: {1}
            Twitter :: {2}
        ", name, status, twitter);
        Ok(())
    }

    pub fn update_status(ctx: Context<Update>, new_status: String) -> Result<()> {
        msg!("Updating status from :: {0} -> to :: {1}", &ctx.accounts.facebook_account.status, &new_status);
        ctx.accounts.facebook_account.status = new_status;
        Ok(())
    }

    pub fn delete_account(_ctx: Context<Close>) -> Result<()> {
        msg!("Account Closed successfully");
        Ok(())
    }
}


#[account]
#[derive(InitSpace)] 
pub struct FacebookAccount {
    pub authority: Pubkey, // Authority of this account
    pub bump: u8,
    #[max_len(10)]
    pub name: String,
    #[max_len(100)]
    pub status: String,
    #[max_len(10)]
    pub twitter: String
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // User's account
    #[account(mut)]
    pub signer: Signer<'info>,
    // Creating a new account for every user with seed of their wallet address.
    // This constraint allow one-account per wallet address
    #[account(
        init, 
        payer = signer, 
        space = 8 + FacebookAccount::INIT_SPACE, 
        seeds = ["self-custodial-facebook".as_bytes(), signer.key().as_ref()], 
        bump,
    )] 
    pub facebook_account: Account<'info, FacebookAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        mut,
        seeds = ["self-custodial-facebook".as_bytes(), signer.key().as_ref()],
        bump = facebook_account.bump,
        realloc = 8 + FacebookAccount::INIT_SPACE,
        realloc::payer = signer,
        realloc::zero = true
    )]
    pub facebook_account: Account<'info, FacebookAccount>,
    pub system_program: Program<'info, System>,
}


#[derive(Accounts)]
pub struct Close<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        mut,
        seeds = ["self-custodial-facebook".as_bytes(), signer.key().as_ref()],
        bump = facebook_account.bump,
        close = signer
    )]
    pub facebook_account: Account<'info, FacebookAccount>
}