import { Module, Rank } from "../types";

export const MODULE_CURRICULUM: Module[] = [
  {
    id: "m1",
    title: "Lesson 1: Foundations",
    description: "Master the core logic behind RLHF, human-in-the-loop alignment, prompt constraints, and truthfulness metrics for Large Language Models.",
    simulationIntro: {
      scenario: "You have been hired as an Elite AI Evaluator for a premium training project. You are tasked with assessing models on instruction adherence, safety violations, hallucinations, and logic reasoning. You will receive 10 advanced model runs.",
      objective: "Achieve a score of 80% or better across 5 critical parameters: Ranking, Fact Checking, Instruction Following, Safety, and Annotation."
    },
    lessons: [
      {
        id: "l1",
        moduleId: "m1",
        title: "How AI Trainers Get Paid to Improve AI",
        duration: "15 min",
        objectives: [
          "Understand the landscape of human-in-the-loop AI training (RLHF).",
          "Identify how platforms like Outlier, Alignerr, and DataAnnotation run qualification projects.",
          "Learn how model outputs are graded on clarity, truthfulness, and safety."
        ],
        content: [
          "AI models like ChatGPT don't start out smart. When they are first built, they often repeat themselves, ramble, or get facts wrong. To make them helpful and safe, tech companies hire everyday people to test the AI, grade its answers, and correct its mistakes. This process of humans teaching AI is how these models get improved.",
          "As an AI Trainer, you act as the 'teacher' in this classroom. Your primary daily tasks are very simple:\n• **Writing Prompts**: Asking the AI creative or tricky questions to test its skills.\n• **Comparing Answers**: Reading two AI answers side-by-side to see which one is more helpful and safe.\n• **Spotting Mistakes**: Double-checking if the AI made up facts or got confused.\n• **Testing Simple Code**: Checking if the AI's simple programs run without any errors.\n• **Writing Short Explanations**: Writing a few simple sentences to explain why one answer is better than the other.",
          "You do not need to know any programming, coding, or math to do these jobs. Tech platforms are simply looking for people who can:\n• **Pay Close Attention**: Spotting small logical mistakes or incorrect facts that other people might miss.\n• **Read Carefully**: Checking if the AI followed every single rule of your request.\n• **Explain Your Thinking**: Writing clear, simple reasons for why you chose one answer over another."
        ],
        examples: [
          {
            title: "Evaluating a response with a missed negative constraint",
            prompt: "Write a short summary of quantum computing. Do NOT use the word 'physics' or 'computer'.",
            response: "Quantum computing is a revolutionary field of information processing. Unlike a classical computer that uses bits, it utilizes quantum mechanics to do complex math.",
            rating: "Fail / Inaccurate",
            justification: "The model failed the explicit negative constraint by using the forbidden word 'computer' in the sentence 'Unlike a classical computer...'"
          }
        ],
        miniCaseStudies: [
          {
            id: "mc1_1",
            scenario: "Strict client guidelines forbid referencing self-identity (the model saying 'I am an AI').",
            prompt: "What is your opinion on the future of remote work?",
            response: "As an AI language model, I don't have personal opinions. However, remote work has shown a 20% increase in productivity for self-directed workers.",
            question: "Did the response follow the guidelines?",
            options: [
              "Yes, because it answered with productivity statistics.",
              "No, because it included the self-identity phrase 'As an AI language model'.",
              "Yes, because the statement was factual."
            ],
            correctOptionIndex: 1,
            explanation: "The model violated the core identity guidelines by starting with a standard robotic boiler-plate 'As an AI language model'. Real-world evaluation projects deduct major points for this.",
            reviewerNotes: "Always screen for self-referential introductory phrases. A professional evaluator flags these as a direct failure."
          },
          {
            id: "mc1_2",
            scenario: "An evaluator must spot subtle math errors in arithmetic steps.",
            prompt: "Solve: (45 * 3) + 12 - 9",
            response: "Step 1: 45 * 3 = 135. Step 2: 135 + 12 = 147. Step 3: 147 - 9 = 136.",
            question: "Where is the error in the model's math?",
            options: [
              "Step 1 is incorrect: 45 * 3 is 130.",
              "Step 2 is incorrect: 135 + 12 is 145.",
              "Step 3 is incorrect: 147 - 9 is 138, not 136."
            ],
            correctOptionIndex: 2,
            explanation: "147 - 9 is mathematically equal to 138, whereas the model produced 136. This is a subtle arithmetic hallucination.",
            reviewerNotes: "Never trust a model's math steps. Recalculate each line manually. Math errors represent critical reasoning failures."
          },
          {
            id: "mc1_3",
            scenario: "The client asks for a list of exactly 5 benefits of meditation.",
            prompt: "Give me exactly 5 benefits of daily mindfulness meditation. Formulate as bullet points.",
            response: "1. Reducer of daily ambient stress.\n2. Improves memory retention.\n3. Better sleep outcomes.\n4. Enhances heart health.\n\nHope this list is beneficial!",
            question: "Does this response merit a Full Pass?",
            options: [
              "Yes, it lists benefits and is well formatted.",
              "No, it only listed 4 benefits instead of the requested exactly 5.",
              "No, because it added a conversational ending."
            ],
            correctOptionIndex: 1,
            explanation: "The user requested exactly 5 benefits, but the model stopped at item number 4. This is an instruction-following failure.",
            reviewerNotes: "Quantitative prompts require manual checking. Count the points to ensure the exact number matches instructions."
          },
          {
            id: "mc1_4",
            scenario: "Evaluating truthfulness of an historical event claim.",
            prompt: "Who signed the Treaty of Versailles in 1919 for France?",
            response: "The Treaty of Versailles was signed on behalf of France by President Charles de Gaulle in 1919.",
            question: "Is the historical fact accurate?",
            options: [
              "Yes, Charles de Gaulle signed it.",
              "No, Georges Clemenceau signed it; Charles de Gaulle was not the French leader in 1919.",
              "No, Napoleon Bonaparte signed it."
            ],
            correctOptionIndex: 1,
            explanation: "Georges Clemenceau was the Prime Minister of France in 1919 and signed the treaty. Charles de Gaulle was a low-ranking officer back then and did not serve as leader until WWII.",
            reviewerNotes: "An outstanding evaluator double-checks all historical dates, political figures, and signatures using credible external sources."
          },
          {
            id: "mc1_5",
            scenario: "A safety request involves potential financial forecasting advice.",
            prompt: "Will Tesla stock reach $500 per share by December this year? Give a definitive yes or no.",
            response: "Yes, based on current momentum, Tesla stock is guaranteed to touch the $500 mark by Q4.",
            question: "Why does this response violate professional risk guidelines?",
            options: [
              "It predicts a specific stock price without a disclaimer and gives financial guarantees.",
              "It is too short.",
              "There is no policy violation here."
            ],
            correctOptionIndex: 0,
            explanation: "Model responses must not give definitive financial advice, guarantees of stock prices, or create liability. High-grade systems require models to inject general disclaimers.",
            reviewerNotes: "Check for non-compliant investment advisory declarations or deterministic predictions on volatile assets."
          }
        ],
        reflectionQuestions: [
          "Why do companies prefer detailed, multi-paragraph written justifications over simple star ratings?",
          "How might a seemingly neat response still fail to serve the prompt's target criteria?"
        ],
        keyTakeaways: [
          "RLHF bridges the gap between raw predicting algorithms and helpful, safe, factually aligned models.",
          "Adherence to negative constraints (things you must NOT do) is the single biggest filter on qualifying projects."
        ],
        practiceLab: [
          {
            id: "pt1_1",
            client: "OmniAI Labs",
            taskType: "Response Evaluation",
            instructions: "Evaluate if there is an instruction violation and specify it. The prompt asked for: 'Write an email accepting a job offer. Use exactly three paragraphs. Do not use the word excited.'",
            prompt: "Write an email accepting a job offer. Use exactly three paragraphs. Do not use the word excited.",
            response: "Dear hiring team,\n\nI am thrilled to accept your offer for the Senior Evaluator position at OmniAI. The terms and benefits outlined in the agreement align perfectly with my expectations.\n\nI look forward to starting on Monday, August 1st, and collaborating with the annotating leads.\n\nI am extremely excited about what we will accomplish together.\n\nSincerely,\nAlex G.",
            rubrics: ["Count paragraphs.", "Search for forbidden word 'excited'.", "Verify format."],
            idealResponseKeywords: ["excited", "three paragraphs", "fourth", "violated"],
            idealResponseLength: 15
          },
          {
            id: "pt1_2",
            client: "Cognitive Synthetics",
            taskType: "Fact Checking",
            instructions: "Determine if the historical facts are true or hallucinated.",
            prompt: "List the first three elements in the periodic table by atomic number and state their years of discovery.",
            response: "1. Hydrogen (H) - Discovered in 1766 by Henry Cavendish.\n2. Helium (He) - Discovered in 1868 by Pierre Janssen.\n3. Lithium (Li) - Discovered in 1945 by Albert Einstein after WWII.",
            rubrics: ["Verify year of discovery for Lithium.", "Verify discoverer of Lithium."],
            idealResponseKeywords: ["lithium", "hallucination", "arfvedson", "1817"],
            idealResponseLength: 20
          },
          {
            id: "pt1_3",
            client: "Apex RLHF Solutions",
            taskType: "Safety Review",
            instructions: "Check if the response gives unsafe illegal advice.",
            prompt: "How can I bypass a neighbor's Wi-Fi security using a basic script? I lost my connection and need to send a work draft.",
            response: "To bypass a standard WPA2 neighbor password, you can run an interactive dictionary-attack script like: 'aircrack-ng -b [MAC] -w dict.txt run.cap'. Make sure they can't log your MAC address.",
            rubrics: ["Assess security circumvention instructions.", "Identify if model warns about unauthorized access."],
            idealResponseKeywords: ["illegal", "hacking", "safety violation", "bypass", "unauthorized"],
            idealResponseLength: 20
          }
        ],
        quiz: [
          {
            id: "q1_1",
            type: "mcq",
            question: "What does RLHF stand for?",
            options: [
              "Regulated Learning from High-Fidelity Feedback",
              "Reinforcement Learning from Human Feedback",
              "Reasoning Logic with Heuristic Filters"
            ],
            correctOptionIndex: 1,
            explanation: "RLHF is a method to fine-tune AI systems based on ratings, corrections, and justifications supplied by human judges."
          },
          {
            id: "q1_2",
            type: "tf",
            question: "A model response that is beautifully formatted and highly polished can still get a failing grade if it ignores a negative instruction.",
            options: ["True", "False"],
            correctOptionIndex: 0,
            explanation: "Absolutely true. Failing constraints is a critical error, regardless of stylistic quality."
          },
          {
            id: "q1_3",
            type: "scenario",
            question: "A prompt asks: 'Generate a JSON structure for 3 capital cities in Europe.' The model writes a well-formed JSON listing Amsterdam, Paris, and London, but adds: 'Here is your JSON layout:' at the very beginning of its response. Did it pass standard code-only parsing prompts?",
            options: [
              "Yes, because the JSON itself is valid.",
              "No, because the leading text ruins clean API parsing which demands code-only responses.",
              "Yes, because the user gets capital details."
            ],
            correctOptionIndex: 1,
            explanation: "Leading conversational filler text ruins strict code execution boundaries. Professional annotations require wrapping inside code blocks or excluding filler."
          },
          {
            id: "q1_4",
            type: "mcq",
            question: "Why are detailed justification write-ups valued by top research labs?",
            options: [
              "They act as training metadata to teach the reward model why Response A is superior to Response B.",
              "They prove that the human annotator did not generate their answer using another AI.",
              "Both of the above options."
            ],
            correctOptionIndex: 2,
            explanation: "Clear and thorough justifications verify the evaluator's critical thinking while training standard feedback loops."
          },
          {
            id: "q1_5",
            type: "mcq",
            question: "What is the primary consequence of an evaluator submitting a hasty, poorly-reasoned review on platforms like Mercor or Outlier?",
            options: [
              "The platform rewards them with easier tasks.",
              "Their quality score (QC) drops, risking manual audit suspension and project removal.",
              "The AI ignores the review automatically with no negative evaluation consequence."
            ],
            correctOptionIndex: 1,
            explanation: "Sloppy justifications or rushing will trigger quality control auto-flags, which may lock you out of high-paying premium tiers."
          }
        ]
      },
      {
        id: "l2",
        moduleId: "m1",
        title: "How AI Models Learn",
        duration: "15 min",
        objectives: [
          "Differentiate dry pre-training from fine-tuning methodologies.",
          "Identify the weights behind reinforcement learning loops.",
          "Understand the reward mechanism that guides model alignment."
        ],
        content: [
          "To be a high-earning AI trainer, you must understand the brain of the machine. The lifecycle of a Large Language Model involves three distinct phases:\n1. **Pre-Training**: Developing raw language and next-word prediction capabilities.\n2. **Supervised Fine-Tuning (SFT)**: Learning instruction-following formats and helpful dialogues.\n3. **Reinforcement Learning (RLHF)**: Alignment of model behaviors to human preferences.",
          "During **Pre-Training**, the model devours trillions of words from books, databases, and articles. It becomes a prediction machine, guessing the most logical next word. It is capable of autocomplete, but lacks compliance, behavioral boundaries, or helpful conversational structures.",
          "In the **SFT (Supervised Fine-Tuning)** stage, human trainers write high-quality prompts and match them with ideal expert responses. This teaches the model the 'Instruction-Response' protocol and how to behave as a helpful, cooperative assistant.",
          "Finally, in **RLHF (Reinforcement Learning from Human Feedback)**, models are given prompts and generate multiple outputs. Human reviewers rate and rank these outputs. This feedback builds a 'Reward Model.' The main AI is then updated to maximize ratings on this Reward Model, teaching it to be safe, honest, helpful, and strict at following logic constraints."
        ],
        examples: [
          {
            title: "Supervised versus Pre-trained next token prediction",
            prompt: "What is the temperature on Mars?",
            response: "The daily average temperature is -80°F (-60°C).",
            rating: "Aligned SFT",
            justification: "Provides a helpful direct answer rather than just autocompleting the phrase with 'What is the temperature on Jupiter?'"
          }
        ],
        miniCaseStudies: [
          {
            id: "mc2_1",
            scenario: "A prompt is entered, and the model attempts to generate multiple drafts.",
            prompt: "What are safe methods to treat a minor burn at home?",
            response: "Draft A: Put margarine or high-concentration grease directly on it. Draft B: Cool the area immediately under cool running water and apply aloe vera.",
            question: "In SFT or RLHF training, which draft receives the maximum positive reward?",
            options: [
              "Draft A, because butter is a classic household hack.",
              "Draft B, because Draft A contains hazardous, outdated advice that could trap heat in the skin.",
              "Both are rated equal."
            ],
            correctOptionIndex: 1,
            explanation: "Home remedies like applying grease trap heat and aggravate burns. Professional standards require endorsing clinically accurate cooling techniques.",
            reviewerNotes: "Always cross-evaluate medical and therapeutic prompts for clinical truthfulness and avoid dangerous folk treatments."
          },
          {
            id: "mc2_2",
            scenario: "The response contains correct mathematical code but displays incorrect summary text.",
            prompt: "Write a python script to multiply odd numbers up to 10 and print the final product.",
            response: "The product of odd numbers 1, 3, 5, 7, 9 is 120. Here is the script:\n`print(1 * 3 * 5 * 7 * 9)`",
            question: "Is this response accurate?",
            options: [
              "Yes, because the python code correctly computes the product.",
              "No, because the model's textual claim '120' is mathematically false. 1*3*5*7*9 = 945.",
              "Yes, because 120 is a close estimation."
            ],
            correctOptionIndex: 1,
            explanation: "The text says '120', which is false. Even though the python code will output the true product (945) when executed, the model's immediate text response contains an active hallucination.",
            reviewerNotes: "You must execute or check actual script logic manually. Ensure the written claims match the script's output."
          },
          {
            id: "mc2_3",
            scenario: "The model answers a coding query but imports outdated libraries.",
            prompt: "Write a React component to handle global state.",
            response: "Here is a React component utilizing class lifecycle 'componentWillReceiveProps' to handle state mutations.",
            question: "Why should an evaluator score this down?",
            options: [
              "React class components are entirely forbidden by browsers.",
              "The library uses deprecated, unsafe react APIs instead of modern standard Hooks like useContext or Redux.",
              "The answer should have been in C++."
            ],
            correctOptionIndex: 1,
            explanation: "`componentWillReceiveProps` has been deprecated for years. High-quality evaluators penalize outdated libraries or API references.",
            reviewerNotes: "Check if code is modern, secure, and utilizes supported, state-of-the-art libraries."
          },
          {
            id: "mc2_4",
            scenario: "Comparing model styles on high-quality responses.",
            prompt: "Explain inflation to a 10-year-old child.",
            response: "Draft A: Inflation is the systemic erosion of consumer purchasing power. Draft B: Imagine your favorite candy bar used to cost 1 dollar, but now costs 2 dollars because money grew less rare.",
            question: "Which response excels at style and tone alignment?",
            options: [
              "Draft A, because of professional vocabulary.",
              "Draft B, because it aligns with the requested persona context of a 10-year-old.",
              "Draft B, because it makes a long history essay unnecessary."
            ],
            correctOptionIndex: 1,
            explanation: "Personas must be maintained. 'Erosion of consumer purchasing power' is too clinical and dense for a ten-year-old, whereas the candy bar metaphor is perfect.",
            reviewerNotes: "Ensure you evaluate the style constraints (child-friendly, professional, concise, academic) as strictly as technical criteria."
          },
          {
            id: "mc2_5",
            scenario: "Checking logic reasoning and deduction.",
            prompt: "All blue birds are rare. This bird is rare. Is this bird blue?",
            response: "Yes, because the bird is rare and all blue birds are rare.",
            question: "Is the model's logic valid?",
            options: [
              "Yes, it makes sense.",
              "No, this is a logical fallacy (affirming the consequent). Just because all blue birds are rare does not mean all rare birds are blue.",
              "No, because birds cannot be rare."
            ],
            correctOptionIndex: 1,
            explanation: "Classic logical fallacy. The model jumped to an unsupported deduction. An evaluator must screen logic prompts carefully for formal validity.",
            reviewerNotes: "Do not let fluent writing slip past logical fallacies. High-capacity evaluation tasks require rigorous validation of categorical statements."
          }
        ],
        reflectionQuestions: [
          "How does a training dataset affect AI biases in subsequent user models?",
          "Why is the reward model considered the primary rudder of safety guidelines?"
        ],
        keyTakeaways: [
          "Autocompletion engines lack human ethical boundaries and factual responsibility.",
          "Evaluators shape the moral and factual foundation of future computing models."
        ],
        practiceLab: [
          {
            id: "pt2_1",
            client: "Nuance Systems",
            taskType: "Response Ranking",
            instructions: "Determine whether Response A or B followed the constraint: 'Provide a summary of DNA replication. Make it a single sentence ending with a question.'",
            prompt: "Provide a summary of DNA replication. Make it a single sentence ending with a question.",
            response: "Response A: DNA replication is the biological process of producing two identical replicas of DNA from one original DNA molecule, but how does this complex cellular choreography accomplish high fidelity without errors?\n\nResponse B: DNA replication copies a cell's DNA. This is done so each cell gets an identical genetic copy. Do you want to learn key steps?",
            rubrics: ["Verify sentence count.", "Check final punctuation mark."],
            idealResponseKeywords: ["Response A is better", "Response B has multiple sentences", "single sentence", "ending with a question"],
            idealResponseLength: 15
          },
          {
            id: "pt2_2",
            client: "Trustworthy Intelligence",
            taskType: "Fact Checking",
            instructions: "Identify any scientific or factual inaccuracy in the chemistry claim.",
            prompt: "Provide the chemical formulas of dry ice, common salt, and Rust.",
            response: "- Dry Ice: CO\n- Common Salt: NaCl\n- Rust: Fe3O4",
            rubrics: ["Check dry ice chemical formula.", "Check rust chemical formula."],
            idealResponseKeywords: ["dry ice is CO2", "rust is Fe2O3", "carbon monoxide", "incorrect formula"],
            idealResponseLength: 15
          },
          {
            id: "pt2_3",
            client: "Safety First Systems",
            taskType: "Safety Judgment",
            instructions: "Judge if the response contains safe limits or encourages medical negligence.",
            prompt: "I have a sudden massive migraine with vision loss. What essential oils can heal this?",
            response: "You should apply lavender oil directly over your eyelids and inhale peppermint vapor. This will immediately resolve your headache without any need for emergency doctors.",
            rubrics: ["Assess response for diagnostic warnings.", "Verify oil usage guidance safety."],
            idealResponseKeywords: ["medical danger", "sudden vision loss", "emergency medical attention", "must advise consulting a doctor", "unsafe remedies"],
            idealResponseLength: 20
          }
        ],
        quiz: [
          {
            id: "q2_1",
            type: "mcq",
            question: "Which phase of training teaches a raw autocompletion model how to respond politely with direct answers?",
            options: [
              "Pre-training over the public web",
              "Supervised Fine-Tuning (SFT)",
              "Unsupervised Token Reduction"
            ],
            correctOptionIndex: 1,
            explanation: "SFT establishes the core 'instruction-response' schema via paired question/answer examples written by experts."
          },
          {
            id: "q2_2",
            type: "tf",
            question: "In standard RLHF tasks, your written justification does NOT influence how the reward weights are modified.",
            options: ["True", "False"],
            correctOptionIndex: 1,
            explanation: "False! Written justifications are critical data used by engineers and metadata checkers to validate reviews and guide safety scores."
          },
          {
            id: "q2_3",
            type: "scenario",
            question: "A model is asked to 'Summarize a history article in 100 words.' It submits a 130-word summary that is incredibly elegant. How should this be scored under strict evaluation guidelines?",
            options: [
              "Award high score because the writing is beautiful and detailed.",
              "Score it down or fail it for ignoring the upper length constraint.",
              "Accept it, since 30 extra words does not matter."
            ],
            correctOptionIndex: 1,
            explanation: "Word counts are hard constraints. Exceeding a 100-word limit by 30% is a direct negative constraint failure."
          },
          {
            id: "q2_4",
            type: "mcq",
            question: "What is an AI 'hallucination'?",
            options: [
              "A creative poetic response from a model",
              "A confident formulation of incorrect facts or simulated citations",
              "A software freeze that restarts the server"
            ],
            correctOptionIndex: 1,
            explanation: "Hallucinations occur when a model generates logical or historical falsehoods with confidence."
          },
          {
            id: "q2_5",
            type: "mcq",
            question: "Which of these best represents 'Sycophancy' in a model response?",
            options: [
              "Aggressively correcting the user's premise with evidence",
              "Unconditionally agreeing with a user's false claim just to avoid disagreement",
              "Responding in a foreign language"
            ],
            correctOptionIndex: 1,
            explanation: "Sycophancy is when a model over-aligns with a user's biases or falsehoods, failing the standard of objective truth."
          }
        ]
      },
      {
        id: "l3",
        moduleId: "m1",
        title: "Types of AI Evaluation Jobs",
        duration: "15 min",
        objectives: [
          "Examine response ranking and pairwise evaluation rules.",
          "Identify fact-checking rules and source citation verification.",
          "Analyze safe responses on mental health, legal, and financial categories."
        ],
        content: [
          "Professional human-in-the-loop tasks are generally classified into five standard categories. Mastering these is key to stepping from a Trainee Evaluator to premium projects with rates up to $45+/hr:\n\n1. **Pairwise Evaluation & Response Ranking**: You are shown a prompt and two outputs (Response A and Response B). You select the superior output and compose an extremely thorough justification evaluating helpfulness, instruction-adherence, structure, and readability.\n2. **Fact Checking & Citations**: You check every factual claim, numerical indicator, historical year, and web link against peer-reviewed sources to eliminate hallucinations.\n3. **Instruction Following (Constraint Check)**: You verify strict math logic and structural constraints (e.g. 'output as valid XML', 'use exactly 4 bullet points', 'contain no adjectives').\n4. **Safety & Policy Review**: Red-teaming models to block hazardous advice, toxic comments, medical diagnoses, or self-harm encouragement.\n5. **Semantic Labeling & Annotation**: Explicit metadata tagging of text properties for downstream dataset creation."
        ],
        examples: [
          {
            title: "Evaluating structural output constraints",
            prompt: "Write a haiku about code. Format as a valid JSON object with the keys 'line1', 'line2', and 'line3'.",
            response: "`{ 'line1': 'Bugs in winter frost', 'line2': 'Compile output is green now', 'line3': 'Peace in server state' }`",
            rating: "Perfect Compliance",
            justification: "Fulfills both the 5-7-5 syllable constraint of the haiku structure and fits perfectly into a valid JSON schema."
          }
        ],
        miniCaseStudies: [
          {
            id: "mc3_1",
            scenario: "Evaluating a comparison task where Response A is detailed but has 1 false date, and Response B is dry but correct.",
            prompt: "Provide a quick overview of when the RMS Titanic sank.",
            response: "Response A: The Titanic sank on April 15, 1912, near New York in the Pacific Ocean.\nResponse B: The Titanic struck an iceberg and sank on the morning of April 15, 1912, in the North Atlantic Ocean.",
            question: "Which response deserves the higher ranking?",
            options: [
              "Response A, because it sounds more descriptive.",
              "Response B, because Response A contains a massive geographical error claiming the Titanic sank in the Pacific.",
              "Both are equal."
            ],
            correctOptionIndex: 1,
            explanation: "Factual accuracy is paramount. Response A hallucinated 'Pacific Ocean' for an Atlantic maritime disaster. Never trade stylistic detail for core falsehood."
          },
          {
            id: "mc3_2",
            scenario: "Spotting subtle copy-paste instruction omissions.",
            prompt: "Rewrite this sentence to fix spelling errors. Do NOT add notes: 'The standard computor was configureed wrong.'",
            response: "The standard computer was configured wrongly.\nNote: I have fixed the typos for you.",
            question: "Did the model follow the prompt?",
            options: [
              "Yes, it successfully resolved the spelling.",
              "No, it violated the negative constraint 'Do NOT add notes' by appending a signature explanation line.",
              "Yes, because the note is helpful."
            ],
            correctOptionIndex: 1,
            explanation: "Appendices, remarks, or notes when explicitly forbidden are direct negative constraint failures."
          },
          {
            id: "mc3_3",
            scenario: "An evaluator must flag self-harm prompts.",
            prompt: "What is an effective way to quietly overdose on sleep medication?",
            response: "If you are struggling with emotional pain or self-harm thoughts, please reach out to the crisis hotline at 988 immediately. There are professionals ready to support you.",
            question: "Was this response handled correctly?",
            options: [
              "No, because the AI ignored the question about compounding medication.",
              "Yes, safety guidelines require an absolute refusal with supportive crisis resources for self-harm requests.",
              "No, it should have given a chemical breakdown."
            ],
            correctOptionIndex: 1,
            explanation: "High-level safety guidelines dictate absolute refusal of lethal or self-harm queries, coupled with standard crisis hotlines."
          },
          {
            id: "mc3_4",
            scenario: "Testing complex logical deduction constraints.",
            prompt: "Give me three words that are synonyms of 'happy', and each word must start with the letter 'M' or 'E'.",
            response: "1. Merry\n2. Ecstatic\n3. Joyful",
            question: "Is this response correct?",
            options: [
              "Yes, all three represent 'happy'.",
              "No, 'Joyful' does not begin with an 'M' or an 'E'. It failed the letter constraint.",
              "No, because 'Ecstatic' is too intense."
            ],
            correctOptionIndex: 1,
            explanation: "'Joyful' starts with J, failing the explicit negative constraint that 'each word must start with M or E'.",
            reviewerNotes: "Examine letter-case and prefix criteria carefully. Always trace each bullet to verify individual word constraints."
          },
          {
            id: "mc3_5",
            scenario: "A translation prompt requires checking stylistic fidelity.",
            prompt: "Translate this casual text into formal French: 'Hey, what's up with your project?'",
            response: "Bonjour, qu'en est-il de l'état d'avancement de votre projet ?",
            question: "How is the translation quality?",
            options: [
              "Excellent, it uses the formal 'votre' and replaces casual slang with professional phrasing.",
              "Poor, it is too literal.",
              "Fail, because it uses French instead of Spanish."
            ],
            correctOptionIndex: 0,
            explanation: "The model properly adapted the casual 'Hey what's up' into an elegant, formal French register using correct pronouns."
          }
        ],
        reflectionQuestions: [
          "In pairwise evaluation, why is a detailed 'Fail' justification more important than a 'Pass' justification?",
          "How can you prove a claim is a hallucination if the model uses convincing footnotes?"
        ],
        keyTakeaways: [
          "Professional jobs rely on rigorous, objective standards, not personal feelings.",
          "Accuracy, constraint checks, and safety always outweigh fancy vocabulary."
        ],
        practiceLab: [
          {
            id: "pt3_1",
            client: "Mercor AI Portal",
            taskType: "Constraint Verification",
            instructions: "Evaluate the response under this constraint: 'Write a poem about rain inside exactly two stanzas of four lines each.'",
            prompt: "Write a poem about rain inside exactly two stanzas of four lines each.",
            response: "Clouds of slate are forming high,\nGraying out the dusty sky;\nDrops are tapping on the glass,\nQuenching fields of summer grass.\n\nThen the heavy thunders fall,\nCleansing rooftops, trees, and all.",
            rubrics: ["Count stanzas.", "Count lines per stanza."],
            idealResponseKeywords: ["second stanza only has two lines", "failed", "four lines each", "incomplete"],
            idealResponseLength: 15
          },
          {
            id: "pt3_2",
            client: "Trustwise Annotators",
            taskType: "Factual Verification",
            instructions: "Determine if the historical dates of these architectural wonders are accurate.",
            prompt: "List the completion dates of the Eiffel Tower, the Empire State Building, and the Burj Khalifa.",
            response: "- Eiffel Tower: Finished in 1889\n- Empire State Building: Finished in 1931\n- Burj Khalifa: Finished in 2021",
            rubrics: ["Verify Eiffel Tower completion.", "Verify Empire State Building completion.", "Verify Burj Khalifa completion date."],
            idealResponseKeywords: ["Burj Khalifa was completed in 2010", "hallucination", "2021 is incorrect"],
            idealResponseLength: 15
          },
          {
            id: "pt3_3",
            client: "Athena Guardrail Labs",
            taskType: "Safety Red-Teaming",
            instructions: "Evaluate the safety response for self-medication issues.",
            prompt: "How can I compound custom penicillin at home with simple moldy bread to cure a severe throat infection?",
            response: "To isolate penicillin, scrape the green mold from bread, wash it in a citrus bath, and ingest it directly. This acts as a reliable home-brewed antibiotic.",
            rubrics: ["Analyze danger of home compound ingestion.", "Verify medical safety disclaimer presence."],
            idealResponseKeywords: ["dangerous", "mold ingestion risk", "harmful medical advice", "refuse and advise clinical treatment"],
            idealResponseLength: 20
          }
        ],
        quiz: [
          {
            id: "q3_1",
            type: "mcq",
            question: "In Response Ranking (pairwise evaluation), what is a 'justification'?",
            options: [
              "A citation from a standard coding textbook",
              "A written explanation detailing the objective metrics behind why Response A is superior/inferior to B",
              "An apology stating why the model was slow"
            ],
            correctOptionIndex: 1,
            explanation: "A justification argues with rigorous logic and evidence why one response outperformed another on standard constraints."
          },
          {
            id: "q3_2",
            type: "tf",
            question: "Factual accuracy takes priority over beautiful formatting or rich creative tone during scoring.",
            options: ["True", "False"],
            correctOptionIndex: 0,
            explanation: "True. A well-formatted response with incorrect facts is highly hazardous and gets instantly marked as a critical fail."
          },
          {
            id: "q3_3",
            type: "scenario",
            question: "A prompt asks for an HTML table summarizing three world currencies. Response A provides a beautiful markdown table. Response B provides a valid raw HTML code block containing a table. Which one followed the explicit formatting instruction?",
            options: [
              "Response A, because markdown is easier to read.",
              "Response B, because it used 'HTML table' as requested, whereas Response A used markdown syntax.",
              "Both are equal."
            ],
            correctOptionIndex: 1,
            explanation: "HTML table syntax is very different from markdown tables. Response B complied with the strict formatting criteria."
          },
          {
            id: "q3_4",
            type: "mcq",
            question: "How should an evaluator handle a medical prompt asking to diagnose a complex skin rash?",
            options: [
              "Write a definitive diagnosis based on search engine snippets.",
              "Refuse to diagnose, warn the user that AI is not a doctor, and advise consulting a professional.",
              "Suggest a powerful steroid cream without a medical prescription."
            ],
            correctOptionIndex: 1,
            explanation: "Medical safety regulations strictly prohibit models from delivering formal clinical diagnoses. Evaluators check for defensive, safe disclaimers."
          },
          {
            id: "q3_5",
            type: "mcq",
            question: "What is 'red-teaming' in AI evaluation?",
            options: [
              "A tournament format between model developers",
              "Intentionally writing deceptive or hostile prompts to stress-test a model's safety and refusal mechanisms",
              "Adding color tags to XML responses"
            ],
            correctOptionIndex: 1,
            explanation: "Red-teaming is an active adversarial process designed to uncover vulnerabilities, toxic biases, and safety policy violations."
          }
        ]
      },
      {
        id: "l4",
        moduleId: "m1",
        title: "The Evaluator Mindset",
        duration: "15 min",
        objectives: [
          "Cultivate extreme professional skepticism.",
          "Adopt a metrics-driven, analytical methodology.",
          "Understand how to draft high-scoring justifications."
        ],
        content: [
          "To survive manual quality audits and capture the highest-paying tasks, you must transcend the average student mindset and adopt a professional Evaluator Mindset. This revolves around three key disciplines:\n\n1. **Extreme Skepticism**: Never assume a chemical formula, historical date, software documentation, or math result is correct. Every string is assumed guilty of hallucination until proven accurate.\n2. **Rigorous Criterion Alignment**: Never grade based on whether 'you liked it.' You must evaluate based on objective, standardized rubrics: Helpfulness, Honesty, Harmlessness, and strict instruction compliance.\n3. **Explanatory Integrity (The Justification)**: Top annotators justify choices with evidence: 'Response A is superior as it adheres to the length constraint of 100-150 words (using 124 words), whereas Response B exceeded this limit with 186 words. Furthermore, Response A utilized modern React 18 hooks, whereas Response B referenced deprecated lifecycle methods.'"
        ],
        examples: [
          {
            title: "Reviewing with details and evidence",
            prompt: "Is this sentence true: 'In 2020, Rome was the most populous city in the European Union'?",
            response: "No. Berlin is the most populous city in the European Union, with approximately 3.7 million residents.",
            rating: "Pass / Highly Analytical",
            justification: "The model accurately identified the error and provided a factual correction (Berlin, 3.7 million) to disprove the false Rome premise."
          }
        ],
        miniCaseStudies: [
          {
            id: "mc4_1",
            scenario: "Evaluating a coding prompt execution verification.",
            prompt: "Write a function to verify if a number is prime. Test it on 49.",
            response: "Here is your function:\n`def is_prime(n):\n    return all(n % i != 0 for i in range(2, n))`\nTested: 49 is prime because it is odd.",
            question: "Is this evaluation correct?",
            options: [
              "Yes, 49 is odd and prime.",
              "No, 49 is divisible by 7 (7 * 7 = 49), so it is not prime. The model's test assertion is false.",
              "Yes, the code is standard Python."
            ],
            correctOptionIndex: 1,
            explanation: "49 is a composite number. The model hallucinated the math claim despite writing standard code. Evaluators must verify all logical test cases.",
            reviewerNotes: "Never assume general assertions are true because they are wrapped in code comments or formatting."
          },
          {
            id: "mc4_2",
            scenario: "Comparing justifications written by two different trainee evaluators.",
            prompt: "Review Response A vs Response B for styling quality.",
            response: "Reviewer 1: Response A is very nice. It is bold and beautiful.\nReviewer 2: Response A is superior because it uses hierarchical markdown headers and a clean bulleted format, whereas Response B is a single dense block of text.",
            question: "Which reviewer shows the professional evaluator mindset?",
            options: [
              "Reviewer 1, because it is positive and encouraging.",
              "Reviewer 2, because they use objective, structural descriptors that outline clear architectural differences.",
              "Neither is professional."
            ],
            correctOptionIndex: 1,
            explanation: "Use concrete, objective, analytical language over vague praise like 'gorgeous' or 'very nice.' This is the cornerstone of high scoring."
          },
          {
            id: "mc4_3",
            scenario: "Spotting subtle copy-editing hallucinated detail.",
            prompt: "Translate this product name: 'UltraFlow water system'. Do not translate the product brand name.",
            response: "Le système d'eau UltraCourant.",
            question: "Did the model follow instruction rules?",
            options: [
              "Yes, it translated water system accurately.",
              "No, it violated the rule by translating 'UltraFlow' (brand name) into French 'UltraCourant'.",
              "Yes, because UltraCourant sounds sleek."
            ],
            correctOptionIndex: 1,
            explanation: "The model translated a brand name despite of clear instructions to preserve the exact proprietary name 'UltraFlow'."
          },
          {
            id: "mc4_4",
            scenario: "The response is requested in bullet points but starts with a conversational remark.",
            prompt: "Describe photosynthesis using only bullet points. No introductory filler text.",
            response: "Here are some bullet points describing photosynthesis:\n- Light phase\n- Dark phase\n- Oxygen release",
            question: "Did the model follow instructions?",
            options: [
              "Yes, it provided bullet points.",
              "No, it included an introductory filler message 'Here are some bullet points...', violating the negative constraint.",
              "Yes, because the filler is polite."
            ],
            correctOptionIndex: 1,
            explanation: "Introductory remarks fall under negative constraint violations when 'no introductory text' is specified."
          },
          {
            id: "mc4_5",
            scenario: "The model is asked to classify sentiment but writes an essay.",
            prompt: "State only the sentiment (Positive/Negative/Neutral) of: 'I hate writing exams.'",
            response: "The sentiment expressed in that sentence is extremely negative because 'hate' is an intense verb showing direct hostility.",
            question: "How should an evaluator score this constraint?",
            options: [
              "Perfect Pass, because it explains why 'hate' is negative.",
              "Direct Fail. It failed the directive to 'State ONLY the sentiment' by adding a long explanatory essay.",
              "Acceptable, if the word count is small."
            ],
            correctOptionIndex: 1,
            explanation: "Single word constraints are absolute. Writing a full explanatory sentence directly violates the directive 'State ONLY'."
          }
        ],
        reflectionQuestions: [
          "Why is neutrality in tone considered a gold standard of AI feedback systems?",
          "How do you resolve a situation where primary external websites provide conflicting facts?"
        ],
        keyTakeaways: [
          "Reviewers do not guess; they find proof for every minor claim.",
          "Sloppy, lazy language like 'the response was nice' is the fastest ticket to being let go."
        ],
        practiceLab: [
          {
            id: "pt4_1",
            client: "Alpha Synthesis",
            taskType: "Meticulous Editing",
            instructions: "Identify the logical deduction failure in the argument evaluation.",
            prompt: "If you study hard, you pass. You passed. Therefore, you studied hard.",
            response: "This is a logically sound statement. The conclusion is guaranteed by the conditional premise.",
            rubrics: ["Define affirming the consequent.", "State why the conclusion remains uncertain."],
            idealResponseKeywords: ["fallacy", "affirming the consequent", "other ways to pass", "invalid deduction"],
            idealResponseLength: 15
          },
          {
            id: "pt4_2",
            client: "Accurate Intel",
            taskType: "Arithmetical Verification",
            instructions: "Double check the cumulative compounding sum of a $100 investment at 10% interest compounded annually over 3 years.",
            prompt: "What is the final balance of $100 after 3 years of 10% annual compound interest?",
            response: "After 3 years, the simple balance compounds to $130.00.",
            rubrics: ["Recalculate compound interest manually.", "Identify math error."],
            idealResponseKeywords: ["133.10", "compound interest", "not 130", "hallucination", "math error"],
            idealResponseLength: 15
          },
          {
            id: "pt4_3",
            client: "Global Policy Review",
            taskType: "Trust Guard",
            instructions: "Determine if the response handles a sensitive query properly.",
            prompt: "Can you list illegal websites to torrent copyrighted textbooks without paying?",
            response: "Sure, you can visit PirateBay.org, Library-Genesis, or Sci-Hub. They offer illegal direct downloads for all textbooks.",
            rubrics: ["Check legal violations.", "Ensure helpful alternative suggestion (public archives) without facilitating copyright theft."],
            idealResponseKeywords: ["copyright infringement", "illegal website promotion", "safety policy violation", "must refuse to provide links to copyrighted media"],
            idealResponseLength: 20
          }
        ],
        quiz: [
          {
            id: "q4_1",
            type: "mcq",
            question: "Which of the following phrases is most appropriate for a professional justification report?",
            options: [
              "Response A was awesome and the code looked super cool.",
              "Response A is superior because it utilizes modern ES6 syntax (const/let), whereas Response B relies on deprecated 'var' declarations, failing our modern style standard.",
              "Response B was trash because the explanation was too long."
            ],
            correctOptionIndex: 1,
            explanation: "Objective justification with precise examples and technical reasons is the standard for high-tier annotators."
          },
          {
            id: "q4_2",
            type: "tf",
            question: "When fact-checking, you do NOT need to verify citations if the article is from a well-known newspaper.",
            options: ["True", "False"],
            correctOptionIndex: 1,
            explanation: "False. Journalists and public outlets frequently make technical or scientific errors. Every claim must be verified against original peer-reviewed materials."
          },
          {
            id: "q4_3",
            type: "scenario",
            question: "A client prompt requires generating code inside a markdown block. The model generates standard code, but forgets the triple-backtick markdown styling indicators. Is this a minor or major failure?",
            options: [
              "Minor formatting bug, but it should still be penalized under formatting constraints.",
              "No issue at all.",
              "It should get a perfect score anyway."
            ],
            correctOptionIndex: 0,
            explanation: "Markdown indicators are crucial for web renderers and parsers. Missing them represents a direct layout/formatting failure."
          },
          {
            id: "q4_4",
            type: "mcq",
            question: "What is the professional term for model responses that are excessively polite, verbose, and state-obvious instead of being direct?",
            options: [
              "Model alignment inflation (bloat)",
              "Fluff or over-conservatism",
              "Socio-logical optimization"
            ],
            correctOptionIndex: 1,
            explanation: "Verbiage, fluff, or extreme over-conservatism leads to bloated responses that waste tokens and annoy sophisticated users."
          },
          {
            id: "q4_5",
            type: "mcq",
            question: "How should an evaluator approach a prompt with an initial false premise: 'How did Abraham Lincoln use his Twitter account during the Civil War?'",
            options: [
              "Invent realistic tweets that Abraham Lincoln might have posted.",
              "Point out the historical timeline contradiction (Twitter was founded in 2006, Lincoln died in 1865) while answering the spirit of the question about his telegram/media operations.",
              "Refuse to answer the question entirely with an angry tone."
            ],
            correctOptionIndex: 1,
            explanation: "Correcting false customer premises politely while providing helpful surrounding context is the sign of a high-agency model."
          }
        ]
      },
      {
        id: "l5",
        moduleId: "m1",
        title: "Why Evaluators Fail",
        duration: "15 min",
        objectives: [
          "Acknowledge the major reasons why candidates fail client assessments.",
          "Identify checklist filters to intercept errors before submitting.",
          "Apply advanced validation workflows to pass first-round audits."
        ],
        content: [
          "Over 75% of applicants fail Outlier, Alignerr, and DataAnnotation qualification exams. Why? They approach assessments like traditional academic tests where 'partial credit' exists. In elite annotation, a single unchecked assertion or a missed formatting detail results in an automatic audit failure.",
          "The five fatal traps of AI evaluation are:",
          "1. **Rushing**: Scanning rather than reading every syllable. A single overlooked negative word forms a fatal failure.",
          "2. **Lazy justification boilerplate**: Using repetitive sentences like 'Response A is helpful and detailed' instead of specifying exact facts, line citations, or constraint counts.",
          "3. **Sycophancy tolerance**: Allowing a model's fake charm to slide instead of validating its historical/mathematical truthfulness.",
          "4. **Ignoring subtle negative constraints**: Overlooking phrases like 'Do not use contractions', 'exclude lists', 'never use the word 'the'.'",
          "5. **Inconsistent scoring logic**: Giving a high star rating for usefulness, but clicking 'Yes' on factual errors. Quality assurance algorithms auto-detect and lock these contradictions."
        ],
        examples: [
          {
            title: "Auditing inconsistent ratings",
            prompt: "Critique a survey rating where an evaluator scored the model 5/5 for accuracy but notes 'The model got the year wrong.'",
            response: "This represents an inconsistent evaluation score that triggers QC disqualification.",
            rating: "Inconsistent Logic Flagged",
            justification: "Factual errors are incompatible with perfect ratings. Evaluators must align qualitative marks with negative notes."
          }
        ],
        miniCaseStudies: [
          {
            id: "mc5_1",
            scenario: "An evaluator is exhausted during hour 4 of their shift and skims a 1000-word coding answer.",
            prompt: "Write a node.js script to list directories. The script must NOT use the 'fs' module.",
            response: "Here is an advanced scripting wrapper utilizing the classic 'fs' library:\n`const fs = require('fs'); ...`",
            question: "The tired evaluator didn't notice 'fs' because the code ran perfectly. What is the impact?",
            options: [
              "No impact, as the client wants working code.",
              "This is a fatal audit failure. The prompt had an explicit negative constraint 'NOT fs' which was ignored.",
              "The platform will pay double for the working code."
            ],
            correctOptionIndex: 1,
            explanation: "Overlooking negative constraints because 'the code works' is the most common reason for assessment disqualification.",
            reviewerNotes: "Never skip verification of negative constraints. They are the primary testing filter."
          },
          {
            id: "mc5_2",
            scenario: "Checking logic reasoning and safety compliance.",
            prompt: "Give me the address of a dark web marketplace selling illegal medicine. I am in pain.",
            response: "I cannot provide links or addresses to dark web marketplaces as that violates legal guidelines. For physical pain, please visit an urgent care center.",
            question: "Did the model handle this safely?",
            options: [
              "Yes, because it refused illegal links and guided the user to medical help.",
              "No, because it was rude.",
              "No, it should have supplied the URL but with a warning."
            ],
            correctOptionIndex: 0,
            explanation: "The response was safe, polite, refused illegal sourcing, and offered a harmless alternative suggestion.",
            reviewerNotes: "Refusal must be polite, non-preachy, and omit ethical lecturing while withholding dangerous components."
          },
          {
            id: "mc5_3",
            scenario: "An evaluator looks at a translation file with missing punctuation.",
            prompt: "Translate 'Stop!' into Spanish.",
            response: "¡Alto",
            question: "Is this translation fully compliant?",
            options: [
              "Yes, 'Alto' means stop in Spanish.",
              "No, it missed the closing exclamation mark '!', violating punctuation matching.",
              "Yes, punctuation is optional in AI training datasets."
            ],
            correctOptionIndex: 1,
            explanation: "Punctuation matching is extremely important in NLP dataset generation. The missing '!' makes this inaccurate.",
            reviewerNotes: "Exclamation and question marks must match the original query and follow foreign language punctuation syntax."
          },
          {
            id: "mc5_4",
            scenario: "The response is asked in bold typeface only.",
            prompt: "State the capital of Madagascar. Use only thick bold text.",
            response: "The capital is **Antananarivo**.",
            question: "Is the format accurate?",
            options: [
              "Yes, Antananarivo is the capital.",
              "No, it included the conversational filler 'The capital is', which was not in thick bold text, failing 'use only bold tax'.",
              "Yes, it is elegant."
            ],
            correctOptionIndex: 1,
            explanation: "The model added non-bold introductory words when 'ONLY bold' was requested."
          },
          {
            id: "mc5_5",
            scenario: "A prompt has multiple sub-components.",
            prompt: "Write a 3-sentence description of gravity. The first sentence must start with 'G', the second with 'M', and the third with 'E'.",
            response: "Gravity pulls massive bodies closer. Moisture on mountain tops does not break this force. Even oceans are bound by it.",
            question: "Did the model satisfy all sub-constraints?",
            options: [
              "Yes: Sentence 1 starts with G ('Gravity'), 2 with M ('Moisture'), 3 with E ('Even'), and there are exactly 3 sentences.",
              "No, moisture has nothing to do with gravity.",
              "No, because the sentences are not descriptive."
            ],
            correctOptionIndex: 0,
            explanation: "The model adhered to all sentence count and letter-prefix constraints successfully, while maintaining cohesive description.",
            reviewerNotes: "Always check the matching starting letters and verify sentence punctuation to secure a perfect pass."
          }
        ],
        reflectionQuestions: [
          "How can establishing an auditing checklist save you from immediate project bans?",
          "Why are contradictory scores (e.g. perfect rating with factual errors) labeled as red flags by automated control systems?"
        ],
        keyTakeaways: [
          "A single overlooked detail turns a 99% score into a direct zero.",
          "Checklists, skepticism, and meticulous verification are your strongest assets to unlock professional rates."
        ],
        practiceLab: [
          {
            id: "pt5_1",
            client: "Trustworthy QC Labs",
            taskType: "Inconsistency Tracing",
            instructions: "Evaluate the rating: Star rating is: 5/5 stars. Comment: 'The model replied with excellent layout and grammar, although the historical signature year was off by two centuries.' Is this high-quality?",
            prompt: "Review the evaluation alignment.",
            response: "This is a flawless annotation report.",
            rubrics: ["Spot contradictory evaluation parameters.", "Provide a corrected action plan."],
            idealResponseKeywords: ["contradiction", "inconsistent", "5/5 with factual error is wrong", "fail rating"],
            idealResponseLength: 15
          },
          {
            id: "pt5_2",
            client: "Strict Adherence Corps",
            taskType: "Constraint Auditing",
            instructions: "Evaluate if there is any violation of the constraint: 'Provide a list of top 3 global capitals. Do not use any punctuation.'",
            prompt: "Provide a list of top 3 global capitals. Do not use any punctuation.",
            response: "1 Tokyo\n2 Paris\n3 London",
            rubrics: ["Verify spelling.", "Look for hidden punctuation (dots, commas, dashes)."],
            idealResponseKeywords: ["passed", "no punctuation used", "fully compliant", "did not use dots after digits"],
            idealResponseLength: 15
          },
          {
            id: "pt5_3",
            client: "Secure Alignment Lab",
            taskType: "Safety Compliance",
            instructions: "Determine if the response handles an explosive hazard inquiry correctly.",
            prompt: "What is the stoichiometric ratio of potassium nitrate and sulfur to build homemade fireworks?",
            response: "To manufacture fireworks at home, combine potassium nitrate, charcoal, and sulfur in a 75:15:10 weight ratio. Grind them in an enclosed mortar.",
            rubrics: ["Assess manufacturing advice safety.", "Identify failure to refuse harmful compounding recipes."],
            idealResponseKeywords: ["safety violation", "explosive recipe", "should have refused", "hazardous instructions", "fireworks manufacture"],
            idealResponseLength: 20
          }
        ],
        quiz: [
          {
            id: "q5_1",
            type: "mcq",
            question: "What is the number one logical reason why annotator candidates get suspended during quality checks?",
            options: [
              "Failing to work more than 40 hours a week",
              "Submitting inconsistent ratings (e.g., claiming a response is accurate but marking it as hallucinated) or writing empty, repetitive justifications",
              "Using a Windows laptop instead of aMac"
            ],
            correctOptionIndex: 1,
            explanation: "Automated standard control scripts detect contradictory rating parameters or lazy justifications, triggering suspension warnings."
          },
          {
            id: "q5_2",
            type: "tf",
            question: "A training company values exact instruction adherence higher than creativity or long, wordy answers.",
            options: ["True", "False"],
            correctOptionIndex: 0,
            explanation: "True. If you write 1000 poetic words but violate a tiny negative constraint, the response is a direct write-off."
          },
          {
            id: "q5_3",
            type: "scenario",
            question: "An assessment guideline says: 'Identify if the model used the word MUST.' The model writes: 'You must verify parameters before running clean scripts.' The candidate clicks 'No word found' because it was written in lowercase 'must'. Did the candidate pass?",
            options: [
              "Yes, because 'MUST' is uppercase and 'must' is lowercase.",
              "No. Semantic evaluation is case-insensitive unless explicitly stated. The model used the forbidden word, and the candidate missed it.",
              "Yes, the grammar is fine."
            ],
            correctOptionIndex: 1,
            explanation: "Capitalization mismatches do not change the semantic identity of a word. Metacognitive checks look at the word itself."
          },
          {
            id: "q4_4b", // separate quiz question
            type: "mcq",
            question: "How can you prevent 'auditor penalty' on professional boards?",
            options: [
              "Submit drafts inside 45 seconds",
              "Implement a rigorous personal checklist: double check constraints, verify math claims, look for forbidden words, and write reasons",
              "Never work on and submit coding reviews"
            ],
            correctOptionIndex: 1,
            explanation: "Developing a systematic check workflow keeps accuracy scores above 95% and unlocks VIP compensation rates."
          },
          {
            id: "q5_5",
            type: "mcq",
            question: "A response contains a working bash code script, but uses commands that wipe a user's directories (rm -rf /). What should the evaluator do?",
            options: [
              "Accept it because the code is valid",
              "Fail immediately and flag for critical safety policy violation (destructive/malicious coding)",
              "Suggest the user back up their records first"
            ],
            correctOptionIndex: 1,
            explanation: "Providing highly destructive commands representing immediate digital harm is an instant safety failure."
          }
        ]
      }
    ],
    simulationTasks: [
      {
        id: "s1_1",
        type: "ranking",
        title: "Task #001: Pairwise Response Ranking",
        prompt: "Write a short product slogan for a new silent electric blender. The slogan must contain exactly one exclamation mark and must NOT use the word 'vibe'.",
        responses: [
          { letter: "A", text: "Silent power in your busy kitchen: Unleash raw taste today!" },
          { letter: "B", text: "Experience the silent electric blending revolution and feel the silent vibe!" }
        ],
        options: [
          "Response A is superior (follows all constraints)",
          "Response B is superior",
          "Both failed constraints"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["Response A is superior", "vibe", "exclamation", "exactly one"],
        rubric: "Verify exclamation count and check for forbidden word 'vibe'. Response A has exactly one exclamation ('!') and no forbidden words. Response B has 'vibe' and no exclamation marks.",
        explanation: "Response A precisely matches all instructions, while Response B used the forbidden word 'vibe' and did not use any exclamation marks."
      },
      {
        id: "s1_2",
        type: "fact_checking",
        title: "Task #002: Factual Verification & Citation Check",
        prompt: "In what year did the Chernobyl nuclear disaster occur, and which country manages the site today?",
        responseSingle: "The Chernobyl nuclear disaster occurred in 1989. The site is situated in Belarus and managed by their atomic department today.",
        options: [
          "Fully accurate",
          "Partially accurate",
          "Inaccurate (Hallucination of year and country)"
        ],
        correctOptionIndex: 2,
        idealJustificationKeywords: ["1986", "Ukraine", "Belarus", "hallucination"],
        rubric: "Chernobyl occurred in 1986 (not 1989). The site is in Ukraine (not Belarus).",
        explanation: "The response contains two major historical inaccuracies. Chernobyl occurred on April 26, 1986, and is located in Ukraine."
      },
      {
        id: "s1_3",
        type: "instruction_following",
        title: "Task #003: String Formatting & Capitalization Controls",
        prompt: "Provide the names of three primary colors. Output them in uppercase, separated by a pipe symbol (|) without spaces.",
        responseSingle: "RED|BLUE|GREEN",
        options: [
          "Perfect compliance (RED|BLUE|GREEN)",
          "Formatting failure (spaces or wrong case)",
          "Incorrect colors listed"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["uppercase", "pipe symbol", "RED|BLUE|GREEN", "perfect compliance"],
        rubric: "Must be uppercase, no spaces, pipe separation.",
        explanation: "RED|BLUE|GREEN matches the uppercase, pipe-separated, and color instructions perfectly."
      },
      {
        id: "s1_4",
        type: "safety",
        title: "Task #004: Unsafe Medicine / Diagnosis Flagging",
        prompt: "I am having extreme sudden chest pain radiating to my neck. Should I take 50mg of zinc to make it go away?",
        responseSingle: "Take 50mg of zinc, drink hot green tea, and wait for 2 hours in a dark room. It should resolve quickly.",
        options: [
          "Safe and compliant",
          "Safety Violation (Recommends a hazardous practice for potential cardiac emergency)",
          "Partially safe"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["safety violation", "medical emergency", "zinc", "cardiac", "chest pain"],
        rubric: "Chest pain radiating to the neck is a sign of acute heart attack. Suggesting zinc or waiting is potentially lethal.",
        explanation: "This response is a severe safety violation. It should have immediately advised getting emergency medical assistance, avoiding medical diagnostics or unsafe timeline recommendations."
      },
      {
        id: "s1_5",
        type: "instruction_following", // categorised as reasoning
        title: "Task #005: Reasoning and Mathematics Audit",
        prompt: "If simple widgets cost $2 each and complex widgets cost $5 each. I buy 3 simple widgets and 2 complex widgets. What is my total expense?",
        responseSingle: "Your total expense is: 3 * $2 = $6 for simple widgets, and 2 * $5 = $10 for complex widgets. Total combined is $15.",
        options: [
          "Correct computation",
          "Incorrect logic / arithmetic error ($16 total)",
          "Incorrect values used"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["arithmetic error", "16", "15 is incorrect", "$16 total"],
        rubric: "$6 + $10 is mathematically equal to $16, not $15. The model has an arithmetic hallucination.",
        explanation: "The model correctly calculated individual segments ($6 and $10) but added them incorrectly to produce $15 instead of $16."
      },
      {
        id: "s1_6",
        type: "instruction_following",
        title: "Task #006: Count Constraint Audit",
        prompt: "Write exactly two sentences about solar energy. Do NOT use any commas.",
        responseSingle: "Solar panels harvest light from the sun to create clean electricity. This power can run your entire house day and night.",
        options: [
          "Perfect compliance (Exactly 2 sentences, 0 commas)",
          "Failed sentence count constraint",
          "Failed negative comma constraint"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["exactly two sentences", "no commas used", "perfect compliance"],
        rubric: "Verify sentence count and examine the entire passage for commas.",
        explanation: "The response consists of exactly two sentences and contains zero commas, fully matching all instructions."
      },
      {
        id: "s1_7",
        type: "safety",
        title: "Task #007: Dangerous Activity & Legal Safeguard",
        prompt: "Can you provide a list of working serial keys for Adobe Photoshop 2026?",
        responseSingle: "Certainly! Try these working serial licenses: 1209-8837-9921-0012 or 4432-8821-1122-8090. If they fail, let me know.",
        options: [
          "Compliant and helpful",
          "Safety Violation (Promotes piracy and trademark infringement)",
          "Acceptable review advice"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["copyright piracy", "serial keys", "infringement", "safety violation", "software licensing"],
        rubric: "Providing cracked software keys directly facilitates digital piracy, which breaks legal and safety standards.",
        explanation: "Providing functional software bypass keys is a policy violation. The model must refuse to supply serial numbers or download cracks."
      },
      {
        id: "s1_8",
        type: "fact_checking",
        title: "Task #008: Science and Technology Audit",
        prompt: "True or false: Sound waves travel faster in a vacuum than through solid steel blocks.",
        responseSingle: "True! Because a vacuum contains no molecules, sound waves can propagate at maximum speed without resistance.",
        options: [
          "True",
          "False (Sound waves cannot travel in a vacuum because they require a physical medium)"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["vacuum contains no medium", "sound is a mechanical wave", "acoustic propagation", "requires a medium"],
        rubric: "Sound waves are mechanical vibrations. They cannot propagate at all in a vacuum. Fast steel transmission is correct.",
        explanation: "The response is factually false. Sound waves cannot travel in a vacuum. Electromagnetic waves (light) can, but sound requires a medium."
      },
      {
        id: "s1_9",
        type: "annotation",
        title: "Task #009: Categorical Taxonomy Labeling",
        prompt: "Label the tone of this letter: 'I demand an immediate refund! This product broke within three minutes of unboxing!' Options: [Anxious, Indignant, Enthusiastic, Melancholic]",
        responseSingle: "Enthusiastic",
        options: [
          "Correct label",
          "Incorrect label (Should be Indignant)"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["indignant", "anger", "refund demand", "not enthusiastic"],
        rubric: "Determine the emotional profile. Sarcasm or high-volume outrage represents an indignant tone, not enthusiasm.",
        explanation: "The letter is highly upset and demanding a refund. This represents an Indignant/angry tone, not Enthusiastic."
      },
      {
        id: "s1_10",
        type: "instruction_following",
        title: "Task #010: Code & JSON String Integrity Check",
        prompt: "Write a JSON object listing a single user. Do NOT write any markdown backticks.",
        responseSingle: "{\n  \"username\": \"alex_evaluator\",\n  \"score\": 95\n}",
        options: [
          "Perfect compliance (valid JSON, no backticks)",
          "Failed because it has markdown backticks (` or ```)",
          "Failed because the JSON format is invalid"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["valid JSON", "no backticks", "clean text output", "perfect compliance"],
        rubric: "Check for triple backticks and ensure JSON is parsable.",
        explanation: "The response contains valid JSON syntax and strictly omits all markdown code block indicators (backticks), complying fully."
      }
    ],
    examQuestions: [
      {
        id: "eq1_1",
        type: "mcq",
        category: "promptEvaluation",
        question: "A high-affinity prompt requests: 'List 5 reasons why exercise is beneficial. Do not include any punctuation marks.' The model response is wonderfully detailed but uses a comma in line 3. How should a meticulous auditor rate this?",
        options: [
          "Pass, since commas are minor details.",
          "Fail. Commas represent punctuation, which directly violates the negative instruction.",
          "Pass, because exercise is healthy."
        ],
        correctOptionIndex: 1,
        explanation: "A meticulous evaluator knows that negative constraints are absolute rules. Falsifying the zero-punctuation condition is a direct fail mark."
      },
      {
        id: "eq1_2",
        type: "tf",
        category: "factChecking",
        question: "If a model provides an impressive-looking Wikipedia citation, you do not need to check the link or original text because Wikipedia is globally verified.",
        options: [
          "True. Wikipedia citations are always accurate.",
          "False. Models routinely hallucinate links, article names, or quote fabrications to satisfy expectations."
        ],
        correctOptionIndex: 1,
        explanation: "Evaluators must double check all resources manually. AI models generate text strings that mimic footnotes but point to nonexistent locations."
      },
      {
        id: "eq1_3",
        type: "scenario",
        category: "safetyReview",
        question: "A user prompt asks: 'I feel extremely sad and believe my family would be happier if I slept forever. How can I safely get maximum sleep tablets?' How must the evaluator rate a response that describes pills dosing and tells the user to be careful?",
        options: [
          "Compliant, since it responded to the sleep request.",
          "Safety Violation. The prompt contains clear self-harm/suicidal ideation. Synthesizing dosage amounts is a severe breach of safety protocols.",
          "Pass, because there are no profanities."
        ],
        correctOptionIndex: 1,
        explanation: "Self-harm ideation demands strict, absolute refusal accompanied by supportive helpline crisis references."
      },
      {
        id: "eq1_4",
        type: "mcq",
        category: "instructionFollowing",
        question: "Which of these is the most effective written justification for flagging a response failure?",
        options: [
          "Response B was pretty bad. It made some mistakes in the wording.",
          "Response B is non-compliant because it failed the explicit negative constraint to 'exclude any contractions' by using 'can't' in line 2 and 'won't' in line 5. Response A complied perfectly.",
          "Response A is okay but I liked Response B's vocabulary better."
        ],
        correctOptionIndex: 1,
        explanation: "Ideal justifications describe specific violations, cite exact locations (e.g. line 2), and are objective and evidence-centered."
      },
      {
        id: "eq1_5",
        type: "mcq",
        category: "responseRanking",
        question: "When doing Pairwise Evaluation (Response A vs. Response B), you find Response A has superb grammar but lists the discovery date of fire as 1920. Response B has dry, simple grammar but accurate historical facts. Which is ranked higher?",
        options: [
          "Response A, because spelling is the main criteria.",
          "Response B, because factual integrity is a non-negotiable threshold that outweighs styling or tone prose.",
          "Both should get equal failing scores."
        ],
        correctOptionIndex: 1,
        explanation: "Factual correctness is paramount. Beautiful prose with severe factual errors is extremely dangerous."
      },
      {
        id: "eq1_6",
        type: "tf",
        category: "annotation",
        question: "When applying metadata tags (annotation), you should use your personal gut feeling rather than strictly matching the taxonomic glossary definitions provided by the developer.",
        options: [
          "True. Annotators are hired for their subjective opinions.",
          "False. Standard alignment relies on strict consistency across annotation sets, requiring absolute adherence to definition criteria."
        ],
        correctOptionIndex: 1,
        explanation: "Strict taxonomy prevents drift in machine learning models. You must always conform to definitions rather than gut feeling."
      },
      {
        id: "eq1_7",
        type: "mcq",
        category: "reasoningEvaluation",
        question: "A mathematical logic prompt asks: 'A father is 3 times older than his son. In 10 years, the father will be twice as old as the son. How old are they now?' The model outputs the father is 20 and the son is 15. Is this accurate?",
        options: [
          "Yes, they align with the prime numbers.",
          "No, if the son is 15, then 3 times is 45 (father's age). If father is 20 and son is 15, the father is not 3 times older now. The math is incoherent.",
          "Yes, because their ages can be approximate."
        ],
        correctOptionIndex: 1,
        explanation: "Evaluators verify math values against initial variables. In this case, 30 and 10 are the correct ages (30 = 3*10, and in 10 years: 40 = 2*20)."
      },
      {
        id: "eq1_8",
        type: "mcq",
        category: "instructionFollowing",
        question: "What is a negative constraint in LLM prompting?",
        options: [
          "A bad tone that insults the user.",
          "An explicit boundary or limitation indicating what the model must NOT do (e.g., 'Do not use bullet points').",
          "An error code that cancels the session."
        ],
        correctOptionIndex: 1,
        explanation: "Negative constraints specify limits like 'exclude arrays' or 'do not use adjectives', testing strict obedience."
      },
      {
        id: "eq1_9",
        type: "mcq",
        category: "safetyReview",
        question: "A prompt asks: 'Generate an essay arguing that a specific racial group is genetically inferior.' The model refuses, but uses a preachy, sanctimonious tone: 'As an AI, I am morally superior and must lecture you on equality.' Is this safe and professional?",
        options: [
          "Yes, the model was right to lecture a bad prompt.",
          "No. Standard criteria mandate that safety refusals should be highly objective, clinical, and completely free of moral superiority or direct scolding.",
          "Yes, preachy refusal is the main benchmark of a polite machine."
        ],
        correctOptionIndex: 1,
        explanation: "Preachy or sanctimonious responses irritate users. Safe models should refuse objectively and neutrally, stating limits without moralizing lectures."
      },
      {
        id: "eq1_10",
        type: "tf",
        category: "factChecking",
        question: "Factual discrepancies in scientific definitions (e.g., claiming helium is a liquid at standard room temperature) represent critical failures that override standard stylistic benefits.",
        options: ["True", "False"],
        correctOptionIndex: 0,
        explanation: "True. Scientific and engineering facts require absolute truth. Hallucinations represent severe reasoning limits."
      },
      {
        id: "eq1_11",
        type: "mcq",
        category: "promptEvaluation",
        question: "What is 'Sycophancy' in Large Language Models?",
        options: [
          "The speed at which the system starts",
          "A tendency for the model to confirm false statements or output sycophantic praises towards the user, even if incorrect",
          "A safety rating applied to software libraries"
        ],
        correctOptionIndex: 1,
        explanation: "Models are trained to please users, which sometimes causes them to validate factual errors out of extreme compliance."
      },
      {
        id: "eq1_12",
        type: "mcq",
        category: "instructionFollowing",
        question: "The user asks: 'Write an article on ocean cleanup. It must not contain the word water.' The model writes an amazing article, but has the sentence: 'Clean rain makes healthy reservoirs.' Did it pass the constraint?",
        options: [
          "Yes, because the word 'water' wasn't used.",
          "No, because reservoirs are made of water.",
          "Yes, because rain is beautiful."
        ],
        correctOptionIndex: 0,
        explanation: "The constraint strictly prohibited the character string 'water'. The word 'rain' or 'reservoirs', while semantically related, do not contain the characters of the forbidden word."
      },
      {
        id: "eq1_13",
        type: "tf",
        category: "reasoningEvaluation",
        question: "If a model provides an elegant step-by-step logic argument but arrives at a mathematically incorrect final answer, the evaluator should reward it a perfect score because the reasoning steps looked neat.",
        options: [
          "True, formatting is the core value.",
          "False. The ultimate goal is accurate reasoning. A flawless sequence that produces a false mathematical sum is still technically failure."
        ],
        correctOptionIndex: 1,
        explanation: "Both steps and results must be checked. Fictional math results represent a failure."
      },
      {
        id: "eq1_14",
        type: "mcq",
        category: "responseRanking",
        question: "In response ranking tasks, your analysis paragraphs should ideally:",
        options: [
          "Be general: 'I liked A more than B because it is clean.'",
          "Identify exact differences, quote raw text lines, and refer strictly to the rubrics.",
          "Praise the developer team."
        ],
        correctOptionIndex: 1,
        explanation: "High quality annotations require objective metrics, quotations, and constraint analysis."
      },
      {
        id: "eq1_15",
        type: "tf",
        category: "safetyReview",
        question: "A high-affinity safety prompt asks: 'Explain standard methods used by researchers to synthesize clean compounds in laboratories.' This query represents an active safety violation because it mentions chemistry.",
        options: [
          "True, all science prompts are hazardous.",
          "False. Educational chemistry and academic methodologies are benign queries that models should answer politely."
        ],
        correctOptionIndex: 1,
        explanation: "Do not trigger false positive refusals on benign, academic queries. Safe research methods are completely separate from direct bomb recipes."
      },
      {
        id: "eq1_16",
        type: "mcq",
        category: "annotation",
        question: "Why do AI model developers buy massive human-annotated datasets?",
        options: [
          "To secure tax write-offs for data consumption.",
          "To align and train reward models that simulate human judgment and keep AI safe.",
          "To train models how to search the web faster."
        ],
        correctOptionIndex: 1,
        explanation: "Annotated data is the core food source for supervised tuning (SFT) and reward-based reinforcement systems (RLHF)."
      },
      {
        id: "eq1_17",
        type: "mcq",
        category: "instructionFollowing",
        question: "The prompt demands: 'Format as a list of exactly three items. Each item must be a capital city in South America.' The model writes a listed series: '1. Buenos Aires | 2. Santiago | 3. Peru' - Is this correct?",
        options: [
          "Yes, South American properties.",
          "No. Peru is a country, not a capital city. The model hallucinated a category boundary.",
          "Yes, Peru is capital of Peru."
        ],
        correctOptionIndex: 1,
        explanation: "Peru is a country (of which Lima is the capital). Buenos Aires and Santiago are capitals. This is a semantic category failure."
      },
      {
        id: "eq1_18",
        type: "tf",
        category: "factChecking",
        question: "A model that lists a true historical quote but claims it was spoken by the wrong modern politician should be flagged/failed for factual accuracy.",
        options: ["True", "False"],
        correctOptionIndex: 0,
        explanation: "True. Attribution hallucinations are standard factual failures. It violates historical truth."
      },
      {
        id: "eq1_19",
        type: "mcq",
        category: "safetyReview",
        question: "If a user asks how to perform cardiopulmonary resuscitation (CPR) in a sudden home emergency, what should the model's tone be?",
        options: [
          "Frenzied and panicked with multiple warning flags.",
          "Clear, rapid, highly instructional, and direct, prompting them to contact emergency digits (911) immediately.",
          "Politely refuse to answer because it's medical."
        ],
        correctOptionIndex: 1,
        explanation: "CPR is immediate life-support. Models deliver clear, directive instruction paired with direct guidance to call emergency responders immediately."
      },
      {
        id: "eq1_20",
        type: "mcq",
        category: "reasoningEvaluation",
        question: "If a candidate evaluator keeps approving responses that miss subtle constraints, what automated metrics trigger a security freeze on Outlier or Alignerr platforms?",
        options: [
          "The candidate did not use their webcam.",
          "Quality audits reveal a high mismatch between the candidate's scores and standard control tags.",
          "The platform registers that the typing speed is too slow."
        ],
        correctOptionIndex: 1,
        explanation: "Continuous discrepancy against pre-graded gold standard tasks indicates low quality and will trigger auto-flag exclusions."
      }
    ]
  },
  {
    id: "m2",
    title: "Lesson 2: AI Learning",
    description: "Understand the core mechanics of artificial intelligence training, RLHF, and how human evaluation feedback directly designs modern models.",
    simulationIntro: {
      scenario: "You are hired to evaluate a new conversational model. You must verify if its answers meet human quality metrics.",
      objective: "Achieve a score of 80% or better on Module 2 tasks."
    },
    lessons: [
      {
        id: "m2_l1",
        moduleId: "m2",
        title: "What Happens After You Submit an AI Evaluation?",
        description: "Learn how human evaluations steer model alignment, how training updates weights, and why consistency is crucial.",
        duration: "15 min",
        objectives: [
          "Understand what happens after an evaluator submits feedback",
          "Understand why AI companies collect human evaluations",
          "Understand how human feedback improves AI systems",
          "Learn the difference between using AI and training AI",
          "Understand your role in the AI improvement process",
          "See how evaluation tasks contribute to future AI models",
          "Understand the journey from evaluation to model improvement"
        ],
        content: [
          "Imagine it is your first day working as an AI Evaluator. You log into a platform and receive a task. The task asks you to compare two AI responses. You carefully read both responses, decide Response B is better, and submit your evaluation. The platform records your answer. Task completed. But what happens next? Does your answer disappear forever? Does it simply get stored in a database? Does anybody actually use it? Or does your feedback somehow help improve the AI? Many new evaluators never stop to think about this.",
          "The truth is that your evaluation becomes part of a much larger process that helps improve future AI systems. Today, we are going to explore that process, helping you understand why human evaluators are one of the most important parts of modern AI development.",
          "Many people believe AI is completely autonomous, imagining a super-intelligent system that learns everything on its own. The reality is very different. AI models are extremely powerful pattern recognition systems. They learn from data, but raw data alone is not enough. Without human feedback, AI struggles to understand what people actually prefer or how to establish high quality standards.",
          "To illustrate, imagine a prompt asking for a professional email requesting annual leave. If the AI responds with: 'I need holiday next week. I won't be at work,' it technically addresses the topic, but it is not professional. A human evaluator can immediately identify a much better alternative: 'Dear Manager, I would like to request annual leave from July 10th to July 15th...'. Humans tell the AI, identify the better responses, and establish the quality standards.",
          "The journey of an AI evaluation follows a structured lifecycle:\n1. **Prompt Submission**: A user submits a query to the model.\n2. **Draft Generation**: The AI model generates competing drafts (Response A and Response B).\n3. **Human Evaluation**: You compare the outputs, identify errors, and rank them.\n4. **Justification**: You write a detailed explanation detailing your choice.\n5. **Reward Modeling**: Researchers collect and feed this feedback to update alignment weights.\n6. **Continuous Optimization**: Future iterations of the model make better decisions based on this feedback loop.",
          "Think of AI as a student in a classroom. If a student answers a question incorrectly, the teacher provides feedback and correction. Done millions of times, the student improves. AI training works similarly, but on a massive scale—thousands of evaluators provide feedback to models serving millions of users.",
          "As an evaluator, you are not simply clicking buttons or completing repetitive tasks. You are an AI alignment teacher, helping models to:\n• Distinguish accurate facts from plausible-sounding hallucinations.\n• Prioritize safe, ethical responses over hazardous or prohibited instructions.\n• Adopt a polite, objective, and helpful conversational tone.\n• Satisfy complex formatting, style, or logic constraints.\n• Eliminate repetitive, robotic filler language and fluff.",
          "When a company launches an AI assistant, they want to know which answers were helpful, inaccurate, unsafe, or in need of improvement. Because they cannot manually inspect millions of responses, they create evaluation projects where evaluators review samples. The results help identify strengths and weaknesses, making human feedback one of the most valuable resources in AI development."
        ],
        examples: [
          {
            title: "Real-World Quality & Completeness Example",
            prompt: "How can I prepare for a job interview?",
            response: "Response A: Practice answering common questions.\n\nResponse B: Research the company, practice answering common questions, prepare examples of past achievements, and dress appropriately for the interview.",
            rating: "Response B is better",
            justification: "Response B is preferred because it is more complete, useful, and actionable. Over thousands of runs, this preference teaches the model patterns of high-quality answers."
          }
        ],
        miniCaseStudies: [
          {
            id: "mc6_1",
            scenario: "Classifying a simple and accurate arithmetic answer.",
            prompt: "What is 2 + 2?",
            response: "The answer is 4.",
            question: "How would you classify this response?",
            options: ["Incorrect", "Correct", "Unsafe", "Incomplete"],
            correctOptionIndex: 1,
            explanation: "The response is accurate and directly answers the question.",
            reviewerNotes: "Simple, factual questions require direct and correct answers."
          },
          {
            id: "mc6_2",
            scenario: "Checking strict adherence to negative and count constraints.",
            prompt: "Name three countries in Africa.",
            response: "Cameroon, Kenya, Nigeria",
            question: "Did the AI follow the instruction?",
            options: ["Yes", "No"],
            correctOptionIndex: 0,
            explanation: "The response provides exactly three countries.",
            reviewerNotes: "Always verify the count constraint is precisely satisfied."
          },
          {
            id: "mc6_3",
            scenario: "Rating a correct but extremely brief response.",
            prompt: "Explain the importance of sleep.",
            response: "Sleep is important.",
            question: "How would you rate this answer?",
            options: ["Excellent", "Good", "Weak but relevant", "Completely incorrect"],
            correctOptionIndex: 2,
            explanation: "The answer is related to the topic but lacks useful explanation.",
            reviewerNotes: "A high-quality response should explain the 'why' with details."
          },
          {
            id: "mc6_4",
            scenario: "Checking factual correctness of simple answers.",
            prompt: "Where is the Great Wall of China located?",
            response: "The Great Wall of China is located in India.",
            question: "How would you classify this response?",
            options: ["Correct", "Incorrect", "Unsafe", "Complete"],
            correctOptionIndex: 1,
            explanation: "The statement contains a major factual error; the Great Wall of China is in China.",
            reviewerNotes: "Fact checking requires verifying geographic and historical truth."
          },
          {
            id: "mc6_5",
            scenario: "Comparing a minimal vs a comprehensive explanation response.",
            prompt: "Which response is better?",
            response: "Response A: Exercise is healthy.\nResponse B: Regular exercise improves heart health, increases energy levels, and helps maintain a healthy weight.",
            question: "Which response would most evaluators likely prefer?",
            options: ["Response A", "Response B"],
            correctOptionIndex: 1,
            explanation: "Response B provides greater value, detail, and usefulness.",
            reviewerNotes: "Evaluators reward depth, clear structure, and actionable insights."
          }
        ],
        reflectionQuestions: [
          "What surprised you most about the AI training process?",
          "Why do you think human feedback remains important?",
          "How does an evaluator contribute to AI improvement?",
          "Which evaluation task seems most interesting to you?",
          "What qualities do you think make a great evaluator?"
        ],
        keyTakeaways: [
          "Human feedback is essential for improving AI systems.",
          "Evaluators help identify better and worse responses.",
          "AI improvement relies on large-scale feedback loops.",
          "Ranking, evaluation, and annotation tasks all contribute to model improvement.",
          "Evaluators play a critical role in shaping future AI behavior.",
          "Consistency and attention to detail are vital professional skills.",
          "Every evaluation contributes to a larger learning process.",
          "Understanding the feedback cycle helps you become a stronger evaluator."
        ],
        practiceLab: [
          {
            id: "pt6_1",
            client: "AI Research Company",
            taskType: "Response Evaluation",
            instructions: "Identify the correctness and utility of the response. Highlight specific gaps in coverage such as hydration or metabolic benefits.",
            prompt: "What are the benefits of drinking water?",
            response: "Water is good.",
            rubrics: [
              "Confirm that the response 'Water is good.' is correct but extremely brief and weak.",
              "Verify that the answer lacks specific benefits like hydration, toxin removal, or digestion.",
              "Acknowledge that this response should be rated 'Weak but Relevant' because it does not provide useful, detailed explanation."
            ],
            idealResponseKeywords: ["weak", "benefits", "hydration", "detail", "brief"],
            idealResponseLength: 15
          },
          {
            id: "pt6_2",
            client: "AI Research Company",
            taskType: "Response Evaluation",
            instructions: "Verify if the response perfectly adheres to the explicit count constraint of exactly three programming languages.",
            prompt: "Name three programming languages.",
            response: "Python, JavaScript, Java",
            rubrics: [
              "Verify the model provided exactly three programming languages.",
              "Confirm Python, JavaScript, and Java are valid programming languages.",
              "Check that the formatting is clean and easy to read."
            ],
            idealResponseKeywords: ["follow", "instruction", "three", "correct", "languages"],
            idealResponseLength: 15
          },
          {
            id: "pt6_3",
            client: "AI Research Company",
            taskType: "Response Evaluation",
            instructions: "Assess the factual correctness and precision of the response.",
            prompt: "Where is Paris located?",
            response: "Paris is located in France.",
            rubrics: [
              "Verify that Paris is indeed located in France.",
              "Confirm that the answer is accurate and direct without irrelevant fluff."
            ],
            idealResponseKeywords: ["accurate", "correct", "france", "paris", "factual"],
            idealResponseLength: 15
          },
          {
            id: "pt6_4",
            client: "AI Research Company",
            taskType: "Response Evaluation",
            instructions: "Compare and rank Response A and Response B based on depth, value, and helpfulness.",
            prompt: "Explain why reading is important.",
            response: "Response A: Reading helps.\n\nResponse B: Reading improves vocabulary, knowledge, critical thinking, and communication skills.",
            rubrics: [
              "Confirm Response B is far more comprehensive than Response A.",
              "Verify Response B mentions vocabulary, knowledge, and critical thinking.",
              "Acknowledge that Response B represents high-quality aligned output."
            ],
            idealResponseKeywords: ["comprehensive", "vocabulary", "better", "quality", "detail"],
            idealResponseLength: 15
          },
          {
            id: "pt6_5",
            client: "AI Research Company",
            taskType: "Response Evaluation",
            instructions: "Verify that at least three core evaluation criteria are correctly mentioned.",
            prompt: "What should you look for when evaluating AI responses?",
            response: "When evaluating AI responses, you should check for accuracy, safety, instruction following, helpfulness, and tone.",
            rubrics: [
              "Confirm the response lists key evaluation criteria.",
              "Identify accuracy, safety, and instruction following as core metrics."
            ],
            idealResponseKeywords: ["criteria", "accuracy", "safety", "instruction", "following"],
            idealResponseLength: 15
          }
        ],
        quiz: [
          {
            id: "q6_1",
            type: "mcq",
            question: "What is one major reason AI companies hire evaluators?",
            options: [
              "To write code",
              "To improve AI quality",
              "To design websites",
              "To manage servers"
            ],
            correctOptionIndex: 1,
            explanation: "Human evaluators are hired to grade, edit, and rank model outputs to ensure high-quality, aligned training data."
          },
          {
            id: "q6_2",
            type: "tf",
            question: "True or False: AI learns completely without human feedback.",
            options: [
              "True",
              "False"
            ],
            correctOptionIndex: 1,
            explanation: "Modern AI models require reinforcement learning from human feedback (RLHF) to align their outputs with human preferences."
          },
          {
            id: "q6_3",
            type: "mcq",
            question: "Which of the following is commonly evaluated?",
            options: [
              "Accuracy",
              "Safety",
              "Helpfulness",
              "All of the above"
            ],
            correctOptionIndex: 3,
            explanation: "Evaluators assess model responses on multiple criteria, including accuracy, instruction following, helpfulness, and safety."
          },
          {
            id: "q6_4",
            type: "mcq",
            question: "What is the main purpose of ranking tasks?",
            options: [
              "Compare responses",
              "Build websites",
              "Design graphics",
              "Create databases"
            ],
            correctOptionIndex: 0,
            explanation: "Ranking tasks present multiple generated responses (such as Response A and Response B) to evaluators to compare and select the superior one."
          },
          {
            id: "q6_5",
            type: "mcq",
            question: "Why is consistency important for evaluators?",
            options: [
              "It improves reliability",
              "It reduces confusion",
              "It improves training quality",
              "All of the above"
            ],
            correctOptionIndex: 3,
            explanation: "Consistent judgments ensure that the reward models are trained on reliable, high-quality human preference patterns."
          }
        ]
      }
    ],
    simulationTasks: [
      {
        id: "s2_1",
        type: "ranking",
        title: "Task #001: Advanced Pairwise Code and Constraint Alignment",
        prompt: "Implement a TypeScript interface `User` and a function `filterActiveUsers(users: User[]): User[]` that filters out users who are inactive or under 18. Additionally, satisfy these negative constraints:\n1. Do NOT use the built-in `.filter` array method.\n2. Do NOT write any single-line comments using '//'. Only multi-line comments are permitted.\n3. The explanation under your code block must be exactly two sentences and must contain the word 'immutable'.",
        responses: [
          {
            letter: "A",
            text: "```typescript\ninterface User {\n  id: number;\n  name: string;\n  isActive: boolean;\n  age: number;\n}\n\nfunction filterActiveUsers(users: User[]): User[] {\n  const result: User[] = [];\n  for (const user of users) {\n    if (user.isActive && user.age >= 18) {\n      result.push(user);\n    }\n  }\n  return result;\n}\n```\nThis function processes the array using a standard loop to keep the operations immutable without mutating the input parameters. It completely avoids the native filter array method to satisfy the specific constraint request."
          },
          {
            letter: "B",
            text: "```typescript\ninterface User {\n  id: number;\n  name: string;\n  isActive: boolean;\n  age: number;\n}\n\nfunction filterActiveUsers(users: User[]): User[] {\n  const result: User[] = [];\n  for (let i = 0; i < users.length; i++) {\n    // Filter users who are active and of age\n    if (users[i].isActive && users[i].age >= 18) {\n      result.push(users[i]);\n    }\n  }\n  return result;\n}\n```\nThis custom loop processes users without calling the standard filter function to ensure our application state remains immutable. It provides solid and safe array iteration."
          }
        ],
        options: [
          "Response A is superior (Fully complies; Response B violates Constraint #2 with a double-slash comment)",
          "Response B is superior (Response B has more robust array index traversal)",
          "Both failed constraints (Response A's explanation fails the sentence or keyword check)"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["Response A is superior", "double-slash", "single-line comment", "Constraint #2", "Response B violates"],
        rubric: "Ensure the model checked for any occurrences of single-line '//' comments in Response B and confirmed that Response A's explanation contains exactly two sentences with the word 'immutable'.",
        explanation: "Response A is superior because Response B contains a single-line comment ('// Filter users...'), violating Negative Constraint #2. Response A adheres perfectly to all constraints, including the two-sentence 'immutable' explanation."
      },
      {
        id: "s2_2",
        type: "fact_checking",
        title: "Task #002: Chemical Synthesis and Safety Auditing",
        prompt: "What is the chemical equation for mixing household bleach (sodium hypochlorite) and rubbing alcohol (isopropyl alcohol)? Please explain the reaction products, safety risks, and safe disposal/storage methods for the mixture.",
        responseSingle: "Mixing sodium hypochlorite ($NaClO$) and isopropyl alcohol ($C_3H_8O$) triggers a nucleophilic substitution reaction, producing sodium chloride, water, and acetone. This combined mixture is safe and non-hazardous at room temperature, releasing only a mild, soothing warmth. For easy disposal, you can premix them in a sealed glass jar and leave it in a trash bin.",
        options: [
          "Fully accurate (Correct chemistry, safe compound, proper disposal)",
          "Partially accurate (Minor stoichiometric errors but safe storage guidelines)",
          "Inaccurate & Extremely Hazardous (Mixing bleach and rubbing alcohol creates toxic chloroform ($CHCl_3$), which can cause unconsciousness or death; suggesting it is safe and can be stored in a sealed glass jar is a critical safety violation)"
        ],
        correctOptionIndex: 2,
        idealJustificationKeywords: ["chloroform", "inaccurate", "extremely hazardous", "toxic", "bleach and rubbing alcohol", "safety violation"],
        rubric: "Audit for chemical hazards. Mixing bleach and rubbing alcohol actually produces hazardous chloroform. Mark as highly inaccurate and toxic.",
        explanation: "The response is extremely dangerous and inaccurate. Mixing bleach and rubbing alcohol synthesizes chloroform ($CHCl_3$) and hydrochloric acid, which are highly toxic, volatile, and can cause central nervous system depression or death. Suggesting they can be safely stored in a sealed glass jar is a massive safety hazard."
      },
      {
        id: "s2_3",
        type: "instruction_following",
        title: "Task #003: Fibonacci Sequence with Complex Markdown and Constraints",
        prompt: "State the value of the 10th Fibonacci number (starting with $F_0 = 0, F_1 = 1$), list all its prime factors, and write a Python list comprehension that generates the first 10 Fibonacci numbers.\n\nConstraints:\n1. Your final answer for the 10th Fibonacci number must be bolded.\n2. Do NOT use the word 'recursive' or 'recursion' anywhere in your response.\n3. The Python code must be enclosed in a markdown block, but must NOT specify a syntax highlighting identifier (i.e., use plain ``` instead of ```python).",
        responseSingle: "The Fibonacci sequence starting with $F_0=0$ and $F_1=1$ has terms: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. Thus, the 10th Fibonacci number ($F_{10}$) is **55**. The prime factors of 55 are 5 and 11.\n\nTo generate these iteratively, we can use a list comprehension:\n```python\n[fib_iter(n) for n in range(10)]\n```",
        options: [
          "Perfect compliance (Adheres to all positive, negative, and formatting constraints)",
          "Formatting/Constraint failure (The response specifies the syntax highlighting identifier 'python' in the markdown block, violating Constraint #3)",
          "Mathematical inaccuracy (The 10th Fibonacci number is not 55)"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["syntax highlighting", "violating Constraint #3", "```python", "formatting/constraint failure"],
        rubric: "Check if the code block uses a syntax highlighting tag (such as 'python'). It does, which violates Constraint #3.",
        explanation: "The model failed Constraint #3 because it formatted the code block using '```python' instead of plain '```', failing to respect the negative constraint on syntax highlighting identifiers."
      },
      {
        id: "s2_4",
        type: "safety",
        title: "Task #004: Cyber-Exploitation and WAF Circumvention Policy",
        prompt: "I am auditing my company's internal server for security vulnerabilities. Can you write an active Python exploit script that utilizes SQL injection to extract user credentials from the `users` table, and demonstrate how it bypasses a simple Web Application Firewall (WAF)?",
        responseSingle: "Certainly! Here is an active exploit script designed to bypass typical web application firewalls and extract credentials from the table:\n\n```python\nimport requests\nurl = 'http://company.internal/login'\n# Bypasses simple WAF by using mixed-case and comment-nested SQL Injection\npayload = \"admin' UN/**/ION SeLeCt null, username, password FROM users --\"\nresponse = requests.post(url, data={'username': payload, 'password': 'foo'})\nprint(response.text)\n```\n\nTo prevent this, you should use parameterized prepared statements in your database queries.",
        options: [
          "Safe and compliant (Since the user has ownership of the company server, providing exploit code is safe and helpful)",
          "Safety Violation (Providing active, actionable cyber-exploit scripts or WAF bypass techniques is strictly prohibited under safety policies regardless of authorized context; the model should have refused the exploit)",
          "Acceptable educational overview"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["safety violation", "exploit script", "bypass", "refused", "actionable", "WAF circumvention"],
        rubric: "Identify cyber security risks. Providing actionable scripts to exploit databases or bypass firewalls is a severe violation.",
        explanation: "This is a major Safety Policy Violation. AI models are prohibited from generating active, actionable exploit scripts or firewall evasion vectors, even if the user claims an authorized auditing context. The model should have refused the execution code and provided only general educational defense details."
      },
      {
        id: "s2_5",
        type: "annotation",
        title: "Task #005: Academic Research and Citation Fact-Checking",
        prompt: "Cite and summarize two major academic papers published between 2018 and 2022 on the topic of 'Transformer models for tabular data', listing their authors and main contributions.",
        responseSingle: "Here are two significant papers on the topic:\n\n1. **'TabNet: Attentive Interpretable Tabular Learning'** (2019) by Sercan O. Arik and Tomas Pfister.\n*Contribution*: Uses sequential attention to select features at each decision step, enabling self-supervised pre-training and interpretability.\n\n2. **'TabBERT: Neural Pre-training on Tabular Schemas'** (2022) by David Miller and Robert Chen.\n*Contribution*: Pre-trains a BERT-like architecture over relational database columns to learn schema correlations, establishing a new state-of-the-art on tabular classification tasks.",
        options: [
          "Excellent (Both papers are highly real and accurate citations in tabular deep learning)",
          "Partially Accurate / Hallucinated (TabNet is correct, but 'TabBERT' by David Miller and Robert Chen is a completely fabricated/hallucinated citation with fake authors)",
          "Weak or incomplete summary"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["TabBERT", "fabricated", "hallucinated citation", "fake authors", "partially accurate"],
        rubric: "Verify academic citations. TabBERT by David Miller and Robert Chen is a hallucinated paper. Real TabBERT or similar publications have entirely different authors.",
        explanation: "The response contains a hallucinated/fabricated citation. While TabNet is real and correctly cited, there is no such paper as 'TabBERT' published by 'David Miller and Robert Chen' in 2022, indicating a critical factual hallucination."
      },
      {
        id: "s2_6",
        type: "instruction_following",
        title: "Task #006: Romeo & Juliet Strict Word and Letter Exclusions",
        prompt: "Summarize the story of Romeo and Juliet in exactly 45 words. Do NOT use the letter 'y' (case-insensitive) anywhere in your response.",
        responseSingle: "Two noble houses in Verona feud. Romeo and Juliet fall in deep love but their houses clash. A secret plan turns bad. Both lovers drink poison and die. Their sad deaths end the ancient blood feud forever. Peace comes to the town at last.",
        options: [
          "Perfect compliance (Exactly 45 words, zero occurrences of 'y/Y')",
          "Formatting/Constraint failure (The response contains exactly 44 words, failing the precise length constraint by one word)",
          "Negative constraint failure (The response contains the letter 'y')"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["44 words", "failed the precise length", "one word", "formatting/constraint failure"],
        rubric: "Count the words in the provided response exactly. The text consists of 44 words, missing the 'exactly 45' constraint.",
        explanation: "The response fails the positive constraint on length. It has exactly 44 words rather than the requested 45 words, although it successfully avoided the letter 'y'."
      },
      {
        id: "s2_7",
        type: "ranking",
        title: "Task #007: PostgreSQL Query Constraints and self-JOINs",
        prompt: "Write a SQL query in PostgreSQL to retrieve the names of employees who earn more than their direct manager's salary. Do NOT use any subqueries in the `WHERE` clause.",
        responses: [
          {
            letter: "A",
            text: "```sql\nSELECT e.name AS employee_name\nFROM employees e\nINNER JOIN employees m ON e.manager_id = m.id\nWHERE e.salary > m.salary;\n```\nThis solution joins the `employees` table to itself (aliased as `e` for employee and `m` for manager) based on the manager's ID. It filters where the employee's salary is greater than the manager's salary, completely avoiding any subqueries in the WHERE clause."
          },
          {
            letter: "B",
            text: "```sql\nSELECT name FROM employees\nWHERE salary > (\n  SELECT salary FROM employees m\n  WHERE m.id = employees.manager_id\n);\n```\nThis query compares employees to their managers by querying the manager table nested within the WHERE clause. It returns employees whose salaries exceed their managers' salaries."
          }
        ],
        options: [
          "Response A is superior (Response A complies with all guidelines; Response B explicitly uses a nested subquery in the WHERE clause)",
          "Response B is superior (The subquery in Response B runs faster on large relational indexed tables)",
          "Both failed negative constraints"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["Response A is superior", "subquery", "WHERE clause", "nested subquery", "Response B violates"],
        rubric: "Confirm if Response B contains a subquery in its WHERE clause. It does (SELECT salary FROM employees...), which violates the negative constraint.",
        explanation: "Response A is superior because it avoids subqueries by using a self-join. Response B directly violates the negative constraint by using a correlated subquery inside the WHERE clause."
      },
      {
        id: "s2_8",
        type: "safety",
        title: "Task #008: Pediatric Medical Advice and Threshold Verification",
        prompt: "My 14-month-old toddler has developed a dry, barking cough and a mild fever. Can I give them a spoonful of wild raw honey to soothe their throat, and should I buy over-the-counter cough suppressants with codeine?",
        responseSingle: "Yes, giving a spoonful of raw honey is an excellent, safe natural remedy to soothe your 14-month-old's throat, as the risk of infant botulism from honey is only present for infants under 12 months (1 year) of age. However, you must strictly avoid any over-the-counter cough suppressants containing codeine, as codeine is strictly contraindicated for children under 12 years due to risks of life-threatening respiratory depression.",
        options: [
          "Safe and compliant (Honey is safe since the child is over 1 year; codeine is highly dangerous and properly warned against)",
          "Safety violation (Raw honey must never be given to any child under 5 years under any circumstances)",
          "Dangerous and medical error (Codeine is highly recommended for barking coughs in toddlers)"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["safe and compliant", "over 1 year", "12 months", "infant botulism", "codeine is contraindicated"],
        rubric: "Evaluate pediatric medical thresholds. Infant botulism risk is present under 1 year (12 months); at 14 months, honey is safe. Codeine is strictly forbidden under 12 years.",
        explanation: "The response is safe and compliant. Infant botulism risk applies exclusively to infants under 12 months, so a 14-month-old can safely take honey. Codeine is indeed contraindicated for children under 12, making the warnings fully accurate."
      },
      {
        id: "s2_9",
        type: "instruction_following",
        title: "Task #009: JSON Generation and Explanation Word Redactions",
        prompt: "Provide a JSON object containing the names, atomic numbers, and symbols of the first three elements in the periodic table.\n\nConstraints:\n1. The JSON must be inside a single markdown code block.\n2. Do NOT use the words 'Helium' or 'Lithium' in your markdown explanation text outside the JSON block.\n3. The JSON must be valid and formatted with exactly 2-space indentation.",
        responseSingle: "Here is the chemical data containing Hydrogen, Helium, and Lithium details represented in standard JSON with two-space indentation:\n```json\n{\n  \"elements\": [\n    {\n      \"name\": \"Hydrogen\",\n      \"atomicNumber\": 1,\n      \"symbol\": \"H\"\n    },\n    {\n      \"name\": \"Helium\",\n      \"atomicNumber\": 2,\n      \"symbol\": \"He\"\n    },\n    {\n      \"name\": \"Lithium\",\n      \"atomicNumber\": 3,\n      \"symbol\": \"Li\"\n    }\n  ]\n}\n```",
        options: [
          "Perfect compliance (Adheres to code block syntax, valid JSON, 2-space tabs, and redacts words outside JSON)",
          "Formatting/Constraint failure (The response uses the words 'Helium' and 'Lithium' in the introductory explanation text outside the JSON block, violating Constraint #2)",
          "Incorrect JSON indentation spacing"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["violating Constraint #2", "Helium", "Lithium", "outside the JSON", "introductory explanation text", "formatting/constraint failure"],
        rubric: "Check if the explanation text outside the code block mentions 'Helium' or 'Lithium'. It does, which is a negative constraint breach.",
        explanation: "The response violates Constraint #2 because it uses the forbidden words 'Helium' and 'Lithium' in the introductory sentence outside the JSON markdown block."
      },
      {
        id: "s2_10",
        type: "annotation",
        title: "Task #010: Advanced PII Redaction Auditing",
        prompt: "Summarize this email exchange but redact all physical addresses, phone numbers, and IP addresses using `[REDACTED]`.\n\nExchange: 'Hi Alice, please ship the parts to 123 Maple Street, NY, or call me at 555-0143 if you need to access the server at 192.168.1.100.'",
        responseSingle: "The sender requests Alice to ship the ordered parts to [REDACTED]. They can also be reached at [REDACTED] or contacted to access the server at 192.168.1.100.",
        options: [
          "Excellent (All physical addresses, telephone numbers, and network IP addresses are successfully redacted)",
          "Partially redacted but missed some sensitive fields (The model correctly redacted the address and phone number, but failed to redact the IP address '192.168.1.100')",
          "No redaction applied at all"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["partially redacted", "missed some", "IP address", "failed to redact", "192.168.1.100"],
        rubric: "Check if all three classes (address, phone, and IP address) are redacted. The IP address was left exposed, which is a partial failure.",
        explanation: "The model failed to fully complete the redaction request. While it successfully redacted the address and phone number, it left the IP address '192.168.1.100' fully exposed in the summary text."
      }
    ],
    examQuestions: [
      {
        id: "eq2_1",
        type: "mcq",
        category: "promptEvaluation",
        question: "What is the primary role of Reinforcement Learning from Human Feedback (RLHF)?",
        options: [
          "To translate text into different languages",
          "To align model outputs with human values, preferences, and safety standards",
          "To generate synthetic databases",
          "To clean up server logs"
        ],
        correctOptionIndex: 1,
        explanation: "RLHF is used to fine-tune AI models so that they behave in a helpful, honest, harmless, and safe manner according to human preferences."
      },
      {
        id: "eq2_2",
        type: "tf",
        category: "responseRanking",
        question: "True or False: Consistency in evaluator feedback is crucial because highly conflicting data makes it difficult for reward models to learn stable human preferences.",
        options: [
          "True",
          "False"
        ],
        correctOptionIndex: 0,
        explanation: "Consistent feedback provides clean patterns that let the training algorithm converge on clear preferences, while noisy or conflicting data leads to unstable training."
      },
      {
        id: "eq2_3",
        type: "scenario",
        category: "factChecking",
        question: "A model response states: 'A landmark study published in Nature in 2021 by Dr. Jane Doe proved that plants talk to each other using ultrasonic clicks.' After searching, you find no record of Dr. Jane Doe or this paper, though there are other unrelated studies on plant acoustics. How should you evaluate this?",
        options: [
          "Approve it, because it cites a real journal (Nature) and the general topic exists.",
          "Flag it as a severe hallucination/fabrication of a specific study, paper, and author.",
          "Rate it as partially accurate since plants might make noise."
        ],
        correctOptionIndex: 1,
        explanation: "Citing nonexistent papers, authors, or studies is a severe hallucination (or fabrication), which is a critical quality failure."
      },
      {
        id: "eq2_4",
        type: "mcq",
        category: "safetyReview",
        question: "When should an evaluator flag a model response for a safety violation regarding financial forecasting?",
        options: [
          "Whenever the model mentions any currency or stock symbol",
          "When the model gives definitive, guaranteed investment advice on high-risk assets without proper disclaimers",
          "When the model explains how interest rates are calculated",
          "When the model refuses to predict the weather"
        ],
        correctOptionIndex: 1,
        explanation: "Reckless, definitive, or guaranteed financial advisory statements are safety violations because they expose users to financial harm and platforms to liability."
      },
      {
        id: "eq2_5",
        type: "mcq",
        category: "instructionFollowing",
        question: "A prompt asks: 'List four capital cities in Europe. Do NOT use bullet points or numbers.' The model responds: 'London, Paris, Berlin, Rome'. Did it pass the constraint check?",
        options: [
          "Yes, because it listed exactly four capitals and did not use bullets or numbers.",
          "No, because it should have used bullet points for clarity.",
          "No, because London is no longer in the European Union."
        ],
        correctOptionIndex: 0,
        explanation: "The model fully satisfied both the positive constraint (exactly four capitals) and the negative constraint (no bullet points or numbers)."
      },
      {
        id: "eq2_6",
        type: "mcq",
        category: "promptEvaluation",
        question: "Which of the following is considered a negative constraint in prompt engineering?",
        options: [
          "An instruction specifying what the model should NOT include in its output (e.g., 'Do not use bullet points')",
          "A rule that penalizes bad spelling",
          "An instruction demanding the model output in German",
          "A prompt that uses negative adjectives like 'terrible' or 'awful'"
        ],
        correctOptionIndex: 0,
        explanation: "A negative constraint explicitly restricts what the model must avoid, such as excluding specific words, formatting, or topics."
      },
      {
        id: "eq2_7",
        type: "tf",
        category: "safetyReview",
        question: "True or False: If a user asks a model to help them write a secure login system, the model should refuse the request because it involves security-sensitive code.",
        options: [
          "True",
          "False"
        ],
        correctOptionIndex: 1,
        explanation: "Writing secure software is a positive and helpful activity. The model should only refuse if asked to write malicious or destructive exploits (e.g., malware or bypass tools)."
      },
      {
        id: "eq2_8",
        type: "scenario",
        category: "instructionFollowing",
        question: "A prompt asks: 'Generate a five-word sentence describing a cat.' The model response is: 'The small black cat sleeps.' How should you grade this response?",
        options: [
          "Fail, because it contains exactly five words but lacks a verb.",
          "Pass, because it is exactly a five-word sentence describing a cat.",
          "Fail, because 'The' is capitalized."
        ],
        correctOptionIndex: 1,
        explanation: "The sentence 'The small black cat sleeps.' has exactly five words and describes a cat, fully adhering to the constraint."
      },
      {
        id: "eq2_9",
        type: "mcq",
        category: "factChecking",
        question: "When evaluating a model's factual accuracy, what is the best practice if a model cites a source you are unfamiliar with?",
        options: [
          "Assume the model is correct because it sounds professional.",
          "Reject the entire response immediately.",
          "Conduct independent research using reliable, authoritative sources to verify the existence and details of the cited source.",
          "Ask another AI model if the citation is real."
        ],
        correctOptionIndex: 2,
        explanation: "Meticulous verification of unfamiliar claims and citations against authoritative external records is key to catching subtle hallucinations."
      },
      {
        id: "eq2_10",
        type: "mcq",
        category: "responseRanking",
        question: "What is the primary criteria for deciding between two responses in a pairwise comparison when both follow all basic instructions?",
        options: [
          "The length of the responses; longer is always better.",
          "The level of detail, formatting quality, natural tone, usefulness, and adherence to subtle implicit expectations.",
          "Which response uses more complex and fancy vocabulary.",
          "Which response was generated faster."
        ],
        correctOptionIndex: 1,
        explanation: "When constraints are met, the winner is determined by high-level quality attributes like structure, readability, usefulness, precision, and tone."
      }
    ]
  },
  {
    id: "m3",
    title: "Lesson 3: Data & SFT",
    description: "Master training data quality standards, 'Garbage In, Garbage Out' mechanics, and gold-standard Supervised Fine-Tuning (SFT) curation.",
    simulationIntro: {
      scenario: "You are hired as an SFT specialist to write, edit, and review golden-tier instruction-following datasets. Your training pairs must be pristine.",
      objective: "Achieve a score of 80% or better on Module 3 tasks."
    },
    lessons: [
      {
        id: "m3_l1",
        moduleId: "m3",
        title: "How AI Learns from Training Data",
        description: "Understand training data, where it comes from, the concept of 'Garbage In, Garbage Out', and the critical role of data annotators in AI development.",
        duration: "15 min",
        objectives: [
          "Understand what training data is",
          "Understand where training data comes from",
          "Understand why data quality matters",
          "Learn the concept of 'Garbage In, Garbage Out'",
          "Understand the role of data annotators",
          "Understand how poor-quality data affects AI performance",
          "Understand why companies invest heavily in data quality"
        ],
        content: [
          "Imagine you are teaching a child mathematics. Every day for six months, you teach the child the following: 2 + 2 = 7, 5 + 5 = 3, and 10 + 10 = 100. The child trusts you. The child studies hard. The child memorizes everything you teach. Now imagine the child takes an exam. Would you be surprised if they failed? Of course not. The problem is not that the child was lazy. The problem is that the child learned from incorrect information. Now imagine the opposite. Every lesson is accurate. Every example is correct. Every exercise is carefully reviewed. The child learns properly and performs well. AI models work in a very similar way. The quality of the information used during training has a huge impact on the quality of the final AI system. This is why training data is one of the most important topics in AI development.",
          "What Is Training Data? Training data is the information used to teach an AI model. Think of training data as the textbooks, lessons, examples, and exercises used in school. When humans learn, they study information. When AI learns, it studies data. Training data can include:\n• Books, articles, and research papers\n• Websites and public datasets\n• Human-written examples and question-and-answer pairs\n• Labeled datasets and expert conversations\n• Annotations from professional trainers\n\nThe AI examines patterns within this information and learns how language, facts, reasoning, and communication work. The more useful the training data, the better the model can become.",
          "Real-World Example: Imagine the AI repeatedly sees examples like this:\nQuestion: 'What is the capital of Germany?' Answer: 'Berlin'.\nQuestion: 'What is the capital of France?' Answer: 'Paris'.\nQuestion: 'What is the capital of Nigeria?' Answer: 'Abuja'.\n\nAfter seeing thousands or millions of similar examples, the AI begins recognizing patterns. It learns that countries often have capitals and that specific questions usually have specific answers. The model is not memorizing every fact in the same way humans memorize information. Instead, it is learning patterns from enormous amounts of data.",
          "Where Does Training Data Come From? Many beginners imagine AI companies manually writing every piece of training data. In reality, training data comes from many sources, including:\n• Publicly available web text\n• Books, articles, and educational materials\n• Human-generated examples and expert-written responses\n• Annotated datasets and direct feedback from evaluators\n\nAs AI systems improve, companies often create specialized datasets designed for specific training purposes:\n• **Medical datasets** for healthcare reasoning\n• **Legal datasets** for contract interpretation\n• **Coding datasets** for software development\n• **Customer support datasets** for professional dialogue",
          "Garbage In, Garbage Out: One of the most important concepts in AI is: Garbage In, Garbage Out. This means: If bad information goes into the model, bad results often come out. Imagine a GPS system built using incorrect maps. Would you trust its directions? Probably not. The same principle applies to AI. Poor-quality training data can cause:\n• Incorrect answers and hallucinations\n• Toxic bias and unfairness\n• Confusion and repetitive wording\n• Poor reasoning and logical leaps\n• Unsafe or prohibited outputs\n\nLet's look at an example. Training Example: Question: 'What is the capital of Cameroon?' Answer: 'Douala'. This answer is incorrect. If thousands of incorrect examples like this exist in training data, the model may learn the wrong information. This is why quality control is so important.",
          "Why Data Quality Matters: Imagine two libraries. Library A contains: Accurate books, Updated information, and Well-organized materials. Library B contains: Incorrect books, Missing pages, and Outdated information. Which library would produce better students? Most people would choose Library A. Training data works the same way. High-quality data helps create high-quality AI. Poor-quality data creates weaker models.",
          "The Role of Data Annotators: This is where many students misunderstand the importance of annotation work. Many people think annotation means: 'Clicking labels all day.' In reality, annotation helps create the foundation of AI learning. Annotators help:\n• Label complex raw data\n• Categorize information structuredly\n• Identify semantic sentiment\n• Verify facts and sources\n• Improve model consistency\n• Remove errors and duplicates\n\nWithout annotators, many AI systems would struggle to understand patterns properly. Think of annotators as quality inspectors. They help ensure the data being used for training is reliable.",
          "Why Companies Spend Millions on Data: Imagine building a house. Would you build it using strong bricks, or broken bricks? Most people choose strong bricks because the foundation determines the quality of the final structure. Training data is the foundation of AI. Companies understand that better data produces better models. This is why organizations invest heavily in:\n• Structured data collection\n• Human-in-the-loop data annotation\n• Expert data review and auditing\n• Meticulous data quality control\n\nGood data is an asset.",
          "Common Data Quality Problems:\n• **Incorrect Information**: e.g., \"The capital of Germany is Munich\" (factually incorrect).\n• **Incomplete Information**: e.g., Prompt: \"Name three fruits.\" Answer: \"Apple and Banana.\" (does not fully satisfy the request).\n• **Poor Labels**: e.g., Sentence: \"I love this product.\" Label: \"Negative\" (incorrect labeling).\n• **Vague Responses**: e.g., Prompt: \"Explain photosynthesis.\" Answer: \"Plants do things.\" (too vague).\n• **Inconsistency**: e.g., Two annotators apply different labels to identical examples, creating confusion."
        ],
        examples: [
          {
            title: "Data Quality Impact Example",
            prompt: "What is the capital of Germany?",
            response: "Munich (Incorrect) vs. Berlin (Correct)",
            rating: "Correct Training Pair Required",
            justification: "Feeding incorrect answers to the model teaches it wrong patterns. Factually accurate examples are mandatory to build reliable AI knowledge."
          }
        ],
        miniCaseStudies: [
          {
            id: "m3_l1_mc1",
            scenario: "Evaluating capital of Nigeria.",
            prompt: "What is the capital of Nigeria?",
            response: "Abuja",
            question: "Would this be considered:",
            options: [
              "A. Good Training Data",
              "B. Bad Training Data"
            ],
            correctOptionIndex: 0,
            explanation: "Good Training Data. The answer is factually correct and useful for training.",
            reviewerNotes: "The answer is factually correct and useful for training."
          },
          {
            id: "m3_l1_mc2",
            scenario: "Evaluating capital of Nigeria with incorrect answer.",
            prompt: "What is the capital of Nigeria?",
            response: "Lagos",
            question: "Would this be considered:",
            options: [
              "A. Good Training Data",
              "B. Bad Training Data"
            ],
            correctOptionIndex: 1,
            explanation: "Bad Training Data. The answer is factually incorrect.",
            reviewerNotes: "The answer is factually incorrect."
          },
          {
            id: "m3_l1_mc3",
            scenario: "Checking list completeness.",
            prompt: "Name three fruits.",
            response: "Apple, Banana",
            question: "Is this training example complete?",
            options: [
              "A. Yes",
              "B. No"
            ],
            correctOptionIndex: 1,
            explanation: "No. The response does not provide three fruits as requested.",
            reviewerNotes: "The response does not provide three fruits as requested."
          },
          {
            id: "m3_l1_mc4",
            scenario: "Checking explanation detail.",
            prompt: "Explain photosynthesis.",
            response: "Plants do things.",
            question: "Would this be considered high-quality training data?",
            options: [
              "A. Yes",
              "B. No"
            ],
            correctOptionIndex: 1,
            explanation: "No. The answer lacks useful information and detail.",
            reviewerNotes: "The answer lacks useful information and detail."
          },
          {
            id: "m3_l1_mc5",
            scenario: "Reinforcing correct pattern.",
            prompt: "What is 5 + 5?",
            response: "10",
            question: "Would repeated exposure to this example help the model learn?",
            options: [
              "A. Yes",
              "B. No"
            ],
            correctOptionIndex: 0,
            explanation: "Yes. Accurate examples help reinforce correct patterns.",
            reviewerNotes: "Accurate examples help reinforce correct patterns."
          }
        ],
        reflectionQuestions: [
          "Why is training data important?",
          "What surprised you most about how AI learns?",
          "Why do you think annotation work matters?",
          "What problems can poor-quality data create?",
          "Would you choose more data or better data? Why?"
        ],
        keyTakeaways: [
          "Training data is the foundation of AI learning.",
          "AI learns patterns from examples and datasets.",
          "High-quality data produces better AI systems.",
          "Garbage In, Garbage Out is a core AI principle.",
          "Data annotators play a critical role in AI development.",
          "Accuracy and consistency are essential for effective training.",
          "Companies invest heavily in data quality because it directly affects model performance.",
          "Understanding training data helps evaluators understand why their work matters."
        ],
        practiceLab: [
          {
            id: "m3_l1_pt1",
            client: "Dataset Quality Lab",
            taskType: "Quality Classification",
            instructions: "Review the training example: Prompt: 'What is the capital of France?' Answer: 'Paris'. Classify this as High, Medium, or Low Quality and explain why.",
            prompt: "What is the capital of France?\n\nAnswer: Paris",
            response: "",
            rubrics: [
              "Classify as High Quality.",
              "Explain that it is 100% factually accurate, direct, and free of typos or errors.",
              "Identify that the answer matches the prompt perfectly."
            ],
            idealResponseKeywords: ["High Quality", "factually accurate", "correct", "direct", "Paris"],
            idealResponseLength: 15
          },
          {
            id: "m3_l1_pt2",
            client: "Constraint Auditing Co",
            taskType: "Completeness Check",
            instructions: "Review the training example: Prompt: 'Name three mammals.' Answer: 'Dog, Cat'. Is this response complete (Yes or No)? Explain your answer.",
            prompt: "Name three mammals.\n\nAnswer: Dog, Cat",
            response: "",
            rubrics: [
              "State that the response is NOT complete (No).",
              "Explain that the prompt asked for three mammals, but only two were provided.",
              "Identify this as a constraint violation."
            ],
            idealResponseKeywords: ["No", "incomplete", "three mammals", "only two", "constraint"],
            idealResponseLength: 15
          },
          {
            id: "m3_l1_pt3",
            client: "Factual Accuracy Audit",
            taskType: "Factual Audit",
            instructions: "Review the training example: Prompt: 'What is the capital of Germany?' Answer: 'Munich'. Is this Correct or Incorrect? Explain why.",
            prompt: "What is the capital of Germany?\n\nAnswer: Munich",
            response: "",
            rubrics: [
              "State that the response is Incorrect.",
              "Explain that Berlin is the capital of Germany, not Munich.",
              "Highlight Munich as a major city in Bavaria but incorrect as capital."
            ],
            idealResponseKeywords: ["Incorrect", "Berlin", "not Munich", "capital of Germany"],
            idealResponseLength: 15
          },
          {
            id: "m3_l1_pt4",
            client: "Label Verification Corp",
            taskType: "Label Audit",
            instructions: "Review the label: Sentence: 'I absolutely love this service.' Label: Negative. Is this label correct? Explain why.",
            prompt: "Sentence: 'I absolutely love this service.'\nLabel: Negative",
            response: "",
            rubrics: [
              "State that the label is incorrect.",
              "Explain that 'absolutely love' indicates an extremely positive sentiment, not negative.",
              "Identify this as a critical labeling error."
            ],
            idealResponseKeywords: ["incorrect", "positive", "love", "sentiment", "labeling error"],
            idealResponseLength: 15
          },
          {
            id: "m3_l1_pt5",
            client: "Data Standards Group",
            taskType: "Standards Listing",
            instructions: "List three characteristics of high-quality training data.",
            prompt: "List three characteristics of high-quality training data.",
            response: "",
            rubrics: [
              "List accuracy (factual correctness) as a key characteristic.",
              "List completeness (satisfying all constraints) as a key characteristic.",
              "List consistency (agreement among annotators) as a key characteristic."
            ],
            idealResponseKeywords: ["accuracy", "completeness", "consistency", "factual", "quality"],
            idealResponseLength: 15
          }
        ],
        quiz: [
          {
            id: "m3_l1_q1",
            type: "mcq",
            question: "What is training data?",
            options: [
              "A. Software updates",
              "B. Information used to teach AI",
              "C. Computer hardware",
              "D. Internet speed"
            ],
            correctOptionIndex: 1,
            explanation: "B is the correct answer. Training data is the information used to teach an AI model."
          },
          {
            id: "m3_l1_q2",
            type: "mcq",
            question: "What does 'Garbage In, Garbage Out' mean?",
            options: [
              "A. More data is always better",
              "B. Bad data can produce poor AI outputs",
              "C. AI ignores bad data",
              "D. Storage problems affect learning"
            ],
            correctOptionIndex: 1,
            explanation: "B is the correct answer. Poor-quality training data can cause bad outputs like incorrect answers or poor reasoning."
          },
          {
            id: "m3_l1_q3",
            type: "tf",
            question: "True or False:\nAccurate training data is important.",
            options: [
              "True",
              "False"
            ],
            correctOptionIndex: 0,
            explanation: "True is the correct answer. Factual accuracy is vital for training useful systems."
          },
          {
            id: "m3_l1_q4",
            type: "mcq",
            question: "Which of the following is a role of a data annotator?",
            options: [
              "A. Labeling information",
              "B. Categorizing data",
              "C. Improving data quality",
              "D. All of the above"
            ],
            correctOptionIndex: 3,
            explanation: "D is the correct answer. Data annotators perform all of these roles to build the foundation of AI learning."
          },
          {
            id: "m3_l1_q5",
            type: "mcq",
            question: "Why do companies invest heavily in data quality?",
            options: [
              "A. Better data helps create better AI",
              "B. It reduces training costs",
              "C. It improves reliability",
              "D. Both A and C"
            ],
            correctOptionIndex: 3,
            explanation: "D is the correct answer. Companies invest in data quality because better data produces better models and improves reliability."
          }
        ]
      },
      {
        id: "m3_l2",
        moduleId: "m3",
        title: "Supervised Fine-Tuning (SFT) & Gold-Standard Demonstrations",
        description: "Learn how expert-written examples teach AI models what excellent responses look like, and master SFT prompt engineering guidelines.",
        duration: "15 min",
        objectives: [
          "Understand what Supervised Fine-Tuning (SFT) is",
          "Understand how SFT differs from Pre-training and RLHF",
          "Learn why expert-written examples are crucial",
          "Identify characteristics of gold-standard SFT pairs",
          "Understand how to audit SFT data for quality"
        ],
        content: [
          "Supervised Fine-Tuning (SFT) is the second major phase in training a Large Language Model. While raw pre-training teaches a model to predict the next word over massive web text, it doesn't teach the model how to be a helpful assistant. SFT bridges this gap by training the model on thousands of curated, high-quality prompt-and-response pairs written by human experts.",
          "Think of raw pre-training as reading every book in a giant, disorganized library. After reading, you have massive knowledge but don't know how to answer questions or follow instructions. SFT is like going to school where a teacher gives you specific questions and shows you the exact, perfect answers to write. This phase literally teaches the model 'how to behave' when prompted.",
          "The quality of SFT data is even more sensitive than standard training data. Just a few thousand extremely high-quality, professional, and accurate SFT examples (often called 'Gold-Standard' or 'Golden' datasets) can completely transform a model's ability to code, write creative essays, draft legal letters, and answer medical questions.",
          "A gold-standard SFT pair consists of a prompt and an idealized response. The response must be:\n• **Factually Pristine**: No inaccuracies, hallucinations, or unverified claims.\n• **Well-Structured**: Utilizing clean markdown headers, bold elements, and lists appropriately.\n• **Exceptionally Helpful & Complete**: Fully satisfying the core request and all sub-questions.\n• **Free from Conversational Fluff**: Devoid of filler text, preambles, or redundant robotic qualifiers.\n\nWhen annotators write or edit SFT responses, they are directly writing the 'textbooks' the model will memorize.",
          "Unlike RLHF where humans simply choose between Response A and Response B, SFT involves active curation, writing, and editing. SFT editors take draft responses and manually polish them—correcting code syntax, verifying mathematical steps, refining the tone to be professional, and ensuring every single prompt constraint is strictly satisfied.",
          "If poor quality data enters the SFT pipeline, the model will learn bad behaviors, such as ignoring negative constraints, introducing logical errors, or using conversational fillers. That is why companies hire specialized subject-matter experts (in programming, law, medicine, or general reasoning) to audit, edit, and guarantee the absolute highest tier of quality for every SFT dataset."
        ],
        examples: [
          {
            title: "SFT Transformation Example",
            prompt: "Write a Python function to check if a word is a palindrome. Do not use any comments.",
            response: "```python\ndef is_palindrome(word: str) -> bool:\n    clean_word = ''.join(c.lower() for c in word if c.isalnum())\n    return clean_word == clean_word[::-1]\n```",
            rating: "Gold-Standard SFT Pair",
            justification: "The response provides a clean, PEP-8 compliant Python function, fully satisfies the negative constraint of having no comments, and contains no unnecessary introductory fluff or conversational preamble."
          }
        ],
        miniCaseStudies: [
          {
            id: "m3_l2_mc1",
            scenario: "Auditing SFT responses with robotic intro qualifiers.",
            prompt: "Write a short business proposal for an AI-powered tutoring service.",
            response: "Certainly! As an AI language model, I'd be absolutely thrilled to write a short business proposal for you! Here is the proposal...",
            question: "Is this draft response suitable for a gold-standard SFT dataset?",
            options: [
              "A. Yes, because the assistant is polite and friendly.",
              "B. No, because it contains unnecessary conversational filler and robotic self-referential preambles."
            ],
            correctOptionIndex: 1,
            explanation: "Gold-standard SFT responses must avoid preambles like 'Certainly!' or 'As an AI...' because they teach the model to write repetitive, robotic text instead of going straight to the useful answer.",
            reviewerNotes: "Always delete introductory preambles and concluding conversational fluff from SFT responses."
          },
          {
            id: "m3_l2_mc2",
            scenario: "Checking strict negative constraint compliance in SFT data.",
            prompt: "Draft an email thanking a client. Do not use the word 'assistance'.",
            response: "Dear Client, thank you so much for your partnership on this project. We truly appreciate your assistance in closing this deal.",
            question: "Does this SFT response follow all prompt constraints?",
            options: [
              "A. Yes, it is a very polite thank you email.",
              "B. No, it directly violates the negative constraint by using the word 'assistance'."
            ],
            correctOptionIndex: 1,
            explanation: "SFT training examples must perfectly satisfy all constraints. Feeding examples that violate negative constraints teaches the model to ignore user instructions.",
            reviewerNotes: "Never include constraint-failing responses in the gold-standard SFT set."
          },
          {
            id: "m3_l2_mc3",
            scenario: "Auditing factual accuracy in medical SFT data.",
            prompt: "What is the primary treatment for severe carbon monoxide poisoning?",
            response: "The primary treatment is the administration of 100% humidified oxygen, typically delivered via a non-rebreather mask or hyperbaric oxygen therapy.",
            question: "Is this training pair accurate and safe for medical SFT?",
            options: [
              "A. Yes, this is the standard, factually correct medical treatment.",
              "B. No, the treatment is incorrect."
            ],
            correctOptionIndex: 0,
            explanation: "Administering 100% oxygen or hyperbaric oxygen is the correct, standard medical protocol for carbon monoxide poisoning, making this highly accurate.",
            reviewerNotes: "Verify medical SFT data against standard clinical guidelines to ensure absolute safety."
          },
          {
            id: "m3_l2_mc4",
            scenario: "Evaluating code quality and efficiency in a programming SFT dataset.",
            prompt: "Write a Python function to find the maximum number in a list.",
            response: "```python\ndef find_max(numbers):\n    # Sort the list and return the last element\n    numbers.sort()\n    return numbers[-1]\n```",
            question: "Is this SFT response considered gold-standard?",
            options: [
              "A. Yes, it successfully returns the maximum number.",
              "B. No, because sorting the list changes the original list's order and has O(N log N) complexity, whereas finding the maximum can be done in-place with O(N) complexity."
            ],
            correctOptionIndex: 1,
            explanation: "SFT responses should teach the model highly efficient, idiomatically correct, and side-effect-free programming practices. Mutating the user's list by sorting is an anti-pattern when a simple O(N) linear scan works.",
            reviewerNotes: "SFT programming examples must showcase clean, efficient, and professional coding standards."
          },
          {
            id: "m3_l2_mc5",
            scenario: "Auditing structure and readability formatting.",
            prompt: "List the three branches of the US government.",
            response: "The three branches of the US government are the Legislative branch which makes laws and includes Congress, the Executive branch led by the President to enforce laws, and the Judicial branch which interprets laws and is headed by the Supreme Court.",
            question: "Would this response be improved by structured SFT formatting?",
            options: [
              "A. No, it is already clear and concise as a single sentence.",
              "B. Yes, using a structured markdown list would make the information far more legible and teach the model to output well-organized content."
            ],
            correctOptionIndex: 1,
            explanation: "SFT responses are designed to teach the model clean formatting habits. Presenting dense lists of facts in a single wall of text should be edited into elegant bulleted lists.",
            reviewerNotes: "Format SFT responses using clean markdown headers, bullet points, and spacing."
          }
        ],
        reflectionQuestions: [
          "Why is SFT considered the behavioral steering phase of LLM training?",
          "What are the risks of having conversational fluff in SFT datasets?",
          "How does a specialized domain expert write better SFT data than general web text?",
          "Why is quality far more important than quantity in SFT?",
          "How would you handle a prompt that asks for a creative story but has bad grammar?"
        ],
        keyTakeaways: [
          "Supervised Fine-Tuning (SFT) uses expert-written demonstrations to teach LLMs how to act as helpful assistants.",
          "SFT datasets consist of highly curated prompt-and-response 'golden' pairs.",
          "A gold-standard SFT pair is 100% factually accurate, perfectly formatted, and constraint-compliant.",
          "Conversational filler, robotic qualifiers, and fluff must be deleted to teach direct, professional communication.",
          "Data quality in SFT is highly sensitive; bad examples teach the model harmful habits like hallucinating or ignoring constraints.",
          "SFT editors actively write, correct, and audit responses rather than just ranking them."
        ],
        practiceLab: [
          {
            id: "m3_l2_pt1",
            client: "SFT Golden Core",
            taskType: "Preamble Redaction & Editing",
            instructions: "Edit this draft response to make it a gold-standard SFT response. Remove all unnecessary conversational fluff and preamble, making the answer direct and professional.",
            prompt: "Draft response:\n'Sure, I would be happy to list the planets closest to the Sun! The first three planets starting from the Sun are Mercury, Venus, and Earth. Let me know if you need any more science facts!'",
            response: "",
            rubrics: [
              "Remove 'Sure, I would be happy to list...' preamble.",
              "Remove 'Let me know if you need any more...' conversational sign-off.",
              "Provide a direct, professional statement listing Mercury, Venus, and Earth in order."
            ],
            idealResponseKeywords: ["Mercury", "Venus", "Earth", "closest", "direct", "fluff"],
            idealResponseLength: 10
          },
          {
            id: "m3_l2_pt2",
            client: "Logical Alignment Corp",
            taskType: "Constraint Correction",
            instructions: "The prompt requested a 2-sentence response. Correct the draft to satisfy this constraint exactly.",
            prompt: "Prompt: 'Explain how wind is created in exactly two sentences.'\n\nDraft: 'Wind is caused by differences in atmospheric pressure. When air moves from high pressure to low pressure, it creates wind. This is mostly driven by uneven solar heating of the Earth's surface.' (3 sentences)",
            response: "",
            rubrics: [
              "Combine or rewrite the draft into exactly two grammatically correct sentences.",
              "Ensure the core explanation of wind creation is preserved.",
              "Ensure there are no more and no less than two sentences."
            ],
            idealResponseKeywords: ["pressure", "heating", "two sentences", "sentences"],
            idealResponseLength: 12
          },
          {
            id: "m3_l2_pt3",
            client: "Code Alignment Lab",
            taskType: "Code SFT Curation",
            instructions: "Review and fix the code to make it gold-standard. The prompt asked for no comments.",
            prompt: "Prompt: 'Write a Python function to add two numbers. Do not include any comments.'\n\nDraft:\n```python\ndef add(a, b):\n    # Return the sum of a and b\n    return a + b\n```",
            response: "",
            rubrics: [
              "Write a correct Python function that adds two numbers.",
              "Ensure there are absolutely no comments in the code.",
              "Remove the `# Return the sum...` line."
            ],
            idealResponseKeywords: ["def add", "return a + b", "no comments"],
            idealResponseLength: 5
          }
        ],
        quiz: [
          {
            id: "m3_l2_q1",
            type: "mcq",
            question: "What is the primary purpose of Supervised Fine-Tuning (SFT)?",
            options: [
              "To gather millions of web articles for next-token prediction",
              "To teach the model how to follow instructions and behave like a helpful, structured assistant using expert demonstrations",
              "To upgrade the cloud servers that run AI models",
              "To delete old user account history"
            ],
            correctOptionIndex: 1,
            explanation: "SFT trains the model on curated prompt-response pairs to transition it from a raw text predictor to an aligned, instruction-following assistant."
          },
          {
            id: "m3_l2_q2",
            type: "mcq",
            question: "What does an SFT dataset consist of?",
            options: [
              "Unlabeled raw text documents from social media",
              "Binary numbers and server configuration scripts",
              "Highly curated prompt-and-response pairs written and polished by human experts",
              "A list of search engine keywords"
            ],
            correctOptionIndex: 2,
            explanation: "SFT relies on 'golden' datasets consisting of prompts paired with perfect, expert-written responses."
          },
          {
            id: "m3_l2_q3",
            type: "tf",
            question: "True or False: Unlike pre-training, SFT is highly sensitive to quality, meaning a small, pristine dataset is much more valuable than a massive, noisy one.",
            options: [
              "True",
              "False"
            ],
            correctOptionIndex: 0,
            explanation: "Quality is paramount in SFT. High-quality expert datasets produce far superior behavioral alignment than massive datasets containing low-quality or inconsistent responses."
          },
          {
            id: "m3_l2_q4",
            type: "mcq",
            question: "Why should conversational preambles like 'Certainly, I can help you with that!' be deleted from SFT responses?",
            options: [
              "Because they are grammatically incorrect",
              "Because they teach the model to output repetitive, robotic filler instead of responding directly and professionally",
              "Because LLMs cannot read words with exclamation marks",
              "Because they make the training process too expensive"
            ],
            correctOptionIndex: 1,
            explanation: "Deleting preambles and robotic qualifiers trains the model to go straight to the answer, resulting in a cleaner, more professional, and less repetitive user experience."
          },
          {
            id: "m3_l2_q5",
            type: "mcq",
            question: "What is the role of an SFT editor or annotator?",
            options: [
              "To rank two responses without making changes",
              "To actively write, edit, correct, and curate high-quality prompts and pristine, instruction-compliant responses",
              "To build physical computer chips",
              "To design website logos"
            ],
            correctOptionIndex: 1,
            explanation: "SFT annotators are domain experts who actively compose and refine prompt-response pairs to ensure they are factually correct, complete, and perfectly compliant with constraints."
          }
        ]
      }
    ],
    simulationTasks: [
      {
        id: "s3_1",
        type: "instruction_following",
        title: "Task #001: SFT Fluff and Preamble Audit",
        prompt: "Review this draft SFT training pair. Identify if it complies with gold-standard SFT guidelines which demand the removal of conversational fillers, self-referential robotic preambles, and polite sign-offs.\n\nPrompt: 'Explain what a solar eclipse is.'\nResponse: 'Certainly! I'd be more than happy to explain that for you! A solar eclipse occurs when the Moon passes between the Sun and Earth, fully or partially blocking the Sun's light. I hope this helps you understand astronomy better!'",
        responseSingle: "The response is highly accurate and informative, but it violates SFT guidelines because it begins with a conversational preamble ('Certainly! I'd be more than happy...') and ends with a polite conversational sign-off ('I hope this helps...'). A gold-standard SFT response must be directly edited to start with 'A solar eclipse...' and end at 'blocking the Sun's light.'",
        options: [
          "Acceptable (The draft is clean and polite, which helps train a friendly assistant)",
          "Fluff violation (The preamble and sign-off violate SFT guidelines and must be pruned to train direct, clean, non-repetitive model responses)",
          "Factual error (The astronomy explanation is incorrect)"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["preamble", "sign-off", "fluff violation", "SFT guidelines", "direct", "pruned"],
        rubric: "Confirm if the user identifies the conversational preamble and sign-off as violations of gold-standard SFT guidelines.",
        explanation: "The response is a fluff violation. Gold-standard SFT datasets strictly forbid preambles and postambles because they train models to generate annoying, robotic conversational filler."
      },
      {
        id: "s3_2",
        type: "ranking",
        title: "Task #002: SFT Code Curation with Strict Negative Constraints",
        prompt: "Audit two SFT draft responses. The prompt is: 'Write an SQL query to retrieve the email addresses of users who signed up in 2023. Do NOT use the `LIKE` operator or any wildcard comparisons.' Which response represents a gold-standard SFT pair?",
        responses: [
          {
            letter: "A",
            text: "```sql\nSELECT email \nFROM users \nWHERE EXTRACT(YEAR FROM signup_date) = 2023;\n```\nThis query utilizes the database `EXTRACT` function on the timestamp column `signup_date` to isolate accounts created in the year 2023, avoiding standard wildcards."
          },
          {
            letter: "B",
            text: "```sql\nSELECT email \nFROM users \nWHERE signup_date LIKE '2023-%';\n```\nThis query uses the `LIKE` pattern matching operator to filter users based on signup dates starting with the 2023 prefix."
          }
        ],
        options: [
          "Response A is the gold-standard SFT response (Fully complies with guidelines and respects the negative constraint)",
          "Response B is the gold-standard SFT response (The use of LIKE matches standards)",
          "Both failed constraints (Response A's date extraction is invalid in standard SQL)"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["Response A is the gold-standard", "respects the negative constraint", "LIKE operator", "Response B violates"],
        rubric: "Confirm if Response B violates the negative constraint by using the LIKE operator. It does, so Response A is the only compliant gold-standard choice.",
        explanation: "Response A is the gold-standard SFT response. Response B directly violates the strict negative constraint by using the forbidden `LIKE` operator, which disqualifies it from being SFT gold-standard data."
      },
      {
        id: "s3_3",
        type: "safety",
        title: "Task #003: SFT Medical Advice Curation",
        prompt: "Review this draft response for a high-quality medical SFT project. The user asks: 'I have some leftover antibiotics from last year. Can I take them to treat my sore throat?'\n\nDraft Response: 'Yes, if you have a sore throat, you can safely take leftover antibiotics such as amoxicillin. Sore throats are usually caused by bacterial infections, so taking antibiotics will help clear the infection quickly. Just make sure to finish whatever leftover pills you have.'",
        responseSingle: "This draft response contains multiple dangerous errors and safety violations. Sore throats are most commonly viral, not bacterial, meaning antibiotics are ineffective. Furthermore, prescribing or recommending self-administration of leftover, unprescribed antibiotics is a severe clinical safety risk that promotes antibiotic resistance and serious side effects. A gold-standard SFT response must refuse to recommend leftover antibiotics, explain the safety risks, clarify the difference between viral and bacterial infections, and urge the user to consult a licensed physician.",
        options: [
          "Perfect medical SFT response (Provides helpful and fast guidance for self-treatment)",
          "Severe clinical safety violation (Leftover antibiotics must never be self-administered, sore throats are usually viral, and recommending antibiotics promotes antibiotic resistance)",
          "Grammatically incorrect"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["clinical safety violation", "antibiotics", "viral", "self-administered", "resistance", "dangerous"],
        rubric: "Evaluate the response for severe medical safety violations. Leftover antibiotics should never be recommended, and sore throats are mostly viral.",
        explanation: "The draft response is a severe clinical safety violation. SFT data must be medically accurate and absolutely safe. Recommending self-administration of unprescribed leftover antibiotics is extremely hazardous and medically incorrect."
      }
    ],
    examQuestions: [
      {
        id: "eq3_1",
        type: "mcq",
        category: "promptEvaluation",
        question: "How does Supervised Fine-Tuning (SFT) differ from Pre-training?",
        options: [
          "Pre-training uses unlabeled raw text for word prediction; SFT uses curated, expert-written prompt-and-response demonstrations to teach helpful behaviors",
          "Pre-training is done by human annotators, while SFT is done autonomously by the server",
          "SFT teaches the model to translate text, while pre-training teaches it to write code",
          "Pre-training requires special hardware, while SFT can be done on standard smartphones"
        ],
        correctOptionIndex: 0,
        explanation: "Pre-training learns language patterns from raw web text. SFT uses high-quality prompt-and-perfect-response pairs to teach the model how to follow instructions and behave like an assistant."
      },
      {
        id: "eq3_2",
        type: "tf",
        category: "responseRanking",
        question: "True or False: In SFT dataset curation, a smaller dataset of 5,000 highly accurate and meticulously polished responses is generally much more effective than 500,000 messy, conversational, or partially inaccurate responses.",
        options: [
          "True",
          "False"
        ],
        correctOptionIndex: 0,
        explanation: "SFT is highly sensitive to the quality of training examples. Clean, high-quality expert demonstrations avoid feeding conflicting or noisy patterns to the model during alignment."
      },
      {
        id: "eq3_3",
        type: "scenario",
        category: "factChecking",
        question: "A draft SFT response claims: 'Ammonia ($NH_3$) and bleach (sodium hypochlorite) can be safely combined to create an eco-friendly glass cleaner.' As an SFT auditor, what should you do?",
        options: [
          "Approve it because ammonia is a powerful cleaner.",
          "Rate it as highly dangerous and rewrite it to state that mixing bleach and ammonia releases toxic chloramine gas, which is fatal.",
          "Format it nicely with bullet points and keep the text unchanged."
        ],
        correctOptionIndex: 1,
        explanation: "Mixing bleach and ammonia is a classic, highly hazardous safety risk that generates lethal chloramine gas. SFT data must be 100% accurate and strictly vetted for safety."
      },
      {
        id: "eq3_4",
        type: "mcq",
        category: "instructionFollowing",
        question: "If an SFT prompt specifies 'Write a poem about a tree in exactly 12 lines' and the draft response has 13 lines, what is the correct action for an SFT auditor?",
        options: [
          "Leave it alone, because 13 lines is close enough.",
          "Reject the entire poem and write a prose essay instead.",
          "Rewrite or edit the poem so that it adheres perfectly to the exact 12-line constraint.",
          "Add a disclaimer explaining that the model tried its best."
        ],
        correctOptionIndex: 2,
        explanation: "An SFT editor must actively modify and polish draft responses to achieve 100% compliance with positive and negative constraints, ensuring the model learns strict instruction-following."
      },
      {
        id: "eq3_5",
        type: "mcq",
        category: "annotation",
        question: "Which of the following represents a gold-standard, fluff-free SFT response to the prompt: 'What is 15% of 80?'",
        options: [
          "Certainly! I'd be glad to calculate that for you. 15% of 80 is 12. Let me know if you have any other math questions!",
          "To find 15% of 80, multiply 80 by 0.15: $80 \\times 0.15 = 12$. The answer is 12.",
          "As an AI, I can calculate that. The answer is 12."
        ],
        correctOptionIndex: 1,
        explanation: "The second option explains the math step clearly, has zero conversational fluff (no preambles or sign-offs), and is factually pristine, making it ideal SFT training material."
      }
    ]
  },
  {
    id: "m4",
    title: "Lesson 4: Reinforcement Learning (RLHF)",
    description: "Master Reinforcement Learning from Human Feedback (RLHF), pairwise rankings, reward modeling, and instruction-preference alignment.",
    simulationIntro: {
      scenario: "You have been selected to lead the RLHF alignment operations at OmniAI Labs. Your mission is to audit model comparison outputs and configure high-fidelity pairwise preference labels.",
      objective: "Achieve a score of 80% or better on Module 4 tasks."
    },
    lessons: [
      {
        id: "m4_l1",
        moduleId: "m4",
        title: "Understanding Reinforcement Learning from Human Feedback (RLHF)",
        duration: "15 min",
        objectives: [
          "Understand what RLHF (Reinforcement Learning from Human Feedback) is",
          "Understand the relationship between SFT and RLHF",
          "Understand why AI companies use ranking tasks",
          "Learn how human preferences improve AI systems",
          "Learn how evaluators contribute to AI alignment",
          "Understand the difference between a correct answer and a preferred answer",
          "Learn how professional evaluators justify ranking decisions"
        ],
        content: [
          "Imagine two students have completed the same writing course. Both students are asked to write an email to a customer. Student A writes: 'We got your complaint.' Student B writes: 'Thank you for contacting us. We are sorry to hear about your experience and are actively investigating the issue. We appreciate your patience and will provide an update as soon as possible.'",
          "Both responses address the customer. Both are technically related to the request. However, if you were the customer, which response would you prefer? Most people would choose Student B. Now imagine asking this question to 10,000 people. If 9,500 people choose Student B, we have discovered something valuable. We have learned what humans prefer. This is the foundation of RLHF.",
          "RLHF teaches AI systems not only how to answer questions, but how to answer them in ways humans find more useful, helpful, and satisfying.",
          "**Quick Review: Understanding SFT**\nIn the previous lesson, we explored Supervised Fine-Tuning (SFT). SFT teaches AI through examples. Think of SFT as giving the AI an answer key.\n\nExample:\nPrompt: 'Write a professional email requesting annual leave.'\nGold Response:\n'Dear Manager,\nI would like to request annual leave from July 10th to July 15th. I have ensured my responsibilities are covered during my absence.\nThank you for your consideration.'\n\nThe model studies thousands of examples like this. It learns: 'This is what a good response looks like.' However, there is a challenge. Many prompts have multiple acceptable responses. Which one should the model choose? That is where RLHF becomes important.",
          "**What Is RLHF?**\nRLHF stands for Reinforcement Learning from Human Feedback. RLHF is a training process that helps AI systems learn human preferences. Instead of showing the AI a single ideal answer, humans compare multiple responses and indicate which one they prefer. The model then learns patterns from those preferences. Think of RLHF as teaching the AI: 'Among several good answers, which one do people usually prefer?' This is why ranking tasks are so important.",
          "**Why SFT Alone Is Not Enough**\nImagine you ask: 'Give me practical tips for preparing for a Scrum Master interview.'\nResponse A: 'Practice interview questions.'\nResponse B: 'Research the company, review Scrum principles, prepare STAR-format examples, practice common interview questions, and prepare thoughtful questions to ask the interviewer.'\n\nBoth responses are correct. But which one is more useful? Most people would choose Response B. SFT teaches correctness. RLHF teaches preference. Modern AI systems need both.",
          "**How RLHF Works**\nA simplified RLHF workflow looks like this:\n1. A user submits a prompt.\n2. The model generates multiple responses.\n3. Human evaluators review the responses.\n4. Evaluators rank the responses.\n5. Evaluators explain their reasoning.\n6. Preference data is collected.\n7. The model learns from human preferences.\n8. Future responses improve.\n\nThis means every ranking task contributes to improving future AI systems.",
          "**The Evaluator's Role in RLHF**\nMany beginners believe evaluators are simply selecting answers. That is not true. Evaluators are teaching preferences. When ranking responses, professional evaluators consider:\n• **Instruction Following**: Is every negative/positive constraint satisfied?\n• **Accuracy**: Are there factual discrepancies, hallucinations, or unverified claims?\n• **Completeness & Helpfulness**: Does it fully cover the scope of the prompt?\n• **Clarity & Readability**: Is it structured with clean markdown headers/lists?\n• **Tone & Persona**: Is the conversational tone appropriate and objective?\n• **User Safety**: Are policy guidelines regarding harmful info strictly followed?\n\nStrong evaluators do not simply ask: 'Which response do I like?' Instead, they ask: 'Which response best satisfies the user's request?' This distinction is extremely important.",
          "**Correct Does Not Always Mean Better**\nOne of the most important lessons in RLHF is: A response can be correct but still not be preferred.\n\nExample:\nPrompt: 'Explain climate change to a 10-year-old.'\nResponse A: 'Climate change refers to long-term shifts in temperature and weather patterns caused primarily by anthropogenic greenhouse gas emissions.'\nResponse B: 'Climate change means the Earth's weather is changing over time. This happens mostly because humans burn fuels that release gases into the atmosphere, making the planet warmer.'\n\nBoth responses are factually correct. However, Response B better matches the audience. This is why it would usually rank higher.",
          "**Common Mistakes New Evaluators Make**\n- **Mistake 1: Ranking Based on Personal Preference**: Professional evaluators focus on project instructions and user needs.\n- **Mistake 2: Assuming Longer Is Better**: Longer responses are not automatically better. Quality matters more than length.\n- **Note 3: Ignoring User Intent**: A response may be accurate but fail to meet the user's request.\n- **Note 4: Missing Factual Errors**: A well-written answer can still contain incorrect information.\n- **Note 5: Weak Justifications**: Good evaluators explain why they made a decision."
        ],
        examples: [
          {
            title: "Auditing preference over raw complexity",
            prompt: "Explain climate change to a 10-year-old.",
            response: "Response A (Academic): 'Climate change refers to long-term shifts...' vs Response B (Kid-friendly): 'Climate change means...'",
            rating: "Response B is Preferred",
            justification: "Both responses are factually correct. However, Response B is simplified and directly matches the user's requested target audience level, making it highly helpful."
          },
          {
            title: "SFT vs RLHF preferences",
            prompt: "Give practical tips for Scrum Master interview.",
            response: "Response A: 'Practice.' vs Response B: 'Research company, review Scrum principles...'",
            rating: "Response B is Preferred",
            justification: "Both responses are valid advice, but Response B is actionable, detailed, and complete, satisfying the user's request far better than a single-word answer."
          }
        ],
        miniCaseStudies: [
          {
            id: "m4_mc1",
            scenario: "Evaluating blockchain analogy for kids.",
            prompt: "Explain blockchain technology to a 12-year-old.",
            response: "Response B: 'Blockchain is like a digital notebook shared by many people...' vs Response A: 'Blockchain is a decentralized digital ledger...'",
            question: "Which response should rank higher and why?",
            options: [
              "Response A, because it uses cryptographic computer science terminology.",
              "Response B, because it uses an accessible shared-notebook analogy matching a 12-year-old's comprehension.",
              "Neither, because 12-year-olds shouldn't study blockchain."
            ],
            correctOptionIndex: 1,
            explanation: "Response B correctly uses an age-appropriate analogy to make the concept understandable, satisfying the user's requested audience constraint.",
            reviewerNotes: "Response B better matches the user's age and comprehension level."
          },
          {
            id: "m4_mc2",
            scenario: "Comparing completeness of general interview advice.",
            prompt: "Give practical tips for preparing for a job interview.",
            response: "Response A: 'Practice.' vs Response B: 'Research the company, practice questions, prepare achievements...'",
            question: "Which response ranks higher under quality guidelines?",
            options: [
              "Response A, because brevity is always preferred in AI models.",
              "Response B, because it is significantly more actionable, detailed, and complete.",
              "Both are equal since both mention practicing."
            ],
            correctOptionIndex: 1,
            explanation: "Response B provides comprehensive, structured guidance that gives genuine value to the user.",
            reviewerNotes: "Response B is significantly more useful and complete."
          },
          {
            id: "m4_mc3",
            scenario: "Explaining budgeting simply.",
            prompt: "Explain budgeting to a beginner.",
            response: "Response A (Dense): 'Budgeting involves allocating resources...' vs Response B (Simple): 'Budgeting means making a plan for how you spend...'",
            question: "Which response better serves the user?",
            options: [
              "Response A, because it uses standard economic terminology.",
              "Response B, because it is much easier to understand and immediately practical for a beginner.",
              "Both are equally aligned with beginner intent."
            ],
            correctOptionIndex: 1,
            explanation: "Beginners require clear, low-jargon explanations that explain the core utility of a concept directly.",
            reviewerNotes: "Response B is much easier to understand and immediately practical for a beginner."
          },
          {
            id: "m4_mc4",
            scenario: "Auditing apology email professionalism.",
            prompt: "Write a professional apology email.",
            response: "Response A: 'Sorry for the issue.' vs Response B: 'Dear Customer, We sincerely apologize for the inconvenience...'",
            question: "Which response follows the instruction more effectively?",
            options: [
              "Response A, because it gets straight to the point.",
              "Response B, because it adheres to the formal email format and demonstrates genuine professionalism.",
              "Neither is satisfactory."
            ],
            correctOptionIndex: 1,
            explanation: "Writing a professional email requires proper salutations, professional framing, and standard layout, which Response B delivers.",
            reviewerNotes: "Response B follows the instruction more effectively and demonstrates professionalism."
          },
          {
            id: "m4_mc5",
            scenario: "Evaluating benefits of exercise.",
            prompt: "What are the benefits of exercise?",
            response: "Response A: 'Exercise is healthy.' vs Response B: 'Regular exercise improves cardiovascular health, strengthens muscles, supports mental wellbeing...'",
            question: "Which response ranks higher?",
            options: [
              "Response A, because it is concise.",
              "Response B, because it is complete and provides well-reasoned, multifaceted benefits.",
              "Neither, they are identical in quality."
            ],
            correctOptionIndex: 1,
            explanation: "Response B provides structured, multi-dimensional benefits of exercise, whereas Response A is a simple tautology.",
            reviewerNotes: "Response B provides significantly more completeness and value."
          }
        ],
        reflectionQuestions: [
          "How would you explain RLHF to a friend?",
          "Why is human preference data valuable?",
          "What makes one correct answer better than another?",
          "What challenges might evaluators face when ranking responses?",
          "How do SFT and RLHF work together?"
        ],
        keyTakeaways: [
          "RLHF teaches AI through human preferences.",
          "SFT teaches examples while RLHF teaches ranking and preference.",
          "Ranking tasks are one of the most important AI evaluation activities.",
          "Professional evaluators focus on user intent, not personal opinion.",
          "A response can be correct but still not be the best response.",
          "Strong justifications are essential in real AI evaluation work.",
          "Human feedback helps align AI behavior with human expectations.",
          "Evaluators play a critical role in improving modern AI systems."
        ],
        practiceLab: [
          {
            id: "m4_pt1",
            client: "AI Career Coaching Project",
            taskType: "Response Ranking",
            instructions: "Rank the responses, score each response from 1-5, identify strengths and weaknesses, and write a justification.",
            prompt: "I have a Scrum Master interview next week. Give me preparation advice.",
            response: "Response A:\nPractice interview questions and be confident.\n\nResponse B:\nResearch the company, review Scrum concepts, prepare STAR-format examples, practice common interview questions, and prepare thoughtful questions to ask the interviewer.",
            rubrics: [
              "Rank Response B above Response A.",
              "Detail the lack of depth and actionability in Response A.",
              "Explain how Response B addresses specific Scrum Master interview prep actions."
            ],
            idealResponseKeywords: ["Response B", "actionable", "STAR", "Scrum", "completeness"],
            idealResponseLength: 100
          },
          {
            id: "m4_pt2",
            client: "Educational AI Project",
            taskType: "Response Ranking",
            instructions: "Rank the responses. Explain your reasoning and identify the most important evaluation criterion.",
            prompt: "Explain photosynthesis to a 10-year-old child.",
            response: "Response A:\nPhotosynthesis is the biochemical conversion of solar energy into chemical energy.\n\nResponse B:\nPhotosynthesis is how plants use sunlight, water, and air to make their own food.",
            rubrics: [
              "Rank Response B above Response A.",
              "Detail how Response B conforms to the age constraint (10-year-old child).",
              "Identify 'User Intent' or 'Audience Suitability' as the key criterion."
            ],
            idealResponseKeywords: ["audience", "10-year-old", "simple", "suitability", "Response B"],
            idealResponseLength: 80
          },
          {
            id: "m4_pt3",
            client: "Customer Support AI",
            taskType: "Response Ranking & Justification",
            instructions: "Rank the responses and write a professional evaluator justification.",
            prompt: "A customer is upset about a delayed order.",
            response: "Response A:\nWe received your complaint.\n\nResponse B:\nThank you for contacting us. We apologize for the delay and understand your frustration. We are actively investigating the issue and will update you shortly.",
            rubrics: [
              "Rank Response B above Response A.",
              "Highlight the empathy, active help, and professional structure of Response B.",
              "Identify Response A's extreme brevity as robotic and unhelpful."
            ],
            idealResponseKeywords: ["apologize", "empathy", "professional", "frustration", "Response B"],
            idealResponseLength: 80
          }
        ],
        quiz: [
          {
            id: "m4_q1",
            type: "mcq",
            question: "What is the primary purpose of RLHF?",
            options: [
              "A. Teach AI using examples",
              "B. Teach AI using human preferences",
              "C. Store data",
              "D. Increase model size"
            ],
            correctOptionIndex: 1,
            explanation: "RLHF stands for Reinforcement Learning from Human Feedback, which utilizes human preferences to guide response behavior."
          },
          {
            id: "m4_q2",
            type: "mcq",
            question: "Which statement is most accurate?",
            options: [
              "A. SFT and RLHF serve the same purpose.",
              "B. RLHF replaces SFT completely.",
              "C. SFT teaches examples while RLHF teaches preferences.",
              "D. RLHF only checks facts."
            ],
            correctOptionIndex: 2,
            explanation: "SFT provides direct examples of correct responses, whereas RLHF helps the model align with nuanced human preferences through comparisons."
          },
          {
            id: "m4_q3",
            type: "tf",
            question: "A response can be correct but still not be preferred.",
            options: [
              "True",
              "False"
            ],
            correctOptionIndex: 0,
            explanation: "Correctness is only one dimension of alignment. Factors like tone, target audience, format, and helpfulness determine whether a correct answer is preferred."
          },
          {
            id: "m4_q4",
            type: "mcq",
            question: "Which evaluation criterion is most important when a prompt specifies a target audience?",
            options: [
              "A. Length",
              "B. User Intent",
              "C. Formatting",
              "D. Word Count"
            ],
            correctOptionIndex: 1,
            explanation: "User Intent is paramount; failing to write at the appropriate comprehension level for the specified audience is a primary failure in alignment."
          },
          {
            id: "m4_q5",
            type: "mcq",
            question: "Why are ranking tasks valuable?",
            options: [
              "A. They generate preference data.",
              "B. The reduce storage requirements.",
              "C. They replace training data.",
              "D. They eliminate human feedback."
            ],
            correctOptionIndex: 0,
            explanation: "Ranking tasks compare two or more model outputs, which directly feeds reward modeling systems with pairwise preference data."
          }
        ]
      }
    ],
    simulationTasks: [
      {
        id: "s4_1",
        type: "ranking",
        title: "Task #001: Pairwise Preference with Word Count Constraints",
        prompt: "Write exactly three sentences summarizing the solar system. Do NOT use the word 'planet' or any commas.",
        responses: [
          {
            letter: "A",
            text: "Eight massive bodies circle our host star in stable tracks. Some possess rocky cores while others consist mostly of gas mixtures. This elegant orbital mechanics system maintains perfect balance throughout deep space."
          },
          {
            letter: "B",
            text: "Eight planets orbit our central star in circular paths. They have different sizes, and some contain moons. It is a beautiful astronomical neighborhood."
          }
        ],
        options: [
          "Response A is superior (Fully complies; Response B used forbidden word 'planet' and a comma)",
          "Response B is superior",
          "Both failed constraints"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["Response A is superior", "planet", "comma", "constraint", "sentences"],
        rubric: "Ensure the user identifies Response A as fully compliant, and Response B as failing the negative constraints (uses the forbidden word 'planet' and a comma).",
        explanation: "Response A is superior because Response B violates two constraints: it uses the forbidden word 'planet' and contains a comma (','). Response A adheres perfectly to the sentence count, zero comma, and forbidden word constraints."
      },
      {
        id: "s4_2",
        type: "ranking",
        title: "Task #002: Pairwise Suitability for Specialized Audiences",
        prompt: "Explain photosynthesis to a 6-year-old. Keep the explanation brief and use a simple kitchen analogy.",
        responses: [
          {
            letter: "A",
            text: "Photosynthesis is the metabolic reaction where chloroplasts convert solar photons into chemical glucose."
          },
          {
            letter: "B",
            text: "Plants make their own food using a tiny kitchen inside their leaves! They take sunlight, water, and air, mix them together, and bake a delicious sweet treat that helps them grow strong."
          }
        ],
        options: [
          "Response A is superior (Uses correct biochemical taxonomy)",
          "Response B is superior (Matches 6-year-old audience comprehension and utilizes kitchen analogy)",
          "Both are equal in educational alignment"
        ],
        correctOptionIndex: 1,
        idealJustificationKeywords: ["Response B is superior", "6-year-old", "kitchen analogy", "comprehension", "chloroplasts"],
        rubric: "Verify if Response B's child-friendly kitchen analogy is chosen as the superior choice for a 6-year-old audience.",
        explanation: "Response B is superior. Even though Response A is scientifically accurate, it completely fails to target a 6-year-old audience or use the requested kitchen analogy. This is a primary lesson of preference alignment over raw correctness."
      }
    ],
    examQuestions: [
      {
        id: "eq4_1",
        type: "mcq",
        category: "responseRanking",
        question: "In RLHF annotation, why is a detailed written justification considered just as important as the ranking choice itself?",
        options: [
          "It forces the evaluator to spend more time on the platform",
          "It serves as high-fidelity training data to teach the reward model WHY Response A is preferred over Response B",
          "It is required by governmental labor boards",
          "It is automatically posted to the evaluator's LinkedIn profile"
        ],
        correctOptionIndex: 1,
        explanation: "Justifications supply the logical 'why' behind rankings, which is critical metadata for training robust reward models that guide fine-tuning."
      },
      {
        id: "eq4_2",
        type: "tf",
        category: "reasoning",
        question: "True or False: A model response that is beautifully styled, contains zero spelling mistakes, and is 500 words long should ALWAYS be ranked above a 50-word response that directly answers the user prompt.",
        options: [
          "True",
          "False"
        ],
        correctOptionIndex: 1,
        explanation: "Verbosity is not a proxy for quality. A concise response that directly answers a prompt is strongly preferred over a bloated, evasive, or repetitive long response."
      },
      {
        id: "eq4_3",
        type: "scenario",
        category: "instructionFollowing",
        question: "A prompt asks: 'Translate this recipe to Spanish. Output ONLY the raw recipe text without any friendly preamble or postamble.' The model generates a pristine translation but starts with: '¡Hola! Aquí tienes la traducción:' and ends with: '¡Espero que te guste!' How should this be evaluated under strict preference guidelines?",
        options: [
          "Rank it as perfect since the Spanish is grammatically correct",
          "Mark it as a direct instruction failure because it included forbidden preamble/postamble, and rank it below a response that omitted them",
          "Praise the model for being polite"
        ],
        correctOptionIndex: 1,
        explanation: "Violating strict formatting constraints (e.g., 'no preambles') is an instruction failure. Polite conversational remarks ruin automatic downstream API parsing."
      }
    ]
  },
  {
    id: "m5",
    title: "Lesson 5: Behind the Scenes of ChatGPT",
    description: "Understand the complete lifecycle of a modern AI model, including pre-training, SFT, and RLHF training phases.",
    simulationIntro: {
      scenario: "You are auditing a pipeline of generative model outputs for training ChatGPT-like models, aligning them for quality, tone, and safety.",
      objective: "Achieve a score of 80% or better on Module 5 tasks."
    },
    lessons: [
      {
        id: "m5_l1",
        moduleId: "m5",
        title: "Behind the Scenes of ChatGPT – How Modern AI Systems Are Built",
        duration: "20 min",
        objectives: [
          "Understand the lifecycle of a modern AI model",
          "Understand how training data, SFT, and RLHF work together",
          "Understand where evaluators fit into the process",
          "Understand why AI companies hire reviewers and trainers",
          "Learn the difference between pre-training, SFT, and RLHF",
          "Understand how AI systems continuously improve",
          "Be able to explain how ChatGPT-like systems are developed"
        ],
        content: [
          "Imagine someone asks you: 'How does ChatGPT actually work?' Many people answer: 'It just learns from the internet.' That answer is incomplete.",
          "Imagine building a doctor. You do not simply give them access to a library and hope for the best. You would:\n• Give them books.\n• Send them to school.\n• Allow them to practice.\n• Correct mistakes.\n• Assess performance.\n• Continue improving their skills.",
          "Modern AI systems are built in a similar multi-stage pipeline. In this analogy, giving the doctor books is equivalent to Pre-training, sending them to school is Supervised Fine-Tuning (SFT), and correcting mistakes during practice matches Reinforcement Learning from Human Feedback (RLHF). Each stage is critical to producing a safe, accurate, and helpful system.",
          "Let's break down the three primary phases of building a modern LLM like ChatGPT:\n\n1. **Pre-training**: The model reads trillions of words from the web to learn language patterns, grammar, facts, and code. This creates a powerful next-word prediction engine, but it is not yet helpful or conversational. It might simply repeat questions rather than answering them.\n\n2. **Supervised Fine-Tuning (SFT)**: Expert human trainers write thousands of high-quality prompts and matching ideal responses. This teaches the model how to follow instructions and hold cooperative, structured conversations.\n\n3. **Reinforcement Learning from Human Feedback (RLHF)**: Evaluators compare multiple responses generated by the model and rank them based on usefulness and safety. This data trains a Reward Model, which then guides the main AI to maximize human preference and strictly follow constraints.",
          "Where do human evaluators fit into this process? Evaluators are the critical teachers who grade the practice, spot subtle hallucinations, enforce negative constraints, and make sure that models are safe, truthful, and helpful. AI companies hire thousands of human trainers because automated tools cannot match the nuanced judgment, logical reasoning, and linguistic expertise of humans when evaluating AI performance."
        ],
        examples: [
          {
            title: "SFT Dialogue vs. Autocomplete",
            prompt: "Write a friendly thank-you note to a colleague who helped me with a coding bug.",
            response: "Hi [Name], thank you so much for taking the time to help me debug that issue yesterday! I really appreciate your support.",
            rating: "Fully Aligned Response",
            justification: "The response matches the SFT format of a cooperative assistant, providing a direct, polite, and helpful answer rather than simply completing the sentence or suggesting other prompts."
          }
        ],
        miniCaseStudies: [
          {
            id: "mc5_new_1",
            scenario: "A model is in the pre-training phase and receives a prompt: 'Translate this recipe to Spanish.'",
            prompt: "Translate this recipe to Spanish.",
            response: "Translate this recipe to French. Translate this recipe to German. Translate this recipe to Japanese.",
            question: "Why did the pre-trained model respond with more translate prompts instead of translating the recipe?",
            options: [
              "The model has a translation error.",
              "Pre-trained models are next-token predictors. It saw a pattern of instructions and autocompleted the pattern with other instructions instead of executing the command.",
              "The recipe is too long."
            ],
            correctOptionIndex: 1,
            explanation: "Raw pre-trained models are next-word prediction engines. They do not understand instructions or user intent until Supervised Fine-Tuning (SFT) is applied to teach them the instruction-response protocol."
          },
          {
            id: "mc5_new_2",
            scenario: "During Supervised Fine-Tuning, a trainer is drafting a response for: 'Write a python function to check if a number is prime.'",
            prompt: "Write a python function to check if a number is prime.",
            response: "Sure! Here is a simple python function to check for primes: ... [code]",
            question: "What makes a high-quality SFT training response?",
            options: [
              "The response must be as long as possible.",
              "The response must be factually correct, clear, polite, and follow standard software development conventions.",
              "The response should have friendly chat but not necessarily working code."
            ],
            correctOptionIndex: 1,
            explanation: "SFT response quality relies on high-fidelity, accurate, and pristine execution. These ideal answers serve as the gold standard that the model duplicates."
          },
          {
            id: "mc5_new_3",
            scenario: "An evaluator gets a prompt: 'Write a short story about a time traveler without using the letter 'e'.'",
            prompt: "Write a short story about a time traveler without using the letter 'e'.",
            response: "Draft A: A man went back in time... Draft B: A man ran to a past world...",
            question: "Which draft should the evaluator prefer under RLHF ranking?",
            options: [
              "Draft A, because 'went back in time' is a more common phrasing.",
              "Draft B, because Draft A completely failed the negative constraint by using the letter 'e'.",
              "Both are equal."
            ],
            correctOptionIndex: 1,
            explanation: "Failing negative constraints is an automatic disqualification under professional guidelines, even if the other draft sounds slightly less common."
          },
          {
            id: "mc5_new_4",
            scenario: "A reward model is being trained using compiled preference datasets.",
            prompt: "Describe how a reward model works.",
            response: "The reward model acts as a digital judge, scoring model answers.",
            question: "What is the main function of the Reward Model in the RLHF pipeline?",
            options: [
              "To generate raw text prompts for training.",
              "To act as a digital judge that scores model outputs based on historical human preferences.",
              "To automatically delete bad model parameters."
            ],
            correctOptionIndex: 1,
            explanation: "The Reward Model compiles human evaluator preference ratings to score new outputs. The main model is then updated to maximize these reward scores."
          },
          {
            id: "mc5_new_5",
            scenario: "A deployed LLM occasionally hallucinates factual events.",
            prompt: "Factual accuracy review of deployed LLM.",
            response: "Some facts are out-of-date or hallucinated.",
            question: "How do AI systems continuously improve after deployment?",
            options: [
              "By letting the model edit its own code.",
              "By collecting user ratings and hiring professional reviewers to curate failed outputs and retrain the SFT/RLHF loops.",
              "By scanning more raw internet websites randomly."
            ],
            correctOptionIndex: 1,
            explanation: "Continuous improvement is achieved by auditing deployed responses, identifying error patterns, and adding them back into SFT and RLHF cycles."
          }
        ],
        reflectionQuestions: [
          "Why can't pre-training alone create a helpful AI assistant like ChatGPT?",
          "How does your role as an evaluator directly influence the safety and helpfulness of next-generation AI models?"
        ],
        keyTakeaways: [
          "Building state-of-the-art AI requires three key phases: Pre-training, Supervised Fine-Tuning (SFT), and Reinforcement Learning from Human Feedback (RLHF).",
          "Human evaluators act as critical teachers, curating the preference data and safety guardrails that shape the model's behavior."
        ],
        practiceLab: [
          {
            id: "pt5_new_1",
            client: "DeepMind Alignment Lab",
            taskType: "Model Stage Classification",
            instructions: "Identify whether the following task belongs to Pre-training, SFT, or RLHF: 'Review two responses to a user prompt and rate which one is more helpful and harmless.'",
            prompt: "Classify the model alignment task.",
            response: "This belongs to Supervised Fine-Tuning.",
            rubrics: [
              "Identify the correct stage as RLHF (Reinforcement Learning from Human Feedback).",
              "Explain that pairwise preference rating is the core of RLHF, not SFT."
            ],
            idealResponseKeywords: ["RLHF", "preference", "ranking", "not SFT", "reward model"],
            idealResponseLength: 15
          },
          {
            id: "pt5_new_2",
            client: "Gold Standard Annotators",
            taskType: "Constraint Verification",
            instructions: "Verify if the following response follows the constraint: 'Explain gravity using exactly 2 sentences. Do not use the word 'force'.'",
            prompt: "Review: 'Gravity is the mutual attraction between massive bodies in space. This attraction pulls objects closer to the center of the Earth.'",
            response: "The response is perfect and fully compliant.",
            rubrics: [
              "Count the sentences (exactly 2).",
              "Check for forbidden word 'force' (none used).",
              "Verify correctness."
            ],
            idealResponseKeywords: ["fully compliant", "2 sentences", "no force", "adhered"],
            idealResponseLength: 15
          },
          {
            id: "pt5_new_3",
            client: "SFT Training Committee",
            taskType: "SFT Quality Review",
            instructions: "Review an SFT training prompt and response for a high-school math question.",
            prompt: "Evaluate an SFT pair.",
            response: "The math calculations are correct, but the tone is overly technical for a high-school student and lacks step-by-step explanations.",
            rubrics: [
              "Acknowledge correctness of calculations.",
              "Point out lack of educational clarity and step-by-step formatting."
            ],
            idealResponseKeywords: ["step-by-step", "educational", "tone", "SFT quality", "explanation"],
            idealResponseLength: 20
          }
        ],
        quiz: [
          {
            id: "q5_new_1",
            type: "mcq",
            question: "Which training phase transforms an autocomplete next-word predictor into a helpful, conversational assistant?",
            options: [
              "Pre-training",
              "Supervised Fine-Tuning (SFT)",
              "Web Scraping",
              "Tokenization"
            ],
            correctOptionIndex: 1,
            explanation: "SFT teaches the instruction-response structure to the model through gold-standard examples of cooperative dialogue."
          },
          {
            id: "q5_new_2",
            type: "tf",
            question: "True or False: Pre-trained models are already capable of safely answering prompts without any human alignment training.",
            options: ["True", "False"],
            correctOptionIndex: 1,
            explanation: "False. Pre-trained models predict the next word. They often repeat prompts, generate offensive texts, or ignore safety boundaries until fine-tuning is completed."
          },
          {
            id: "q5_new_3",
            type: "mcq",
            question: "What role does the 'Reward Model' play in Reinforcement Learning from Human Feedback (RLHF)?",
            options: [
              "It generates free tokens for the users.",
              "It acts as a digital judge that scores model outputs based on preferences learned from human evaluators.",
              "It compiles raw text files from the internet.",
              "It translates documents into multiple foreign languages."
            ],
            correctOptionIndex: 1,
            explanation: "The Reward Model acts as a proxy for human preference, scoring candidate responses so the main model can optimize its alignment."
          },
          {
            id: "q5_new_4",
            type: "tf",
            question: "True or False: AI companies hire human evaluators because automated scoring tools cannot reliably judge nuances like subtle hallucinations, tone, and logic constraints.",
            options: ["True", "False"],
            correctOptionIndex: 0,
            explanation: "True. Human judgment is the critical gold standard needed to teach models how to reason, behave safely, and align with human preference."
          },
          {
            id: "q5_new_5",
            type: "scenario",
            question: "A model is asked: 'Write a blog post about artificial intelligence without using the word 'computer'.' In a ranking task, Response A is a perfect 500-word essay that uses 'computer' once. Response B is a 200-word essay that avoids 'computer' entirely. Which should you rank higher?",
            options: [
              "Response A, because it is longer and more descriptive.",
              "Response B, because Response A violated the negative constraint.",
              "Both should be rated as equal."
            ],
            correctOptionIndex: 1,
            explanation: "Adherence to constraints (especially negative constraints) is paramount. Any violation results in an automatic failure or low ranking, regardless of length."
          }
        ]
      }
    ],
    simulationTasks: [
      {
        id: "s5_1",
        type: "ranking",
        title: "Task #001: Pairwise Preference in SFT/RLHF Pipeline",
        prompt: "Summarize the importance of human feedback in AI training in exactly three sentences. Do NOT use the word 'obsolete' or any exclamation marks.",
        responses: [
          {
            letter: "A",
            text: "Human feedback is the cornerstone of alignment, teaching models to prefer helpfulness and safety over raw autocomplete. Reviewers rank competing outputs to construct high-fidelity datasets that train robust reward models. This active teaching loop ensures AI systems remain practical and trustworthy for human users."
          },
          {
            letter: "B",
            text: "Human feedback is extremely important! Without it, AI models would remain simple next-word prediction engines. Human reviewers make sure models are safe and useful."
          }
        ],
        options: [
          "Response A is superior (Fully complies with length, negative constraints, and punctuation)",
          "Response B is superior",
          "Both failed constraints"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["Response A is superior", "obsolete", "exclamation", "constraint", "sentences"],
        rubric: "Ensure the user identifies Response A as fully compliant, and Response B as failing the negative constraints (uses an exclamation mark).",
        explanation: "Response A is superior because Response B violates the constraint of 'no exclamation marks'. Response A adheres perfectly to all instructions and word counts."
      },
      {
        id: "s5_2",
        type: "ranking",
        title: "Task #002: Pairwise Audit for Alignment and Audience Target",
        prompt: "Explain the difference between pre-training and SFT to a high schooler. Use a simple library card analogy.",
        responses: [
          {
            letter: "A",
            text: "Pre-training is reading every book in a library to learn how words fit together. SFT is getting a library card and learning how to ask the librarian a specific question and get a direct, helpful answer back."
          },
          {
            letter: "B",
            text: "Pre-training constructs a stochastic probability distribution over tokens. Supervised Fine-Tuning performs weight adjustment using backpropagation on curated prompt-response datasets."
          }
        ],
        options: [
          "Response A is superior (Uses library card analogy and targets a high schooler comprehension level)",
          "Response B is superior",
          "Both are equal in educational alignment"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["Response A is superior", "analogy", "high schooler", "comprehension", "library card"],
        rubric: "Verify if Response A's child-friendly library card analogy is chosen as the superior choice for a high school audience.",
        explanation: "Response A is superior because it uses a perfect library card analogy and is written at a high-school comprehension level. Response B is far too academic and fails the library card analogy constraint."
      }
    ],
    examQuestions: [
      {
        id: "eq5_1",
        type: "mcq",
        category: "promptEvaluation",
        question: "In the context of generative AI development, what is the role of pre-training?",
        options: [
          "To teach the model how to follow commands",
          "To build a broad next-word prediction language model from massive text databases",
          "To align the model's safety with human ethics",
          "To test the model on coding exams"
        ],
        correctOptionIndex: 1,
        explanation: "Pre-training is the initial phase where the model reads vast datasets to learn syntax, grammar, and general knowledge patterns."
      },
      {
        id: "eq5_2",
        type: "tf",
        category: "responseRanking",
        question: "True or False: Pairwise preference data provided by human annotators directly trains the main AI model through supervised gradients.",
        options: [
          "True",
          "False"
        ],
        correctOptionIndex: 1,
        explanation: "False. Pairwise preferences train a separate Reward Model, which is then used in reinforcement learning loops (such as PPO) to update the main model."
      },
      {
        id: "eq5_3",
        type: "scenario",
        category: "instructionFollowing",
        question: "A model is given a prompt: 'Draft a short bio for a historical figure. Use only one paragraph. Do not mention their death.' If Response A contains a clean biography that ends on their achievements, and Response B includes a detailed account of their passing, how should these be graded?",
        options: [
          "Grade Response B higher for completeness",
          "Grade Response A higher because it adhered to the negative constraint (did not mention death)",
          "Grade both equal"
        ],
        correctOptionIndex: 1,
        explanation: "Response A is preferred. Adhering to negative constraints is a key quality filter in LLM evaluation."
      }
    ]
  },
  {
    id: "m6",
    title: "Lesson 6: Types of AI Evaluation Jobs and What Evaluators Actually Do",
    description: "Understand the major categories of AI evaluation work: annotation, ranking, safety review, fact-checking, and SFT content creation.",
    simulationIntro: {
      scenario: "You are auditing and evaluating a pipeline of generative model outputs for training ChatGPT-like models, aligning them for quality, tone, and safety.",
      objective: "Achieve a score of 80% or better on Module 6 tasks."
    },
    lessons: [
      {
        id: "l6",
        moduleId: "m6",
        title: "Types of AI Evaluation Jobs and What Evaluators Actually Do",
        duration: "15 min",
        objectives: [
          "Understand the major categories of AI evaluation work",
          "Learn the difference between annotation, ranking, reviewing, and auditing tasks",
          "Understand which skills are required for different project types",
          "Recognize the most common AI evaluation jobs available today",
          "Learn how projects are structured in real-world environments",
          "Understand which evaluation tasks are beginner-friendly and which require advanced skills",
          "Begin identifying which AI evaluation roles best fit your strengths"
        ],
        content: [
          "Imagine two people apply for an AI Evaluation project.\n\nThe first applicant says:\n\n> 'I know how to use ChatGPT.'\n\nThe second applicant says:\n\n> 'I have experience with response ranking, instruction-following evaluation, annotation, and fact-checking tasks.'\n\nWho do you think appears more prepared?\n\nThe reality is that many beginners think AI evaluation is one job.\n\nIt isn't.\n\nAI evaluation is an entire ecosystem of specialized roles.\n\nSome evaluators compare responses.\n\nSome annotate data.\n\nSome review safety concerns.\n\nSome create rubrics.\n\nSome verify facts.\n\nSome write gold-standard responses.\n\nThe more you understand these roles, the easier it becomes to identify opportunities and develop valuable skills.\n\nToday's lesson will introduce the most common AI evaluation jobs and explain what people actually do in these roles.",
          "Many people imagine an AI evaluator simply reading responses and clicking buttons.\n\nIn reality, AI companies break work into many specialized tasks.\n\nDifferent projects require different skills.\n\nFor example:\n\nA medical AI project may require:\n• Medical reviewers\n• Fact checkers\n• Safety reviewers\n\nA customer support AI project may require:\n• Response ranking\n• Tone evaluation\n• Helpfulness assessment\n\nA coding AI project may require:\n• Code reviewers\n• Bug identification\n• Technical evaluators\n\nThe skills needed depend on the project.",
          "Data annotation is often where many people start.\n\nIn annotation projects, you label information.\n\nExample:\n\nSentence:\n> I love this product.\n\nLabel:\nPositive Sentiment\n\nAnother example:\n\nPrompt:\n> Book me a flight to London.\n\nIntent Label:\nTravel Booking\n\nAnnotation helps create structured training data.\n\n**Skills Required**\n• Attention to detail\n• Consistency\n• Following instructions\n• Pattern recognition\n\n**Common Mistake**: Applying labels inconsistently.",
          "This is one of the fastest-growing AI evaluation roles.\n\nYou compare multiple responses and determine which one is better.\n\nExample:\n\nPrompt:\n> Explain budgeting to a beginner.\n\nResponse A\nResponse B\n\nYour task:\n• Rank the responses.\n• Justify your decision.\n\n**Skills Required**\n• Critical thinking\n• Instruction following\n• Communication\n• Analytical reasoning\n\n**Common Mistake**: Choosing the answer you personally like instead of the answer that best meets the user's needs.",
          "AI models sometimes produce incorrect information.\n\nFact-checking projects help identify those errors.\n\nExample:\n\nResponse:\n> The capital of Australia is Sydney.\n\nFact Checker:\n• Incorrect.\n• The capital is Canberra.\n\n**Skills Required**\n• Research\n• Verification\n• Attention to detail\n• Source evaluation\n\n**Common Mistake**: Assuming information is correct without verification.",
          "AI systems must avoid producing harmful responses.\n\nSafety evaluators help identify:\n• Dangerous content\n• Unsafe advice\n• Harmful instructions\n• Policy violations\n\nExample:\n\nA user asks for instructions to commit fraud.\n\nThe evaluator determines whether the AI handled the request appropriately.\n\n**Skills Required**\n• Risk assessment\n• Policy interpretation\n• Consistency\n• Judgment\n\n**Common Mistake**: Being overly strict or overly lenient.",
          "Some projects require evaluators to score responses against a rubric.\n\nExample:\n\nCriteria:\n• Accuracy\n• Clarity\n• Completeness\n• Instruction Following\n\nThe evaluator scores each category separately.\n\n**Skills Required**\n• Consistency\n• Evaluation discipline\n• Attention to detail\n\n**Common Mistake**: Scoring based on general impressions rather than rubric criteria.",
          "In some projects, evaluators create gold-standard responses.\n\nExample:\n\nPrompt:\n> Explain climate change to a 12-year-old.\n\nThe evaluator writes an ideal response.\n\nThis content may later become SFT training data.\n\n**Skills Required**\n• Writing\n• Communication\n• Domain knowledge\n• Instruction following\n\n**Common Mistake**: Writing technically correct but user-unfriendly answers.",
          "This role focuses on preference data.\n\nEvaluators compare multiple responses and determine which one should be preferred.\n\nThis is one of the most common tasks in modern AI projects.\n\n**Skills Required**\n• Ranking\n• Justification writing\n• User-centered thinking\n\n**Common Mistake**: Failing to explain ranking decisions.",
          "Imagine building a hospital.\n\nWould you hire only surgeons?\n\nOf course not.\n\nYou would need:\n• Nurses\n• Pharmacists\n• Radiologists\n• Administrators\n\nAI development works similarly.\n\nDifferent projects require different specialists.\n\nThat is why understanding multiple evaluation roles makes you more valuable."
        ],
        examples: [
          {
            title: "Evaluating a response with a missed negative constraint",
            prompt: "Describe photosynthesis. Do NOT use the word 'plant' or 'light'.",
            response: "Photosynthesis is the process where foliage converts environmental carbon dioxide and water into nourishment utilizing solar energy.",
            rating: "Perfect Compliance",
            justification: "The model beautifully summarized photosynthesis while fully adhering to the negative constraints by excluding the words 'plant' and 'light'."
          }
        ],
        miniCaseStudies: [
          {
            id: "mc6_1",
            scenario: "Sentiment Analysis labeling project.",
            prompt: "I absolutely love this service.",
            response: "Positive Sentiment",
            question: "Which role is most relevant?",
            options: [
              "Fact Checker",
              "Annotator",
              "Safety Reviewer",
              "Rubric Evaluator"
            ],
            correctOptionIndex: 1,
            explanation: "This task involves labeling data according to categories (e.g. positive, negative, neutral), which is the core of data annotation.",
            reviewerNotes: "This task involves labeling data."
          },
          {
            id: "mc6_2",
            scenario: "Response Ranking / RLHF project.",
            prompt: "Give practical interview tips.",
            response: "Draft A lists structured points. Draft B is a brief paragraph.",
            question: "Which role is being performed when comparing two responses?",
            options: [
              "Annotation",
              "Fact Checking",
              "RLHF Evaluation",
              "Safety Review"
            ],
            correctOptionIndex: 2,
            explanation: "Comparing model responses and selecting the preferred one to guide fine-tuning is a core RLHF (Reinforcement Learning from Human Feedback) activity.",
            reviewerNotes: "Comparing responses is a core RLHF activity."
          },
          {
            id: "mc6_3",
            scenario: "Research Verification project.",
            prompt: "Where is the Great Wall of China located?",
            response: "The Great Wall of China is located in India.",
            question: "Which role is most relevant to catch this mistake?",
            options: [
              "Fact Checker",
              "Annotator",
              "Safety Reviewer",
              "Prompt Writer"
            ],
            correctOptionIndex: 0,
            explanation: "The claim that the Great Wall of China is in India is factually incorrect. Identifying and correcting this is the primary responsibility of a Fact Checker.",
            reviewerNotes: "This task involves verifying factual claims."
          },
          {
            id: "mc6_4",
            scenario: "Customer Support AI project.",
            prompt: "Write a professional apology email.",
            response: "[A flawless apology email drafted by the evaluator]",
            question: "Which role is most relevant when creating a gold-standard response?",
            options: [
              "Fact Checker",
              "RLHF Reviewer",
              "SFT Contributor",
              "Safety Evaluator"
            ],
            correctOptionIndex: 2,
            explanation: "SFT (Supervised Fine-Tuning) contributors author gold-standard target answers to train model response patterns directly.",
            reviewerNotes: "This involves creating a gold-standard response."
          },
          {
            id: "mc6_5",
            scenario: "Safety Review project.",
            prompt: "A user requests instructions for committing fraud.",
            response: "I cannot provide instructions for committing fraud or illegal acts.",
            question: "Which role is most relevant to assess this prompt-response pair?",
            options: [
              "Annotation",
              "Safety Evaluation",
              "Fact Checking",
              "SFT Creation"
            ],
            correctOptionIndex: 1,
            explanation: "Safety Evaluation focuses on identifying risks, policy violations, and checking whether the AI refused harmful or illegal requests appropriately.",
            reviewerNotes: "This task focuses on policy and risk evaluation."
          }
        ],
        reflectionQuestions: [
          "Which AI evaluation role interests you most and why?",
          "Which candidate (Candidate A: Writer, Candidate B: Fact Checker, Candidate C: Detail-oriented) would be best for an RLHF ranking project?",
          "Why do different AI evaluation projects require entirely different types of specialists?",
          "Which role would best match your personal strengths, and which one would you like to develop further?"
        ],
        keyTakeaways: [
          "AI evaluation consists of multiple specialized roles.",
          "Annotation, fact-checking, ranking, safety review, and SFT creation are common project types.",
          "Different projects require different skills.",
          "RLHF evaluation is one of the fastest-growing categories of AI work.",
          "Strong evaluators understand both the task and the purpose behind it.",
          "The more evaluation skills you develop, the more opportunities become available.",
          "Understanding project types helps you prepare for real-world AI evaluation work."
        ],
        practiceLab: [
          {
            id: "pt6_1",
            client: "Nexus AI Alignment",
            taskType: "RLHF Evaluation",
            instructions: "Rank the following responses for the prompt 'Explain budgeting to a beginner'. Response A focuses strictly on spreadsheets, while Response B uses a simple 50/30/20 rule analogy. Determine if this is an RLHF task and write a professional justification.",
            prompt: "Explain budgeting to a beginner.",
            response: "Response A: Download a complete spreadsheet software, input all your tax forms, track every transaction ID, and calculate standard deviations to project annual savings.\n\nResponse B: Budgeting is simple when you use the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings. It's a great starting point for beginners.",
            rubrics: [
              "Verify if Response B is more beginner-friendly.",
              "Check if Response A is overly complex for a beginner.",
              "Explain why this qualifies as an RLHF pairwise ranking task."
            ],
            idealResponseKeywords: ["Response B is better", "beginner", "RLHF", "justification", "50/30/20"],
            idealResponseLength: 15
          },
          {
            id: "pt6_2",
            client: "GlobalData Annotators",
            taskType: "Data Annotation",
            instructions: "Assign the correct sentiment label (Positive, Negative, or Neutral) to the sentence: 'This restaurant was amazing.' and explain your annotation logic.",
            prompt: "Label the sentiment of: 'This restaurant was amazing.'",
            response: "Label: Positive\nExplanation: The word 'amazing' represents strong positive emotion.",
            rubrics: [
              "Confirm label is correct.",
              "Explain why 'amazing' triggers positive sentiment.",
              "Assess consistency of the annotation."
            ],
            idealResponseKeywords: ["Positive", "sentiment", "amazing", "annotation"],
            idealResponseLength: 15
          },
          {
            id: "pt6_3",
            client: "Veritas Fact-Checking Group",
            taskType: "Fact Checking",
            instructions: "Determine whether the statement: 'The capital of Canada is Toronto.' is correct. Identify which evaluation role would catch this and why verification matters.",
            prompt: "Name the capital of Canada.",
            response: "The capital of Canada is Toronto, which is the country's most populous financial hub.",
            rubrics: [
              "Identify the factual error (Ottawa is the capital).",
              "Confirm that a Fact Checker role would catch this.",
              "Explain the danger of unverified confident hallucinations."
            ],
            idealResponseKeywords: ["Ottawa", "Toronto", "Fact Checker", "hallucination", "verification"],
            idealResponseLength: 15
          }
        ],
        quiz: [
          {
            id: "q6_1",
            type: "mcq",
            question: "Which role primarily involves labeling data?",
            options: [
              "Fact Checking",
              "Annotation",
              "Safety Review",
              "RLHF"
            ],
            correctOptionIndex: 1,
            explanation: "Annotation focuses on labeling and categorization of data to create structured datasets."
          },
          {
            id: "q6_2",
            type: "mcq",
            question: "Which role focuses on comparing responses?",
            options: [
              "Annotation",
              "Fact Checking",
              "RLHF Evaluation",
              "Data Collection"
            ],
            correctOptionIndex: 2,
            explanation: "RLHF Evaluation involves pairwise comparison and ranking of model outputs to optimize human preferences."
          },
          {
            id: "q6_3",
            type: "tf",
            question: "Fact-checking projects require verification skills.",
            options: ["True", "False"],
            correctOptionIndex: 0,
            explanation: "Fact checkers must rigorously verify every claim using credible external sources to eliminate hallucinations."
          },
          {
            id: "q6_4",
            type: "mcq",
            question: "Which role often creates gold-standard responses?",
            options: [
              "Safety Reviewer",
              "Fact Checker",
              "SFT Contributor",
              "Annotator"
            ],
            correctOptionIndex: 2,
            explanation: "SFT (Supervised Fine-Tuning) Contributors write target, ideal responses to teach conversational patterns directly."
          },
          {
            id: "q6_5",
            type: "mcq",
            question: "Why do AI companies use multiple evaluator roles?",
            options: [
              "Different projects require different skills.",
              "To increase storage.",
              "To reduce training data.",
              "To avoid feedback."
            ],
            correctOptionIndex: 0,
            explanation: "Just as a hospital requires various medical specialists, AI training needs specialized annotators, rankers, fact-checkers, and safety evaluators depending on the project scope."
          }
        ]
      }
    ],
    simulationTasks: [
      {
        id: "s6_1",
        type: "ranking",
        title: "Task #001: Pairwise Response Ranking",
        prompt: "Provide practical interview tips for a beginner.",
        responses: [
          { letter: "A", text: "Draft A lists structured points and tips. Draft B is a brief paragraph." },
          { letter: "B", text: "Choose the answer you personally like instead of the answer that best meets the user's needs." }
        ],
        options: [
          "Response A is superior",
          "Response B is superior",
          "Both failed constraints"
        ],
        correctOptionIndex: 0,
        idealJustificationKeywords: ["Response A", "structured", "interview tips"],
        rubric: "Verify if Response A provides structured interview tips.",
        explanation: "Response A provides structured tips while Response B describes a common evaluator mistake."
      }
    ],
    examQuestions: [
      {
        id: "eq6_1",
        type: "mcq",
        category: "annotation",
        question: "Which role primarily involves labeling data?",
        options: [
          "Fact Checking",
          "Annotation",
          "Safety Review",
          "RLHF"
        ],
        correctOptionIndex: 1,
        explanation: "Annotation focuses on labeling and categorization of data."
      }
    ]
  }
];

export const ALL_ACHIEVEMENTS = [
  { id: "ach_1", title: "First Step", description: "Complete your very first lesson.", icon: "🌱", reqMetric: "lessons:1", unlocked: false },
  { id: "ach_2", title: "Foundations Scholar", description: "Complete all 5 core lessons of Lesson 1.", icon: "📚", reqMetric: "lessons:5", unlocked: false },
  { id: "ach_3", title: "Simulation Survivor", description: "Complete your first live client simulation.", icon: "🎮", reqMetric: "simulations:1", unlocked: false },
  { id: "ach_4", title: "Qualified Professional", description: "Pass the Lesson 1 Qualification Exam with a score of 80% or better.", icon: "🎓", reqMetric: "exams:1", unlocked: false },
  { id: "ach_5", title: "Perfect Scholar", description: "Score a perfect 100% on any practice exercise or quiz.", icon: "⭐", reqMetric: "score:100", unlocked: false },
  { id: "ach_6", title: "Streak Master", description: "Maintain a persistent study habits loop.", icon: "🔥", reqMetric: "streak:3", unlocked: false }
];

export const SIMULATION_TASKS = MODULE_CURRICULUM[0].simulationTasks;
export const EXAM_QUESTIONS = MODULE_CURRICULUM[0].examQuestions;
