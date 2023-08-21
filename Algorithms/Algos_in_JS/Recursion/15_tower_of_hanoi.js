/*
    Disk 1
    Disk 2
    Disk 3
  __Source__   __Auxiliary__   __Destination__
*/

function towerOfHanoi(n, source, auxiliary, destination) {
  // Base Case
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }
  // Hypothesis: Assumption
  towerOfHanoi(n - 1, source, destination, auxiliary);
  // Induction Step: Building Solution from Assumption
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

const numDisks = 3;
towerOfHanoi(numDisks, "A", "B", "C");
