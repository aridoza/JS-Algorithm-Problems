strangeAdvertising = (n) => {
  let ads = 5;

  let likedAds = 0;
  let deletedAds = 0;
  let likedTotal = 0;



  let nextDay = Math.floor(ads / 2) * 3;

  for (let i = 0; i < n; i ++) {
    likedAds = Math.floor(ads / 2);
    deletedAds = ads - Math.floor(ads / 2);
    likedTotal += likedAds;
    nextDay = Math.floor(ads / 2) * 3;
    ads = nextDay;
  }

  console.log(likedTotal);
}

// unsuccessful - need to tweak loop depending on size of n
// update 6/6: Successfully submitted
