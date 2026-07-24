import { notFound } from "next/navigation";
import { COURSES_LIST } from "@/constants/coursesData";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CourseDetailsHero } from "@/components/courses/CourseDetailsHero";
import { CourseOutcomes } from "@/components/courses/CourseOutcomes";
import { CourseSyllabus } from "@/components/courses/CourseSyllabus";
import { RelatedCourses } from "@/components/courses/RelatedCourses";
import { FAQSection } from "@/components/home/FAQSection"; // Reused
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export async function generateStaticParams() {
  try {
    const res = await fetch("http://localhost:5000/api/cms/academics/courses");
    if (res.ok) {
      const json = await res.json();
      const courses = json.data?.courses || [];
      return courses.map((course) => ({
        slug: course.slug,
      }));
    }
  } catch (error) {
    console.error(error);
  }
  return COURSES_LIST.map((course) => ({
    slug: course.slug,
  }));
}

async function getCourseBySlug(slug) {
  try {
    const res = await fetch("http://localhost:5000/api/cms/academics/courses", { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      const courses = json.data?.courses || [];
      return courses.find((c) => c.slug === slug);
    }
  } catch (error) {
    console.error(error);
  }
  // Fallback to local if API fails
  return COURSES_LIST.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return { title: "Course Not Found | Sharda Academy" };
  }

  return {
    title: `${course.title} | Sharda Academy`,
    description: course.description || "Course details",
  };
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: course.title, href: "#" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "Sharda Academy",
      "sameAs": "https://www.shardaacademy.edu"
    },
    "coursePrerequisites": course.eligibility,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "duration": course.duration
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      <div className="container mx-auto px-4 pt-28 pb-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <CourseDetailsHero course={course} />
      
      <CourseOutcomes highlights={course.highlights} classTimings={course.classTimings} />
      
      <CourseSyllabus syllabus={course.syllabus} />
      
      <FAQSection />
      
      <RelatedCourses currentCourseId={course.id} category={course.category} />
      
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
