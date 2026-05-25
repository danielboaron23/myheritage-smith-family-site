import { CtaRow } from "./CtaRow";

/** The four onboarding CTA rows below the hero (Figma 1:15032–1:15079). */
export function CtaRows() {
  return (
    <div className="flex flex-col gap-[20px]">
      <CtaRow
        visualSrc="/assets/images/cta-grow-tree.png"
        visualW={195}
        visualH={150}
        title="Grow your Tree"
        body="Help us find discoveries for you by telling us more about your family"
        buttonLabel="Start"
        tone="core"
      />
      <CtaRow
        visualSrc="/assets/images/cta-dna-kit.png"
        visualW={214}
        visualH={129}
        title="Activate your DNA Kit"
        body="Your DNA test you purchased is waiting for activation"
        buttonLabel="Order now"
        tone="dna"
      />
      <CtaRow
        visualSrc="/assets/images/cta-photo-discovery.png"
        visualW={174}
        visualH={100}
        title="Photo Discovery"
        body={
          <span className="text-fg-60">
            We found personal photos for your great-grandfather{" "}
            <span className="font-bold">Joseph Anderson</span> and 9 other people.
          </span>
        }
        buttonLabel="View now"
        tone="core"
      />
      <CtaRow
        visualSrc="/assets/images/cta-person-discovery.png"
        visualW={174}
        visualH={100}
        title="Person Discovery"
        body={
          <span className="text-fg-60">
            We found <span className="font-bold">12 people</span> who can be added to
            your tree based on a match for your grandfather{" "}
            <span className="font-bold">John D Singer</span>
          </span>
        }
        buttonLabel="View now"
        tone="core"
      />
    </div>
  );
}
