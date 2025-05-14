
interface Course {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface course_category{
    ccategory:string;
    courses:Course[];
}

export default course_category;