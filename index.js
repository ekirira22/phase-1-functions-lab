const scubahq = 42
const block_in_feet = 264

function distanceFromHqInBlocks(num){
   if(num > scubahq){
    return num - scubahq
   }else if(num < scubahq){
    return scubahq - num
   }else{
    return 0
   }
}

function distanceFromHqInFeet(num){
   return distanceFromHqInBlocks(num) * block_in_feet
}

function distanceTravelledInFeet(start, dest){
    if(start < dest){
        return (dest - start) * block_in_feet
    }else if(start > dest){
        return (start - dest) * block_in_feet
    }else{
        return 0
    }
}

function calculatesFarePrice(start, dest){
    const chargable_distance = distanceTravelledInFeet(start, dest)

    if(chargable_distance <= 400){
        return 0
    }else if(chargable_distance > 400 && chargable_distance <= 2000){
       return (chargable_distance - 400) * 0.02
    }else if(chargable_distance > 2000 && chargable_distance <= 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}

// console.log(calculatesFarePrice(50,60))


