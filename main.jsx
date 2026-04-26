import React from "react";
import ReactDOM from "react-dom/client";
import NeuroAssistSite from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NeuroAssistSite />
  </React.StrictMode>
);
export default function NeuroAssistSite() {
  const flashcards = [
    { term: "Neuron", definition: "A nerve cell that receives, processes, and sends information through electrical and chemical signals." },
    { term: "Action Potential", definition: "A rapid electrical signal that travels down the axon of a neuron when the threshold is reached." },
    { term: "Synapse", definition: "The small gap between two neurons where neurotransmitters carry signals from one cell to another." },
    { term: "Neurotransmitter", definition: "A chemical messenger released by neurons to send signals across a synapse." },
    { term: "Myelin Sheath", definition: "A fatty insulating layer around some axons that helps speed up nerve signal transmission." },
    { term: "Hippocampus", definition: "A brain structure mainly involved in learning and memory formation." },

    // NEW TERMS (15)
    { term: "Dendrite", definition: "Branch-like structures that receive signals from other neurons." },
    { term: "Axon", definition: "A long projection that carries electrical signals away from the neuron." },
    { term: "Resting Potential", definition: "The electrical charge of a neuron when it is not firing." },
    { term: "Depolarization", definition: "A decrease in membrane potential making the inside more positive." },
    { term: "Repolarization", definition: "Return of membrane potential back to resting state." },
    { term: "Threshold", definition: "The level of stimulation needed to trigger an action potential." },
    { term: "Cerebellum", definition: "Brain region responsible for balance and coordination." },
    { term: "Amygdala", definition: "Brain structure involved in emotions, especially fear." },
    { term: "Frontal Lobe", definition: "Responsible for decision making, reasoning, and personality." },
    { term: "Occipital Lobe", definition: "Processes visual information." },
    { term: "Temporal Lobe", definition: "Involved in hearing and memory." },
    { term: "Parietal Lobe", definition: "Processes sensory information like touch and pressure." },
    { term: "Glial Cells", definition: "Support cells that protect and nourish neurons." },
    { term: "Synaptic Vesicles", definition: "Small sacs that store neurotransmitters." },
    { term: "Reuptake", definition: "Process where neurotransmitters are reabsorbed by the sending neuron." }
  ];

  const quizQuestions = [
    { question: "What is the main function of a neurotransmitter?", options: ["To insulate the neuron","To send chemical signals across the synapse","To produce oxygen","To stop brain activity"], answer: 1 },
    { question: "Which structure is most closely related to memory formation?", options: ["Cerebellum","Hippocampus","Spinal cord","Retina"], answer: 1 },
    { question: "An action potential travels along the:", options: ["Dendrite only","Synaptic cleft","Axon","Nucleus"], answer: 2 },

    // NEW QUESTIONS (10)
    { question: "What part of the neuron receives incoming signals?", options: ["Axon","Dendrite","Nucleus","Synapse"], answer: 1 },
    { question: "What happens during depolarization?", options: ["Neuron becomes more negative","Neuron becomes more positive","Neuron stops working","Neuron dies"], answer: 1 },
    { question: "Which lobe is responsible for vision?", options: ["Frontal","Temporal","Occipital","Parietal"], answer: 2 },
    { question: "What is the role of myelin sheath?", options: ["Slow signals","Speed up signals","Store memory","Control breathing"], answer: 1 },
    { question: "Which brain part controls emotions like fear?", options: ["Cerebellum","Amygdala","Hippocampus","Brainstem"], answer: 1 },
    { question: "What is the resting potential?", options: ["Neuron firing","Neuron at rest","Neuron dying","Neuron growing"], answer: 1 },
    { question: "What carries signals away from the neuron?", options: ["Dendrite","Axon","Synapse","Receptor"], answer: 1 },
    { question: "What stores neurotransmitters?", options: ["Axon","Vesicles","Nucleus","Dendrites"], answer: 1 },
    { question: "Which lobe handles decision making?", options: ["Frontal","Occipital","Temporal","Parietal"], answer: 0 },
    { question: "What is reuptake?", options: ["Destroying neurotransmitters","Reabsorbing neurotransmitters","Creating neurons","Sending signals"], answer: 1 }
  ];

  const features = [
    "Flashcards for fast studying",
    "Practice quizzes with instant feedback",
    "Simple explanations for hard neuroscience topics",
    "Student-friendly design inspired by Quizlet",
    "Quick review sets for exams",
    "Organized learning by topic",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">NeuroAssist</h1>
            <p className="text-sm text-slate-600">Quizlet-style neuroscience learning website</p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features" className="hover:text-slate-600">Features</a>
            <a href="#flashcards" className="hover:text-slate-600">Flashcards</a>
            <a href="#quiz" className="hover:text-slate-600">Quiz</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-slate-900 text-white px-4 py-1 text-sm font-medium mb-4">
              AI + Brain Project
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Learn neuroscience in a simpler, smarter way.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-8">
              NeuroAssist is a student-friendly study website that helps users review neuroscience topics through
              flashcards, quizzes, and simple explanations. It is designed to feel familiar like Quizlet while focusing
              on brain and neuroscience learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#flashcards"
                className="rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold shadow-sm hover:opacity-90"
              >
                Start Studying
              </a>
              <a
                href="#quiz"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-100"
              >
                Take Quiz
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-lg border">
              <p className="text-sm font-semibold text-slate-500">Featured Study Set</p>
              <h3 className="text-2xl font-bold mt-2">Neurons and Synapses</h3>
              <p className="text-slate-600 mt-3">6 flashcards • 3 quiz questions • beginner friendly</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white p-5 shadow border">
                <p className="text-sm text-slate-500">Mode</p>
                <h4 className="text-xl font-semibold mt-1">Flashcards</h4>
                <p className="mt-2 text-sm text-slate-600">Review important definitions quickly and clearly.</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow border">
                <p className="text-sm text-slate-500">Mode</p>
                <h4 className="text-xl font-semibold mt-1">Quiz Practice</h4>
                <p className="mt-2 text-sm text-slate-600">Test your understanding with exam-style questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 pb-10">
        <div className="rounded-[2rem] bg-white border shadow-sm p-8 md:p-10">
          <h3 className="text-3xl font-bold">Why NeuroAssist?</h3>
          <p className="text-slate-600 mt-3 max-w-3xl leading-7">
            This website turns difficult neuroscience concepts into study tools that are easier to understand and more
            interactive for students.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl bg-slate-50 border p-5 text-sm font-medium">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flashcards" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-3xl font-bold">Flashcards</h3>
            <p className="text-slate-600 mt-2">A Quizlet-style review section for core neuroscience terms.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {flashcards.map((card) => (
            <div
              key={card.term}
              className="group rounded-[2rem] bg-white border shadow-sm p-6 min-h-[240px] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400">Term</span>
                <span className="text-xs rounded-full bg-slate-100 px-3 py-1 text-slate-500">Study Set</span>
              </div>
              <h4 className="text-2xl font-bold mt-6">{card.term}</h4>
              <div className="mt-6 h-px bg-slate-200" />
              <p className="mt-6 text-slate-600 leading-7">{card.definition}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quiz" className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-[2rem] bg-slate-900 text-white p-8 md:p-10 shadow-xl">
          <h3 className="text-3xl font-bold">Quick Quiz</h3>
          <p className="text-slate-300 mt-2">Practice with short multiple-choice questions.</p>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {quizQuestions.map((item, index) => (
              <div key={index} className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm text-slate-300">Question {index + 1}</p>
                <h4 className="text-lg font-semibold mt-2 leading-7">{item.question}</h4>
                <div className="mt-5 space-y-3">
                  {item.options.map((option, optionIndex) => (
                    <div key={option} className="rounded-2xl bg-white/10 px-4 py-3 text-sm">
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-slate-300">
                  Correct answer: {String.fromCharCode(65 + item.answer)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-[2rem] bg-white border p-8 md:p-10 shadow-sm">
          <h3 className="text-3xl font-bold">Future AI Features</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-3xl bg-slate-50 border p-6">
              <h4 className="text-xl font-semibold">Personalized Study Plans</h4>
              <p className="text-slate-600 mt-3 leading-7">
                The website can later track weak topics and recommend flashcards, quizzes, and summaries based on user
                performance.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 border p-6">
              <h4 className="text-xl font-semibold">AI Explanations</h4>
              <p className="text-slate-600 mt-3 leading-7">
                A future version can explain neuroscience ideas in simpler words, using analogies and step-by-step help
                for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>NeuroAssist • Built for neuroscience students</p>
          <p>Inspired by Quizlet-style studying and your AI & Brain project idea</p>
        </div>
      </footer>
    </div>
  );
}
