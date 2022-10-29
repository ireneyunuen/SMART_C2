// SPDX-License-Identifier: MIT

// @author Irene Yunuen
// @name Token

/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
/// @param Documents a parameter just like in doxygen (must be followed by parameter name)

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20{
    constructor() ERC20("MyToken","MT"){
        _mint(msg.sender,100);
    }
}

pragma solidity ^0.8.9;
