/*
  https://algodaily.com/challenges/targets-and-vicinities/javascript

  So we have three possible outcomes for any given "matchup" of the actual number and the guess number:

    The guess is the same digit and position - this is a target
    The guess is the same digit but wrong position - a vicinity
    The guess is the wrong digit - no action necessary

  The easiest way to accomplish returning the difference is to take advantage of an interesting detail: at each iteration of the digits of both numbers, we only need one extra data structure to determine whether it is a target or a vicinity.

  What does this mean? It means we can track the two things simultaneously. The intuition for that concept is explored in a bit.

  Let's make some more sense of this. We know that to do the comparison, we'll need to iterate through each digit of both. So let's start by iterating over the numbers in the actual array and first find the target matches as soon as possible.

  This is easy enough to do: just find the numbers in the same index that match:

  '345' <- guess
  '135' <- actual

  // number of targets = 1 (`5` matched both digit and position)​

  But to consider the vicinities, we'll need to go beyond that. Remember our hint from before? Here's the detail: using an array, we can model the differences between the guess character and the actual at every digit iteration.

  How can we accomplish this?

  Setup an array num. At every non-target, increment num[actualChar] (that is, the index equal to the digit of the actual number) and decrement num[guessChar]. This way, each index can leave a footprint, in a sense, of what's changed. We can then use that knowledge to acknowledge future vicinities.

  Still unclear? Let's take an example. Keep in mind the "trick" is-- num[actual[i]] is negative only if this digit appeared in the guess more times than in the actual.

  Suppose we take an example of a guess that is '23' and an actual that is '12'. Examine what's happening on the first pass:

  // 2 -> 3
  // 1 -> 2
    ^

  // num = [0, 1, -1]
  // idx    0  1   2

  On the first iteration, in comparing 2 against 1, we would find that they're different and build a num array of: [0, 1, -1]. This is because we have three numbers 1, 2, and 3, and use them to represent indices.

  Thus, we increment num[1] (because it's in the actual number, so if we see 1 later in a guess, we know it's a vicinity) and decrement num[2] (because it's in the guess number, so if we see 2 later in the actual number, we also know it's a vicinity).

  // 2 -> 3
  // 1 -> 2
          ^

  // num = [0, 1, -1]
  // idx    0  1   2

  Now on the second pass, 3 and 2 still do not match, but num[2] is negative. This signifies that an element in the actual number can be matched with one of the previous elements in the guess number.

  For vicinities, this counter array is all we need based on the two rules.

  We recommend you to step through the visualization to develop that intuition.
*/

//
function getTV(actual, guess) {
  let targets = 0
  let vicinities = 0

  // Fill up the num array with 0s
  let num = []
  for (let i = 0; i < 10; i++) {
    num[i] = 0
  }

  for (let pos in guess) {
    let actualChar = actual[pos]
    let guessChar = guess[pos]

    if (guessChar == actual[pos]) {
      targets++
    } else {
      if (num[actualChar] < 0) vicinities++
      if (num[guessChar] > 0) vicinities++
      num[actualChar]++
      num[guessChar]--
    }
  }

  return `${targets}T${vicinities}V`
}

module.exports = {
  getTV,
}
