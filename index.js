const connect = document.getElementById('connect');
const disconnect = document.getElementById('disconnect');
const change = document.getElementById('change')
const address = '';
const abi = {}

connect.addEventListener('click', () => login())
disconnect.addEventListener('click', () => logout())
change.addEventListener('click', () => changeNw())

console.log(window.userWalletAddress)

async function login(){

  if(window.ethereum){
    let flag = false

    await window.ethereum
                .request({ method: 'wallet_requestPermissions',
                           params: [
                                {
                               eth_accounts: {}
                                }
                              ]
                        })
                .then(flag = true)

    if(flag){

    const accounts = await window.ethereum
                           .request({ method: 'eth_requestAccounts' })
    ethereum.on('connect', info => console.log(`connect to${info}`))
    ethereum.on('disconnect', err => console.log(`connect to${err}`))
    window.userWalletAddress = accounts[0]
    
    // const provider = new ethers.providers.Web3Provider(window.ethereum);

    // const signer = provider.getSigner();

    // const contract = new ethers.Contract(address, abi, signer);

    // contract.on("Count", (method, count, caller) => {
    //   console.log("Event occured from smart contract: ", method, count, caller);

 // });
  }
  }else{
    console.log('install metamask')
  }


}

async function changeNw(){
  await window.ethereum.request({
    "id": 1,
    "jsonrpc": "2.0",
    "method": "wallet_switchEthereumChain",
    "params": [
      {
        "chainId": "0x1",
      }
    ]
  })
}

function logout(){
  window.userWalletAddress = null
}







