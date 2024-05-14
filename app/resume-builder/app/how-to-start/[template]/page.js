"use client";
import GuestLayout from "@/app/components/layouts/GuestLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page({ params }) {
  const router = useRouter();

  //Redirect user to the home page
  useEffect(
    () =>
      router.push(
        `/resume-builder/app/how-to-start/${params.template}/contact`
      ),
    []
  );
  return <GuestLayout></GuestLayout>;
}
