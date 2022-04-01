function superbowlWin(record) {
    let result = record.find(function(winner) {
      return winner.result === "W"
    })
    if (!!result) {
      return result.year
    } else {
      return undefined
    }
  }

    
