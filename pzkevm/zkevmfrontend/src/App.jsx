import { useContract, Web3Button } from "@thirdweb-dev/react";

const contractAddress = "0x66CC8aB6a3bFD1e1510d4ED2115b26E2f13fdcfC";

export default function Home() {
  const { contract } = useContract(contractAddress);

  return (
    <Web3Button
      contractAddress={contractAddress}
      action={async (contract) => {
        return await contract.erc721.mint({
          name: "My zkEVM NFT",
          description: "I just minted an NFT on the Polygon zkEVM!",
          image: "your-image-url-here",
        });
      }}
    >
      Mint NFT
    </Web3Button>
  );
}

// import { ConnectWallet, useContract } from "@thirdweb-dev/react";
// import "./styles/Home.css";
// const contract_address = "0x6F08151EB0DFdfe1809747EDf3150928C24837b5";

// export default function Home() {
//   const { contract, isLoading, error } = useContract("{{contract_address}}");
//   return (
//     <div className="container">
//       <main className="main">
//         <h1 className="title">
//           Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
//         </h1>

//         <p className="description">
//           Get started by configuring your desired network in{" "}
//           <code className="code">src/main.jsx</code>, then modify the{" "}
//           <code className="code">src/App.jsx</code> file!
//         </p>

//         <div className="connect">
//           <ConnectWallet dropdownPosition={{
//             align: 'center',
//             side: 'bottom'
//           }} />
//         </div>

//         <div className="grid">
//           <a href="https://portal.thirdweb.com/" className="card">
//             <h2>Portal &rarr;</h2>
//             <p>
//               Guides, references and resources that will help you build with
//               thirdweb.
//             </p>
//           </a>

//           <a href="https://thirdweb.com/dashboard" className="card">
//             <h2>Dashboard &rarr;</h2>
//             <p>
//               Deploy, configure and manage your smart contracts from the
//               dashboard.
//             </p>
//           </a>

//           <a href="https://portal.thirdweb.com/templates" className="card">
//             <h2>Templates &rarr;</h2>
//             <p>
//               Discover and clone template projects showcasing thirdweb features.
//             </p>
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
