import { Suspense } from "react";
import SignUpCustomerContent from "@/components/SignUpCustomerContent";

export default function SignUpCustomerPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SignUpCustomerContent />
    </Suspense>
  );
}
