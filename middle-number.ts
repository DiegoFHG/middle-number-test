/**
 * 1. Sort list and find highest number on the list
 * 2. Divide number by 2
 * 3. With this new number, find the middle number, if it exists
 * 4. If the middle number does not exist, find the nearest one
 */
export default function middleNumber(input: number[]) {
  const sortedList = input.sort((a, b) => {
    if (Number(a) < Number(b)) return -1;
    else if (Number(a) > Number(b)) return 1;

    return 0;
  });

  const highest = sortedList[sortedList.length - 1];
  const middleNumber = highest / 2;
  const found = sortedList.findIndex((number) => number === middleNumber);

  console.debug(`Middle number should be: ${middleNumber}`)

  if (found === -1) {
    console.log("Middle number not found, finding nearest...");
    const distances: Array<{
      number: number;
      distance: number;
      index: number;
    }> = [];

    // Calculate the distance between each number in the list and the middle number
    for (let x = 0; x < sortedList.length; x += 1) {
      const number = sortedList[x];
      const distance = Math.abs(middleNumber - number);

      distances.push({ number, distance, index: x });
    }

    // Sort the distances
    const sortedDistances = distances.sort((a, b) => {
      if (Number(a.distance) < Number(b.distance)) return -1;
      else if (Number(a.distance) > Number(b.distance)) return 1;

      return 0;
    });

    console.debug(
      `Nearest number found: ${sortedList[sortedDistances[0].index]}`
    );

    return sortedList[sortedDistances[0].index]
  } else {
    console.debug(`Middle number found: ${sortedList[found]}`);

    return sortedList[found]
  }
}
