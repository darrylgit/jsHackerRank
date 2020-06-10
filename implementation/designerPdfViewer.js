function designerPdfView(h, word) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // Create an object that associates letters with their heights
  const letterHeights = {};

  letters.forEach((letter, i) => {
    letterHeights[letter] = h[i];
  });

  // Get the max letter height for that word and multiply it by the word's length
  return (
    Math.max(...word.split('').map(letter => letterHeights[letter])) *
    word.length
  );
}

console.log(
  designerPdfView('1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5', 'abc')
);
