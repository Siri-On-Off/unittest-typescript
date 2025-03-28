export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Leere Liste: Durchschnittberechnung nicht moeglich.");
  }

  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Leere Liste: Medianberechnung nicht moeglich.");
  }

  numbers.sort((a, b) => a - b);

  const middle = Math.floor(numbers.length / 2);
  
  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
    return numbers[middle];
  }
}

export function mode(numbers: number[]): number[] {
  const frequencyMap: Map<number, number> = new Map();
  for (let number of numbers) {
    frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
  }
  const maxFrequency = Math.max(...frequencyMap.values());
  let modes: number[] = [];
  for (let [key, value] of frequencyMap) {
    if (value === maxFrequency) {
      modes.push(key);
    }
  }
  return modes;
}

export function standardDeviation(numbers: number[]): number {
   if (numbers.length === 0) {
     throw new Error("Standardabweichung ist für eine leere Liste nicht definiert.");
   }
 
   const meanValue: number = mean(numbers);
  
   let varianceSum: number = 0;
   for (let number of numbers) {
     varianceSum += Math.pow(number - meanValue, 2);
   }
  
   const variance: number = varianceSum / numbers.length;
  
   const sd: number = Math.sqrt(variance);
  
   return sd;
}
// Kleine Änderung
