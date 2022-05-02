const connect = document.getElementById('connect')
const disconnect = document.getElementById('disconnect')

connect.addEventListener('click', () => login())
disconnect.addEventListener('click', () => logout())

console.log(window.userWalletAddress)

async function login(){

  let accounts;

  await window.ethereum
              .request({ method: 'wallet_requestPermissions',
                         params: [
                              {
                             eth_accounts: {}
                              }
                            ]
                      })
              .catch(accounts = await window.ethereum
                                           .request({ method: 'eth_requestAccounts' }))

  window.userWalletAddress = accounts[0]
}

function logout(){
  window.userWalletAddress = null
}







