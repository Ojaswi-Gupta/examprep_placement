export const INTERVIEW_HR_DATA = [
  {
    role: "HR & Behavioral Interview",
    icon: "🎯",
    topics: [
      {
        topic: "Tell Me About Yourself & Introduction",
        questions: [
          {
            q: "Tell me about yourself (how to structure: present-past-future)",
            a: "A strong answer follows the Present-Past-Future framework. Start with your current role, key responsibilities, and recent achievements. Then, briefly cover your past experience and education that laid the foundation for your skills. Finally, pivot to the future by explaining why you are excited about this specific role and how it aligns with your career goals. Avoid summarizing your entire resume line-by-line or oversharing personal details. Keep it concise, professional, and tailored to the job description.",
            difficulty: "Basic"
          },
          {
            q: "Walk me through your resume",
            a: "Structure your response chronologically or functionally, focusing on highlights relevant to the role you are interviewing for. Highlight key achievements, projects, and the impact you made at each step rather than just listing duties. Do not read the resume word-for-word; the interviewer already has it. Frame the narrative to show career progression and intentional choices. Conclude by connecting your past experiences to why you are a perfect fit for this current opportunity.",
            difficulty: "Basic"
          },
          {
            q: "Why should we hire you?",
            a: "Focus on the intersection of their needs and your unique skills. Identify three key requirements from the job description and provide brief examples of how you have successfully demonstrated those skills in the past. Emphasize your ability to solve their specific problems and add value to the team immediately. Do not give a generic answer like 'I am hardworking and a fast learner.' Instead, say something like 'You need someone who can scale the backend, and in my last role, I improved API response times by 40%.'",
            difficulty: "Intermediate"
          },
          {
            q: "What are your strengths?",
            a: "Select two or three strengths that are highly relevant to the job description. For each strength, use the PREP method: Point, Reason, Example, Point. State the strength, explain why it matters, provide a specific example of when you used it, and reiterate how it makes you a strong candidate. Avoid listing generic traits without evidence. Tailor the strengths to show you possess the technical or soft skills they prioritize.",
            difficulty: "Basic"
          },
          {
            q: "What are your weaknesses? (how to answer without sounding fake)",
            a: "Choose a real, but non-critical weakness that you are actively working to improve. Do not use cliché fake weaknesses like 'I work too hard' or 'I am a perfectionist.' For example, you might say, 'I sometimes struggle with delegating tasks because I want to ensure high quality, but I have been using a matrix to categorize tasks and successfully handed off three projects last quarter.' The key is to demonstrate self-awareness and show the actionable steps you are taking to overcome it.",
            difficulty: "Intermediate"
          },
          {
            q: "Where do you see yourself in 5 years?",
            a: "Align your future goals with the trajectory of the role and the company. Express a desire to deepen your expertise, take on more complex challenges, and potentially assume leadership or mentorship responsibilities. Show that you are ambitious but realistic, and that you plan to grow within their organization. Avoid saying you want to start your own business or move to a completely different industry, as this signals you won't stay long.",
            difficulty: "Basic"
          },
          {
            q: "What motivates you?",
            a: "Connect your personal drivers to the nature of the work you will be doing. You might say you are motivated by solving complex problems, seeing the direct impact of your code on end-users, or working collaboratively with a talented team to achieve a common goal. Provide a brief example of a time when this motivation led to a successful outcome. Avoid mentioning money, benefits, or easy hours as your primary motivators.",
            difficulty: "Basic"
          },
          {
            q: "Describe yourself in three words",
            a: "Choose three adjectives that reflect your professional persona and align with the company's culture. For example, 'Adaptable, Analytical, and Collaborative.' Immediately follow up with a brief sentence explaining how these traits manifest in your work. Do not pick random or overly boastful words. Ensure you can back up each word with a quick example if the interviewer asks for elaboration.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Behavioral Questions (STAR Method)",
        questions: [
          {
            q: "Tell me about a time you faced a difficult challenge at work/college",
            a: "Use the STAR method (Situation, Task, Action, Result) to structure your answer. Describe the context and the specific obstacle you faced. Detail the precise actions you took to address the challenge, focusing on your problem-solving process and resourcefulness. Conclude with a positive, measurable result and what you learned from the experience. Do not blame others for the difficulty; focus on your proactive response.",
            difficulty: "Intermediate"
          },
          {
            q: "Describe a situation where you had to work with a difficult team member",
            a: "Focus on communication, empathy, and professionalism. Explain the Situation without bashing the colleague. Describe the Task or project at hand. Detail your Action: how you initiated a private conversation, listened to their perspective, and found a compromise or established clear boundaries. Share the Result, emphasizing improved collaboration or project completion. Never speak negatively about the person; highlight your conflict resolution skills.",
            difficulty: "Advanced"
          },
          {
            q: "Give an example of when you showed leadership",
            a: "You do not need a formal title to show leadership. Describe a Situation where a project was stalling or lacked direction. Explain the Task of getting it back on track. Detail your Actions: how you took initiative, organized the team, delegated tasks, or mentored a peer. Conclude with the Result, such as delivering the project on time. Focus on influence, communication, and taking responsibility.",
            difficulty: "Intermediate"
          },
          {
            q: "Tell me about a time you failed and what you learned",
            a: "Choose a genuine mistake that did not have catastrophic consequences. Describe the Situation and Task clearly. For the Action, explain what went wrong and own the mistake without making excuses. Crucially, focus the Result on the immediate steps you took to fix the issue and the systems you put in place to prevent it from happening again. This demonstrates accountability, resilience, and a growth mindset.",
            difficulty: "Advanced"
          },
          {
            q: "Describe a situation where you had to meet a tight deadline",
            a: "Highlight your time management and prioritization skills. Describe the Situation that caused the time crunch. Detail your Actions: how you broke down the work, prioritized critical path items, communicated with stakeholders, and perhaps put in extra effort. Share the Result of meeting the deadline without compromising core quality. Avoid implying that tight deadlines cause you to panic or produce sloppy work.",
            difficulty: "Intermediate"
          },
          {
            q: "Tell me about a time you went above and beyond",
            a: "Choose a scenario where you exceeded expectations, not just did your baseline job. Describe the Situation and the standard Task. Detail your Action: what extra steps you took, such as optimizing a slow process, helping a struggling colleague, or adding an unprompted but valuable feature. Explain the positive Result and the impact it had on the team or customer. This shows initiative and passion for your work.",
            difficulty: "Basic"
          },
          {
            q: "Give an example of when you had to resolve a conflict",
            a: "Choose a professional disagreement, such as a dispute over technical architecture or project priorities. Describe the Situation neutrally. For your Action, explain how you facilitated a discussion, actively listened to the other side, and used data or objective criteria to reach a consensus. The Result should be a mutually agreed-upon solution and a preserved working relationship. Avoid examples involving personal arguments or unresolved bitterness.",
            difficulty: "Intermediate"
          },
          {
            q: "Tell me about a time you had to make a difficult decision with incomplete information",
            a: "Highlight your analytical skills and risk management. Describe the Situation where data was missing and a choice was urgent. Detail your Action: how you gathered whatever data was available, consulted experts, weighed the risks of action versus inaction, and made a judgment call. Share the Result and how you adapted if new information later emerged. This shows you are not paralyzed by ambiguity.",
            difficulty: "Advanced"
          },
          {
            q: "Describe a situation where you received negative feedback. How did you handle it?",
            a: "Show that you are coachable and don't take feedback personally. Describe the Situation where you received constructive criticism. For your Action, explain how you listened actively, asked clarifying questions, and thanked the person. Detail the concrete steps you took to implement the feedback and improve your performance. The Result should show measurable improvement and a stronger relationship with the person who gave the feedback.",
            difficulty: "Intermediate"
          },
          {
            q: "Tell me about a project you are most proud of",
            a: "Select a project that highlights your most relevant skills for the role. Use STAR to explain the Situation and Task. Detail your specific Actions and contributions, emphasizing the technical or strategic challenges you overcame. Share the quantitative Results—such as revenue generated, time saved, or user adoption. Let your enthusiasm show, as this demonstrates passion for your craft.",
            difficulty: "Basic"
          },
          {
            q: "Give an example of when you had to adapt to a major change",
            a: "Focus on flexibility and a positive attitude. Describe the Situation, such as a sudden pivot in company strategy, a change in leadership, or a shift to a new technology stack. Detail your Action: how you quickly learned the new requirements, adjusted your workflow, and helped colleagues navigate the transition. The Result should demonstrate that you maintained productivity and embraced the new direction.",
            difficulty: "Intermediate"
          },
          {
            q: "Describe a time when you disagreed with your manager or professor",
            a: "Demonstrate respect and logical reasoning. Describe the Situation and the point of disagreement. For the Action, explain how you approached them privately, presented your alternative viewpoint using data or objective evidence, and listened to their perspective. The Result should be either reaching a better joint decision or you professionally committing to their final decision despite disagreeing. Never say you argued or went behind their back.",
            difficulty: "Advanced"
          },
          {
            q: "Tell me about a time you had to learn a new technology quickly",
            a: "Highlight your ability to self-start and absorb information rapidly. Describe the Situation where a project required a tool you didn't know. Detail your Action: how you structured your learning, used documentation, built prototypes, and asked targeted questions to experts. The Result should be successfully delivering the project using the new technology. This is crucial for engineering roles where the tech stack constantly evolves.",
            difficulty: "Basic"
          },
          {
            q: "Give an example of when you took initiative without being asked",
            a: "Showcase your proactive mindset. Describe a Situation where you noticed an inefficiency, a bug, or an opportunity for improvement. For the Action, explain how you researched a solution, proposed it to your team, and implemented it independently. The Result should highlight the positive impact, such as saving time or improving code quality. This demonstrates that you don't just wait for instructions.",
            difficulty: "Intermediate"
          },
          {
            q: "Describe a situation where you had to manage multiple priorities",
            a: "Focus on organization and communication. Describe a Situation where you had competing deadlines. Detail your Action: how you assessed the urgency and impact of each task, used tools to organize your workflow, and proactively communicated with stakeholders about realistic timelines. The Result should be that you delivered on the most critical tasks without dropping the ball on the others.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Scenario-Based Tricky Questions",
        questions: [
          {
            q: "Your manager assigns you work that you think is wrong. What do you do?",
            a: "First, seek to understand the 'why' behind the assignment by asking clarifying questions. If you still believe it's incorrect, present your concerns respectfully and privately, backing them up with data or logical reasoning. Suggest an alternative approach. However, if the manager insists on their original plan after hearing your input, you must commit to executing it professionally, unless it violates ethical or legal standards.",
            difficulty: "Advanced"
          },
          {
            q: "You discover a critical bug in production right before a holiday. What do you do?",
            a: "Prioritize the company and the users over your personal plans. Immediately notify your manager and the incident response team. Assess the severity and impact of the bug. If it's a critical showstopper, work to implement a hotfix or rollback before signing off for the holiday. If it's minor, document it thoroughly and schedule it for the next sprint. Demonstrate responsibility and ownership.",
            difficulty: "Intermediate"
          },
          {
            q: "A client asks you to do something unethical. How do you handle it?",
            a: "Maintain absolute professional integrity. Politely but firmly decline the request, explaining that it goes against company policy or industry regulations. Do not be aggressive, but do not compromise. Immediately document the conversation and escalate the issue to your manager or the legal/compliance department. Never agree to unethical actions, even 'just this once,' as it puts you and the company at risk.",
            difficulty: "Advanced"
          },
          {
            q: "Two team members are fighting and it is affecting the project. What do you do?",
            a: "Address the issue proactively rather than ignoring it. Speak to each team member individually to understand their perspectives without taking sides. Then, mediate a sit-down meeting focused on project goals and finding common ground, establishing clear communication rules. If the conflict persists and threatens the project, escalate it to management or HR. Emphasize returning the focus to the work.",
            difficulty: "Advanced"
          },
          {
            q: "You are given a project with unrealistic deadlines. How do you handle it?",
            a: "Do not simply say 'yes' and fail later, nor outright refuse the work. Analyze the requirements and break the project down to estimate realistic timelines. Present these findings to stakeholders, highlighting the gap between the ask and the reality. Propose alternatives: reducing scope (MVP), getting more resources, or extending the deadline. Negotiate a feasible plan based on data and trade-offs.",
            difficulty: "Intermediate"
          },
          {
            q: "You made a mistake that cost the company money. How do you address it?",
            a: "Own the mistake immediately—do not hide it or blame others. Report the issue to your manager along with a clear explanation of what happened. More importantly, present a concrete plan to mitigate the financial damage right away. Finally, outline the preventative measures you are implementing so it never happens again. This shows maturity, accountability, and problem-solving under pressure.",
            difficulty: "Advanced"
          },
          {
            q: "A senior colleague takes credit for your work. What do you do?",
            a: "Avoid a public confrontation or sending an angry email. Approach the colleague privately and professionally, giving them the benefit of the doubt (e.g., 'I noticed my name was left off the presentation'). If they brush it off, ensure you document your contributions clearly in project management tools and version control going forward. In future meetings, confidently speak up about your specific contributions. Escalate only if it's a systemic issue.",
            difficulty: "Advanced"
          },
          {
            q: "You are asked to work on a technology you have zero experience in. How do you approach it?",
            a: "Express enthusiasm for the learning opportunity rather than fear or hesitation. Outline a structured plan to ramp up quickly: reviewing official documentation, taking crash courses, building a small proof-of-concept, and identifying a mentor or expert within the company to ask targeted questions. Communicate transparently with your manager about your learning curve and provide regular progress updates.",
            difficulty: "Basic"
          },
          {
            q: "Your project requirements change midway through development. How do you handle it?",
            a: "Embrace the agile mindset. Do not complain about wasted work. Assess the impact of the new requirements on the existing timeline, budget, and architecture. Communicate these impacts clearly to stakeholders so they understand the trade-offs (e.g., 'We can add this feature, but it will delay the launch by two weeks'). Once a revised plan is agreed upon, adapt your workflow and execute.",
            difficulty: "Intermediate"
          },
          {
            q: "You are put in charge of a failing project. What is your first step?",
            a: "Halt any panic-driven development and conduct a thorough 'triage.' Speak with the team and stakeholders to identify the root causes of the failure—whether it's scope creep, technical debt, or poor communication. Redefine a realistic baseline and establish a minimal viable product (MVP) to get a quick win. Communicate the revised, transparent plan to management to reset expectations.",
            difficulty: "Advanced"
          },
          {
            q: "A customer is extremely angry about a product issue. How do you handle the call?",
            a: "Use the BLAST method: Believe, Listen, Apologize, Solve, Thank. Let them vent without interrupting. Acknowledge their frustration and apologize for the inconvenience without necessarily admitting legal fault. Assure them you are taking ownership of the issue. Outline the exact steps you will take to fix the problem and provide a timeline for follow-up. Do not take their anger personally.",
            difficulty: "Intermediate"
          },
          {
            q: "You realize halfway through a sprint that the team will not meet the deadline. What do you do?",
            a: "Communicate the risk immediately; bad news does not get better with age. Bring the team together to identify the blockers and see if tasks can be reallocated to speed things up. If the deadline is still impossible, inform the product owner or stakeholders right away. Propose a solution, such as cutting non-essential features from the sprint to deliver the core value on time.",
            difficulty: "Intermediate"
          },
          {
            q: "You are interviewing a candidate who is technically strong but has poor communication skills. Do you recommend them?",
            a: "It depends on the specific role, but generally, communication is critical. I would evaluate if their communication is just unpolished or if they are actively abrasive and toxic. If they are willing to learn and the role doesn't require heavy client interaction, I might recommend them with a plan for mentorship. However, if their poor communication would block team collaboration, I would not recommend them.",
            difficulty: "Advanced"
          },
          {
            q: "Your company wants to adopt a new tool but the team resists the change. How do you handle it?",
            a: "People resist change when they don't understand the benefit or fear it will add to their workload. I would identify the core concerns through active listening. Then, I would create a small pilot program or demo to prove the tool's value and show how it makes their lives easier. By identifying 'champions' within the team to advocate for the tool, I can drive adoption organically rather than forcing it top-down.",
            difficulty: "Advanced"
          },
          {
            q: "You are offered two roles — one with higher pay but boring work, and one with exciting work but lower pay. How do you decide?",
            a: "I evaluate based on long-term career growth rather than short-term gains. I would choose the role with exciting work because it provides opportunities to learn new skills, solve complex problems, and remain highly engaged. Passion for the work drives better performance, which ultimately leads to greater career advancement and financial reward in the long run. I prioritize the environment that pushes me to grow.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Why This Company & Role",
        questions: [
          {
            q: "Why do you want to work at [this company]? (how to research and answer)",
            a: "Tailor this answer based on pre-interview research. Mention specific details about their recent projects, product launches, or company values that resonate with you. For example, 'I saw your recent expansion into cloud infrastructure, and given my background in AWS, I want to contribute to that growth.' Avoid generic answers like 'It's a big company with good pay.' Show you actually want to work for them.",
            difficulty: "Basic"
          },
          {
            q: "Why are you interested in this role?",
            a: "Connect the specific duties of the role to your skills and career aspirations. Explain how the responsibilities excite you and how you can add immediate value. For instance, 'I love that this role focuses heavily on system architecture, which is an area I have been specializing in and want to master.' Make it clear that this job is a deliberate next step in your career.",
            difficulty: "Basic"
          },
          {
            q: "What do you know about our company?",
            a: "Demonstrate that you have done your homework. Briefly mention their core products or services, their target market, and their main competitors. Highlight any recent news, such as a funding round, an acquisition, or a major new feature. Conclude by tying this knowledge back to why it makes the company an exciting place for you to work right now.",
            difficulty: "Basic"
          },
          {
            q: "Why are you leaving your current role / why did you leave your last role?",
            a: "Always frame this positively and focus on the future. Never badmouth your current employer, manager, or colleagues. Say something like, 'I have learned a lot and enjoyed my time there, but I am looking for a role that offers more exposure to X technology,' or 'I am seeking an environment with more opportunities for leadership.' Make the move about running toward an opportunity, not running away from a bad situation.",
            difficulty: "Intermediate"
          },
          {
            q: "What are your salary expectations? (how to negotiate professionally)",
            a: "Avoid giving a specific number too early. Instead, provide a well-researched range based on market rates for your location and experience level. You can say, 'Based on my research and experience, I am looking for a range between X and Y, but I am flexible and open to discussing the total compensation package including benefits and equity.' Ensure your bottom number is one you would actually accept.",
            difficulty: "Advanced"
          },
          {
            q: "Are you interviewing at other companies?",
            a: "Be honest but strategic. You can say, 'Yes, I am actively exploring opportunities and talking to a few other companies, but this role is one of my top choices because of X and Y.' This shows you are in demand and serious about your job search, which can create a sense of urgency for the employer without sounding arrogant.",
            difficulty: "Basic"
          },
          {
            q: "What is your notice period and when can you join?",
            a: "State your standard contractual notice period directly. If you are available immediately, say so. If you need to negotiate an early exit with your current employer, mention that you will try to wrap up your projects smoothly but must honor your commitment. Employers respect candidates who want to leave their current team in a good place, as it shows professional integrity.",
            difficulty: "Basic"
          },
          {
            q: "Do you have any questions for us? (best questions to ask the interviewer)",
            a: "Always say yes. Ask 2-3 thoughtful questions that show you are evaluating them just as they are evaluating you. Good questions include: 'What does success look like in this role in the first 90 days?', 'What is the biggest challenge the team is currently facing?', or 'How does the engineering team balance building new features with managing technical debt?' Avoid asking questions about salary or holidays at this stage.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Teamwork & Collaboration",
        questions: [
          {
            q: "How do you handle disagreements in a team?",
            a: "Focus on objective facts rather than emotions. I start by actively listening to the other person's perspective to ensure I understand their core concerns. Then, I propose we evaluate the options based on data, user impact, or project requirements. If we still can't agree, I'm comfortable escalating to a manager for a tie-breaker, and I will fully support the final decision even if it wasn't my preference.",
            difficulty: "Intermediate"
          },
          {
            q: "What role do you typically play in a team?",
            a: "Highlight your adaptability. You might say you often take on the role of the 'problem solver' or 'facilitator' who ensures everyone is aligned. Give an example of a time you stepped up to lead a specific initiative, but also mention a time you happily played a supporting role to help a teammate succeed. This shows you are a versatile team player, not someone who demands control.",
            difficulty: "Basic"
          },
          {
            q: "How do you handle a team member who is not pulling their weight?",
            a: "Approach the situation with empathy first, as they might be facing personal issues or lacking clarity on tasks. I would have a private, non-confrontational conversation asking if they need help or are blocked. If the issue is a lack of effort and it continues to impact the team, I would document the missed deliverables and escalate it to management. I would not do their work for them long-term.",
            difficulty: "Advanced"
          },
          {
            q: "Describe your ideal work environment",
            a: "Tailor this to match the company culture you are interviewing for (e.g., fast-paced startup vs. structured enterprise). Generally, mention an environment that values collaboration, transparent communication, and continuous learning. Say you thrive where people are passionate about their work and where there is a healthy balance of autonomy and team support. Avoid describing highly specific perks or an environment that contradicts the role.",
            difficulty: "Basic"
          },
          {
            q: "How do you give constructive feedback to a peer?",
            a: "I use the SBI model: Situation, Behavior, Impact. I deliver the feedback privately and as close to the event as possible. I focus on the specific action, not the person's character (e.g., 'In the meeting, you interrupted the client, which caused them to seem frustrated'). I follow up by offering help or suggesting a collaborative way to improve going forward.",
            difficulty: "Intermediate"
          },
          {
            q: "How do you handle working with someone whose working style is very different from yours?",
            a: "I view different working styles as an asset that brings diverse perspectives. I make an effort early on to understand their communication preferences and workflow. For example, if they prefer asynchronous written updates while I like quick calls, we negotiate a middle ground. The key is flexibility, open communication about expectations, and focusing on our shared goals rather than the friction of our processes.",
            difficulty: "Intermediate"
          },
          {
            q: "Have you ever mentored someone? Describe the experience.",
            a: "Share a specific example where you helped a junior colleague or intern grow. Discuss how you assessed their current skill level, set clear goals together, and provided regular, constructive feedback. Emphasize that you didn't just give them the answers, but rather taught them how to find the answers and problem-solve independently. Conclude with the positive outcome of their growth.",
            difficulty: "Basic"
          },
          {
            q: "How do you build rapport with a new team?",
            a: "I focus on listening and learning before trying to make major changes. I set up 1-on-1 meetings with team members to understand their roles, challenges, and communication styles. I show reliability by delivering on early, small tasks to build trust. I also try to connect on a personal level by showing genuine interest in their backgrounds. Trust is built through consistency and respect.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Pressure, Stress & Work-Life Balance",
        questions: [
          {
            q: "How do you handle stress and pressure?",
            a: "I handle pressure by staying organized and breaking the problem down into manageable parts. When stressed, I take a step back to prioritize tasks based on urgency and impact, often communicating with stakeholders to manage expectations. I also ensure I maintain perspective and take short breaks to reset my focus. This methodical approach prevents panic and allows me to execute effectively.",
            difficulty: "Intermediate"
          },
          {
            q: "Tell me about a time you burned out. What did you learn?",
            a: "Be honest but focus on the lesson. Describe a time you took on too much without setting boundaries. The critical part is what you learned: the importance of proactive communication, asking for help, and managing your energy, not just your time. Explain the systems you now have in place to prevent it, such as better estimation of tasks or firmly logging off after hours to recharge.",
            difficulty: "Advanced"
          },
          {
            q: "How do you prioritize tasks when everything is urgent?",
            a: "I use a framework like the Eisenhower Matrix to distinguish between what is truly important and what is merely urgent. If everything still seems critical, I consult with my manager or the product owner to align on the business priorities. I communicate clearly about what will be done first and what will be delayed. Trying to do everything at once usually results in nothing being done well.",
            difficulty: "Intermediate"
          },
          {
            q: "What do you do when you are stuck on a problem for hours?",
            a: "I employ the 'timeboxing' strategy. If I'm stuck for more than 45-60 minutes without progress, I stop banging my head against the wall. I will take a short break, explain the problem out loud (rubber ducking), or write it down. If I'm still stuck, I will reach out to a colleague with a specific summary of what I've tried. I balance self-reliance with knowing when to ask for help to save time.",
            difficulty: "Basic"
          },
          {
            q: "How do you handle working long hours or weekend work?",
            a: "I am committed to the project's success and am willing to put in extra hours during critical times, like a major release or a severe incident. However, I believe that consistent need for weekend work indicates a failure in planning or resourcing. I prefer to work efficiently during standard hours and communicate proactively to prevent crises, ensuring that overtime remains an exception, not the rule.",
            difficulty: "Intermediate"
          },
          {
            q: "What is your approach to work-life balance?",
            a: "I view work-life balance as a partnership between myself and the company. I take responsibility by managing my time effectively and communicating my boundaries. In return, I look for a culture that respects downtime and evaluates performance based on output rather than hours logged. Recharging outside of work makes me sharper, more creative, and more productive when I am working.",
            difficulty: "Basic"
          },
          {
            q: "How do you stay motivated during repetitive or boring tasks?",
            a: "I understand that not every aspect of a job is glamorous, but even mundane tasks are essential to the bigger picture. To stay motivated, I focus on the end goal and the value the task brings. I also try to find ways to optimize or automate the repetitive processes, turning a boring task into an opportunity to improve efficiency and learn a new tool.",
            difficulty: "Basic"
          },
          {
            q: "What do you do to continuously improve yourself?",
            a: "I am a lifelong learner. I dedicate a few hours each week to reading industry blogs, taking online courses, or experimenting with new technologies on personal projects. I also actively seek feedback from peers and managers to identify my blind spots. Mentioning a specific recent book you read or a course you completed provides concrete proof of your commitment to growth.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Leadership & Management Scenarios",
        questions: [
          {
            q: "How would you handle an underperforming team member?",
            a: "I would start by having a private, empathetic conversation to understand if there are external blockers or personal issues affecting their work. If it's a skill gap, I would arrange for training or pair programming. If it's a motivation issue, I would set clear, measurable expectations (a PIP) and establish regular check-ins. My goal is to help them succeed, but if there's no improvement, I must prioritize the team's health.",
            difficulty: "Advanced"
          },
          {
            q: "You are leading a team of 5 and morale is low. What do you do?",
            a: "First, I diagnose the root cause by listening to the team in 1-on-1s. Is it burnout from a death march? Lack of recognition? Unclear goals? Once identified, I address it transparently. I might advocate for a timeline extension, organize a team-building event to celebrate small wins, or clarify our purpose. As a leader, I must model resilience and optimism to rebuild their confidence.",
            difficulty: "Advanced"
          },
          {
            q: "How do you delegate tasks effectively?",
            a: "Delegation is about matching the task to the person's skills and growth goals. I clearly define the expected outcome and timeline, but I leave the 'how' up to them to foster autonomy. I ensure they have the necessary resources and establish checkpoints for feedback. I do not micromanage, but I remain available to remove blockers. Delegation empowers the team and frees me up for strategic work.",
            difficulty: "Intermediate"
          },
          {
            q: "What is the difference between a leader and a manager?",
            a: "A manager organizes work, allocates resources, and ensures processes are followed to meet objectives. A leader inspires people, sets a vision, and empowers the team to overcome obstacles. You can be a manager without being a leader, and you can be a leader without a management title. The best professionals strive to combine both: managing the complex logistics while leading the human element.",
            difficulty: "Basic"
          },
          {
            q: "How do you make decisions when the team is split 50-50?",
            a: "I encourage open debate to ensure all voices and data points are heard. However, consensus isn't always possible. If the team is deadlocked, I step in as the decision-maker. I evaluate the options against our core business objectives and technical constraints. I make a firm call, transparently explain the rationale to the entire team, and ask for their 'disagree and commit' support to move forward.",
            difficulty: "Advanced"
          },
          {
            q: "Describe a time when you had to deliver bad news to a team",
            a: "Transparency and empathy are key. I would gather the team and deliver the news directly, rather than letting rumors spread. Whether it's a canceled project or a missed bonus, I explain the business context clearly without throwing upper management under the bus. I allow time for questions and frustration, and then pivot the focus to our next steps and what we can control moving forward.",
            difficulty: "Intermediate"
          },
          {
            q: "How would you onboard a new team member?",
            a: "A strong onboarding experience dictates retention. I would prepare a 30-60-90 day plan with clear milestones. In the first week, the focus is on culture, tools, and meeting key people. I would assign them a 'buddy' for informal questions. I'd give them a small, low-risk task early on so they can achieve a quick win and push code to production, building their confidence immediately.",
            difficulty: "Basic"
          },
          {
            q: "How do you handle scope creep in a project you are leading?",
            a: "Scope creep must be managed aggressively. When a new feature is requested, I don't flatly say 'no,' but I require a trade-off analysis. I explain to stakeholders that adding this feature means either extending the deadline, increasing the budget, or dropping an existing feature. By forcing them to prioritize, I protect my team from burnout and ensure we deliver a quality product on time.",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Hypothetical & What-If Scenarios",
        questions: [
          {
            q: "If you could go back and change one decision in your life, what would it be and why?",
            a: "The interviewer is testing self-awareness and maturity, not looking for regret. Choose a professional decision where you learned a valuable lesson. For example, 'I would have started contributing to open-source projects earlier in college. I realized late that building a public portfolio accelerates career growth far more than academic scores alone.' Always pivot to the lesson learned and how it shaped your current approach.",
            difficulty: "Intermediate"
          },
          {
            q: "If you were the CEO of this company, what is the first thing you would change?",
            a: "This tests strategic thinking and your understanding of the company. Avoid criticizing their core product. Instead, suggest an improvement that shows you have researched them. For example, 'I would invest more in developer experience tooling internally — faster CI/CD pipelines and better documentation reduce engineering friction and compound into massive productivity gains over time.' Show you think about systemic improvements, not surface-level complaints.",
            difficulty: "Advanced"
          },
          {
            q: "If you had to fire your best friend from your team, how would you handle it?",
            a: "Acknowledge the emotional difficulty, but emphasize professionalism. Say, 'I would separate my personal relationship from my professional responsibility. I would follow the formal process: document the performance issues, give clear warnings and a chance to improve, and if there's no change, proceed with the termination respectfully and privately. I would be honest with my friend about why this is happening and treat them with dignity throughout.'",
            difficulty: "Advanced"
          },
          {
            q: "If you were given unlimited budget but only 2 weeks, what product would you build?",
            a: "This tests creativity, prioritization, and how you think under constraints. Don't say something impossibly ambitious. A strong answer: 'I would build a hyper-focused MVP — say, an AI-powered meeting summarizer that records, transcribes, and extracts action items. With unlimited budget, I'd assemble a small, expert team, use existing APIs (Whisper for transcription, GPT for summarization), and ship a polished, working prototype in 2 weeks.' Show you understand scope management even with resources.",
            difficulty: "Advanced"
          },
          {
            q: "If you joined our team and realized the codebase is a complete mess, what would you do?",
            a: "Never trash-talk the existing codebase or the people who built it — they were likely solving different problems under different constraints. Say, 'I would first understand the business context and why it evolved this way. Then I would identify the highest-pain areas causing the most bugs or slowdowns. I would introduce incremental improvements: add tests before refactoring, document as I go, and propose a technical debt budget for each sprint rather than a risky full rewrite.'",
            difficulty: "Intermediate"
          },
          {
            q: "If you were stranded on a deserted island and could bring only 3 items, what would they be?",
            a: "The interviewer is assessing your problem-solving approach and personality. Avoid joke answers. A thoughtful response: 'A large knife for cutting wood and preparing food (utility), a waterproof tarp for shelter and rain collection (survival), and a fire starter (warmth, cooking, and signaling). These three cover the fundamental survival priorities: water, shelter, and fire.' This shows you think in structured frameworks even under absurd constraints.",
            difficulty: "Basic"
          },
          {
            q: "If you were given the task of reducing our company's cloud costs by 40%, where would you start?",
            a: "Show structured thinking. 'First, I would audit current spending using the cloud provider's cost explorer to identify the biggest line items. Common wins include: right-sizing over-provisioned instances, shutting down idle dev/staging environments outside work hours, switching to reserved or spot instances for predictable workloads, and optimizing storage tiers. I would present findings ranked by impact vs. effort, targeting quick wins first before tackling architectural changes.'",
            difficulty: "Advanced"
          },
          {
            q: "What would you do if you strongly disagreed with a company policy but it was non-negotiable?",
            a: "Show professionalism and maturity. 'If the policy doesn't violate ethical or legal standards, I would comply with it while voicing my disagreement through proper channels — writing a constructive email to my manager or HR explaining my reasoning. If the company has a feedback mechanism, I would use it. Ultimately, I respect that not every decision will go my way, and I would not let personal disagreement affect my work quality or team dynamics.'",
            difficulty: "Intermediate"
          },
          {
            q: "If two of your team members gave you completely opposite technical recommendations, how would you decide?",
            a: "I would avoid making a gut-feeling decision or siding with the more senior person by default. Instead, I would ask each person to present their case with supporting data: benchmarks, trade-off analysis, or precedent. I would evaluate against our specific constraints (timeline, scalability, maintainability). If the data is inconclusive, I would suggest a quick proof-of-concept or time-boxed spike to validate the riskier option before committing.",
            difficulty: "Advanced"
          },
          {
            q: "If your project got cancelled after 6 months of hard work, how would you react?",
            a: "Acknowledge the disappointment honestly — pretending you wouldn't care sounds fake. 'I would be frustrated initially, but I'd focus on extracting value from the experience. I'd document the technical learnings, reusable components, and architectural patterns that can be applied to future projects. I'd also reflect on whether there were early warning signs I missed. Every cancelled project still teaches you about technical execution and business alignment.'",
            difficulty: "Intermediate"
          },
          {
            q: "If you were interviewing someone and they lied about a skill on their resume, but were otherwise a great candidate, would you hire them?",
            a: "No. Integrity is a non-negotiable foundation. If a candidate lies about knowing Python or having led a team, it reveals a character flaw that will surface in other situations — missed deadlines, hidden bugs, or blamed colleagues. I would appreciate their other strengths but ultimately pass on them, because trust is the baseline for any professional relationship and it cannot be rebuilt once broken during the hiring stage.",
            difficulty: "Advanced"
          },
          {
            q: "Imagine you are the only engineer on a critical production system that goes down at 3 AM. What do you do?",
            a: "First, acknowledge the alert and assess severity — is it a full outage or partial degradation? Check monitoring dashboards and recent deployments for the root cause. If I can identify a fix or rollback quickly, I execute it. If not, I escalate immediately to senior engineers or the on-call chain rather than spending hours alone. I communicate status updates to stakeholders. After resolution, I write a blameless post-mortem and propose preventive measures.",
            difficulty: "Advanced"
          },
          {
            q: "If you could design the perfect engineering team from scratch, what would it look like?",
            a: "I would optimize for diversity of thought and complementary skills. A mix of senior architects for system design, mid-level engineers for execution speed, and juniors for fresh perspectives and energy. I would prioritize strong communicators over lone geniuses. I would embed a culture of code reviews, blameless post-mortems, and 20% time for learning. Team size would be 5-7 (two-pizza rule) to keep communication overhead low.",
            difficulty: "Intermediate"
          },
          {
            q: "If a competitor offered you double your salary tomorrow, would you leave?",
            a: "Be honest but diplomatic. 'Salary is important, but it's not the only factor. I evaluate based on growth opportunities, team culture, the quality of problems I get to solve, and work-life balance. If I am learning, contributing meaningfully, and valued at my current company, doubling my salary alone wouldn't be enough to leave. However, if the new role also offers better challenges and growth, I would seriously consider it.'",
            difficulty: "Intermediate"
          },
          {
            q: "If you had to explain your most complex project to a 10-year-old, how would you do it?",
            a: "This tests communication clarity. For example, explaining GistProbe: 'Imagine you have a really long, boring article and you don't want to read it all. My project is like a robot that reads it for you, groups the ideas into piles (like sorting LEGO bricks by color), tells you if the writer sounds happy or angry, and then lets you ask it questions about what it read.' Simplify without being condescending.",
            difficulty: "Basic"
          },
          {
            q: "What would you do if you were assigned to a project you found completely boring?",
            a: "Every project has hidden learning opportunities. I would look for ways to make it interesting — perhaps by introducing a new technology, automating a tedious process, or optimizing the existing architecture. If the work is truly unstimulating long-term, I would deliver it professionally while having an honest conversation with my manager about transitioning to more challenging work in the next cycle. I would never let my lack of interest affect the quality of my output.",
            difficulty: "Basic"
          },
          {
            q: "If you discovered that the AI model your team deployed was producing biased outputs against a minority group, what would you do?",
            a: "I would immediately raise the concern with the team lead and document specific examples of the biased outputs. I would recommend pulling the model from production or adding a human-in-the-loop review until the bias is investigated. Then I would work with the team to audit the training data for representation imbalances, test with fairness metrics (demographic parity, equalized odds), and retrain with debiased data. Ethical AI is not optional.",
            difficulty: "Advanced"
          },
          {
            q: "If your manager micromanaged every line of your code, how would you handle it?",
            a: "I would first try to understand their motivation — perhaps they had a bad experience with a previous team member's quality. I would proactively build trust by delivering high-quality, well-tested code consistently and sending detailed PR descriptions. After establishing a track record, I would have a candid conversation: 'I appreciate your thoroughness. Now that we have a rhythm, could we try a lighter review process to free up your time for strategic work?'",
            difficulty: "Intermediate"
          },
          {
            q: "If you were given the choice between shipping a feature with known minor bugs or delaying the release by a week, what would you choose?",
            a: "It depends on context. If the bugs are cosmetic and the release is tied to a critical business deadline (like a marketing campaign), I would ship with documented known issues and a hotfix plan for the following sprint. If the bugs affect data integrity, security, or core user experience, I would delay without hesitation. The key is communicating the trade-off transparently to stakeholders and letting the business make an informed decision.",
            difficulty: "Advanced"
          },
          {
            q: "If you suddenly became the manager of your current team tomorrow, what is the first thing you would do?",
            a: "I would schedule 1-on-1 meetings with every team member in the first week to understand their pain points, career goals, and blockers. I would not make any drastic changes immediately — observe first, then act. I would establish clear communication norms and protect the team from unnecessary meetings. My first priority would be earning trust through consistency and transparency rather than asserting authority.",
            difficulty: "Intermediate"
          }
        ]
      }
    ]
  },
  {
    role: "Aptitude & Logical Reasoning Scenarios",
    icon: "🧩",
    topics: [
      {
        topic: "Puzzles & Brain Teasers",
        questions: [
          {
            q: "You have 8 balls. One is heavier. You have a balance scale. Minimum weighings to find the heavy ball?",
            a: "The answer is 2 weighings. First, split the balls into three groups: 3, 3, and 2. Weigh the two groups of 3 against each other. If they balance, the heavy ball is in the group of 2; weigh those two to find it. If they don't balance, take the heavier group of 3 and weigh any two balls from it. If one is heavier, that's it; if they balance, the unweighed ball is the heavy one.",
            difficulty: "Intermediate"
          },
          {
            q: "How many tennis balls can fit in this room? (estimation question — how to approach)",
            a: "The interviewer wants to see your logic, not a perfect number. Start by estimating the room's dimensions. Convert this to inches. Estimate a tennis ball's volume. Divide the room volume by the ball volume, and then subtract roughly 20-30% to account for the empty space between spherical balls packed together.",
            difficulty: "Intermediate"
          },
          {
            q: "You have two ropes that each take 1 hour to burn. How do you measure 45 minutes?",
            a: "The ropes burn inconsistently, so you can't just cut them. Light the first rope at both ends simultaneously, and light the second rope at one end. The first rope will burn out entirely in 30 minutes. At that exact moment, the second rope has 30 minutes left to burn. Immediately light the other end of the second rope. It will burn twice as fast, taking 15 minutes. 30 + 15 = 45 minutes.",
            difficulty: "Advanced"
          },
          {
            q: "25 horses, 5 tracks. Minimum races to find top 3 fastest? (classic puzzle)",
            a: "7 races. Divide into 5 groups of 5 and race them (5 races). Take the winner from each group and race them against each other (Race 6) to find the absolute fastest horse. Now you know the fastest. For the 2nd and 3rd fastest, you only need to test the 2nd and 3rd place horses from the winner's original group, the 1st and 2nd from the second-place horse's group, and the 1st from the third-place horse's group. Race these 5 horses (Race 7) to find the overall 2nd and 3rd.",
            difficulty: "Advanced"
          },
          {
            q: "A man pushes his car to a hotel and loses his fortune. What happened? (lateral thinking)",
            a: "He is playing Monopoly. This is a classic lateral thinking puzzle designed to test if you can break out of literal, real-world constraints. The 'car' is his game piece, the 'hotel' is a property owned by another player, and he 'loses his fortune' by having to pay rent that bankrupts him. Approach these by questioning assumptions.",
            difficulty: "Basic"
          },
          {
            q: "You have a 3-liter jug and a 5-liter jug. How do you measure exactly 4 liters?",
            a: "Fill the 5L jug. Pour it into the 3L jug until full, leaving 2L in the 5L jug. Empty the 3L jug. Pour the 2L from the 5L jug into the 3L jug. Now the 3L jug has 2L in it and can hold 1 more liter. Fill the 5L jug completely. Pour from the 5L jug into the 3L jug until the 3L jug is full (which only takes 1L). You now have exactly 4L left in the 5L jug.",
            difficulty: "Intermediate"
          },
          {
            q: "Three light switches, one bulb in another room. One attempt. How do you determine which switch controls the bulb?",
            a: "Turn on Switch 1 and leave it on for 10 minutes. Then, turn Switch 1 off and immediately turn Switch 2 on. Enter the room. If the bulb is ON, it's controlled by Switch 2. If the bulb is OFF but WARM to the touch, it's controlled by Switch 1. If the bulb is OFF and COLD, it's controlled by Switch 3. This tests lateral thinking beyond just binary logic.",
            difficulty: "Intermediate"
          },
          {
            q: "Two trains are 100km apart, heading towards each other at 50km/h each. A fly travels between them at 75km/h. How far does the fly travel before they collide?",
            a: "Don't calculate the complex infinite series of back-and-forth trips. Focus on time. The trains are 100km apart and closing the distance at a combined speed of 100km/h (50 + 50). Therefore, they will collide in exactly 1 hour. The fly is traveling continuously at 75km/h for that entire 1 hour. Therefore, the fly travels exactly 75km.",
            difficulty: "Advanced"
          },
          {
            q: "You are in a dark room with a deck of cards. 13 cards are face up, rest face down. Split into two piles so each pile has same number of face-up cards. How?",
            a: "Take exactly 13 cards from the deck to form a new pile. Flip all 13 cards in this new pile over. That's it. Proof: If the 13 cards you drew contained X face-up cards, the remaining deck has (13 - X) face-up cards. By flipping your new pile of 13 cards, the X face-up cards become face-down, and the (13 - X) face-down cards become face-up. Both piles now have (13 - X) face-up cards.",
            difficulty: "Advanced"
          },
          {
            q: "A farmer needs to cross a river with a wolf, a chicken, and a bag of grain. How?",
            a: "He takes the chicken across first and leaves it (leaving wolf and grain together). He returns alone and takes the wolf across. He leaves the wolf but brings the chicken back with him. He leaves the chicken on the starting side and takes the grain across, leaving it with the wolf. He returns alone one last time to bring the chicken across. Now all are safely on the other side.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Estimation & Guesstimates",
        questions: [
          {
            q: "How many gas stations are there in India?",
            a: "Start with population: ~1.4 billion. Assume average family size is 4, so ~350 million households. Estimate the percentage of households that own a vehicle (e.g., 20%), giving 70 million personal vehicles. Add commercial vehicles (trucks, buses) for roughly 100 million total vehicles. If one gas station serves about 1,500 vehicles, divide 100M by 1,500 to estimate roughly 65,000 to 70,000 gas stations. The logic matters more than the exact figure.",
            difficulty: "Intermediate"
          },
          {
            q: "How many WhatsApp messages are sent daily in India?",
            a: "India population: 1.4B. Internet penetration is roughly 50%, so ~700M internet users. Assume 80% use WhatsApp, giving ~560M active users. Segment users: Heavy users (100M sending 100 msgs/day = 10B), Medium (300M sending 30 msgs/day = 9B), Light (160M sending 5 msgs/day = 0.8B). Adding these gives roughly 20 billion messages daily. Explain your segmentation clearly to show structured thinking.",
            difficulty: "Intermediate"
          },
          {
            q: "Estimate the revenue of a local tea stall per month",
            a: "Assume the stall operates 25 days a month, 10 hours a day (600 minutes). It takes roughly 2 minutes to serve a customer, so maximum capacity is 300 customers/day. Assume they operate at 60% capacity on average, so ~180 customers/day. If average spend is Rs20 (tea + biscuit), daily revenue is Rs3,600. Monthly revenue (x25 days) is roughly Rs90,000. Subtract estimated costs (milk, tea leaves, rent) if they ask for profit.",
            difficulty: "Basic"
          },
          {
            q: "How many flights take off from Mumbai airport daily?",
            a: "Think about runway capacity. A busy single runway can handle about 1 takeoff/landing every 2 minutes. That's 30 movements an hour. Mumbai has 2 intersecting runways but effectively operates one at a time. In a 24-hour period, with reduced night traffic (say 18 busy hours and 6 slow hours), estimate roughly 800-900 total movements. Since takeoffs are half of movements, estimate roughly 400-450 takeoffs daily.",
            difficulty: "Intermediate"
          },
          {
            q: "How many piano tuners are there in a city like Delhi?",
            a: "Delhi population: ~30M. Number of households: ~6M. Pianos are rare in India; estimate 1 in 1000 households has one, giving 6,000 pianos. Add institutions (schools, hotels) to make it ~7,000 pianos. A piano needs tuning once a year. A tuner can tune 2 pianos a day, 5 days a week, 50 weeks a year = 500 pianos tuned per year per tuner. 7,000 pianos / 500 = roughly 14 piano tuners.",
            difficulty: "Advanced"
          },
          {
            q: "Estimate the number of Uber drivers in Bangalore",
            a: "Bangalore population: 13M. Target demographic (professionals, students): ~4M. Assume 25% take an Uber once a week, generating 1M rides/week or ~140,000 rides/day. A full-time driver does about 10 rides a day. Therefore, you need 14,000 full-time drivers to meet daily demand. Factor in part-time drivers and driver shifts, you might estimate around 20,000-25,000 active drivers.",
            difficulty: "Intermediate"
          },
          {
            q: "How much does an ATM machine hold in cash?",
            a: "Calculate based on physical capacity. An ATM has 4 cassettes holding bills. Each cassette holds about 2,000 notes. Cassette denominations are typically Rs500, Rs500, Rs100, Rs100. Total value: (2000 x 500) + (2000 x 500) + (2000 x 100) + (2000 x 100) = 1M + 1M + 200K + 200K. Maximum capacity is roughly Rs2.4 million. They are usually filled to 70% capacity, so around Rs1.5 to Rs1.8 million.",
            difficulty: "Basic"
          },
          {
            q: "Estimate the number of Google searches per day in India",
            a: "India population: 1.4B. Internet users: ~700M. Segment users by activity. Power users (100M) do 15 searches/day = 1.5B. Average users (300M) do 5 searches/day = 1.5B. Light users (300M) do 1 search/day = 0.3B. Total searches = roughly 3.3 billion per day. Validate this by noting that global Google searches are around 8.5 billion daily, so India representing a large chunk makes logical sense.",
            difficulty: "Intermediate"
          },
          {
            q: "How would you estimate the weight of a Boeing 747?",
            a: "Break it down into components: fuselage, wings, engines, fuel, passengers, cargo. Do not try to guess raw numbers blindly. Suggest using a proxy: an average car weighs 2 tons. A 747 is about as long as 15 cars and much wider, maybe equivalent to 100 cars in raw metal (200 tons). Add max fuel (150 tons) and passengers/cargo (50 tons). Estimate maximum takeoff weight around 400 tons. (Actual is ~440 tons).",
            difficulty: "Advanced"
          },
          {
            q: "How many haircuts happen in India per day?",
            a: "Population: 1.4 billion. Assume average haircut frequency is once every 2 months (60 days) for men, and once every 4 months (120 days) for women. Men (700M) / 60 days = ~11.6 million cuts/day. Women (700M) / 120 days = ~5.8 million cuts/day. Add them up for roughly 17.4 million haircuts per day. You can refine by omitting bald people and infants, dropping it to ~15 million.",
            difficulty: "Basic"
          }
        ]
      },
      {
        topic: "Situational Judgment & Ethics",
        questions: [
          {
            q: "You find that your friend in the team has been falsifying their timesheet. What do you do?",
            a: "Integrity is non-negotiable. First, speak privately with your friend to ensure there isn't a misunderstanding or a simple clerical error. If they admit to intentional fraud, advise them to correct it immediately and report it themselves. If they refuse, you must escalate it to HR or management. While difficult, protecting a friend who is committing fraud makes you complicit and risks your own job.",
            difficulty: "Advanced"
          },
          {
            q: "A vendor offers you an expensive gift before a contract decision. How do you handle it?",
            a: "Politely but firmly decline the gift. Explain that company policy strictly prohibits accepting gifts from vendors, especially during active contract negotiations, to prevent conflicts of interest. Immediately report the offer to your manager and the compliance department to ensure complete transparency. Do not accept it 'just to be polite,' as it compromises the integrity of the procurement process.",
            difficulty: "Intermediate"
          },
          {
            q: "You accidentally see confidential salary data of your colleagues. What do you do?",
            a: "Close the file or walk away from the screen immediately to minimize exposure. Do not read further and never share the information with anyone, not even your closest work friends. Immediately report the security breach to HR or IT, explaining exactly how you accidentally gained access. This protects you and helps secure the company's data.",
            difficulty: "Intermediate"
          },
          {
            q: "Your manager asks you to skip testing to meet a deadline. What do you do?",
            a: "Do not flatly refuse, but do not blindly comply. Present the risks clearly. Explain that skipping testing could lead to critical production bugs, costing more time and money to fix later, and damaging the company's reputation. Propose a compromise: prioritize testing on the most critical paths (smoke testing) and defer edge-case testing post-launch. If forced to skip, ensure the manager's directive is documented in writing.",
            difficulty: "Advanced"
          },
          {
            q: "You discover a security vulnerability in the product. Your manager says to fix it later. What do you do?",
            a: "Assess the severity of the vulnerability. If it's a minor internal issue, document it in the backlog as instructed. However, if it's a critical flaw that exposes user data or financial systems, you have an ethical obligation to escalate. Detail the catastrophic risks in writing to your manager. If ignored, escalate to the Chief Information Security Officer (CISO) or equivalent. Customer security supersedes chain of command.",
            difficulty: "Advanced"
          },
          {
            q: "A colleague shares offensive jokes in the workplace. What do you do?",
            a: "Address it directly and professionally. Pull the colleague aside privately and tell them that their jokes are inappropriate for the workplace and make you (or others) uncomfortable. Often, people do not realize their impact. If they apologize and stop, the issue is resolved. If they continue, or if the jokes constitute severe harassment, you must report the behavior to HR immediately.",
            difficulty: "Intermediate"
          },
          {
            q: "You overhear a colleague badmouthing the company to a client. What do you do?",
            a: "Do not confront them in front of the client. After the interaction, speak to the colleague privately. Explain that while internal frustrations are normal, airing them to a client damages trust and harms the company's business. If they were maliciously trying to sabotage the account, or if the behavior continues, you must report it to a manager. Client-facing professionalism is mandatory.",
            difficulty: "Intermediate"
          },
          {
            q: "You are assigned a project that conflicts with your personal values. How do you handle it?",
            a: "Examine the conflict carefully. If the project is unethical or illegal, you must refuse it and report it to compliance. If it is legal but conflicts with personal beliefs (e.g., working for a gambling client), have a candid conversation with your manager. Express your discomfort professionally and ask if you can be reassigned. Most good companies will accommodate this, but be prepared that refusal might impact your career trajectory there.",
            difficulty: "Advanced"
          },
          {
            q: "Your code review reveals that a senior developer wrote insecure code. How do you bring it up?",
            a: "Treat it like any other code review—focus on the code, not the person. Leave a constructive comment in the PR pointing out the security risk and citing best practices or documentation (e.g., 'This SQL query might be vulnerable to injection; we should use parameterized queries here'). Do not assume they did it out of ignorance; it might have been an oversight. Maintain respect but insist on the fix.",
            difficulty: "Basic"
          },
          {
            q: "You are in a meeting and realize your team's data presentation is misleading. Do you speak up?",
            a: "Do not embarrass your team in front of executives or clients by calling them out publicly. Instead, politely ask a clarifying question that prompts a more accurate explanation (e.g., 'Just to clarify, does this chart represent year-over-year growth or month-over-month?'). After the meeting, discuss the misleading data with your team privately to correct the narrative in the follow-up materials. Prioritize accuracy without unnecessary confrontation.",
            difficulty: "Advanced"
          }
        ]
      }
    ]
  }
];
