import { ButtonLink, PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="Page not"
      accent="found."
      description="That route is not part of the VUSAT site map yet."
      actions={
        <>
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/hasp" variant="secondary">
            HASP docs
          </ButtonLink>
        </>
      }
    />
  );
}
