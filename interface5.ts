// type alias vs interface

// Array
// type alias 
type PersonList = string[]

// interface
interface IPersonList {
  [index: number]: string
}

// intersection
interface ErrorHandling {
  success: boolean
  error?: { message: string }
}

interface ArtistData {
  artists: { name: string }[];
}
// type alias 
type ArtistResponeType = ArtistData & ErrorHandling

// interface
interface IArtistRespone extends ArtistData, ErrorHandling {}

// Union Types
interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// type alias 
type PetType = Bird | Fish  // interface로 extends 불가, class로 inplements 불가


// Declaration Merging - Only interface 
interface MergingInterface {
  a: string
}

interface MergingInterface {
  b: string
}

let mi: MergingInterface;