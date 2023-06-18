class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sortedArr=args.sort((a,b)=>a-b)
      return sortedArr[0]
      
    }
  }