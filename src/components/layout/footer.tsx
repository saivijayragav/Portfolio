import { Container } from "../ui/container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="pb-8 pt-16 md:pb-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-sm text-text-tertiary">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
