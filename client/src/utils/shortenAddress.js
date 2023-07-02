export const shortenAddress = (address) => {
    if (!address) {
      return ""; // or handle the case when the address is undefined/null
    }
  
    return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
  };
  