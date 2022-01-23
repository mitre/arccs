//Approved for Public Release; Distribution Unlimited. Public Release Case Number 21-3696
//©2021 The MITRE Corporation. All rights reserved.
//McLean, VA 


let data = [
	{"sectionid": "1", "section": "Relevance", "desc": "How necessary and appropriate is the AI component?", "subsections": [
		{"subsectionid": "1-1", "subsection": "Goodness of Fit", "desc": "Is the problem one that could benefit from AI? For example, does the AI handle volumes of data that a human couldn't, E.g. Anomaly Detection for network logs? Neural networks to identify complex malicious behavior in files?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Approach is counter to best practice. Acedemic research, other pubications, and/or evalutator experience indicates that approach has serious flaws or is arbitrary."},
			{"pt": "2", "choice": "Approach is unproven and/or hypothetical. No supporting documentation can be found, however the product can be demonstrated to do what it claims."},
			{"pt": "3", "choice": "Approach has some 3rd party evidence supporting claims of functionality."},
			{"pt": "4", "choice": "Approach is widely accepted and has been frequently applied in similar and/or related contexts."},
			{"pt": "5", "choice": "Approach is widely accepted and has been frequently applied in the specific use cases."}
		]},
		{"subsectionid": "1-2", "subsection": "Centrality of AI Component", "desc": "Is the AI component central to the solution such that removing it removes core functionality?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "ML/AI component is secondary to the operation of the system. It's considered 'tacked on' and not directly relevant to the rest of the system."},
			{"pt": "3", "choice": "ML/AI component is an important feature of the overall system, but isn't required for successful system operation."},
			{"pt": "5", "choice": "ML/AI component is a keystone feature of the system."}
		]},
		{"subsectionid": "1-3", "subsection": "Proportion of Overall Functionality", "desc": "How much of total work/functionality depends on the AI component?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Component is redundant or not directly relevant to the rest of the system."},
			{"pt": "2", "choice": "Component is a small proportion of overall system functionality (<25%)."},
			{"pt": "3", "choice": "AI component is a significant portion of overall system functionality (<50%)."},
			{"pt": "4", "choice": "AI component is a large portion of overall system functionality, but there are additional features that can function in its absence (>50%)."},
			{"pt": "5", "choice": "AI component encompasses most of the functionality of the system (excluding infrastructure e.g. data storage and transport). The system does not function properly in its absense."}
		]},
		{"subsectionid": "1-4", "subsection": "Necessary vs Gratuitous AI", "desc": "•	Can the AI component be replaced with an equally functional non-AI-component?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "AI is unescessaary. It's functionality could be accomplished with non-AI component."},
			{"pt": "2", "choice": "AI provides a slight advantage over non-AI solution."},
			{"pt": "3", "choice": "AI provides a marginal improvement over a non-AI solution."},
			{"pt": "4", "choice": "AI Provides a significant improvement (Accuracy, speed, etc)"},
			{"pt": "5", "choice": "Task couldn't be realistically accomplished without AI."}
		]},
	]},
	{"sectionid": "2", "section": "Competence", "desc": "How well does the AI do what it claims?", "subsections": [
		{"subsectionid": "2-1", "subsection": "Alignment to Needs", "desc": "It is important to understand how the performance of the system compares to, or aligns with, the user’s needs. This knowledge can inform further decision making and help in understanding whether an AI component is a useful addition to a system.", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Performance of the system does not satisfy project requirements or does not function as advertised."},
			{"pt": "2", "choice": "Performance of the system is slightly worse than project requirements."},
			{"pt": "3", "choice": "Performance of the system is on-par with the project requirements."},
			{"pt": "4", "choice": "Performance is a significantly better than expectations and needs."},
			{"pt": "5", "choice": "Performance represents a breakthrough advancement in capability, well beyond the stated needs of the project.   "}
		]},
		{"subsectionid": "2-2", "subsection": "Detection of Model Drift", "desc": "Normal behavior changes over time and requires the system model to follow that “drift” instead of generating an increasing number of false positives and false negatives. A system which monitors its performance, or continuously retrains on new normal data, will better manage model drift.", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "The  system has no ability to detect drift."},
			{"pt": "5", "choice": "The system has the ability to detect drift."}
		]},
		{"subsectionid": "2-3", "subsection": "Retrainability", "desc": "Can the machine learning component be retrained for more relevant or improved performance?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Not retrainable."},
			{"pt": "2", "choice": "System retraining can only be done by the product vendor and has an excessive turnaround time or cost."},
			{"pt": "3", "choice": "Retrainable by vendor along with consistent updates regularly provided by vendor, e.g., through automatic model pushes."},
			{"pt": "4", "choice": "Retrainable by system operators on their own schedule, but may be difficult to do (e.g., arcane process, onerous downtimes)   "},
			{"pt": "5", "choice": "The system requires training that can be easily undertaken by the operators through a simple process or is automatic or the system functions without the need for training."}
		]},
		{"subsectionid": "2-4", "subsection": "Technological Maturity", "desc": "Is the AI technology well-proven (as opposed to recently-developed) when applied to the intended use case?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Recent research."},
			{"pt": "2", "choice": "AI technology has been in development for two or more years, preferably with proven application."},
			{"pt": "3", "choice": "AI technology is well known and has been actively developed and researched for 5+ years."},
			{"pt": "4", "choice": "AI technology is mature (7-9 years)."},
			{"pt": "5", "choice": "AI technology is mature and widely accepted as a standard, in development or practice for over a decade."}
		]},
		{"subsectionid": "2-5", "subsection": "Use by Other Organizations", "desc": "Is this product used by other organizations, either commercial, government, or other?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "No other organizations are reported as using the system."},
			{"pt": "2", "choice": "System has been adopted by a few organizations."},
			{"pt": "3", "choice": "System enjoys some industry adoption, at least one of which are using it for a similar use case to the evaluators."},
			{"pt": "4", "choice": "A wide array of organizations currently use the product for a diverse set of use cases, including the evaluators' use case."},
			{"pt": "5", "choice": "System is considered an industry leader and is adopted by many organizations."}
		]},
		{"subsectionid": "2-6", "subsection": "Transparency and Explainability ", "desc": "Does system output provide transparency into system operation and explanations which will help the user understand the system’s reasoning and conclusion?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "AI component is a complete black box with no transparency into system operation, and no algorithmic or domain explainability."},
			{"pt": "2", "choice": "AI component is partially transparent."},
			{"pt": "3", "choice": "AI component provides either transparency into system operation or explainability, but not both."},
			{"pt": "4", "choice": "System is transparent and at least partially explainable, or vice versa."},
			{"pt": "5", "choice": "AI component is both transparent and explainable."}
		]},
		{"subsectionid": "2-7", "subsection": "Historical Tracking of Results/Performance ", "desc": "Does the system provide the ability to track results for retraining purposes?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "System does not track historical results and performance."},
			{"pt": "3", "choice": "System does not track historical results, but does not require retraining."},
			{"pt": "5", "choice": "System tracks historical results and performance in a sufficient manner to facilitate retraining."}
		]},
		{"subsectionid": "2-8", "subsection": "Transparency and Explainability ", "desc": "Does the system provide the ability for users to override results or provide other feedback on computational results?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "System has no facility to users to override or provide feedback on accuracy of results."},
			{"pt": "5", "choice": "System allows user to override results and provide feedback to system on accuracy of results."}
		]},
	]},
	{"sectionid": "3", "section": "Cost of AI Usage", "desc": "What are the cost and benefits of using AI?", "subsections": [
		{"subsectionid": "3-1", "subsection": "Vulnerabilities (Unaddressed/Unmitigated) Introduced ", "desc": "Does the addition of an AI component introduce vulnerabilities to the system? Have the system’s developers considered adversarial machine learning techniques, such as those that attempt to generate samples that evade detection or those that attempt to poison models at the training step? Are models trained on publicly available or accessible data? Could the underlying models of the system be easily reproduced or licensed from a different source? Are there any mitigations for adversarial techniques in place?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Vulnerabilities are introduced and not mitigated."},
			{"pt": "3", "choice": "Vulnerabilities are possibly introduced, possibly mitigated."},
			{"pt": "5", "choice": "There are no obvious vulnerabilities, or vulnerabilities positively mitigated."}
		]},
		{"subsectionid": "3-2", "subsection": "Cost of Implementation/Specialization", "desc": "Cost of implementation refers to effort or funding required to prepare the system for the organization’s use. Does the system come pre-trained on some dataset, or does it rely on user data?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "AI component needs specialization, training, or other work."},
			{"pt": "3", "choice": "AI component needs minor configuration costs."},
			{"pt": "5", "choice": "AI component is essentially ready out of the box."},
		]},
		{"subsectionid": "3-3", "subsection": "Solution Efficiency Loss/Gain ", "desc": "Solution efficiency assesses whether the AI of the product results in any gains compared to similar systems that do not employ AI. This metric is tracked on a 3-dimension scale, where we look at efficiency, accuracy, and speed. Sum the scores of each category and refer to the scoring chart to determine the final score.", 
			"lis": [
				{"desc": "Efficiency: How effective is the system when considering hardware footprint and human intervention requirements?"},
				{"desc": "Accuracy: True Positives/Negatives versus False Positives, False Negatives."},
				{"desc": "Speed: How quickly can the system process incoming data and generate results?"}], 
			"html": "<img height=\"200\" align=\"top\" style=\"padding-bottom: 20px;\" src=\"efficiency_chart.png\">", "selected": "Selected", "comments": "Comments", 
			"choices": [
				{"pt": "0", "choice": "N/A"},
				{"pt": "1", "choice": ""},
				{"pt": "2", "choice": ""},
				{"pt": "3", "choice": ""},
				{"pt": "4", "choice": ""},
				{"pt": "5", "choice": ""}
			]
		},
	]},

	{"sectionid": "4", "section": "Confidence", "desc": "What is the confidence of the assessment?", "subsections": [
		{"subsectionid": "4-1", "subsection": "Data", "desc": "Is there transparency about the data used to develop the system? What types of data were used to create (train/test) the model?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "No info about training data (if used)."},
			{"pt": "2", "choice": "Vague allusions to the type of data used, no significant detail."},
			{"pt": "3", "choice": "Unannotated training data is available."},
			{"pt": "4", "choice": "Training data is available with some supporting detail: an outline, description, etc."},
			{"pt": "5", "choice": "Training data is available and accessible, with annotations, explanations, and a clear methodology for selection and inclusion."}
		]},
		{"subsectionid": "4-2", "subsection": "Methods", "desc": "Is information provided about the underlying AI methodology and/or description of how the model was created?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "No information about the underlying algorithms is provided."},
			{"pt": "2", "choice": "High level descriptions of methods but no information on specific algorithms, e.g., 'Unsupervised machine learning in order to...'"},
			{"pt": "3", "choice": "Specific algorithms are mentioned without context for their use within the system."},
			{"pt": "4", "choice": "Specific algorithms are mentioned along with a high-level description of how they apply to the problem and system."},
			{"pt": "5", "choice": "Detailed description of the underlying AI component, with specific technical detail justifying the application."}
		]},
		{"subsectionid": "4-3", "subsection": "Documentation about AI/ML", "desc": "Does standard machine learning model documentation exist, such as Model Cards, Data Sheets, or ABOUT-ML data? These documents provide information about the training data, such as type, distribution, biases, etc., and the learned model, such as training method, domain of application, etc.", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "No Model Cards, Data Sheets, or other standardized model descriptor."},
			{"pt": "2", "choice": "Model Card (or other) exists but with little usable information."},
			{"pt": "3", "choice": "One non-standard but sufficiently detailed description of the model."},
			{"pt": "4", "choice": "One standardized description of the Model with usable information."},
			{"pt": "5", "choice": "Model is well documented across 2+ standards, with useful information in each."}
		]},
		{"subsectionid": "4-4", "subsection": "White Papers", "desc": "Are detailed technical white papers provided which have adequate detail for validation? ARCCS assigns a maximum score of 3 for the Whitepaper category. While vendor information is important for assessing a solution, an emphasis should be placed on independent verification.", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Nothing found."},
			{"pt": "2", "choice": "Whitepapers exists, but with little information sufficient for evaluation."},
			{"pt": "3", "choice": "Whitepapers exist with sufficient technical information to assist the evaluation."}
		]},
		{"subsectionid": "4-5", "subsection": "Publications", "desc": "Are detailed technical conference or journal papers provided which have adequate detail for validation?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "No publications of note found."},
			{"pt": "2", "choice": "Publications on the overall system exist, but no information about the AI component."},
			{"pt": "3", "choice": "Publications describing the AI component exist, but are low-quality and/or lack sufficient detail for evaluation of the product."},
			{"pt": "4", "choice": "Publication in a journal in the relevant field with sufficient technical information for evaluation."},
			{"pt": "5", "choice": "Multiple Publications in journals in the relevant field with detailed technical information."}
		]},
		{"subsectionid": "4-6", "subsection": "Patents", "desc": "Are detailed patents provided which have adequate detail for validation?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "No patents found."},
			{"pt": "3", "choice": "Patents were discovered but with little technical documentation of the AI component."},
			{"pt": "5", "choice": " AI component is described in the patent with specific technical detail."}
		]},
		{"subsectionid": "4-7", "subsection": "Specification of Relevant Use-Cases ", "desc": "Does any documentation specify the relevant use-cases?", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Vendor documentation does not hint at relevant use cases or claims that their tool may be applied to any problem."},
			{"pt": "2", "choice": "Documentation contains a passing reference to one or two use cases with no detail on how it may be relevant (e.g., 'Our tool uses AI to secure email')."},
			{"pt": "3", "choice": "Documentation specifies relevant use cases at a high level or in generalities with references to why their approach is relevant to the problem."},
			{"pt": "4", "choice": "Documentation specifies multiple use cases with a high degree of technical specificity."},
			{"pt": "5", "choice": "Documentation specifies multiple use cases with a high degree of technical specificity, and includes examples of and comparisons to other relevant approaches (not strawman or toy demonstrations)."}
		]},
		{"subsectionid": "4-8", "subsection": "Developer", "desc": "Who developed the product and what is their track record/industry reputation.", "selected": "Selected", "comments": "Comments", "choices": [
			{"pt": "0", "choice": "N/A"},
			{"pt": "1", "choice": "Vendor is a new or unknown startup."},
			{"pt": "2", "choice": "Vendor is a relative newcomer but has had some success in this area."},
			{"pt": "3", "choice": "Vendor is well established with a history of successful products, but not for this specific purpose."},
			{"pt": "4", "choice": "Vendor is an industry leader in a similar technical area, expanding into a new market using an established approach."},
			{"pt": "5", "choice": "Vendor is an industry leader with a well-established history of technical development in this area."}
		]},
	]},
];