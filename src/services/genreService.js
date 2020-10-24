export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action and Adventure" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comics" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Classics" },
  { _id: "5b21ca3eeb7f6fbccd471567", name: "Horror" }
];

export function getGenres() {
  return genres.filter(g => g);
}
