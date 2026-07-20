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
  return COURSES_LIST.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = COURSES_LIST.find((c) => c.slug === slug);

  if (!course) {
    return { title: "Course Not Found | Sharda Academy" };
  }

  return {
    title: `${course.title} | Sharda Academy`,
    description: course.description,
  };
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;
  const course = COURSES_LIST.find((c) => c.slug === slug);

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
