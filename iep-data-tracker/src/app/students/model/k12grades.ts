export enum K12Grades {
  Preschool = "PK",
  Kindergarten = "K",
  First = 1,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
  Ninth,
  Tenth,
  Eleventh,
  Twelfth
}

export const K12GradesMappings: Record<K12Grades, string> = {
  [K12Grades.Preschool]: "Pre School",
  [K12Grades.Kindergarten]: "Kindergarten",
  [K12Grades.First]: "First Grade",
  [K12Grades.Second]: "Second Grade",
  [K12Grades.Third]: "Third Grade",
  [K12Grades.Fourth]: "Fourt hGrade",
  [K12Grades.Fifth]: "Fifth Grade",
  [K12Grades.Sixth]: "Sixth Grade",
  [K12Grades.Seventh]: "Seventh Grade",
  [K12Grades.Eighth]: "Eighth Grade",
  [K12Grades.Ninth]: "Ninth Grade",
  [K12Grades.Tenth]: "Tenth Grade",
  [K12Grades.Eleventh]: "Eleventh Grade",
  [K12Grades.Twelfth]: "Twelfth Grade",
};
