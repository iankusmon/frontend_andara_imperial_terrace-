import dynamic from "next/dynamic";

const SurveyPageComponent = dynamic(() => import("@/components/SurveyPageComponent"), { ssr: false });

export default function SurveyPage() {
  return <SurveyPageComponent />;
}
