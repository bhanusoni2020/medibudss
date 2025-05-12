interface HealthQuery {
  question: string;
  answer: string;
}

const healthFAQ: HealthQuery[] = [
  {
    question: "fever",
    answer: "For fever management:\n- Rest well\n- Stay hydrated\n- Use a light blanket\n- Take lukewarm baths\n\nSeek medical attention if fever is high (>103°F/39.4°C) or persists for more than 3 days."
  },
  {
    question: "blood pressure",
    answer: "For blood pressure management:\n- Reduce salt intake\n- Exercise regularly\n- Maintain healthy weight\n- Limit alcohol\n- Practice stress management\n\nRegular monitoring and medication compliance (if prescribed) is important."
  },
  {
    question: "sleep",
    answer: "Tips for better sleep:\n- Maintain regular sleep schedule\n- Create a dark, quiet environment\n- Avoid screens before bedtime\n- Limit caffeine\n- Exercise regularly (but not close to bedtime)"
  },
  {
    question: "cold",
    answer: "For managing cold symptoms:\n- Rest adequately\n- Stay hydrated\n- Use steam inhalation\n- Gargle with warm salt water\n- Keep warm\n\nMost colds resolve in 7-10 days. Seek medical attention if symptoms worsen."
  },
  {
    question: "pregnancy diet",
    answer: "Important dietary considerations during pregnancy:\n- Eat plenty of fruits and vegetables\n- Get adequate protein\n- Take prescribed prenatal vitamins\n- Avoid raw/undercooked foods\n- Limit caffeine\n\nConsult your healthcare provider for personalized dietary advice."
  }
];

const EMERGENCY_KEYWORDS = [
  'emergency',
  'chest pain',
  'heart attack',
  'stroke',
  'bleeding',
  'unconscious',
  'breathing',
  'suicide',
  'severe',
  'critical'
];

const DISCLAIMER = "\n\nDisclaimer: This information is for general guidance only. Please consult a healthcare professional for personalized medical advice.";

export const healthBotRespond = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();

  // Check for emergency keywords
  if (EMERGENCY_KEYWORDS.some(keyword => lowercaseQuery.includes(keyword))) {
    return "I'm here to provide general information only. For urgent medical concerns, please seek immediate medical attention or contact emergency services." + DISCLAIMER;
  }

  // Check FAQ database
  for (const faq of healthFAQ) {
    if (lowercaseQuery.includes(faq.question)) {
      return faq.answer + DISCLAIMER;
    }
  }

  // Default response for unmatched queries
  return "I understand you have a health-related question. While I can provide general wellness information, it's best to consult with a healthcare provider for specific medical advice." + DISCLAIMER;
};