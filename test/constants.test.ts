import { INIT_CODE_HASH } from '../src/constants'
import { keccak256 } from '@ethersproject/solidity'
//change
const COMPUTED_INIT_CODE_HASH = keccak256(
  ['bytes'],
  [
    '0x60806040526001600c5534801561001557600080fd5b5060408051808201825260088152675769676f204c507360c01b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f7469c90d2e4594c31e4d0a08bd15c2bef57993dfe37840f3c72adc9d6b54abfc818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b03191633179055612b52806101066000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a7146105da578063d505accf146105e2578063dd62ed3e14610640578063fff6cae91461067b576101b9565b8063ba9a7a5614610597578063bc25cf771461059f578063c45a0155146105d2576101b9565b80637ecebe00116100d35780637ecebe00146104d757806389afcb441461050a57806395d89b4114610556578063a9059cbb1461055e576101b9565b80636a6278421461046957806370a082311461049c5780637464fc3d146104cf576101b9565b806323b872dd116101665780633644e515116101405780633644e51514610416578063485cc9551461041e5780635909c0d5146104595780635a3d549314610461576101b9565b806323b872dd146103ad57806330adf81f146103f0578063313ce567146103f8576101b9565b8063095ea7b311610197578063095ea7b3146103155780630dfe16811461036257806318160ddd14610393576101b9565b8063022c0d9f146101be57806306fdde03146102595780630902f1ac146102d6575b600080fd5b610257600480360360808110156101d457600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff604083013516919081019060808101606082013564010000000081111561021857600080fd5b82018360208201111561022a57600080fd5b8035906020019184600183028401116401000000008311171561024c57600080fd5b509092509050610683565b005b610261610d2e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561029b578181015183820152602001610283565b50505050905090810190601f1680156102c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102de610d67565b604080516dffffffffffffffffffffffffffff948516815292909316602083015263ffffffff168183015290519081900360600190f35b61034e6004803603604081101561032b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610dbc565b604080519115158252519081900360200190f35b61036a610dd3565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61039b610def565b60408051918252519081900360200190f35b61034e600480360360608110156103c357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610df5565b61039b610ece565b610400610ef2565b6040805160ff9092168252519081900360200190f35b61039b610ef7565b6102576004803603604081101561043457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610efd565b61039b610fd6565b61039b610fdc565b61039b6004803603602081101561047f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610fe2565b61039b600480360360208110156104b257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611378565b61039b61138a565b61039b600480360360208110156104ed57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611390565b61053d6004803603602081101561052057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166113a2565b6040805192835260208301919091528051918290030190f35b61026161182d565b61034e6004803603604081101561057457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611866565b61039b611873565b610257600480360360208110156105b557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611879565b61036a611a66565b61036a611a82565b610257600480360360e08110156105f857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611a9e565b61039b6004803603604081101561065657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611d6a565b610257611d87565b600c546001146106f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5769676f737761703a204c4f434b454400000000000000000000000000000000604482015290519081900360640190fd5b6000600c55841515806107075750600084115b61075c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612ad66024913960400191505060405180910390fd5b600080610767610d67565b5091509150816dffffffffffffffffffffffffffff168710801561079a5750806dffffffffffffffffffffffffffff1686105b61080557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5769676f737761703a20494e53554646494349454e545f4c4951554944495459604482015290519081900360640190fd5b600654600754600091829173ffffffffffffffffffffffffffffffffffffffff91821691908116908916821480159061086a57508073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614155b6108d557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5769676f737761703a20494e56414c49445f544f000000000000000000000000604482015290519081900360640190fd5b8a156108e6576108e6828a8d611f6d565b89156108f7576108f7818a8c611f6d565b86156109c3578873ffffffffffffffffffffffffffffffffffffffff1663d4f9a2ee338d8d8c8c6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b1580156109aa57600080fd5b505af11580156109be573d6000803e3d6000fd5b505050505b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8416916370a08231916024808301926020929190829003018186803b158015610a2f57600080fd5b505afa158015610a43573d6000803e3d6000fd5b505050506040513d6020811015610a5957600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191955073ffffffffffffffffffffffffffffffffffffffff8316916370a0823191602480820192602092909190829003018186803b158015610acb57600080fd5b505afa158015610adf573d6000803e3d6000fd5b505050506040513d6020811015610af557600080fd5b5051925060009150506dffffffffffffffffffffffffffff85168a90038311610b1f576000610b35565b89856dffffffffffffffffffffffffffff160383035b9050600089856dffffffffffffffffffffffffffff16038311610b59576000610b6f565b89856dffffffffffffffffffffffffffff160383035b90506000821180610b805750600081115b610bd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612afa6023913960400191505060405180910390fd5b6000610bf7610be584601961217a565b610bf18761271061217a565b90612200565b90506000610c09610be584601961217a565b9050610c366305f5e100610c306dffffffffffffffffffffffffffff8b8116908b1661217a565b9061217a565b610c40838361217a565b1015610cad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5769676f737761703a204b000000000000000000000000000000000000000000604482015290519081900360640190fd5b5050610cbb84848888612272565b60408051838152602081018390528082018d9052606081018c9052905173ffffffffffffffffffffffffffffffffffffffff8b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600881526020017f5769676f204c507300000000000000000000000000000000000000000000000081525081565b6008546dffffffffffffffffffffffffffff808216926e0100000000000000000000000000008304909116917c0100000000000000000000000000000000000000000000000000000000900463ffffffff1690565b6000610dc9338484612528565b5060015b92915050565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14610eb95773ffffffffffffffffffffffffffffffffffffffff84166000908152600260209081526040808320338452909152902054610e879083612200565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602090815260408083203384529091529020555b610ec4848484612597565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b60055473ffffffffffffffffffffffffffffffffffffffff163314610f8357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5769676f737761703a20464f5242494444454e00000000000000000000000000604482015290519081900360640190fd5b6006805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c5460011461105557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5769676f737761703a204c4f434b454400000000000000000000000000000000604482015290519081900360640190fd5b6000600c81905580611065610d67565b50600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905193955091935060009273ffffffffffffffffffffffffffffffffffffffff909116916370a08231916024808301926020929190829003018186803b1580156110df57600080fd5b505afa1580156110f3573d6000803e3d6000fd5b505050506040513d602081101561110957600080fd5b5051600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905192935060009273ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561118257600080fd5b505afa158015611196573d6000803e3d6000fd5b505050506040513d60208110156111ac57600080fd5b5051905060006111cc836dffffffffffffffffffffffffffff8716612200565b905060006111ea836dffffffffffffffffffffffffffff8716612200565b905060006111f8878761266c565b6000549091508061122f5761121b6103e8610bf1611216878761217a565b6127e9565b985061122a60006103e861283b565b611280565b61127d6dffffffffffffffffffffffffffff891661124d868461217a565b8161125457fe5b046dffffffffffffffffffffffffffff8916611270868561217a565b8161127757fe5b046128df565b98505b600089116112d9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612a886027913960400191505060405180910390fd5b6112e38a8a61283b565b6112ef86868a8a612272565b811561132b57600854611327906dffffffffffffffffffffffffffff808216916e01000000000000000000000000000090041661217a565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c5460011461141657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5769676f737761703a204c4f434b454400000000000000000000000000000000604482015290519081900360640190fd5b6000600c81905580611426610d67565b50600654600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905194965092945073ffffffffffffffffffffffffffffffffffffffff9182169391169160009184916370a08231916024808301926020929190829003018186803b1580156114a857600080fd5b505afa1580156114bc573d6000803e3d6000fd5b505050506040513d60208110156114d257600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925060009173ffffffffffffffffffffffffffffffffffffffff8516916370a08231916024808301926020929190829003018186803b15801561154657600080fd5b505afa15801561155a573d6000803e3d6000fd5b505050506040513d602081101561157057600080fd5b50513060009081526001602052604081205491925061158f888861266c565b600054909150806115a0848761217a565b816115a757fe5b049a50806115b5848661217a565b816115bc57fe5b04995060008b1180156115cf575060008a115b611624576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612aaf6027913960400191505060405180910390fd5b61162e30846128f7565b611639878d8d611f6d565b611644868d8c611f6d565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8916916370a08231916024808301926020929190829003018186803b1580156116b057600080fd5b505afa1580156116c4573d6000803e3d6000fd5b505050506040513d60208110156116da57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191965073ffffffffffffffffffffffffffffffffffffffff8816916370a0823191602480820192602092909190829003018186803b15801561174c57600080fd5b505afa158015611760573d6000803e3d6000fd5b505050506040513d602081101561177657600080fd5b5051935061178685858b8b612272565b81156117c2576008546117be906dffffffffffffffffffffffffffff808216916e01000000000000000000000000000090041661217a565b600b555b604080518c8152602081018c9052815173ffffffffffffffffffffffffffffffffffffffff8f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600781526020017f5769676f2d4c500000000000000000000000000000000000000000000000000081525081565b6000610dc9338484612597565b6103e881565b600c546001146118ea57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5769676f737761703a204c4f434b454400000000000000000000000000000000604482015290519081900360640190fd5b6000600c55600654600754600854604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff94851694909316926119c092859287926119bb926dffffffffffffffffffffffffffff169185916370a0823191602480820192602092909190829003018186803b15801561198957600080fd5b505afa15801561199d573d6000803e3d6000fd5b505050506040513d60208110156119b357600080fd5b505190612200565b611f6d565b611a5c81846119bb6008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561198957600080fd5b50506001600c5550565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b42841015611b0d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f5769676f737761703a2045585049524544000000000000000000000000000000604482015290519081900360640190fd5b60035473ffffffffffffffffffffffffffffffffffffffff80891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e2808201937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa158015611c6e573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811615801590611ce957508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611d5457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f5769676f737761703a20494e56414c49445f5349474e41545552450000000000604482015290519081900360640190fd5b611d5f898989612528565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611df857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5769676f737761703a204c4f434b454400000000000000000000000000000000604482015290519081900360640190fd5b6000600c55600654604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051611f669273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015611e6f57600080fd5b505afa158015611e83573d6000803e3d6000fd5b505050506040513d6020811015611e9957600080fd5b5051600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015611f0c57600080fd5b505afa158015611f20573d6000803e3d6000fd5b505050506040513d6020811015611f3657600080fd5b50516008546dffffffffffffffffffffffffffff808216916e010000000000000000000000000000900416612272565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b6020831061207357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612036565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146120d5576040519150601f19603f3d011682016040523d82523d6000602084013e6120da565b606091505b5091509150818015612108575080511580612108575080806020019051602081101561210557600080fd5b50515b61217357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f5769676f737761703a205452414e534645525f4641494c454400000000000000604482015290519081900360640190fd5b5050505050565b60008115806121955750508082028282828161219257fe5b04145b610dcd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b80820382811115610dcd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6dffffffffffffffffffffffffffff841180159061229e57506dffffffffffffffffffffffffffff8311155b61230957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f5769676f737761703a204f564552464c4f570000000000000000000000000000604482015290519081900360640190fd5b60085463ffffffff428116917c01000000000000000000000000000000000000000000000000000000009004811682039081161580159061235957506dffffffffffffffffffffffffffff841615155b801561237457506dffffffffffffffffffffffffffff831615155b1561241e578063ffffffff166123b18561238d866129b0565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16906129d4565b600980547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff929092169290920201905563ffffffff81166123f18461238d876129b0565b600a80547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff92909216929092020190555b600880547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166dffffffffffffffffffffffffffff888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff166e0100000000000000000000000000008883168102919091177bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167c010000000000000000000000000000000000000000000000000000000063ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260409020546125c79082612200565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526001602052604080822093909355908416815220546126039082612a15565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b1580156126d757600080fd5b505afa1580156126eb573d6000803e3d6000fd5b505050506040513d602081101561270157600080fd5b5051600b5473ffffffffffffffffffffffffffffffffffffffff82161580159450919250906127d55780156127d05760006127526112166dffffffffffffffffffffffffffff88811690881661217a565b9050600061275f836127e9565b9050808211156127cd5760006127866008610c3061277d8686612200565b6000549061217a565b905060006127a961279884600861217a565b6127a386601161217a565b90612a15565b905060008183816127b657fe5b04905080156127c9576127c9878261283b565b5050505b50505b6127e1565b80156127e1576000600b555b505092915050565b6000600382111561282c575080600160028204015b818110156128265780915060028182858161281557fe5b04018161281e57fe5b0490506127fe565b50612836565b8115612836575060015b919050565b6000546128489082612a15565b600090815573ffffffffffffffffffffffffffffffffffffffff831681526001602052604090205461287a9082612a15565b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106128ee57816128f0565b825b9392505050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600160205260409020546129279082612200565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260408120919091555461295b9082612200565b600090815560408051838152905173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6dffffffffffffffffffffffffffff166e0100000000000000000000000000000290565b60006dffffffffffffffffffffffffffff82167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff841681612a0d57fe5b049392505050565b80820182811015610dcd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfe5769676f737761703a20494e53554646494349454e545f4c49515549444954595f4d494e5445445769676f737761703a20494e53554646494349454e545f4c49515549444954595f4255524e45445769676f737761703a20494e53554646494349454e545f4f55545055545f414d4f554e545769676f737761703a20494e53554646494349454e545f494e5055545f414d4f554e54a2646970667358221220421372349836874dee00c9fd47883cfc4f214fa751fca11514f2b331a3cff7bb64736f6c634300060c0033'
  ]
)

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
