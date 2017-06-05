strangeAdvertising = (n) => {
  let ads = 5;

  let likedAds = Math.floor(ads / 2);
  let deletedAds = ads - Math.floor(ads / 2);

  let nextDay = Math.floor(ads / 2) * 3;

  for (let i = 0; i < n; i ++) {
    nextDay = Math.floor(ads / 2) * 3;
    ads = nextDay;
  }

  console.log(ads);
}

// unsuccessful - need to tweak loop depending on size of n
