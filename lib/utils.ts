import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateCode(
  // part1:any,
  //  part2:any, 
  //  part3:any, 
   part4:any) {
  // Ensure all parts are strings and pad numbers to the required length if necessary
  // const formattedPart1 = String(part1).padStart(2, '0'); 
  // const formattedPart2 = String(part2).padStart(1, '0');
  // const formattedPart3 = String(part3).padStart(1, '0');
  const formattedPart4 = String(part4); // Assuming part4 is a string like a year range

  // Generate a random alphanumeric string for part 5
  const randomString = () => Math.random().toString(36).substring(2, 5).toUpperCase();
  const formattedPart5 = randomString();

  // Construct the code using the parts
  // const code = `${formattedPart1}.${formattedPart2}.${formattedPart3}${formattedPart4}${formattedPart5}`;

  const code = `${formattedPart4}.${formattedPart5}`
  
  return code;
}