pragma solidity ^0.5.0;

contract SupplyChain {
    struct Location {
        string Name;
        uint LocationId;
        uint PreviousLocationId;
        uint Timestmap;
        string Secret;
    }

    mapping(uint=>Location) Trail;
    uint8 TrailCount = 0;
    
    function AddNewLocation(uint LocationId, string  memory Name, string  memory Secret) public {
        Location memory newLocation;
        newLocation.Name = Name;
        newLocation.LocationId = LocationId;
        newLocation.Secret = Secret;
        newLocation.Timestmap = now;
        if (TrailCount != 0) {
            newLocation.PreviousLocationId = Trail[TrailCount].LocationId;
        } 
        Trail[TrailCount] = newLocation;
        TrailCount++;
    }

    function GetTrailCount() public view returns(uint8) {
        return TrailCount;
    }

    function GetLocation(uint8 TrailNo) public view returns (string memory ,uint,uint,uint,string memory ) {
        return (Trail[TrailNo].Name,Trail[TrailNo].LocationId,Trail[TrailNo].PreviousLocationId,Trail[TrailNo].Timestmap,Trail[TrailNo].Secret);
    }


}