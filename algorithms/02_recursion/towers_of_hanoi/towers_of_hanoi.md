# Towers of Hanoi

```javascript
var pegs //this holds the disks on the pegs
var badmove //this records if an illegal move has been made

//this is use by displayHanoi to draw the disks
var diskText = function (disknum, largestdisk) {
  var totalwidth = largestdisk * 2 + 3
  var diskwidth = 2 * disknum + 1
  var leftspaces = (totalwidth - diskwidth) / 2
  var rightspaces = leftspaces
  var diskstring = ''
  var i
  for (i = 0; i < leftspaces; i++) {
    diskstring += ' '
  }
  if (disknum === 0) {
    diskstring += ' '
  } else {
    for (i = 0; i < (diskwidth - 1) / 2; i++) {
      diskstring += '*'
    }
    diskstring += disknum
    for (i = 0; i < (diskwidth - 1) / 2; i++) {
      diskstring += '*'
    }
  }
  for (i = 0; i < rightspaces; i++) {
    diskstring += ' '
  }
  return diskstring
}

//this displays the current state of the puzzle
var displayHanoi = function () {
  if (badmove) {
    return
  } //stop displaying after an illegal move
  var totalDisks = pegs[0].length + pegs[1].length + pegs[2].length
  for (var i = totalDisks - 1; i >= 0; i--) {
    var rowText = ''
    for (var k = 0; k <= 2; k++) {
      var disk = 0
      if (i < pegs[k].length) {
        disk = pegs[k][i]
      }
      rowText += diskText(disk, totalDisks)
    }
    println(rowText)
  }
  var basestring = ''
  var j = 0
  for (j = 0; j < totalDisks + 1; j++) {
    basestring += '-'
  }
  basestring += 'A'
  for (j = 0; j < 2 * totalDisks + 2; j++) {
    basestring += '-'
  }
  basestring += 'B'
  for (j = 0; j < 2 * totalDisks + 2; j++) {
    basestring += '-'
  }
  basestring += 'C'
  for (j = 0; j < totalDisks + 1; j++) {
    basestring += '-'
  }
  println(basestring + '\n\n')
}

//setUpHanoi sets up the Hanoi puzzle by putting numDisks on the startingPeg
var setupHanoi = function (numDisks, startingPeg) {
  badmove = false
  pegs = [[], [], []]
  var startingNum = startingPeg.charCodeAt(0) - 'A'.charCodeAt(0)
  for (var i = numDisks; i >= 1; i--) {
    pegs[startingNum].push(i)
  }
  println('Towers of Hanoi, starting with ' + numDisks + ' disks on peg ' + startingPeg + '\n\n')
  displayHanoi()
}

//the moveDisk function will attempt to move the top disk from the fromPeg to the toPeg
//it will give an assert error if:
//- you try to move a disk from an empty peg
//- or you try to put a bigger disk on top of a smaller disk
var moveDisk = function (fromPeg, toPeg) {
  if (badmove) {
    return
  } //reject any more moves after an illegal move
  var fromNum = fromPeg.charCodeAt(0) - 'A'.charCodeAt(0)
  var toNum = toPeg.charCodeAt(0) - 'A'.charCodeAt(0)

  var fromPegEmpty = pegs[fromNum].length === 0 ? 'From peg is empty' : 'From peg is not empty'
  Program.assertEqual(fromPegEmpty, 'From peg is not empty') //the from peg should not be empty
  if (fromPegEmpty === 'From peg is not empty') {
    var disk = pegs[fromNum].pop()
    var toPegEmpty = pegs[toNum].length === 0
    var topDiskOnToPeg = -1
    if (!toPegEmpty) {
      topDiskOnToPeg = pegs[toNum].pop()
      pegs[toNum].push(topDiskOnToPeg)
    }
    var fromDiskSmaller =
      toPegEmpty || disk < topDiskOnToPeg ? 'From disk smaller' : 'From disk larger'
    Program.assertEqual(fromDiskSmaller, 'From disk smaller') //the from disk should be smaller
    if (fromDiskSmaller === 'From disk smaller') {
      pegs[toNum].push(disk)
    } else {
      badmove = true
      println(
        'You tried to put a disk from peg ' +
          fromPeg +
          ' of size ' +
          disk +
          ' on top of a disk of size ' +
          topDiskOnToPeg +
          ' on peg ' +
          toPeg +
          '\n\n',
      )
    }
  } else {
    badmove = true
    println('You tried to take a disk off of peg ' + fromPeg + ' but it was empty\n\n')
  }
}

// give getSpare the name of two pegs,
// and it will give you the name of the third peg that you didn't call it with
var getSparePeg = function (firstPeg, secondPeg) {
  if (firstPeg !== 'A' && secondPeg !== 'A') {
    return 'A'
  }
  if (firstPeg !== 'B' && secondPeg !== 'B') {
    return 'B'
  }
  return 'C'
}

var solveHanoi = function (numDisks, fromPeg, toPeg) {
  // base case:  no disks to move
  if (numDisks === 0) {
    return
  }

  // recursive case:

  //move the disks off of the bottom disk
  var sparePeg = getSparePeg(fromPeg, toPeg)
  solveHanoi(numDisks - 1, fromPeg, sparePeg)

  //move the bottom disk to the destination
  moveDisk(fromPeg, toPeg)
  displayHanoi()

  //move the other disks on top of the bottom disk
  solveHanoi(numDisks - 1, sparePeg, toPeg)
}

setupHanoi(0, 'A')
solveHanoi(0, 'A', 'C')
Program.assertEqual(pegs, [[], [], []])

setupHanoi(1, 'A')
solveHanoi(1, 'A', 'C')
Program.assertEqual(pegs, [[], [], [1]])

setupHanoi(2, 'A')
solveHanoi(2, 'A', 'C')
Program.assertEqual(pegs, [[], [], [2, 1]])

setupHanoi(5, 'B')
solveHanoi(5, 'B', 'C')
Program.assertEqual(pegs, [[], [], [5, 4, 3, 2, 1]])
```
