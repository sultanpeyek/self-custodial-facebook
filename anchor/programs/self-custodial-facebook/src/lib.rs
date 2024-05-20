use anchor_lang::prelude::*;

declare_id!("aAcURKEiE1kD7brKCFjDPzbvvXAV9M7k1CWJVrEyLC5");

#[program]
pub mod self_custodial_facebook {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
