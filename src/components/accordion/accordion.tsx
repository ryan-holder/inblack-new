import { ReactNode, RefObject, useRef, useState } from "react";

export interface AccordionProps {
  title: string;
  body: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, body }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function collapseSection(ref: RefObject<HTMLDivElement | null>) {
    if (!ref.current) return;
    // get the height of the element's inner content, regardless of its actual size
    const sectionHeight = ref.current!.scrollHeight;
    // temporarily disable all css transitions
    const elementTransition = ref.current!.style.transition;
    ref.current!.style.transition = "";
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
      ref.current!.style.height = sectionHeight + "px";
      ref.current!.style.transition = elementTransition;
      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function () {
        ref.current!.style.height = 0 + "px";
      });
    });
    // mark the section as "currently collapsed"
    setIsOpen(false);
  }

  function expandSection(ref: RefObject<HTMLDivElement | null>) {
    // get the height of the element's inner content, regardless of its actual size
    const sectionHeight = ref.current!.scrollHeight;
    // have the element transition to the height of its inner content
    ref.current!.style.height = sectionHeight + "px";
    // when the next css transition finishes (which should be the one we just triggered)
    setTimeout(() => {
      ref.current!.style.removeProperty("height");
    }, 610);
    // mark the section as "currently not collapsed"
    setIsOpen(true);
  }

  function handleClick() {
    if (elRef.current == null) return;
    if (isOpen) {
      collapseSection(elRef!);
    } else {
      expandSection(elRef!);
    }
  }

  return (
    <div className="">
      <button
        className="mt-4 w-full flex justify-between items-center cursor-pointer"
        onClick={handleClick}>
        <h4 className="leading-snug font-suisse font-extralight text-lg xl:text-base 2xl:text-lg tracking-wider">
          {title}
        </h4>
        <div
          className="leading-snug font-suisse font-extralight text-2xl transition-transform ease-in-out duration-500"
          style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0)" }}>
          +
        </div>
      </button>
      <div
        ref={elRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out h-auto`}
        style={{ height: 0 }}>
        {body}
      </div>
    </div>
  );
};

export default Accordion;
