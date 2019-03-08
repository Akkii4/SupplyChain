import "../stylesheets/app.css";

import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
import {default as CryptoJS} from 'crypto-js'; 

var accounts;
var defaultaccount;
var SupplyChainContract;
var Supplychaincode;
window.App = {
  start: function() {
    var self = this; 

    web3.eth.getAccounts(function(error, accounts) {
      if (error != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accounts.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured properly.");
        return;
      }
      web3.eth.defaultAccount=accounts[0];
      defaultaccount = web3.eth.defaultAccount;
        SupplyChainContract = web3.eth.contract([{"constant": false,"inputs": [{"name": "LocationId","type": "uint256"},{"name": "Name","type": "string"},{"name": "Secret","type": "string"}],"name": "AddNewLocation","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "GetTrailCount","outputs": [{"name": "","type": "uint8"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "TrailNo","type": "uint8"}],"name": "GetLocation","outputs": [{"name": "","type": "string"},{"name": "","type": "uint256"},{"name": "","type": "uint256"},{"name": "","type": "uint256"},{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"}]);
        Supplychaincode = "0x60806040526000600160006101000a81548160ff021916908360ff16021790555034801561002c57600080fd5b506107498061003c6000396000f3fe608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063988bbca31461005c578063bbe42af8146101c5578063e3fd1ec2146101f6575b600080fd5b34801561006857600080fd5b506101c36004803603606081101561007f57600080fd5b8101908080359060200190929190803590602001906401000000008111156100a657600080fd5b8201836020820111156100b857600080fd5b803590602001918460018302840111640100000000831117156100da57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561013d57600080fd5b82018360208201111561014f57600080fd5b8035906020019184600183028401116401000000008311171561017157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061032e565b005b3480156101d157600080fd5b506101da610462565b604051808260ff1660ff16815260200191505060405180910390f35b34801561020257600080fd5b506102326004803603602081101561021957600080fd5b81019080803560ff169060200190929190505050610479565b604051808060200186815260200185815260200184815260200180602001838103835288818151815260200191508051906020019080838360005b8381101561028857808201518184015260208101905061026d565b50505050905090810190601f1680156102b55780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102ee5780820151818401526020810190506102d3565b50505050905090810190601f16801561031b5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610336610648565b82816000018190525083816020018181525050818160800181905250428160600181815250506000600160009054906101000a900460ff1660ff161415156103aa57600080600160009054906101000a900460ff1660ff168152602001908152602001600020600101548160400181815250505b80600080600160009054906101000a900460ff1660ff16815260200190815260200160002060008201518160000190805190602001906103eb929190610678565b506020820151816001015560408201518160020155606082015181600301556080820151816004019080519060200190610426929190610678565b509050506001600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055505050505050565b6000600160009054906101000a900460ff16905090565b6060600080600060606000808760ff1681526020019081526020016000206000016000808860ff168152602001908152602001600020600101546000808960ff168152602001908152602001600020600201546000808a60ff168152602001908152602001600020600301546000808b60ff168152602001908152602001600020600401848054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105925780601f1061056757610100808354040283529160200191610592565b820191906000526020600020905b81548152906001019060200180831161057557829003601f168201915b50505050509450808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561062e5780601f106106035761010080835404028352916020019161062e565b820191906000526020600020905b81548152906001019060200180831161061157829003601f168201915b505050505090509450945094509450945091939590929450565b60a06040519081016040528060608152602001600081526020016000815260200160008152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106b957805160ff19168380011785556106e7565b828001600101855582156106e7579182015b828111156106e65782518255916020019190600101906106cb565b5b5090506106f491906106f8565b5090565b61071a91905b808211156107165760008160009055506001016106fe565b5090565b9056fea165627a7a72305820e030cbc440e1fd12b0a69043605ed10fcab43d6272efbda7f75ffac4235e6e7b0029";

      });
  },

  createContract: function(){
    SupplyChainContract.new("",{from:defaultaccount, data:Supplychaincode, gas:3000000}, function(error,deployedContract){
        if(error){
          console.log(error);
        }
        else if(deployedContract.address){
           document.getElementById("locationId").value='';
             document.getElementById("secret").value='';
             document.getElementById("locationName").value='';
             document.getElementById("passPhrase").value='';
          document.getElementById("contractAddress").value=deployedContract.address;
        }
    });
  },
  

  addNewLocation: function(){
    var contractAddress = document.getElementById("contractAddress").value;
    var deployedSupplyChain = SupplyChainContract.at(contractAddress);
    var locationId = document.getElementById("locationId").value;
    var locationName = document.getElementById("locationName").value;
    var locationSecret = document.getElementById("secret").value;
    var passPhrase = document.getElementById("passPhrase").value;
    var encryptedSecret = CryptoJS.AES.encrypt(locationSecret,passPhrase).toString();
    deployedSupplyChain.AddNewLocation(locationId,locationName,encryptedSecret, function(error){
      if(error){
        console.log(error);
      }
      else{
        document.getElementById("locationId").value='';
    document.getElementById("secret").value='';
    document.getElementById("locationName").value='';
    document.getElementById("passPhrase").value='';
      }
    });
  },

  getCurrentLocation: function(){
    var contractAddress = document.getElementById("contractAddress").value;
    var deployedSupplyChain = SupplyChainContract.at(contractAddress);
    var passPhrase = document.getElementById("passPhrase").value;
    deployedSupplyChain.GetTrailCount.call(function(error,trailCount){
      deployedSupplyChain.GetLocation.call(trailCount-1, function(error,returnValues){
        document.getElementById("locationId").value = returnValues[1];
        document.getElementById("locationName").value = returnValues[0];
        var encryptedSecret = returnValues[4];
        var depcryptedSecret = CryptoJS.AES.decrypt(encryptedSecret,passPhrase).toString(CryptoJS.enc.Utf8);
        document.getElementById("secret").value = depcryptedSecret;
       });
    });
  },

  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },
  
};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected");
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  App.start();
});
