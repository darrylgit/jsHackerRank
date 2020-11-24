function taumBday(b, w, bc, wc, z) {
  const priceDifference = Math.abs(bc - wc);

  // Write your code here
  if (bc === wc || z >= priceDifference) {
    return b * bc + w * wc;
  } else {
    const lowerPrice = Math.min(bc, wc);
    const higherPrice = Math.max(bc, wc);
    const giftWithLowerPrice = lowerPrice === bc ? b : w;
    const giftWithHigherPrice = higherPrice === bc ? b : w;

    return (
      lowerPrice * giftWithLowerPrice + (lowerPrice + z) * giftWithHigherPrice
    );
  }
}

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924)); // 617318315833461267
console.log(taumBday(142640749, 652432197, 701695848, 936714099, 324221606)); // 711232858900355655
console.log(taumBday(736418699, 754161925, 912285746, 841360803, 736841333)); // 1306346564995590229
console.log(taumBday(177076565, 651852957, 926160119, 137199984, 872396383)); // 253435467783263923
console.log(taumBday(232813954, 654376491, 933554781, 63130979, 441062505)); // 158694707102490425
console.log(taumBday(988402860, 283959645, 572488886, 802335530, 193057740)); // 783234000390521730
console.log(taumBday(571683259, 397259663, 136103531, 271866251, 405911181)); // 185809605416820942
console.log(taumBday(810421806, 414506999, 58343377, 512117653, 203737449)); // 155917081637180036
console.log(taumBday(235081335, 101052703, 957899374, 147367080, 942413506)); // 240076105402801530
console.log(taumBday(547257058, 324443644, 594266462, 325933528, 461643627)); // 430963577188284828
