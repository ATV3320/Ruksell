// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC20SignatureMintVote.sol";

contract yahoo is ERC20SignatureMintVote {
      constructor(
        string memory _name,
        string memory _symbol,
        address _primarySaleRecipient
    )
        ERC20SignatureMintVote(
            _name,
            _symbol,
            _primarySaleRecipient
        )
    {}
}