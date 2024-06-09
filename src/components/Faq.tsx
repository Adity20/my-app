import { useState } from "react";
import { IconPlus } from '@tabler/icons-react';
import classNames from 'classnames';

const placeholder =
  'Toingg is a realistic English & Hindi AI Calling Agent with features like interruption handling, batch calling, live text sending, sentiment analysis, and integration with over 5000+ apps. You can call anyone at any corner of the world easily. We are also developing our own proprietary TTS model to enhance voice interactions with a focus on reducing costs, enhancing accent and dialects to promote research for non-commercial use';

interface AccordionItemProps {
  title: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FaqPage() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (value: string) => {
    setActiveAccordion(activeAccordion === value ? null : value);
  };

  const isAccordionActive = (value: string) => {
    return activeAccordion === value;
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-5xl mb-8 text-black rounded-lg">Frequently Asked Questions</h1>
        <div className="space-y-4 text-black">
          <AccordionItem
            title="What is Toingg?"
            value="reset-password"
            isActive={isAccordionActive("reset-password")}
            onClick={() => toggleAccordion("reset-password")}
          />
          <AccordionItem
            title="Why is Toingg better than others?"
            value="another-account"
            isActive={isAccordionActive("another-account")}
            onClick={() => toggleAccordion("another-account")}
          />
          <AccordionItem
            title="Does Toingg support your existing database?"
            value="newsletter"
            isActive={isAccordionActive("newsletter")}
            onClick={() => toggleAccordion("newsletter")}
          />
          <AccordionItem
            title="How does Toingg ensure security?"
            value="credit-card"
            isActive={isAccordionActive("credit-card")}
            onClick={() => toggleAccordion("credit-card")}
          />
          <AccordionItem
            title="How does Toingg address Enterprise solutions?"
            value="payment"
            isActive={isAccordionActive("payment")}
            onClick={() => toggleAccordion("payment")}
          />
          <AccordionItem
            title="Does Toingg support your own proprietary LLM model?"
            value="payment"
            isActive={isAccordionActive("payment")}
            onClick={() => toggleAccordion("payment")}
          />
          <AccordionItem
            title="What is Toingg’s pricing model?"
            value="payment"
            isActive={isAccordionActive("payment")}
            onClick={() => toggleAccordion("payment")}
          />
          <AccordionItem
            title="How can I contact Toingg?"
            value="payment"
            isActive={isAccordionActive("payment")}
            onClick={() => toggleAccordion("payment")}
          />
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ title, value, isActive, onClick }: AccordionItemProps) {
    return (
      <div className="rounded-lg border border-gray-400 bg-white">
        <div
          className="flex items-center justify-between px-4 py-3 cursor-pointer"
          onClick={onClick}
        >
          <h2 className="text-lg font-medium">{title}</h2>
          <IconPlus
            className={classNames("transform transition-transform", {
              'rotate-45': isActive,
            })}
          />
        </div>
        {isActive && (
          <div className="p-4">
            <p>{placeholder}</p>
          </div>
        )}
      </div>
    );
  }
  