export type SelfCustodialFacebook = {
  "version": "0.1.0",
  "name": "self_custodial_facebook",
  "instructions": [
    {
      "name": "createFacebook",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "facebookAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "twitter",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateStatus",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "facebookAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newStatus",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteAccount",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "facebookAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "facebookAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "twitter",
            "type": "string"
          }
        ]
      }
    }
  ]
};

export const IDL: SelfCustodialFacebook = {
  "version": "0.1.0",
  "name": "self_custodial_facebook",
  "instructions": [
    {
      "name": "createFacebook",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "facebookAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "twitter",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateStatus",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "facebookAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newStatus",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteAccount",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "facebookAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "facebookAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "twitter",
            "type": "string"
          }
        ]
      }
    }
  ]
};
